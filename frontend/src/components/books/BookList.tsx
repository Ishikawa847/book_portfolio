import type { Book } from "@/interfaces"
import BookCard from "./BookCard"

type Props = {
  books: Book[]
}

export default function BookList({
  books
}: Props) {
  if (books.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-500">
        まだ本が登録されていません
      </div>
    )
  }

  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold">
          マイライブラリ
        </h2>

        <span className="badge badge-outline">
          {books.length}冊
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </section>
  )
}