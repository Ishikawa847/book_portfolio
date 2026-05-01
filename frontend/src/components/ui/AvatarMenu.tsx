import { useState } from "react"
import EditProfileModal from "@/components/users/EditProfileModal"

type Props = {
    name: string
    avatarUrl: string
}
 export default function AvatarMenu({ name, avatarUrl }: Props) {
    const [open, setOpen] = useState(false)

    return (
      <>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="avatar cursor-pointer">
          {/* daisyUI: avatar */}
          <div className="w-10 rounded-full">
            <img src={avatarUrl} alt="avatar" />
          </div>
        </div>

        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
          <li>
            <button onClick={() => setOpen(true)}>
              プロフィール編集
            </button>
          </li>
        </ul>
      </div>

      {open && <EditProfileModal onClose={() => setOpen(false)} name={name} avatarUrl={avatarUrl} />}
      
      </>
    )
}