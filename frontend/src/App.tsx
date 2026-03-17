import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchHealth } from './lib/api'
import Landing from "./pages/Landing"
import SignUp from "./pages/SignUp";
import CommonLayout from "./components/layouts/CommonLayout"


function App() {
  return (
    <CommonLayout>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </CommonLayout>
  );
}

export default App
