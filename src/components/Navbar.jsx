import Cookies from "js-cookie";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Auth from "../utils/Auth";
import EllipseImage from "../assets/images/Ellipse.png";

function Navbar() {
  let navigate = useNavigate();
  let path = useLocation();
  const handleLogout = (e) => {
    e.preventDefault();
    Auth.signOut(navigate);
  };
  const dataAdmin = JSON.parse(Cookies.get("data"));
  return (
    <nav className="w-full sticky h-[70px] z-50  bg-base/60 border px-4 py-2  flex items-center justify-end">
      <div>
        <ul className="flex">
          <div className="indicator pr-6 pt-2">
            <i className="bx bxs-bell bx-sm" style={{ color: "#3d3d3d" }} />
          </div>
          <div className="avatar placeholders">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-[50px]">
              <a href="/landingpage">
                <img src={EllipseImage} />
              </a>
            </div>
          </div>
          <div className="dropdown dropdown-bottom ">
            <button className="px-16 pl-2 text-start" tabIndex={0}>
              {dataAdmin ? <b>{dataAdmin.role}</b> : "muhammad Agil"}
              <p>alta@gmail.com</p>
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 w-full shadow bg-base-100  "
            >
              <li>
                <button onClick={handleLogout}>logout</button>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
