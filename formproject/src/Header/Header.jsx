import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className='border-2 p-2 flex flex-row '>
        <div className='w-1/6 border-2 border-black'>
            <img src="" alt="" />
            <h1>hello</h1>
        </div>
        <div className='w-4/6 border-2 border-green-800'>
            <div className='w-4/5 mx-auto'>
            <ul className='flex text-blue-950 text-lg font-mono font-semibold justify-around items-start '>

                <li className=''>
                    <NavLink
                        to="/"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Home
                    </NavLink>
                </li>
                <li  className=''>
                    <NavLink 
                    to="/Contactus"
                            className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                            ${isActive ? "text-orange-700" : "text-gray-700"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                  
                    >

                    Contact
                    </NavLink>
                </li>
                <li  className=''>Register</li>
                <li  className=''>Blogs</li>
            </ul>
            </div>
        </div>
        <div className='w-1/6 border-2 border-black flex justify-center'>
            <p>cart</p>
        </div>
    </div>
    </>
  )
}

export default Header