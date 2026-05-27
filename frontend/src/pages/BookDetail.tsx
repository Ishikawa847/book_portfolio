import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getBook } from "@/lib/api/books"

import type { Book } from "@/interfaces/index"
import ReadingLogList from "@/components/readingLogs/ReadingLogList"
import ReadingLogForm from "@/components/readingLogs/ReadingLogForm"

export default function BookDetail() {
  const { id } = useParams()
  const [book, setBook] = useState<Book | null>(null)
  const [refreshKey, setRefreshKey] = useState(0) // 読書記録更新用

  useEffect(() => {
    const fetchBook = async () => {
      if (!id) return
      try {
        const res = await getBook(id)
        setBook(res.data)
      } catch (error) {
        console.error("Error fetching book:", error)
      }
    }

    fetchBook()
  }, [id])

  if (!book) {
    return <div>Book not found</div>
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="card lg:card-side bg-base-100 shadow-2xl">
        
        {/* 本画像 */}
        <figure className="p-6 lg:w-1/3">
          <img
            src={book.imageUrl || "https://placehold.jp/300x450.png"}
            alt="book"
            className="rounded-xl object-cover w-full max-w-xs"
          />
        </figure>

        {/* 本情報 */}
        <div className="card-body lg:w-2/3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">
                {book.title}
              </h1>

              <p className="text-gray-500 mt-2">
                {book.author}
              </p>
            </div>

            <div className="badge badge-warning badge-lg">
              Reading
            </div>
          </div>

          <div className="divider"></div>

          <p className="leading-7 text-base">
            ここに本の説明が入ります。
            Google Books API の description を表示予定。
          </p>

          <div className="card-actions justify-end mt-6">
            <button className="btn btn-warning">
              読書記録をつける
            </button>
          </div>
        </div>
      </div>

<div className="mt-10">
  <ReadingLogForm bookId={book.id} />
</div>

<div className="mt-10">
  <ReadingLogList bookId={book.id} />
</div>
    </div>
  )
}