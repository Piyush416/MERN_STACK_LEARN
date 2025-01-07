import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />  {/* router={<pass the function we take router as function name >}*/}
  </StrictMode>,
)
