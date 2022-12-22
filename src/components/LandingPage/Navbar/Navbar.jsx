import React from "react";
import { Link } from "react-scroll";
import logogymImage from "../../../assets/images/logogym.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-info text-white px-8 py-4" id="home">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-info rounded-box w-52">
              <li>
                <a href="home">Home</a>
              </li>
              <li>
                <a href="product">Product</a>
              </li>
              <li>
                <a href="pricing">Pricing</a>
              </li>
              <li>
                <a href="testimony">Testimony</a>
              </li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">AltaGym</a> */}
          <div>
            <img src={logogymImage} alt="logo-navbar" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="home" spy={true} smooth={true} offset={1} duration={1000}>
                <a className="hover:underline underline-offset-8">Home</a>
              </Link>
            </li>
            <li>
              <Link to="product" spy={true} smooth={true} offset={1} duration={1000}>
                <a className="hover:underline underline-offset-8">Product</a>
              </Link>
            </li>
            <li>
              <Link to="pricing" spy={true} smooth={true} offset={1} duration={1500}>
                <a className="hover:underline underline-offset-8">Pricing</a>
              </Link>
            </li>
            <li>
              <Link to="testimony" spy={true} smooth={true} offset={1} duration={1600}>
                <a className="hover:underline underline-offset-8">Testimony</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="join" spy={true} smooth={true} offset={1} duration={2000}>
            <a className="btn bg-primary text-white hover:bg-accent">Gabung Sekarang</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
