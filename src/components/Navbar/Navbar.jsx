import React from "react";
import { NavLink } from "react-router";
import { Github } from "lucide-react";
import logo from '../../assets/logo.png';



const Navbar = () => {
  const linkStyle = ({ isActive }) =>
  isActive
    ? "font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
    : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-gray-200 transition-all";

  return (
    <div className="navbar shadow-sm md:px-12 lg:px-20 bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
            <li><NavLink to="/apps" className={linkStyle}>Apps</NavLink></li>
            <li><NavLink to="/installation" className={linkStyle}>Installation</NavLink></li>
          </ul>
        </div>
        <NavLink to="/" className="flex items-center gap-2">
  <img src={logo} alt="Hero Logo" className="w-10 h-10" />
  <span className="text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
    HERO.IO
  </span>
</NavLink>
      </div>

      <div className="navbar-center hidden lg:flex  ">
        <ul className="menu menu-horizontal px-1 text-[17px]">
          <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
          <li><NavLink to="/apps" className={linkStyle}>Apps</NavLink></li>
          <li><NavLink to="/installation" className={linkStyle}>Installation</NavLink></li>
        </ul>
      </div>

      <div className="navbar-end ">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="btn font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-[17px]"
        >
          <Github />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
