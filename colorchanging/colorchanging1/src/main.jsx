import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ThemeContextProvider from './context/ThemeContextProvider.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import Blogs from './component/Blogs/Blogs.jsx'
import Signin from './component/Signin/Signin.jsx'
import ConsumptionContextProvider from './context/ConsumptionContextprovider.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Blogs' element={<Blogs/>}/>
        <Route path='Signin' element={<Signin/>}/>

      </Route>
      
   
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ConsumptionContextProvider>
        <RouterProvider router={router} />
      </ConsumptionContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
