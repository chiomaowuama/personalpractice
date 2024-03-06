import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Contactus from './Contactus/Contactus.jsx'
import Blogs from './Blogs/Blogs.jsx'
import Signup from './Signup/Signup.jsx'
import Signuptwo from './AnotherSignup/Signuptwo.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path='' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contactus' element={<Contactus/>}/>
        <Route path='/Blogs' element={<Blogs/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signuptwo' element={<Signuptwo/>}/>

      </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
