import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Effect from './Effect'



function App() {
 
  const [toggle, setToggle] = useState(false)

  return(
    <>
    <button onClick={()=>{setToggle(!toggle)}}>Toggle</button>
    {(toggle) ? <Effect/> : ""}
    </>
  )
  
}

export default App
