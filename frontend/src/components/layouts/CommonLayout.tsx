import React from "react"

import Header from "@/components/layouts/Header"
import Sidebar from "@/components/layouts/Sidebar"
import { getCurrentUser } from "@/lib/api/auth"

import type { User } from "@/interfaces/index"

interface Props {
  children: React.ReactNode
}

const CommonLayout = ({ children }: Props) => {
  const [user, setUser] = React.useState<User | null>(null)

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getCurrentUser()
        setUser(res?.data.data)
        console.log("Current user:", res?.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchUser()
  }, [])

  return (
    <div className="drawer">
      {/* drawer 開閉制御 */}
      <input
        id="menu-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
    <div className="drawer-content min-h-screen w-full">
      <header className="w-full">
        <Header user={user}/>
      </header>
      <main>
        {children}
      </main>
    </div>
    <Sidebar />
    </div>
  )
}

export default CommonLayout