import React, { useState, useEffect, createContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import './App.css'

import Landing from "./pages/Landing"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import CommonLayout from "./components/layouts/CommonLayout"

import { getCurrentUser } from "@/lib/api/auth"
import type { User } from "@/interfaces/index"

export const AuthContext = createContext({} as {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  isSignedIn: boolean
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
  currentUser: User | undefined
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
})

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  console.log("loading:", loading)
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<User | undefined>()

  // 認証チェック
  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()

      if (res?.data.isLogin === true) {
        setIsSignedIn(true)
        setCurrentUser(res?.data.data)
      } else {
        console.log("No current user")
      }
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, []) 

  const Private = ({ children }: { children: React.ReactElement }) => {
    if (loading) return <></>

    return isSignedIn ? children : <Navigate to="/signin" />
  }

  return (
      <AuthContext.Provider value={{
        loading,
        setLoading,
        isSignedIn,
        setIsSignedIn,
        currentUser,
        setCurrentUser
      }}>
    <CommonLayout>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
  <Route path="/home" element={
      <Private>
        <Home />
      </Private>} />
    </Routes>
    </CommonLayout>
     </AuthContext.Provider>
  );
}

export default App
