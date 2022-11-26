import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "../assets/images/logo.png";
const SideBar = () => {
  const [kelas, setKelas] = useState(false);
  const [member, setMember] = useState(false);
  let navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };
  return (
    // <aside className="h-screen sticky w-64 top-0 bg-white">
    //   <ul className="space-y-2 flex flex-col">
    //     <NavLink to="/">Dashboard</NavLink>
    //     <NavLink to="offline">Offline class</NavLink>
    //     <NavLink>online class</NavLink>
    //     <button onClick={handleLogout}>LOGOUT</button>
    //   </ul>
    // </aside>

    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-base/80 ">
        {/* <!-- Page content here --> */}
        <Navbar />
        <Outlet />
      </div>
      <div className="drawer-side borders">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 text-[#222222] bg-base">
          <Link to="/" className="mb-2 flex justify-center">
            <img className="w-32" src={logo} alt="" />
          </Link>
          {/* <!-- Sidebar content here --> */}
          <div className="dropdown dropdown-top- dropdown-end">
            <label
              onClick={() => setKelas(!kelas)}
              className="btn justify-start  btn-primary   m-1 text-white w-full"
            >
              <box-icon name="book-content"></box-icon>Membership
            </label>
            <ul className={`${kelas ? "" : "hidden "} menu  bg-base-100  w-52`}>
              <li className="py-0 ">
                <NavLink to="anggota">Kelola Anggota</NavLink>
              </li>
              <li>
                <NavLink to="jenis">Kelas Offline</NavLink>
              </li>
            </ul>
            {/* <NavLink to="online">Kelas Online</NavLink>
            <NavLink to="offline">Kelas Offline</NavLink> */}
          </div>
          <div className="dropdown dropdown-top- dropdown-end">
            <label
              onClick={() => setMember(!member)}
              className="btn justify-start m-1  btn-primary  text-white w-full"
            >
              <box-icon name="dumbbell"></box-icon> Kelas
            </label>
            <ul
              className={`${member ? "" : "hidden "} menu  bg-base-100  w-52`}
            >
              <li className="py-0">
                <NavLink to="online">Kelas Online</NavLink>
              </li>
              <li>
                <NavLink to="offline">Kelas Offline</NavLink>
              </li>
            </ul>
            {/* <NavLink to="online">Kelas Online</NavLink>
            <NavLink to="offline">Kelas Offline</NavLink> */}
          </div>
          <li>
            <button onClick={handleLogout}>logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
