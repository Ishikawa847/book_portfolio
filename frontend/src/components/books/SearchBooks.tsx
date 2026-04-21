import {useState} from "react"
import { searchBooks } from "@/lib/api/books"
import type { Book } from "@/interfaces/index"

type Props = {
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>
}

export default function SearchBooks({ setBooks }: Props) {
  const [keyword, setKeyword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    if (!keyword.trim()) return

    setLoading(true)

    try {
      const res = await searchBooks(keyword)
      setBooks(res.data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mb-6">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="本を検索"
        className="border p-2 mr-2"
      />

      <button
        onClick={handleSearch}
        className="btn btn-warning"
      >
        {loading ? "検索中..." : "検索"}
      </button>
    </div>
  )
}