import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/home">Home</Link>
      </nav>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
