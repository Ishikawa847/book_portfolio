import { useState } from "react"

type Props = {
  onClose: () => void
  name: string
  avatarUrl: string
}

export default function EditProfileModal({ onClose, name: initialName, avatarUrl }: Props) {
    const [name, setName] = useState(initialName)
    const [image, setImage] = useState<File | null>(null)

    return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">
          プロフィール編集
        </h3>

        {/* 現在の画像 */}
        <div className="flex justify-center mb-4">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={avatarUrl} />
            </div>
          </div>
        </div>

        {/* 画像アップロード */}
        <input
          type="file"
          className="file-input file-input-bordered w-full mb-4"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />

        {/* 名前入力 */}
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="名前"
        />

        {/* ボタン */}
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            キャンセル
          </button>
          <button className="btn btn-warning">
            保存
          </button>
        </div>
      </div>
    </div>   
  )
}