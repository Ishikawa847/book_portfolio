type Props = {
  onClose: () => void
}

export default function EditProfileModal({ onClose}: Props) {
  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          プロフィール編集
        </h3>

        <p className="py-4">
          ※ 次のブランチでフォーム実装
        </p>

        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            閉じる
          </button>
        </div>
      </div>
    </div>    
  )
}