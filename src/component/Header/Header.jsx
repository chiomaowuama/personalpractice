import React from 'react'
import Theme from '../Themes/Theme.jsx'
import { Link, NavLink } from 'react-router-dom'


function Header() {
  return (

    <div>

      <div className='border-2 border-green-700 py-2 px-1 dark:bg-red-900 '>
        <div className='border-2 border-blue-900   flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
            <div className='w-2/5 border-2 border-green-600'>
             <Link>
              <h1>hello</h1>
             </Link>
            </div>
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



      {/* the second nav */}
      <header className="shadow sticky z-50 top-0  dark:bg-red-900">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://th.bing.com/th/id/OIG3.WQb1jTHnGJslbmmPao5f?pid=ImgGn"
                            className="mr-3 h-16 "
                            alt="Logo"
                        />
                    </Link>
                  
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
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
                            <li>
                                <NavLink
                                to="/About"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Blogs"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Blogs
                                </NavLink>
                            </li>
                           
                            
                        </ul>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/Signin"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Sign in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                        <Theme />
                    </div>
                </div>
            </nav>
        </header>
        
    </div>
      

   
  
  )
}

export default Header