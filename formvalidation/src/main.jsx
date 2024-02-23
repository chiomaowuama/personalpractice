import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Contextprovider from './Context/Contextprovider.jsx'
import Home from './Component/Home.jsx'
import Signinpage from './Component/Signinpage.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='Signinpage' element={<Signinpage/>}/>

    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contextprovider>
    <RouterProvider router={router} />
    </Contextprovider>
  </React.StrictMode>,
)
