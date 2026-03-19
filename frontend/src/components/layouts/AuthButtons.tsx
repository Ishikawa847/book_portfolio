import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

import { AuthContext } from "@/App"
import { signOut } from "@/lib/api/auth"

const AuthButtons = () => {
  const { loading, isSignedIn, setIsSignedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      const res = await signOut()

      if (res.data.success === true) {
        // Cookie削除
        Cookies.remove("_access_token")
        Cookies.remove("_client")
        Cookies.remove("_uid")

        // 状態更新
        setIsSignedIn(false)

        // ログイン画面へ
        navigate("/signin")
      }
    } catch (err) {
      console.error(err)
    }
  }

  if (loading) return null

  if (isSignedIn) {
    return (
      <button className="btn btn-outline" onClick={handleSignOut}>
        Sign out
      </button>
    )
  }

  return (
    <>
      <Link to="/signin" className="btn btn-ghost">
        Sign in
      </Link>
      <Link to="/signup" className="btn btn-primary">
        Sign up
      </Link>
    </>
  )
}

export default AuthButtons