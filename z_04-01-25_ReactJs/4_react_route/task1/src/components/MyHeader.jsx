import React from 'react'
import { Link } from 'react-router-dom'

const MyHeader = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  )
}

export default MyHeader