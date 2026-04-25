import { useState } from "react"
import { searchBooks } from "@/lib/api/books"
import type { Book } from "@/interfaces"

type Props = {
  setBooks: React.Dispatch<
    React.SetStateAction<Book[]>
  >
}

export default function SearchBooks({
  setBooks
}: Props) {
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
    <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            value={keyword}
            onChange={(e) =>
              setKeyword(e.target.value)
            }
            placeholder="本を検索してください"
            className="input input-bordered w-full"
          />

          <button
            onClick={handleSearch}
            className="btn btn-warning px-8"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "検索"
            )}
          </button>
        </div>
    </div>
  )
}