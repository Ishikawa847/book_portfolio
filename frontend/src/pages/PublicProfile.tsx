import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getUserProfile } from "@/lib/api/users"
import BookList from "@/components/books/BookList"

export default function PublicProfile() {
  const { id } = useParams()
  
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserProfile(id!)
        setUser(res.data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [id])

  if (loading) return <p>読み込み中...</p>
  if (!user) return <p>ユーザーが見つかりませんでした</p>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        {user?.name}の公開プロフィール
      </h1>

      <BookList books={user?.books || []} />
    </div>
  )
}