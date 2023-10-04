import React from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="root-layout">
        <header className='flex justify-center '>
          <nav className='z-50 w-[90%] bg-white mt-[3rem] rounded-[3rem] fixed items-center shadow-lg'>
            <div className='nav-content flex justify-between items-center text-center mt-[.4rem] mb-[.4rem] mr-[.9rem] ml-[3rem] text-[1rem]'>
              <div className="brand font-Montserrat2 font-bold text-[1.5rem]">
                <h1><Link to='/'>MNM</Link></h1>
              </div>
              <div className="nav-links grid grid-cols-5 gap-1 font-Poppins font-bold text-[.9rem] items-center text-center ">
                  <NavLink className='li ' to='/'><a>Home</a></NavLink>
                  <NavLink className='li ' to='talents'><a>Talents</a></NavLink>
                  <NavLink className='li' to='services'><a>Services</a></NavLink>
                  <NavLink className='li' to='about'><a>About Us</a></NavLink>
                  <NavLink className=' bg-black text-white p-4 pr-7 pl-7 rounded-full' to='contact'><a>Contact Us</a></NavLink>
              </div>

            </div>
           
          </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        
    </div>
  )
}

export default RootLayout