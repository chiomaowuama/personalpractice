import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'



const router = createBrowserRouter(
  createRoutesFromElements(
      <themeProvider value={{theme, darktheme, lighttheme }}>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home/>}/>
      </Route>
      </themeProvider>
   
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
