import React from "react";
import { Link } from "react-router-dom";
import logofooterImage from "../../../assets/images/logofooter.png";
import playstoreImage from "../../../assets/images/playstore.png";

const Footer = () => {
  return (
    <div className="bg-info h-[50vh] overflow-hidden">
      <div className="h-[50px] text-white md:flex md:justify-between">
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
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="pt-[55px] text-2xl font-bold text-gray-900 dark:text-white normal-case pr-[150px]">Bantuan</h2>
            <ul className="text-gray-50 dark:text-gray-50">
              <li className="mb-4 pt-6">
                <a href="https://daisyui.com/" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li className="mb-4">
                <a href="https://daisyui.com/" className="hover:underline">
                  Syarat Ketentuan
                </a>
              </li>
              <li>
                <a href="https://daisyui.com/" className="hover:underline">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="pt-[90px] text-lg font-semibold text-gray-900 normal-case dark:text-white pl-[100px]">Dapatkan Aplikasinya</h2>
            <div className="pt-4 pl-[100px]">
              <Link className="bg-black text-white h-14 w-44 rounded-lg flex justify-center items-center">
                <img src={playstoreImage} className="h-8 mr-2" alt="playstore icon" />
                <div>
                  <span className="text-xs pr-[35px]">GET IT ON</span>
                  <p className="pb-2 text-lg">Google Play</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="pt-8"></div>
        </div>
      </div>
      <hr className="mt-[250px]" />
      <div className="flex justify-evenly">
        <div className="pt-8">
          <a href="https://www.facebook.com/alterra.academy/" className="pr-4">
            <i className="bx bxl-facebook-square bx-sm" style={{ color: "#ffffff" }} />
          </a>
          {"  "}
          <a href="https://www.instagram.com/alterra.academy/" className="pr-4">
            <i className="bx bxl-instagram-alt bx-sm" style={{ color: "#ffffff" }} />
          </a>
          {"  "}
          <a href="https://alta.id/" className="pr-4">
            <i className="bx bxl-twitter bx-sm" style={{ color: "#ffffff" }} />
          </a>
          {"  "}
          <a href="https://www.youtube.com/@AlterraAcademy" className="pr-4">
            <i className="bx bxl-youtube bx-sm" style={{ color: "#ffffff" }} />
          </a>
        </div>
        <p className="pt-8 text-base-300">&copy; Copyright 2022 .AltaGym. All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
