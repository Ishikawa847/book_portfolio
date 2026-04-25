import type { Book } from "@/interfaces"
import BookCard from "./BookCard"

type Props = {
  books: Book[]
}

export default function BookList({
  books
}: Props) {
  if (books.length === 0) {
    return <p>まだ本が登録されていません</p>
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        登録した本
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </div>
  )
}