import React from "react";
import { Link } from "react-router-dom";
import playstoreImage from "../../../assets/images/playstore.png";
import mobileImage from "../../../assets/images/mobile.png";

const Download = () => {
  return (
    <div className="bg-border2 h-[100%]">
      <div className="flex justify-start pt-[60px]">
        <h1 className="text-start text-5xl font-bold text-info pl-[200px]" data-aos="fade-down-right" data-aos-duration="1000" id="join">
          Mulai Hidup Sehatmu Dari
        </h1>
      </div>
      <div>
        <h1 className="text-start text-5xl font-bold text-info pl-[200px]" data-aos="fade-down-right" data-aos-duration="1000">
          Sekarang
        </h1>
      </div>
      <div className="flex justify-start pt-6">
        <p className="text-start text-2xl text-info pl-[200px] font-normal tracking-wider" data-aos="fade-up-right" data-aos-duration="1000">
          Unduh aplikasi AltaGym sekarang untuk book
        </p>
      </div>
      <div>
        <p className="text-start text-2xl text-info pl-[200px] font-normal tracking-wider" data-aos="fade-up-right" data-aos-duration="1000">
          kelas olahraga dan pelatih dengan mudah
        </p>
      </div>

      <div className="flex justify-start pt-[60px]">
        <h1 className="text-start text-2xl font-bold text-info pl-[200px]" data-aos="fade-right" data-aos-duration="1000">
          Dapatkan Aplikasinya
        </h1>
      </div>
      <div className="pt-6 pl-[200px]" data-aos="fade-right" data-aos-duration="1000">
        <Link className="bg-black text-white h-14 w-44 rounded-lg flex justify-center items-center">
          <img src={playstoreImage} className="h-8 mr-2" alt="playstore icon" />
          <div>
            <span className="text-xs pr-[35px]">GET IT ON</span>
            <p className="pb-2 text-lg">Google Play</p>
          </div>
        </Link>
      </div>

      <div className="flex justify-end pr-[200px]" data-aos="fade-down-left" data-aos-duration="1000">
        <img src={mobileImage} alt="mobile" />
      </div>
    </div>
  );
};

export default Download;
