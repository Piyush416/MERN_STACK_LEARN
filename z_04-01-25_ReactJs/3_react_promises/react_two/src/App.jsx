// rafce (write this to a boilerpate is given by extension es7+)
import React from "react"
import MyHeader from "./MyHeader"
import MyFooter from "./MyFooter"
import Task from "./Task"


function App() {
  return (
    <>
    {/* using the componet and must have capital letter */}
    <MyHeader/>

    <h1>Welcome to Single Page Render Framework</h1>


    {/* sending data to task.jsx */}
    <Task name="Piyush" work="Full Stack"/>
    <Task name="Rohit" work="ML" />
    <Task name="Amit" work="BigData " />
    <Task name="Jay" work="AI" /> 
    
    <MyFooter/>
    </>
  )
}

export default App
