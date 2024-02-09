import React from 'react'


function Header() {
  return (

      <div className='border-2 border-green-700 py-2 px-1'>
          <div className='flex border-2 border-blue-900'>
          <div className='w-2/5 border-2 border-green-600'>helo</div>
          <div className='w-3/5 border-2 border-yellow-200 '>
          <ul className='flex justify-evenly'>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Login</li>
            <li>Signup</li>
           

          </ul>
         
          </div>
          </div>
      </div>

   
  
  )
}

export default Header