import React from "react";
import muaythaiImage from "../../../assets/images/muaythai.png";
import poundfitImage from "../../../assets/images/poundfit.png";
import yoga2Image from "../../../assets/images/yoga2.png";
import zumbaImage from "../../../assets/images/zumba.png";

const Kelas = () => {
  return (
    <div>
      <div className="flex justify-center pt-[60px]">
        <h1 className="text-center text-3xl font-semibold text-prim1">Pilih berbagai kelas dengan banyak instruktur hebat</h1>
      </div>
      <div className="flex justify-center pt-4">
        <p className="text-center text-lg">Beragam kelas olahraga kami hadirkan untuk memacu semangat dan motivasi Kamu agar lebih aktif</p>
      </div>
      <div>
        <p className="text-center text-lg">bergerak bersama-sama. Dipandu oleh para pelatih profesional.</p>
      </div>

      <div className="grid gap-x-8 gap-y-4 grid-cols-4 px-10 mx-[2%] py-8 pt-[100px]">
        <div className="card">
          <figure className="px-10 pt-10 hover:scale-110 ease-in-out duration-300">
            <img src={muaythaiImage} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <div className="card-actions">
              <button className="btn btn-primary text-white rounded-full normal-case">Muay Thai</button>
            </div>
          </div>
        </div>
        <div className="card">
          <figure className="px-10 pt-10 hover:scale-110 ease-in-out duration-300">
            <img src={poundfitImage} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <div className="card-actions">
              <button className="btn btn-primary text-white rounded-full normal-case">Poundfit</button>
            </div>
          </div>
        </div>
        <div className="card">
          <figure className="px-10 pt-10 hover:scale-110 ease-in-out duration-300">
            <img src={yoga2Image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <div className="card-actions">
              <button className="btn btn-primary text-white rounded-full w-[100px] normal-case">Yoga</button>
            </div>
          </div>
        </div>
        <div className="card">
          <figure className="px-10 pt-10 hover:scale-110 ease-in-out duration-300">
            <img src={zumbaImage} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <div className="card-actions">
              <button className="btn btn-primary text-white rounded-full w-[100px] normal-case">Zumba</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kelas;
