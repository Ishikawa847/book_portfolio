export default function ReadingLogForm() {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title">
          読書記録をつける
        </h2>

        <textarea
          className="textarea textarea-bordered"
          placeholder="感想を書く"
        />

        <button className="btn btn-warning mt-4">
          記録する
        </button>
      </div>
    </div>
  )
}