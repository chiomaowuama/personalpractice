import React from "react";
import { Outlet } from 'react-router-dom'
import Header from "./Component/header";
import Footer from "./Component/Footer";

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