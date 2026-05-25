import { useEffect, useState } from "react"
import { getReadingLogs } from "@/lib/api/readingLogs"

type ReadingLog = {
  id: string
  memo: string
  read_on: string
}

type Props = {
  bookId: string
}

export default function ReadingLogList({
  bookId,
}: Props) {
  const [logs, setLogs] = useState<ReadingLog[]>([])
  const [loading, setLoading] = useState(true)

  const fetchLogs = async () => {
    try {
      const res = await getReadingLogs(bookId)

      setLogs(res.data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLogs()
  }, [])

  // loading
  if (loading) {
    return (
      <p className="text-center mt-6">
        読み込み中...
      </p>
    )
  }

  // 空状態
  if (logs.length === 0) {
    return (
      <div className="text-center mt-8 text-gray-500">
        まだ読書記録がありません
      </div>
    )
  }

  return (
    <div className="space-y-4 mt-8">

      <h2 className="text-2xl font-bold">
        読書記録
      </h2>

      {logs.map((log) => (
        <div
          key={log.id}
          className="card bg-base-100 shadow border border-base-200"
        >
          <div className="card-body">

            <p className="text-sm text-gray-500">
              {log.read_on}
            </p>

            <p className="whitespace-pre-wrap">
              {log.memo}
            </p>

          </div>
        </div>
      ))}

    </div>
  )
}