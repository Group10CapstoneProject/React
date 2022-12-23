import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Navbar from "./Navbar";

const SideBar = () => {
  let link = useLocation();
  const path = link.pathname;
  const [online, setOnline] = useState(false);
  const [offline, setOfline] = useState(false);
  const [member, setMember] = useState(false);
  const [drop, setDrop] = useState({
    member: false,
    online: false,
    offline: false,
    member: false,
    book: false,
    trainer: false,
    artikel: false,
  });
  const [book, setBook] = useState(false);
  let navigate = useNavigate();
  const data = JSON.parse(Cookies.get("data"));
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  flex flex-col  ">
        <Navbar />
        <div className="py-4 px-6">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side border">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 text-prim">
          <Link to="/" className="mb-2 flex justify-center">
            <img className="w-32" src={logo} alt="" />
          </Link>
          <div className="pt-4">
            <li className={`${path == "/" ? "bg-prim1 text-white rounded-lg" : "bg-transparent text-prim"} font-semibold text-lg hover:bg-prim1 hover:text-white rounded-lg`}>
              <Link to="/">
                <i className="bx bx-sm bxs-dashboard"></i>Dashboard
              </Link>
            </li>
          </div>
          <div className="pt-2">
            <li className={`${path == "/pembayaran" ? "bg-prim1 text-white rounded-lg" : "bg-transparent text-prim"} font-semibold text-lg hover:bg-prim1 hover:text-white rounded-lg`}>
              <Link to="pembayaran">
                <i className="bx bx-sm bxs-wallet"></i>Pembayaran
              </Link>
            </li>
          </div>
          <div className="dropdown dropdown-top- dropdown-end pt-2">
            <label
              onClick={() => setDrop({ trainer: !drop.trainer })}
              className={`${drop.trainer ? "bg-prim1 text-white" : "bg-transparent  text-prim"}  w-full  justify-between font-semibold btn  hover:bg-prim1 hover:text-white  border-none `}
            >
              <span className="flex items-center gap-x-3 normal-case text-lg">
                <i className="bx bxs-face bx-sm" />
                Trainer
              </span>

              <i className={`bx bx-sm ${!drop.trainer ? "bx-chevron-down" : "bx-chevron-up"} `}></i>
            </label>
            <ul className={`${drop.trainer ? "" : "hidden "} font-semibold   w-52`}>
              <li className="py-0 pt-2">
                <Link to="trainer">Daftar Trainer</Link>
              </li>
              <li className="py-0 pt-2">
                <Link to="skills">Skills</Link>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-top- dropdown-end pt-2">
            <label
              onClick={() => setDrop({ member: !drop.member })}
              className={`${drop.member ? "bg-prim1 text-white" : "bg-transparent  text-prim"}  w-full  justify-between font-semibold btn  hover:bg-prim1 hover:text-white  border-none normal-case`}
            >
              <span className="flex items-center gap-x-3 text-lg">
                <i className="bx bx-sm bx-book-content"></i>
                Membership
              </span>
              <i className={`bx bx-sm ${!drop.member ? "bx-chevron-down" : "bx-chevron-up"} `}></i>
            </label>
            <ul className={`${drop.member ? "" : "hidden "} font-semibold   w-52`}>
              <li className="py-0 pt-1">
                <Link to="anggota">Kelola Member</Link>
              </li>
              <li className={`${path == "/jenis" ? "bg-transparent text-prim rounded-lg py-0" : ""} font-semibold pt-1`}>
                <Link to="jenis">Jenis Member</Link>
              </li>
            </ul>
          </div>

          <li className="mt-2 font-semibold text-lg">
            <label className="hover:bg-prim1 hover:text-white rounded-lg">
              <i className="bx bx-sm bx-dumbbell"></i>
              Kelas
            </label>
          </li>

          <div className="dropdown dropdown-top- dropdown-end font-semibold  text-md pt-1">
            <label
              onClick={() => setDrop({ online: !drop.online })}
              className={`${drop.online ? "bg-prim1 text-white" : "bg-transparent text-prim"}  w-full  justify-between  btn  font-semibold  hover:bg-prim1 hover:text-white border-none `}
            >
              <span className="flex  items-center gap-x-3">
                <i className="bx bx-movie-play bx-sm" style={{ color: "#00ff00" }} />
                Online
              </span>
              <i className={`bx bx-sm ${!drop.online ? "bx-chevron-down" : "bx-chevron-up"} `}></i>
            </label>
            <ul className={`${drop.online ? "" : "hidden "}  w-52`}>
              <li className="py-0 pt-1">
                <Link to="kategorionline">Kategori Kelas</Link>
              </li>
              <li className="py-0 pt-1">
                <Link to="kelasonline">Kelas Online</Link>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-top- dropdown-end  font-semibold text-md pt-1.5">
            <label
              onClick={() => setDrop({ offline: !drop.offline })}
              className={`${drop.offline ? "bg-prim1 text-white" : "bg-transparent text-prim"}  w-full  justify-between  btn  font-bold  hover:bg-prim1 hover:text-white border-none `}
            >
              <span className="flex items-center gap-x-3">
                <i className="bx bx-bolt-circle bx-sm" style={{ color: "#ff0000" }} />
                Offline
              </span>
              <i className={`bx bx-sm ${!drop.offline ? "bx-chevron-down" : "bx-chevron-up"} `}></i>
            </label>
            <ul className={`${drop.offline ? "" : "hidden "} w-52`}>
              <li className="py-0 pt-1">
                <Link to="kategorioffline">Kategori Kelas</Link>
              </li>
              <li className="py-0 pt-1">
                <Link to="kelasoffline">Kelas Offline</Link>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-top- dropdown-end pt-1.5">
            <label
              onClick={() => setDrop({ book: !drop.book })}
              className={`${drop.book ? "bg-prim1 text-white" : "bg-transparent text-prim"}  w-full  justify-between  btn  font-semibold  hover:bg-prim1 hover:text-white border-none text-lg`}
            >
              <span className="flex items-center font-semibold gap-x-3 normal-case">
                <i className="bx bx-sm bxs-book-bookmark"></i>
                Booking
              </span>
              <i className={`bx bx-sm ${!drop.book ? "bx-chevron-down" : "bx-chevron-up"} `}></i>
            </label>
            <ul className={`${drop.book ? "" : "hidden "}  w-52`}>
              <li className="py-0 pt-1 font-semibold ">
                <Link to="bookingonline">Online</Link>
              </li>
              <li className="py-0 pt-1 font-semibold">
                <Link to="bookingoffline">Offline</Link>
              </li>
            </ul>
          </div>
          <li className={`${path == "/artikel" ? "bg-prim text-white rounded-lg" : ""} font-bold `}>
            <Link to="/artikel">
              <i className="bx bx-sm bx-book-open"></i>Artikel
            </Link>
          </li>

          {data && data.role == "superadmin" ? (
            <Link to="admin" className="font-bold">
              <li className={`${path == "admin" ? "bg-prim text-white rounded-lg" : ""} font-bold `}>
                <span className="flex  items-center gap-x-3">
                  <i className="bx bx-sm bx-user-circle"></i>
                  Admin
                </span>
              </li>
            </Link>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
