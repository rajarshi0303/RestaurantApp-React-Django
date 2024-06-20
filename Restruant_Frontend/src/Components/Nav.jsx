import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Nav() {
  return (
<div>
    <nav className="fixed w-full z-20 top-0 left-0 bg-stone-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
            <a href="" className="flex items-center">
                <span className="text-white self-center text-2xl font-bold whitespace-nowrap ">Yummy.</span>
            </a>
            
            <div className="flex md:order-2">
            <Link to="/booktable">
            <button type="button" className="text-white bg-gradient-to-tr from-orange-500 to-orange-200 font-sans uppercase  shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-orange-50 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ">
                    Book a Table
                    </button>
            </Link>
                
                {/* Responsive  Navbar Code */}
                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>

            </div>

            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:from-orange-500 to-orange-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    <Link to="/" className="text-white flex items-center text-xl font-semibold hover:text-orange-600">
                        Home
                    </Link>
                    </li>
                    <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    <Link to="/about" className="text-white flex items-center text-xl font-semibold hover:text-orange-600">
                        About
                    </Link>
                    </li>
                    <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    <Link to="/menu" className="text-white flex items-center text-xl font-semibold hover:text-orange-600">
                        Menu
                    </Link>
                    </li>
                    <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    <Link to="/events" className="text-white flex items-center text-xl font-semibold hover:text-orange-600">
                        Events
                    </Link>
                    </li>
                    <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    <Link to="/chefs" className="text-white flex items-center text-xl font-semibold hover:text-orange-600">
                        Chefs
                    </Link>
                    </li>
                    <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    <Link to="/gallery" className="text-white flex items-center text-xl font-semibold hover:text-orange-600">
                        Gallery
                    </Link>
                    </li>
                    <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    <Link to="/contact" className="text-white flex items-center text-xl font-semibold hover:text-orange-600">
                        Contact
                    </Link>
                    </li>
                    <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    <Link to="/order" className="text-white flex items-center text-xl font-semibold hover:text-orange-600">
                        Order
                    </Link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    <Outlet />
</div>
    
  )
}
