import React, { useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
          <li
            className={`${
              path == "/" ? "bg-prim text-white rounded-lg" : ""
            } font-bold `}
          >
            <Link to="/">
              <box-icon
                color={`${path == "/" ? "white" : ""}`}
                type="solid"
                name="dashboard"
              ></box-icon>
              Dashboard
            </Link>
          </li>
          <li
            className={`${
              path == "/pembayaran" ? "bg-prim text-white rounded-lg" : ""
            } font-bold `}
          >
            <Link to="pembayaran">
              <box-icon
                color={`${path == "/pembayaran" ? "white" : ""}`}
                name="wallet"
              ></box-icon>
              Pembayaran
            </Link>
          </li>
          <div className="dropdown dropdown-top- dropdown-end ">
            <label
              onClick={() => setMember(!member)}
              className={`${
                member ? "bg-primary" : "bg-transparent"
              }  w-full  justify-between font-bold btn  hover:bg-primary text-black border-none `}
            >
              <span className="flex  items-center gap-x-3">
                <box-icon type="solid" name="book-content"></box-icon>
                Membership
              </span>
              <box-icon
                type="solid"
                name={`${!member ? "chevron-down" : "chevron-up"}`}
              ></box-icon>
            </label>
            <ul className={`${member ? "" : "hidden "} font-semibold   w-52`}>
              <li className="py-0 ">
                <Link to="anggota">Kelola Anggota</Link>
              </li>
              <li>
                <Link to="jenis">Jenis Member</Link>
              </li>
            </ul>
          </div>

          <li className="mt-1 font-bold text-lg">
            <label className="">
              <box-icon name="dumbbell"></box-icon> Kelas
            </label>
          </li>
          <div className="dropdown dropdown-top- dropdown-end font-semibold  text-md">
            <label
              onClick={() => setOnline(!online)}
              className={`${
                online ? "bg-primary" : "bg-transparent"
              }  w-full  justify-between  btn  font-semibold  hover:bg-primary text-black border-none `}
            >
              <span className="flex  items-center gap-x-1">Online</span>
              <box-icon
                type="solid"
                name={`${!online ? "chevron-down" : "chevron-up"}`}
              ></box-icon>
            </label>
            <ul className={`${online ? "" : "hidden "}  w-52`}>
              <li className="py-0 ">
                <Link to="kategorionline">Kategori Kelas</Link>
              </li>
              <li className="py-0 ">
                <Link to="kelasonline">Kelas Online</Link>
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
              <span className="flex items-center gap-x-1">Offline</span>
              <box-icon
                type="solid"
                name={`${!offline ? "chevron-down" : "chevron-up"}`}
              ></box-icon>
            </label>
            <ul className={`${offline ? "" : "hidden "} w-52`}>
              <li className="py-0 ">
                <Link to="kategorioffline">Kategori Kelas</Link>
              </li>
              <li className="py-0 ">
                <Link to="kelasoffline">Kelas offline</Link>
              </li>
              <li>
                <Link to="offline">Daftar Anggota</Link>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-top- dropdown-end ">
            <label
              onClick={() => setBook(!book)}
              className={`${
                book ? "bg-primary" : "bg-transparent"
              }  w-full  justify-between font-bold btn  hover:bg-primary text-prim border-none `}
            >
              <span className="flex items-center gap-x-3 hover:text-base">
                <box-icon type="solid" name="book-bookmark"></box-icon>
                Booking
              </span>
              <box-icon
                type="solid"
                name={`${!book ? "chevron-down" : "chevron-up"}`}
              ></box-icon>
            </label>
            <ul className={`${book ? "" : "hidden "}  w-52`}>
              <li className="py-0 text-prim2 hover:bg-primary hover:text-base rounded-lg">
                <Link to="bookingonline">Online</Link>
              </li>
              <li className="text-prim2 hover:bg-primary hover:text-base rounded-lg">
                <Link to="offline">Offline</Link>
              </li>
            </ul>
          </div>

          {data && data.role == "superadmin" ? (
            <li
              className={`${
                path == "/offline" ? "bg-prim text-white rounded-lg" : ""
              } font-bold `}
            >
              <span className="flex  items-center gap-x-3">
                <box-icon
                  color={`${path == "/offline" ? "white" : ""}`}
                  name="user-circle"
                ></box-icon>
                <Link to="offline" className="font-bold">
                  Admin
                </Link>
              </span>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
