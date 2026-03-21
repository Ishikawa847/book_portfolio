import { Link } from "react-router-dom"
import AuthButtons from "@/components/layouts/AuthButtons"

const Header = () => {
  return (
    <header className="navbar bg-base-100 shadow-md px-4">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">
          Book Portfolio
        </Link>
      </div>

      <div className="flex gap-2">
        <AuthButtons />
      </div>
    </header>
  )
}

export default Header