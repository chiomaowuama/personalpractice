import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer' 
import Header from './component/Header' 

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