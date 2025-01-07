import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [color, setColor] = useState('none');


  const handleRed = ()=>
    {
      setColor("red");
      console.log(color);
      
    }
  const handleYellow = ()=>
    {
      setColor("yellow");
      console.log(color);
      
    }
  const handleGreen = ()=>
    {
      setColor("green");
      console.log(color);
      
    }
  const handlePink = ()=>
    {
      setColor("Pink");
      console.log(color);
      
    }


  return(
    <>
    <div className="container" style={{backgroundColor:`${color}`}}>
        <button onClick={handleRed}>Red</button>
        <button onClick={handleGreen}>Green</button>
        <button onClick={handleYellow}>Yellow</button>
        <button onClick={handlePink}>Pink</button>
    </div>
    </>
  )
}

export default App
