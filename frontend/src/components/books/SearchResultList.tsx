import type { Book } from "@/interfaces"
import { createBook } from "@/lib/api/books"

type Props = {
  books: Book[]
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>
}

export default function SearchResultList({
  books,
  setBooks
}: Props) {
  const handleAddBook = async (book: Book) => {
    try {
      await createBook(book)

      alert("本を追加しました")

      setBooks((prev) =>
        prev.filter(
          (item) =>
            item.googleBooksID !== book.googleBooksID
        )
      )

    } catch (err) {
      console.log(err)
      alert("本の追加に失敗しました")
    }
  }

  return (
    <ul className="space-y-4">
      {books.map((book) => (
        <li
          key={book.googleBooksID}
          className="border p-4 rounded"
        >
          <img
            src={book.imageUrl}
            alt={book.title}
            className="w-20 mb-2"
          />

          <p className="font-bold">{book.title}</p>

          <button
            onClick={() => handleAddBook(book)}
            className="btn btn-success btn-sm mt-2"
          >
            追加
          </button>
        </li>
      ))}
    </ul>
  )
}