import React from "react"

import Header from "@/components/layouts/Header"

interface Props {
  children: React.ReactNode
}

const CommonLayout = ({ children }: Props) => {
    console.log(children)
  return (
    <>
    <div className="min-h-screen w-full">
      <header className="w-full">
        <Header />
      </header>
      <main>
        {children}
      </main>
    </div>
    </>
  )
}

export default CommonLayout