import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import Cookies from "js-cookie"

import { AuthContext } from "@/App"
import { signIn } from "@/lib/api/auth"

export default function SignInForm() {
  const navigate = useNavigate()
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async () => {
    try {
      const res = await signIn({ email, password })

      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"])
        Cookies.set("_client", res.headers["client"])
        Cookies.set("_uid", res.headers["uid"])

        setIsSignedIn(true)
        setCurrentUser(res.data.data)

        navigate("/home")
      }
    } catch (err: any) {
      console.log(err.response?.data)
      setError("メールアドレスまたはパスワードが間違っています")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-200 shadow-xl w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Sign In</h2>

          {error && (
            <div className="alert alert-error text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="label">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="label">Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="btn btn-primary mt-4"
            onClick={handleSubmit}
            disabled={!email || !password}
          >
            ログイン
          </button>

          <p className="text-center text-sm mt-2">
            アカウントをお持ちでないですか？{" "}
            <Link to="/signup" className="link link-primary">
              新規登録
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}