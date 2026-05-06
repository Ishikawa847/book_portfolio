import { Link } from "react-router-dom"
import AuthButtons from "@/components/layouts/AuthButtons"
import HamburgerButton from "../ui/HamburgerButton"
import AvatarMenu from "../ui/AvatarMenu"

import type { User } from "@/interfaces"

type Props = {
  user: User | null
  onUserUpdate: (user: User) => void
}

const Header = ({ user, onUserUpdate }: Props) => {

  return (
    <header className="navbar bg-base-100 shadow-md px-4">
      <div className="flex-1 flex items-center gap-2">
        <HamburgerButton htmlFor="menu-drawer" />
        <img src="/favicon.png" alt="Logo" className="h-8 w-8" />
        <Link to="/home" className="text-xl font-bold">
          Book Portfolio
        </Link>
      </div>

      <div className="flex gap-2">
        {user && <AvatarMenu user={user} onUserUpdate={onUserUpdate} />}
        <AuthButtons />
      </div>
    </header>
  )
}

export default Header