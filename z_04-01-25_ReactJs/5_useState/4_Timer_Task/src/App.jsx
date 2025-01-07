import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [timerValue, setTimerValue] = useState(0)
  const [timerActive, setTimerActive] = useState(null);

  
  const handleStart = () => {
    if (!timerActive) {
      const id = setInterval(() => {
        setTimerValue(timerValue => timerValue + 1)
      }, 1000);
      setTimerActive(id);
    }
  }

  const handleStop = () => {
    if(timerActive)
      {
        clearInterval(timerActive);
        setTimerActive(null);
      }
  }

  const handleReset = () => {
    handleStop();
    setTimerValue(0);
  }



  return (
    <>
      <h1>{timerValue}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
