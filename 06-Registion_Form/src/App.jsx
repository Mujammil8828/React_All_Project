import { useState } from 'react'
import './App.css'
import { RegistrationFormReact } from './RegistrationReact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegistrationFormReact/>
    </>
  )
}

export default App
