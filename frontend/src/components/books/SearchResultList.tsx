import type { Book } from "@/interfaces"
import { createBook } from "@/lib/api/books"
import BookCard from "@/components/books/BookCard"

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard
        book={book}
        buttonText="追加"
        onClick={handleAddBook}
        />
      ))}
    </div>
  )
}