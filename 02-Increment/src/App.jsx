import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DriveState } from './Components/DriveState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DriveState/>
    </>
  )
}

export default App
