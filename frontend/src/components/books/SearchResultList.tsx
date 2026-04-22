import type { Book } from "@/interfaces"

type Props = {
    books: Book[]
}

export default function SearchResultList({ books }: Props) {
    return (
        <ul className="space-y-4">
            {books?.map((book) => (
              <li key={book.googleBooksID} className="border p-4 rounded">
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-20 mb-2"
                />

                <p className="font-bold">{book.title}</p>
              </li>
            ))}
        </ul>
    )
}