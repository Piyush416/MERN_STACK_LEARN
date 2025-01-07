import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTask] = useState([])
  const [taskValue, settaskValue] = useState()

  const handlerAddTask = () => {
    if (taskValue != "") {
      const updatedTask = [...tasks, taskValue]; // append the new value to old value in array
      // console.log(updatedTask);
      setTask([...tasks, taskValue]);
    }
  }


  const handleRemoveTask = (index) =>{
      // let newtask = tasks.map((task)=>
      //   {
      //       return task;
      //   }).filter((task)=>
      //     {
      //       return !(task === tasks[index]);
      //     })

      const updatedTask = tasks.filter((task, i)=>{
        return (i !== index)
      })

        setTask(updatedTask);
    }

  return (
    <>
      <h1>ToDo - App</h1>
      <input type='text'
        value={taskValue}
        onChange={(event) => settaskValue(event.target.value)}
      />
      <button onClick={handlerAddTask}>Add</button>

      {
      tasks.map((task, index)=>{
          return <li key={index}>{task} <button onClick={()=>{handleRemoveTask(index)}}>remove</button></li>
        }) 
      }

    </>

  )
}

export default App
