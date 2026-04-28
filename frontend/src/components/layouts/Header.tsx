import { Link } from "react-router-dom"
import AuthButtons from "@/components/layouts/AuthButtons"
import HamburgerButton from "../ui/HamburgerButton"

const Header = () => {
  return (
    <header className="navbar bg-base-100 shadow-md px-4">
      <div className="flex-1 flex items-center gap-2">
        <HamburgerButton htmlFor="menu-drawer" />
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