import React from 'react'
import { useState, useEffect } from 'react'
import { themeprovider } from '../../context/theme'

function Header() {
  
  // const [themeMode, setThemeMode] = useState('light')

  // const darkTheme = () => {
  //   setThemeMode('dark')
  // }

  // const lightTheme = () => {
  //   setThemeMode('light')
  // }

  // useEffect(() => {
  //   document.querySelector('html').classList.remove('dark', "light")
  //   document.querySelector('html').classList.add(themeMode)
  // }, [themeMode])
  
  return (

      <div className='border-2 border-green-700 py-2 px-1'>
          <div className='flex border-2 border-blue-900'>
          <div className='w-1/2 border-2 border-green-600'>helo</div>
          <div className='w-1/2 border-2 border-yellow-200 '>
          <ul className='flex justify-evenly'>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Login</li>
            <li>Signup</li>
            <theme/>

          </ul>
          </div>
          </div>
      </div>

   
  
  )
}

export default Header