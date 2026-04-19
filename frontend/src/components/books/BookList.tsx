import type { Book } from "@/interfaces/index"

type Props = {
  books: Book[]
}

export default function BookList({ books }: Props) {
  if (books.length === 0) {
    return <p>まだ本が登録されていません</p>
  }

  return (
    <ul className="space-y-4">
      {books.map((book) => (
        <li key={book.id} className="border p-4 rounded">
          <p className="font-bold">{book.title}</p>
          <p>{book.author}</p>
        </li>
      ))}
    </ul>
  )
}