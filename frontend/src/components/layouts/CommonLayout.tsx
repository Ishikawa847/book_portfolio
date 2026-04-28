import React from "react"

import Header from "@/components/layouts/Header"
import Sidebar from "@/components/layouts/Sidebar"

interface Props {
  children: React.ReactNode
}

const CommonLayout = ({ children }: Props) => {
    console.log(children)
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
        <Header />
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