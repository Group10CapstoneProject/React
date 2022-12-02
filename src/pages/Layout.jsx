import axios from "axios";
import React from "react";
import { useJwt } from "react-jwt";
import SideBar from "../components/SideBar";
import Auth from "../utils/Auth";

function Layout() {
  const { decodedToken, isExpired } = useJwt(Auth.getAccessToken());
  const nilai = JSON.stringify(decodedToken);
  localStorage.setItem("data", nilai);
  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${Auth.getAccessToken()}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // const oke = localStorage.getItem("data");
  // console.log(object);

  return (
    <div>
      <SideBar />
    </div>
  );
}

export default Layout;
