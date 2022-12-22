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
                <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="product" spy={true} smooth={true} offset={50} duration={500}>
                  Product
                </Link>
              </li>
              <li>
                <Link to="pricing" spy={true} smooth={true} offset={50} duration={500}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="testimony" spy={true} smooth={true} offset={50} duration={500}>
                  Testimony
                </Link>
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
              <Link to="home" spy={true} smooth={true} offset={1} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="product" spy={true} smooth={true} offset={0} duration={500}>
                Product
              </Link>
            </li>
            <li>
              <Link to="pricing" spy={true} smooth={true} offset={0} duration={500}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="testimony" spy={true} smooth={true} offset={0} duration={500}>
                Testimony
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="join" spy={true} smooth={true} offset={0} duration={500}>
            <a className="btn bg-primary text-white hover:bg-accent">Gabung Sekarang</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
