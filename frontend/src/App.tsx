import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchHealth } from './lib/api'
import Landing from "./pages/Landing"



function App() {
  return <Landing />
}

export default App
