import React from "react";
import { Link } from "react-router-dom";
import logofooterImage from "../../../assets/images/logofooter.png";

const Footer = () => {
  return (
    <div className="bg-info h-[40vh]">
      <div className="h-[50px] text-white">
        <div className="pl-[200px]">
          <div className="flex justify-start pt-[50px]">
            <img src={logofooterImage} alt="logo-footer" />
          </div>
          <div className="pt-6">
            <i className="bx bx-envelope mr-2" style={{ color: "#ffffff" }} />
            altagym@gmail.com
          </div>
          <div className="pt-2">
            <i className="bx bx-phone mr-2" style={{ color: "#ffffff" }} />
            (024) 20192933
          </div>
        </div>
        <hr className="mt-10" />
        <div className="flex justify-evenly">
          <div className="mt-6">
            <i className="bx bxl-facebook-square bx-sm" style={{ color: "#ffffff" }} />
            {"  "}
            <i className="bx bxl-instagram-alt bx-sm" style={{ color: "#ffffff" }} />
            {"  "}
            <i className="bx bxl-twitter bx-sm" style={{ color: "#ffffff" }} />
            {"  "}
            <i className="bx bxl-youtube bx-sm" style={{ color: "#ffffff" }} />
          </div>
          <p className="mt-6 text-base-300">&copy; Copyright 2022 .AltaGym. All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
