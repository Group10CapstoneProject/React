import React, { useState } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "../assets/images/logo.png";
import Auth from "../utils/Auth";
import Cookies from "js-cookie";
const SideBar = () => {
  let link = useLocation();
  const path = link.pathname;
  const [online, setOnline] = useState(false);
  const [offline, setOfline] = useState(false);
  const [member, setMember] = useState(false);
  const [book, setBook] = useState(false);
  let navigate = useNavigate();
  const data = JSON.parse(Cookies.get("data"));
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="drawer drawer-mobile  ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  flex flex-col  ">
        <Navbar />
        <div className="py-4 px-6">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side border ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 text-prim">
          <Link to="/" className="mb-2 flex justify-center">
            <img className="w-32" src={logo} alt="" />
          </Link>
          <li className={`${path == "/" ? "bg-prim1 text-white rounded-lg" : "bg-transparent text-prim"} font-bold text-lg hover:bg-prim1 hover:text-white rounded-lg`}>
            <Link to="/">
              <i className="bx bx-sm bxs-dashboard"></i>Dashboard
            </Link>
          </li>
          <div className="pt-1.5">
            <li className={`${path == "/pembayaran" ? "bg-prim1 text-white rounded-lg" : "bg-transparent text-prim"} font-bold text-lg hover:bg-prim1 hover:text-white rounded-lg`}>
              <Link to="pembayaran">
                <i className="bx bx-sm bxs-wallet"></i>Pembayaran
              </Link>
            </li>
          </div>
          <div className="dropdown dropdown-top- dropdown-end pt-1.5">
            <label onClick={() => setMember(!member)} className={`${member ? "bg-prim1 text-white" : "bg-transparent  text-prim"}  w-full  justify-between font-bold btn  hover:bg-prim1 hover:text-white  border-none `}>
              <span className="flex items-center gap-x-3 normal-case text-lg">
                <i className="bx bx-sm bx-book-content"></i>
                Membership
              </span>
              <i className={`bx bx-sm ${!member ? "bx-chevron-down" : "bx-chevron-up"} `}></i>
            </label>
            <ul className={`${member ? "" : "hidden "}  w-52 `}>
              <li className={`${path == "/anggota" ? "bg-transparent text-prim rounded-lg py-0" : ""} font-semibold pt-1`}>
                <Link to="anggota">Kelola Member</Link>
              </li>
              <li className={`${path == "/jenis" ? "bg-transparent text-prim rounded-lg py-0" : ""} font-semibold pt-1`}>
                <Link to="jenis">Jenis Member</Link>
              </li>
            </ul>
          </div>

          <li className="mt-2 font-bold text-lg">
            <label className="hover:bg-prim1 hover:text-white rounded-lg">
              <i className="bx bx-sm bx-dumbbell"></i>
              Kelas
            </label>
          </li>
          <div className="dropdown dropdown-top- dropdown-end font-semibold  text-md pt-1">
            <label onClick={() => setOnline(!online)} className={`${online ? "bg-prim1 text-white" : "bg-transparent text-prim"}  w-full  justify-between  btn  font-bold  hover:bg-prim1 hover:text-white border-none `}>
              <span className="flex  items-center gap-x-1">Online</span>
              <i className={`bx bx-sm ${!online ? "bx-chevron-down" : "bx-chevron-up"} `}></i>
            </label>
            <ul className={`${online ? "" : "hidden "}  w-52 `}>
              <li className="py-0 pt-1">
                <Link to="kategorionline">Kategori Kelas</Link>
              </li>
              <li className="py-0 pt-1">
                <Link to="kelasonline">Kelas Online</Link>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-top- dropdown-end  font-semibold text-md pt-1.5">
            <label onClick={() => setOfline(!offline)} className={`${offline ? "bg-prim1 text-white" : "bg-transparent text-prim"}  w-full  justify-between  btn  font-bold  hover:bg-prim1 hover:text-white  border-none `}>
              <span className="flex items-center gap-x-1">Offline</span>
              <i className={`bx bx-sm ${!offline ? "bx-chevron-down" : "bx-chevron-up"} `}></i>
            </label>
            <ul className={`${offline ? "" : "hidden "} w-52`}>
              <li className="py-0 pt-1">
                <Link to="kategorioffline">Kategori Kelas</Link>
              </li>
              <li className="py-0 pt-1">
                <Link to="kelasoffline">Kelas Offline</Link>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-top- dropdown-end pt-1.5">
            <label onClick={() => setBook(!book)} className={`${book ? "bg-prim1 text-white" : "bg-transparent text-prim"}  w-full  justify-between  btn  font-semibold  hover:bg-prim1 hover:text-white border-none `}>
              <span className="flex items-center font-bold gap-x-3 normal-case text-lg">
                <i class="bx bx-sm bxs-book-bookmark"></i>
                Booking
              </span>
              <i className={`bx bx-sm ${!book ? "bx-chevron-down" : "bx-chevron-up"} `}></i>
            </label>
            <ul className={`${book ? "" : "hidden "}  w-52`}>
              <li className="py-0 pt-1 font-semibold">
                <Link to="bookingonline">Online</Link>
              </li>
              <li className="py-0 pt-1 font-semibold">
                <Link to="bookingoffline">Offline</Link>
              </li>
            </ul>
          </div>

          <div className="pt-1.5">
            {data && data.role == "superadmin" ? (
              <li className={`${path == "/admin" ? "bg-prim1 text-white rounded-lg" : "bg-transparent text-prim"} font-bold text-lg hover:bg-prim1 hover:text-white rounded-lg`}>
                <span className="flex  items-center gap-x-3">
                  <i class="bx bx-user-circle bx-sm"></i>
                  <Link to="admin">Admin</Link>
                </span>
              </li>
            ) : (
              ""
            )}
          </div>
          <div className="pt-[50px]">
            {data && data.role == "superadmin" ? (
              <li className={`${path == "/offline" ? "bg-base text-dang4 rounded-lg" : ""} font-bold `}>
                <span className="flex  items-center gap-x-3">
                  <box-icon color={`${path == "/offline" ? "#ff5328" : ""}`} name="log-out"></box-icon>
                  <Link to="offline" className="font-bold">
                    Keluar
                  </Link>
                </span>
              </li>
            ) : (
              ""
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
