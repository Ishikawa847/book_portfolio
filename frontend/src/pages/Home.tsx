import { useEffect, useState } from "react"
import { getBooks } from "@/lib/api/books"
import type { Book } from "@/interfaces/index"

import BookList from "@/components/books/BookList"
import SearchBooks from "@/components/books/SearchBooks"
import SearchResultList from "@/components/books/SearchResultList"

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]) // 登録済み本
  const [searchResults, setSearchResults] = useState<Book[]>([]) // 検索結果
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

      {/* 検索 */}
      <SearchBooks setBooks={setSearchResults} />

      {/* 検索結果（検索時のみ表示） */}
      {searchResults.length > 0 && (
        <SearchResultList books={searchResults} setBooks={setSearchResults} />
      )}

      {/* 登録済み本一覧 */}
      <BookList books={books} />
    </div>
  )
}