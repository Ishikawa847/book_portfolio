import { useParams } from "react-router-dom"

export default function PublicProfile() {
  const { id } = useParams()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        公開プロフィール
      </h1>

      <p>User ID: {id}</p>
    </div>
  )
}