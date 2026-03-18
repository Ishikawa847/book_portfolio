import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import { AuthContext } from "@/App"
import { signUp } from "@/lib/api/auth"

export default function SignUpForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const navigate = useNavigate()
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext)

  const handleSubmit = async () => {
    try {
      const res = await signUp({
        name,
        email,
        password,
        passwordConfirmation
      })
      console.log(res)

      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"])
        Cookies.set("_client", res.headers["client"])
        Cookies.set("_uid", res.headers["uid"])

        setIsSignedIn(true)
        setCurrentUser(res.data.data)

        navigate("/")
      }
    } catch (err) {
      console.error(err)
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Signup</legend>

        <label className="label">Name</label>
        <input
          type="name"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="label">Password Confirmation</label>
        <input
          type="password"
          className="input"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />

        <button className="btn btn-warning mt-4" onClick={handleSubmit}>
          Sign Up
        </button>
      </fieldset>
    </div>
  )
}
