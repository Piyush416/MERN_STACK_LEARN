import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import FetchButton from './FetchButton'
function App() {
  
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <h1>Fetch the Api</h1>
      <button onClick={()=>{setToggle(!toggle)}}>Show/Hide Users</button>
      {(toggle ? <FetchButton/>: "")}
    </>
  )
}

export default App
