import type { Book } from "@/interfaces"

type Props = {
  name: string
  avatarUrl: string
  books: Book[]
}

export default function ProfileHeader({
    name,
    avatarUrl,
    books
  }: Props) {
    return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <div className="flex items-center gap-5">

          {/* プロフィール画像 */}
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
              <img src={avatarUrl} alt={name} />
            </div>
          </div>

          {/* 名前・冊数 */}
          <div>
            <h1 className="text-2xl font-bold">
              {name}
            </h1>

            <p className="text-base-content/70 mt-1">
              登録本 {books.length}冊
            </p>
          </div>

        </div>
      </div>
    </div>
    )
  }