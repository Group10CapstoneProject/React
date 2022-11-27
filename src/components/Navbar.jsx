import React from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/Auth";

function Navbar() {
  let navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    Auth.signOut(navigate);
  };
  return (
    <nav className="w-full sticky h-[60px]  bg-base/60 border px-4 py-2  flex items-center justify-end">
      <ul className="flex gap-x-4">
        <li>Notifikasi</li>
        <li className="">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
              <span className="text-xs">AA</span>
            </div>
          </div>
        </li>
        <div className="dropdown dropdown-bottom z-50">
          <button tabIndex={0}>Muhammad Agil</button>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 w-full shadow bg-base-100  "
          >
            <li>
              <a>Item 1</a>
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
