import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "../assets/images/logo.png";
import Auth from "../utils/Auth";
const SideBar = () => {
  const [online, setOnline] = useState(false);
  const [offline, setOfline] = useState(false);
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

    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-base/80 ">
        {/* <!-- Page content here --> */}
        <Navbar />
        <Outlet />
      </div>
      <div className="drawer-side border">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 text-[#222222] e">
          <Link to="/" className="mb-2 flex justify-center">
            <img className="w-32" src={logo} alt="" />
          </Link>
          {/* <!-- Sidebar content here --> */}
          {/* <input
            type="text"
            placeholder="Search"
            className="input w-full input-primary"
          /> */}
          <li className=" my-1  font-bold ">
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <div className="dropdown dropdown-top- dropdown-end ">
            <label
              onClick={() => setMember(!member)}
              className={`${
                member ? "bg-primary" : "bg-transparent"
              }  w-full  justify-between font-bold btn  hover:bg-primary text-[#222222] border-none `}
            >
              <span className="flex items-center gap-x-1">Membership</span>
              <box-icon
                type="solid"
                name={`${!member ? "chevron-down" : "chevron-up"}`}
              ></box-icon>
            </label>
            <ul
              className={`${member ? "" : "hidden "} menu  bg-base-100  w-52`}
            >
              <li className="py-0 ">
                <Link to="anggota">Kelola Anggota</Link>
              </li>
              <li>
                <Link to="jenis">Jenis Member</Link>
              </li>
            </ul>
          </div>

          <li className="mt-1 font-bold text-lg">
            <label className="" for="">
              Kelas
            </label>
          </li>
          <div className="dropdown dropdown-top- dropdown-end font-semibold  text-md">
            <label
              onClick={() => setOnline(!online)}
              className={`${
                online ? "bg-primary" : "bg-transparent"
              }  w-full  justify-between  btn  font-semibold  hover:bg-primary text-[#222222] border-none `}
            >
              <span className="flex  items-center gap-x-1">Offline</span>
              <box-icon
                type="solid"
                name={`${!online ? "chevron-down" : "chevron-up"}`}
              ></box-icon>
            </label>
            <ul
              className={`${online ? "" : "hidden "} menu  bg-base-100  w-52`}
            >
              <li className="py-0 ">
                <Link to="online">Daftar Kelas</Link>
              </li>
              <li>
                <Link to="offline">Daftar Anggota</Link>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-top- dropdown-end  font-semibold text-md">
            <label
              onClick={() => setOfline(!offline)}
              className={`${
                offline ? "bg-primary" : "bg-transparent"
              }  w-full  justify-between  btn  font-semibold  hover:bg-primary text-[#222222] border-none `}
            >
              <span className="flex items-center gap-x-1">Online</span>
              <box-icon
                type="solid"
                name={`${!offline ? "chevron-down" : "chevron-up"}`}
              ></box-icon>
            </label>
            <ul
              className={`${offline ? "" : "hidden "} menu  bg-base-100  w-52`}
            >
              <li className="py-0 ">
                <Link to="online">Daftar Kelas</Link>
              </li>
              <li>
                <Link to="offline">Daftar Anggota</Link>
              </li>
            </ul>
          </div>
          {/* <div className="dropdown dropdown-top- dropdown-end">
            <label
              onClick={() => setMember(!member)}
              className="btn justify-start  btn-primary   m-1 text-white w-full"
            >
              <box-icon name="book-content"></box-icon>Membership
            </label>
            <ul
              className={`${member ? "" : "hidden "} menu  bg-base-100  w-52`}
            >
              <li className="py-0 ">
                <NavLink to="anggota">Kelola Anggota</NavLink>
              </li>
              <li>
                <NavLink to="jenis">Jenis Member</NavLink>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-top-  dropdown-end">
            <label
              onClick={() => setKelas(!kelas)}
              className="btn justify-start m-1  btn-primary  text-white w-full"
            >
              <box-icon name="dumbbell"></box-icon> Kelas
            </label>
            <ul
              className={`${kelas ? "" : "hidden "} menu  bg-base-100   w-52`}
            >
              <li className="py-0">
                <NavLink to="online">Online</NavLink>
              </li>
              <li>
                <NavLink to="offline">Offline</NavLink>
              </li>
            </ul>
          </div> */}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
