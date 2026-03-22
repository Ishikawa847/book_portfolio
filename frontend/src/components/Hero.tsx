import { Link } from "react-router-dom"

export default function Hero() {
  return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">
        読書を<br />ポートフォリオに
      </h1>
      <p className="py-6">
      </p>
      <Link to="/signup" className="btn btn-warning">
        Get started
      </Link>
    </div>
  </div>
</div>
  )
}
