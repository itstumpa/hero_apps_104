import React, { useState } from "react";
import { NavLink } from "react-router";
import { Github } from "lucide-react";
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
      : "hover:text-transparent hover:text-white hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] p-2 rounded-sm";

  return (
    <div className="w-full bg-white shadow-sm py-3">

      <div className="navbar max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        
        
        <div className="navbar-start flex items-center gap-2">

          <div className="lg:hidden relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="btn btn-ghost p-2"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-7 sm:w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {menuOpen && (
              <ul className="absolute left-0 top-full mt-2 w-52 bg-white rounded-md shadow-lg z-20 flex flex-col gap-2 p-3">
                <li>
                  <NavLink
                    to="/"
                    className={linkStyle}
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/apps"
                    className={linkStyle}
                    onClick={() => setMenuOpen(false)}
                  >
                    Apps
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/installation"
                    className={linkStyle}
                    onClick={() => setMenuOpen(false)}
                  >
                    Installation
                  </NavLink>
                </li>
              </ul>
            )}
          </div>

          <NavLink to="/" className="flex items-center gap-2">
            <img src={logo} alt="Hero Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="hidden md:flex text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              PURPLE
            </span>
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex px-1 text-[15px] sm:text-[16px] md:text-[17px] gap-6 sm:gap-8">
            <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
            <li><NavLink to="/apps" className={linkStyle}>Apps</NavLink></li>
            <li><NavLink to="/installation" className={linkStyle}>Installation</NavLink></li>
          </ul>
        </div>

        <div className="navbar-end">
          <a
            href="https://github.com/itstumpa"
            target="_blank"
            rel="noreferrer"
            className=" hover:scale-105 transition hover:ease-in-out font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-[12px] sm:text-[14px] md:text-[17px] flex items-center gap-1 md:gap-2 rounded-sm md:px-4 px-2 py-2"
          >
            <Github className="w-4 h-4 md:w-5 sm:h-5" />
            Contribute
          </a>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
