import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "@/App"

export default function Sidebar() {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className="drawer-side">
      <label
        htmlFor="menu-drawer"
        className="drawer-overlay"
      ></label>

      <ul className="menu bg-base-200 min-h-full w-80 p-4">
        <li>
          <Link to="/home">Home</Link>
        </li>

        <li>
          <Link to={`/users/${currentUser?.id}`}>
            Profile
          </Link>
        </li>
      </ul>
    </div>
  )
}