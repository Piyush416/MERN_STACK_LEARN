import { useState } from 'react'
import './App.css'

import MyHeader from "./components/MyHeader"
import MyFooter from "./components/MyFooter"
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <MyHeader/>
    <MyFooter/>
    </>
  )
}

export default App
