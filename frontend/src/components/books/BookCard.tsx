import type { Book } from "@/interfaces"

type Props = {
  book: Book
  buttonText?: string
  onClick?: (book: Book) => void
}

export default function BookCard({
  book,
  buttonText,
  onClick
}: Props) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-4 pt-4">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="rounded-xl h-56 object-contain"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-sm line-clamp-2">
          {book.title}
        </h2>

        <p className="text-sm text-gray-500">
          {book.author}
        </p>

        {buttonText && onClick && (
          <div className="card-actions justify-end mt-4">
            <button
              onClick={() => onClick(book)}
              className="btn btn-warning btn-sm"
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}