import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const SideBar = () => {
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
      <div className="drawer-content flex flex-col ">
        {/* <!-- Page content here --> */}
        <Navbar />
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 text-[#222222] bg-base">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/">Membership</NavLink>
          </li>
          <div className="dropdown dropdown-top- dropdown-end">
            <label tabIndex={0} className="btn m-1">
              Kelas
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="online">Kelas Online</a>
              </li>
              <li>
                <a href="offline">Kelas Offline</a>
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
