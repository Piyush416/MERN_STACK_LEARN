import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Heading()
{
  return(
    <h1>Welcome to Toggle</h1>
  )
}



function App() {
  const [toggle, setToggle] = useState();

  const handlerToogle = ()=>
    {
      setToggle(!toggle);
      console.log(toggle);
    }

  return (
    <>
      <button onClick={handlerToogle}>Toggle</button>
      {(toggle)? <Heading/> : ""}
    </>
  )
}

export default App
