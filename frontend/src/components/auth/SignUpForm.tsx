export default function SignUpForm() {
  return (
<div className="min-h-screen flex items-center justify-center">
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Signup</legend>

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" />

  <label className="label">Password Confirmation</label>
  <input type="password" className="input" placeholder="Password Comfirmation" />

  <button className="btn btn-warning mt-4">Login</button>
</fieldset>
</div>
  )
}
