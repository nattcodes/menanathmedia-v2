import React, { useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  const [menuBar, setMenuBar] = useState(false)

  const open = () => {
    setMenuBar(!menuBar)
  }
  return (
    <div className="root-layout">
      <header className="flex justify-center ">
        <nav className="z-50 w-[91vw]  max-w-[1222px]  bg-white mt-[3rem] rounded-[2rem] fixed items-center shadow-lg ">
          <div className=" max-lg:block   nav-content flex justify-between items-center text-center my-[1rem] mr-[.9rem] ml-[3rem] text-[1rem]">
            <div className="max-lg:flex max-lg:justify-between max-lg:items-center brand font-Montserrat2 font-bold text-[1.5rem]">
              <h1>
                <Link to="/">MNM</Link>
              </h1>
           
              {/*  icons   */}
              <div className= "px-4 cursor-pointer hidden text-xl text-gray-700 max-lg:block" id="menu-btn">
                    <i onClick={open} className={!menuBar ? "fas fa-x" : "fas fa-bars"}></i>
              </div>
              {/* <div className="px-4 cursor-pointer hidden text-xl text-gray-700 max-lg:block " id="cancel-btn">
                    <i onClick={close} className="fas fa-x"></i>
              </div> */}
              {/* icons   */}

            </div>



            <ul className="nav-links ">
              <div className={ menuBar ? "max-lg:hidden  nav-links grid grid-cols-5 gap-1 font-Poppins font-bold text-[.9rem] items-center text-center " : "max-lg:mt-[2rem]  max-lg:block max-lg:text-justify   nav-links grid grid-cols-5 gap-1 font-Poppins font-bold text-[.9rem] items-center text-center "}>
                <li className=" max-lg:hover:bg-gray-200 max-lg:hover:px-3 transition ease-in-out duration-500 nav-item max-lg:border-t-2 max-lg:py-4 text-[1.1rem]">
                  <NavLink className="li " to="/">
                  <a>Home</a>
                </NavLink>
                </li>
                <li className="max-lg:hover:bg-gray-200 max-lg:hover:px-3 transition ease-in-out duration-500 nav-item max-lg:border-t-2  max-lg:py-4 text-[1.1rem]">
                  <NavLink className="li " to="talents">
                  <a>Talents</a>
                </NavLink>
                </li>
                <li className="max-lg:hover:bg-gray-200 max-lg:hover:px-3 transition ease-in-out duration-500 nav-item max-lg:border-t-2  max-lg:py-4 text-[1.1rem]">
                    <NavLink className="li" to="services">
                    <a>Services</a>
                    </NavLink>
                </li>
                <li className="max-lg:hover:bg-gray-200 max-lg:hover:px-3 transition ease-in-out duration-500 nav-item max-lg:border-t-2  max-lg:py-4 text-[1.1rem]">
                  <NavLink className="li" to="about">
                    <a>About Us</a>
                  </NavLink>
                </li>
                <li className="max-lg:hover:bg-gray-200 max-lg:hover:px-3 transition ease-in-out duration-500 nav-item max-lg:border-t-2 max-lg:py-4 text-[1rem]">
                  <button><NavLink
                    className=" li max-lg:bg-transparent max-lg:p-0 max-lg:text-black bg-black text-white p-4 pr-7 pl-7 rounded-full"
                    to="contact"
                  >
                    <a>Contact Us</a>
                  </NavLink></button>
                </li>
                
                
                
                
                
              </div>
              
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
