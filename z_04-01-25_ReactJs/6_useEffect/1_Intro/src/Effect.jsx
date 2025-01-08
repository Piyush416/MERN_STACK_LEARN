import { useEffect, useState } from 'react' 

function Effect()
{
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(0)

  //use effect
  // it will run when we change any in page 
  // it will execute 2time because in main.jsx strictmode is add 
  // means first it will run for testing and 2nd for rendering
  // use for api fetching
  //This will run everytime
  // This useEffect will run everytime when we render , mouting , updating
  // useEffect(()=>{ alert("I am running")})


  // Mouting -> useEffect will run when component is visible or hidding that time it will run
  // Mouting -> only run when component is mouting when component is update then it will not run
  // screen me component aayega tabh mouting hoga
  // useEffect(()=>{alert("I will run during mouting")}, []) // 2nd parameter is empty array dependency 


  // Unmouting -> we have to use return function

  useEffect(() => {
    alert("I am running")
    return function () {
      alert("I am Unmouting");
    }
  }, [])


  // Updating (useEffect will run when update the value of variable count)
  // useEffect(() => { 
  //   alert("I will run only during Updating count variable")
  // }, [count] )


  // Note
  // when we have multiple useEffect it will run sequencly order

  return(
    <>
      <h1>count:{count}  value:{value}</h1>
      <button onClick={() => { setCount(count + 1) }}>Change Count</button>
      <button onClick={() => { setValue(value + 1) }}>Change Value</button>
    </>
  )
}


export default Effect;