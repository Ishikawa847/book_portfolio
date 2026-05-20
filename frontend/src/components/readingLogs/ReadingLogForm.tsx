import { useState } from "react"

export default function ReadingLogForm() {
  const today = new Date()
    .toISOString()
    .split("T")[0]

  const [memo, setMemo] = useState("")
  const [readOn, setReadOn] = useState(today)

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
          <button className="btn btn-warning">
            記録する
          </button>
        </div>
      </div>
    </div>
  )
}