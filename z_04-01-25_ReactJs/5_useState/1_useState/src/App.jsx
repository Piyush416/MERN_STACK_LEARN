import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  // this method will not check the value of count on frontend
  // but in console value is changing
  // let count = 0;
  // const handlerIncrease = ()=>
  // {
  //     count += 1
  //     console.log(count);
  // }


  // so we use useState Hook
  // first we import useState from react
  const [count, setCount] = useState(0);

  const handlerIncrease = ()=>
    {
      // this will increase the count by one only beacuse react bundle it then execute that
      // setCount(count+1);
      // setCount(count+1); // this will get count from the initially declare count

      // but by passing the function in method it will change the value by 2
      // because line 32 will get count from the previous setCount method 
      // that's why it will increase the value by two...
      setCount((count) => count+1); //1
      setCount((prevcount)=>  // this will get then count value from the previous setCount method
        {
          return prevcount+1; //2
        })
    }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handlerIncrease}>count</button>
    </>
  )
}

export default App
