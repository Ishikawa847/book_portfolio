import { useState } from "react"
import { createReadingLog } from "@/lib/api/readingLogs"

type Props = {
  bookId: string
}

export default function ReadingLogForm({ bookId }: Props) {
  const today = new Date()
    .toISOString()
    .split("T")[0]

  const [memo, setMemo] = useState("")
  const [readOn, setReadOn] = useState(today)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    try {
      setLoading(true)

      await createReadingLog(bookId, {
        memo,
        read_on: readOn,
      })

      setMemo("")
      alert("読書記録を保存しました")
    } catch (err) {
      console.log(err)
      alert("読書記録の保存に失敗しました")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card bg-base-100 shadow-xl border border-base-200">
      <div className="card-body">

        <h2 className="card-title text-2xl">
          今日の読書記録
        </h2>

        <div className="divider"></div>

        {/* 日付 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              読書日
            </span>
          </label>

          <input
            type="date"
            value={readOn}
            onChange={(e) =>
              setReadOn(e.target.value)
            }
            className="input input-bordered w-full"
          />
        </div>

        {/* メモ */}
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">
              メモ
            </span>
          </label>

          <textarea
            value={memo}
            onChange={(e) =>
              setMemo(e.target.value)
            }
            className="textarea textarea-bordered w-full h-32"
            placeholder="今日読んだ内容や感想を書く"
          />
        </div>

        {/* ボタン */}
        <div className="card-actions justify-end mt-6">
          <button
           onClick={handleSubmit}
           className="btn btn-warning">
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "記録する"
            )}
          </button>
        </div>
      </div>
    </div>
  )
}