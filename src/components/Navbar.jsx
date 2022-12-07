import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/Auth";

function Navbar() {
  let navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    Auth.signOut(navigate);
  };
  const dataAdmin = JSON.parse(Cookies.get("data"));
  return (
    <nav className="w-full sticky h-[60px] z-50  bg-base/60 border px-4 py-2  flex items-center justify-end">
      <ul className="flex gap-x-4">
        <li className="indicator tab tab-lifted tab-active">Notifikasi</li>
        <span className="indicator-item indicator-center badge badge-secondary">8</span>
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
            <a href="/">
              <img src="https://placeimg.com/192/192/people" />
            </a>
          </div>
        </div>
        <div className="dropdown dropdown-bottom ">
          <button className="px-16" tabIndex={0}>
            {dataAdmin ? <b>{dataAdmin.role}</b> : "muhammad Agil"}
          </button>
          <ul tabIndex={0} className="dropdown-content menu p-2 w-full shadow bg-base-100  ">
            <li>
              <a href="*">Item 1</a>
              <a href="/landingpage">Homepage</a>
            </li>
            <li>
              <button onClick={handleLogout}>logout</button>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
