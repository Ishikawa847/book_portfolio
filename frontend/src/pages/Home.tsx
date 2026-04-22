import { useEffect, useState } from "react"
import { getBooks } from "@/lib/api/books"
import type { Book } from "@/interfaces/index"
import BookList from "@/components/books/BookList"
import SearchBooks from "@/components/books/SearchBooks"
import SearchResultList from "@/components/books/SearchResultList"


export default function Home() {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await getBooks()
        setBooks(res.data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [])

  if (loading) return <p>読み込み中...</p>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        ログイン後ページ
      </h1>

      <SearchBooks setBooks={setBooks} />
      <SearchResultList books={books} />

      <BookList books={books} />
    </div>
  )
}