import React from "react";
import muaythaiImage from "../../../assets/images/muaythai.png";
import poundfitImage from "../../../assets/images/poundfit.png";
import yoga2Image from "../../../assets/images/yoga2.png";
import zumbaImage from "../../../assets/images/zumba.png";

const Kelas = () => {
  return (
    <div>
      <div className="flex justify-center pt-[60px]">
        <h1 className="text-center text-3xl font-bold text-prim">Pilih berbagai kelas dengan banyak instruktur hebat</h1>
      </div>
      <div className="flex justify-center pt-4">
        <p className="text-center text-lg">Beragam kelas olahraga kami hadirkan untuk memacu semangat dan motivasi Kamu agar lebih aktif</p>
      </div>
      <div>
        <p className="text-center text-lg">bergerak bersama-sama. Dipandu oleh para pelatih profesional.</p>
      </div>

      <div className="flex min-h-screen items-center justify-center bg-neutral-800">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={muaythaiImage} alt="Kelas Muay Thai" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-roboto text-3xl font-bold text-white pb-16">Muay Thai</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Seni bela diri keras dari Kerajaan Thailand.</p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-white/60 hover:bg-base hover:text-black">Lihat Lebih Banyak</button>
              </div>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={poundfitImage} alt="Kelas Poundfit" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-roboto text-3xl font-bold text-white pb-2">Poundfit</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Olahraga yang menggabungkan kardio, pengkondisian dan kekuatan.</p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-white/60 hover:bg-base hover:text-black">Lihat Lebih Banyak</button>
              </div>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={yoga2Image} alt="Kelas Yoga" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-roboto text-3xl font-bold text-white pb-8">Yoga</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Olahraga yang mengombinasikan antara pikiran dan tubuh.</p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-white/60 hover:bg-base hover:text-black">Lihat Lebih Banyak</button>
              </div>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={zumbaImage} alt="Kelas Zumba" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-roboto text-3xl font-bold text-white pb-2">Zumba</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> Latihan fisik yang memadukan kombinasi tari salsa dan gerakan aerobik yang menyenangkan.</p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-white/60 hover:bg-base hover:text-black">Lihat Lebih Banyak</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kelas;
