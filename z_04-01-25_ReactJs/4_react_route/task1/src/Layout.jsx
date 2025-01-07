import React from 'react'
import "./index.css"

import MyHeader from "./components/MyHeader"
import MyFooter from "./components/MyFooter"
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <MyHeader />
            <Outlet/>
            <MyFooter />
        </>
    )
}

export default Layout
