import { Link } from "react-router-dom"
import AuthButtons from "@/components/layouts/AuthButtons"
import HamburgerButton from "../ui/HamburgerButton"
import AvatarMenu from "../ui/AvatarMenu"

import type { User } from "@/interfaces"

type Props = {
  user: User | null
}

const Header = ({ user }: Props) => {
  console.log("Header user:", user)
  console.log("Header user avatarUrl:", user?.avatarUrl)
  return (
    <header className="navbar bg-base-100 shadow-md px-4">
      <div className="flex-1 flex items-center gap-2">
        <HamburgerButton htmlFor="menu-drawer" />
        <img src="/favicon.png" alt="Logo" className="h-8 w-8" />
        <Link to="/" className="text-xl font-bold">
          Book Portfolio
        </Link>
      </div>

      <div className="flex gap-2">
        {user && <AvatarMenu avatarUrl={user.avatarUrl} />}
        <AuthButtons />
      </div>
    </header>
  )
}

export default Header