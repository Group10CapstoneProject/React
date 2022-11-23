import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

function Layout() {
  return (
    <div>
      <SideBar />
      {/* <Outlet /> */}
    </div>
  );
}

export default Layout;
