import React from "react";
import { Link } from "react-router-dom";
import playstoreImage from "../../../assets/images/playstore.png";
import FotoImage from "../../../assets/images/Foto.png";

const Hero = () => {
  return (
    <div className="h-[100%] overflow-hidden">
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${FotoImage})` }}>
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold text-white pr-[750px]" data-aos="fade-up-right" data-aos-duration="2000">
              Hidup lebih sehat
            </h1>
            <h1 className="mb-5 text-5xl font-bold text-white pr-[750px]" data-aos="fade-up-right" data-aos-duration="2000">
              dengan ALTAGYM
            </h1>
            <div className="text-start text-2xl pt-4 tracking-wider" data-aos="fade-up-right" data-aos-duration="2000">
              <p className="pr-[750px] text-white">Aplikasi pemesanan kebugaran</p>
              <p className="pr-[750px] text-white">dan kesehatan dengan bimbingan</p>
              <p className="pr-[750px] text-white">para pelatih profesional</p>
              <p className="pr-[750px] text-white">dibidangnya.</p>
            </div>
            <div className="pt-8" data-aos="fade-up-right" data-aos-duration="2000">
              <Link className="bg-black text-white h-14 w-44 rounded-lg flex justify-center items-center">
                <img src={playstoreImage} className="h-8 mr-2" alt="playstore icon" />
                <div>
                  <span className="text-xs pr-[35px]">GET IT ON</span>
                  <p className="pb-2 text-lg">Google Play</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
