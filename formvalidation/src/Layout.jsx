import react from "react"
import { Outlet } from 'react-router-dom'
import Header from "./Component/Header.jsx";
import Footer from "./Component/Footer.jsx";

import React from 'react'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout


