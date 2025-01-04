import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton()
{
  return (
    <button>Button</button>
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome To React Page...</h1>
    <MyButton/>
    </>
  )
}

// this show the main function is app
export default App
