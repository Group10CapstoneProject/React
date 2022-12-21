import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useJwt } from "react-jwt";
import SideBar from "../components/SideBar";
import Auth from "../utils/Auth";

function Layout() {
  const { decodedToken, isExpired } = useJwt(Auth.getAccessToken());
  const nilai = JSON.stringify(decodedToken);
  console.log(isExpired);
  Cookies.set("data", nilai);

  // const oke = localStorage.getItem("data");
  // console.log(object);

  return (
    <div>
      <SideBar />
    </div>
  );
}

export default Layout;