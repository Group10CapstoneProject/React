import React from "react";
import logogymImage from "../assets/images/logogym.png";
import FotoImage from "../assets/images/Foto.png";
import playImage from "../assets/images/play.png";

// icons
import touchscreenImage from "../assets/images/touchscreen.png";
import liveImage from "../assets/images/live.png";
import membercardImage from "../assets/images/membercard.png";
import dumbbellImage from "../assets/images/dumbbell.png";
import applicationImage from "../assets/images/application.png";
import weightsImage from "../assets/images/weights.png";

// profil trainer
import profil1Image from "../assets/images/profil1.png";
import profil2Image from "../assets/images/profil2.png";
import profil3Image from "../assets/images/profil3.png";
import profil4Image from "../assets/images/profil4.png";

// image kelas
import muaythaiImage from "../assets/images/muaythai.png";
import poundfitImage from "../assets/images/poundfit.png";
import yoga2Image from "../assets/images/yoga2.png";
import zumbaImage from "../assets/images/zumba.png";

// icons jenis kelas
import bronzeImage from "../assets/images/bronze.png";
import silverImage from "../assets/images/silver.png";
import goldImage from "../assets/images/gold.png";
import platinumImage from "../assets/images/platinum.png";

// profil testimony
import profil5Image from "../assets/images/profil5.png";
import profil6Image from "../assets/images/profil6.png";
import profil7Image from "../assets/images/profil7.png";

// footer
import mobileImage from "../assets/images/mobile.png";
import logofooterImage from "../assets/images/logofooter.png";

function LandingPage() {
  return (
    <div style={{ flex: 1 }} className="mx-auto">
      <div className="navbar bg-info text-white px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-info rounded-box w-52">
              <li>
                <a href="/">Home</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">Product</a>
              </li>
              <li>
                <a href="/jenis">Pricing</a>
              </li>
              <li>
                <a>Testimony</a>
              </li>
            </ul>
          </div>

          <div className="flex-none">
            <img src={logogymImage} alt="logo gym" />
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a href="/">Home</a>
            </li>
            <li tabIndex={0}>
              <a href="#product">Product</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#testimony">Testimony</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-primary hover:bg-accent text-white w-25" href="#join">
            Gabung Sekarang
          </a>
        </div>
      </div>

      <div style={{ flex: 1 }} className="hero">
        <img src={FotoImage} alt="background" style={{ width: "100%" }} />
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-start text-neutral-content">
          <div className="max-w-md text-start mr-[30px]">
            <h1 className="mb-5 text-5xl font-bold text-white pb-10">Hidup lebih sehat dengan ALTAGYM</h1>
            <p className="mb-5 text-2xl text-white pb-8">Aplikasi pemesanan kebugaran dan kesehatan dengan bimbingan para pelatih profesional dibidangnya.</p>
            {/* <div className="w-40">
              <img src={playImage} alt="button-playstore" />
            </div> */}
            <a
              href="#"
              class="w-full sm:w-auto bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-black dark:hover:bg-gray-800 dark:focus:ring-gray-800"
            >
              <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                ></path>
              </svg>
              <div class="text-left">
                <div class="mb-1 text-xs">GET IT ON</div>
                <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-10 pt-[100px]">
        <h1 className="font-bold text-4xl text-primary" id="product">
          Kenapa Harus AltaGym ?
        </h1>
        <p className="pt-6 text-2xl">AltaGym bisa bikin kamu sehat hanya dengan satu Aplikasi lho!</p>
      </div>
      <div className="px-14 mx-[10%]">
        <div style={{ flex: 1 }} className="grid gap-x-8 gap-y-4 grid-cols-3 justify-content-center items-center py-14  px-10 mx-8">
          <div className="flex ml-5">
            <div className="h-[230px] w-[290px] flex gap-x-2 justify-center rounded-lg items-center bg-base shadow-lg cursor-pointer hover:scale-125 ease-in-out duration-300">
              <div className="ml-4">
                <div className="flex justify-start w-10">
                  <img src={touchscreenImage} alt="touchscreen" />
                </div>
                <h1 className="text-[20px] font-semibold pt-2 text-info">Proses Booking Sangat Mudah</h1>
                <p className="text-[16px] pt-2">Cari, pilih, dan pesan kelas olahraga pilihan kamu sehat dengan mudah.</p>
              </div>
            </div>
          </div>
          <div className="flex ml-5">
            <div className="h-[230px] w-[290px] flex gap-x-2 justify-center rounded-lg items-center bg-base shadow-lg cursor-pointer hover:scale-125 ease-in-out duration-300">
              <div className="ml-4">
                <div className="flex justify-start w-10">
                  <img src={liveImage} alt="live" />
                </div>
                <h1 className="text-[20px] font-semibold pt-2 text-info">Online & Offline Kelas</h1>
                <p className="text-[16px] pt-2">Lakukan latihan Kamu dengan kelas streaming atau secara langsung.</p>
              </div>
            </div>
          </div>
          <div className="flex ml-5">
            <div className="h-[230px] w-[290px] flex gap-x-2 justify-center rounded-lg items-center bg-base shadow-lg cursor-pointer hover:scale-125 ease-in-out duration-300">
              <div className="ml-4">
                <div className="flex justify-start w-10">
                  <img src={membercardImage} alt="member-card" />
                </div>
                <h1 className="text-[20px] font-semibold pt-2 text-info">Membership</h1>
                <p className="text-[16px] pt-2">Berbagai opsi Membership yang sesuai dengan kantong Kamu!</p>
              </div>
            </div>
          </div>
          <div className="flex ml-5 py-8">
            <div className="h-[230px] w-[290px] flex gap-x-2 justify-center rounded-lg items-center bg-base shadow-lg cursor-pointer hover:scale-125 ease-in-out duration-300">
              <div className="ml-4">
                <div className="flex justify-start w-10">
                  <img src={dumbbellImage} alt="dumbbell" />
                </div>
                <h1 className="text-[20px] font-semibold pt-2 text-info">AltaGym Trainer</h1>
                <p className="text-[16px] pt-2">Capai tujuan sehat Kamu dengan pelatih terbaik pilihan Kamu!</p>
              </div>
            </div>
          </div>
          <div className="flex ml-5">
            <div className="h-[230px] w-[290px] flex gap-x-2 justify-center rounded-lg items-center bg-base shadow-lg cursor-pointer hover:scale-125 ease-in-out duration-300">
              <div className="ml-4">
                <div className="flex justify-start w-10">
                  <img src={applicationImage} alt="application" />
                </div>
                <h1 className="text-[20px] font-semibold pt-2 text-info">Banyak Pilihan!</h1>
                <p className="text-[16px] pt-2">Temukan banyak kelas olahraga dan pelatih di AltaGym.</p>
              </div>
            </div>
          </div>
          <div className="flex ml-5">
            <div className="h-[230px] w-[290px] flex gap-x-2 justify-center rounded-lg items-center bg-base shadow-lg cursor-pointer hover:scale-125 ease-in-out duration-300">
              <div className="ml-4">
                <div className="flex justify-start w-10">
                  <img src={weightsImage} alt="weights" />
                </div>
                <h1 className="text-[20px] font-semibold pt-2 text-info">Fasilitas Gym Terbaik</h1>
                <p className="text-[16px] pt-2">Berolahragalah di gym pribadi kami, yang dilengkapi dengan peralatan kebugaran berkualitas tinggi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="text-center pt-[150px]">
        <h1 className="font-bold text-4xl text-primary">Trainer profesional yang ahli dibidangnya</h1>
        <p className="pt-6 text-2xl">Menyediakan pelatih pribadi bersertifikat individual untuk membantu Anda dalam latihan untuk mencapai tujuan gaya Kamu.</p>
      </div>
      <br />
      <div className="grid gap-x-32 gap-y-4 grid-cols-4 py-8 mx-[15%] pr-[5%] pt-[100px]">
        <div className="card w-60 bg-base shadow-xl cursor-pointer hover:scale-125 ease-in-out duration-300">
          <figure className="px-10 pt-10">
            <img src={profil1Image} alt="profil 1" className="rounded-xl" />
          </figure>
          <div className="card-body items-start text-start">
            <h2 className="card-title">Dika Pramudya</h2>
            <p>Weight Mangement, Muscle Building, Core, Mobility Agility, Postural Alignment, Strenght, Freestyle Movement, Fat Loss</p>
          </div>
        </div>
        <div className="card w-60 bg-base shadow-xl cursor-pointer hover:scale-125 ease-in-out duration-300">
          <figure className="px-10 pt-10">
            <img src={profil2Image} alt="profil 2" className="rounded-xl" />
          </figure>
          <div className="card-body items-start text-start">
            <h2 className="card-title">Ammy Novarianti</h2>
            <p>Weight Mangement, Muscle Building, Core, Mobility Agility, Postural Alignment, Strenght, Freestyle Movement, Fat Loss, Functional Training</p>
          </div>
        </div>
        <div className="card w-60 bg-base shadow-xl cursor-pointer hover:scale-125 ease-in-out duration-300">
          <figure className="px-10 pt-10">
            <img src={profil3Image} alt="profil 3" className="rounded-xl" />
          </figure>
          <div className="card-body items-start text-start">
            <h2 className="card-title">Mark William</h2>
            <p>Muscle Building, Core, Mobility Agility, Postural Alignment, Strenght, Freestyle Movement, Fat Loss, Boxing, Muay Thai</p>
          </div>
        </div>
        <div className="card w-60 bg-base shadow-xl cursor-pointer hover:scale-125 ease-in-out duration-300">
          <figure className="px-10 pt-10">
            <img src={profil4Image} alt="profil 4" className="rounded-xl" />
          </figure>
          <div className="card-body items-start text-start">
            <h2 className="card-title">Redy Indra</h2>
            <p>Core, Mobility Agility, Postural Alignment, Strenght, Freestyle Movement, Fat Loss, Martial Arts, Nutrion Program, MMA</p>
          </div>
        </div>
      </div>
      <br />

      <div className="text-center pt-[250px]">
        <h1 className="font-bold text-4xl text-primary" id="join">
          Pilih berbagai kelas dengan banyak instruktur hebat
        </h1>
        <p className="pt-6 text-lg">Beragam kelas olahraga kami hadirkan untuk memacu semangat dan motivasi Kamu agar lebih aktif bergerak bersama-sama. Dipandu oleh para pelatih profesional.</p>
      </div>
      <br />

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
      <br />

      <div className="text-center pt-[250px]">
        <h1 className="font-bold text-4xl text-primary" id="pricing">
          Penawaran Terbaik Kami
        </h1>
        <p className="pt-6 text-2xl">Ngegym gak pake mahal! dapatkan akses tak terbatas ke seluruh premium gym AltaGym dan kelas gratis setiap harinya.</p>
      </div>
      <br />

      <div className="grid gap-x-8 gap-y-4 grid-cols-4 px-14 mx-10 pt-[100px]">
        <div className="w-[300px] border overflow-hidden shadow-xl rounded-xl h-[500px] bg-white hover:scale-110 ease-in-out duration-300">
          <div className="w-full pt-3 bg-inf4"></div>
          <div className="flex  justify-between flex-col h-full p-3 items-center ">
            <img src={bronzeImage} alt="bronze icon" />
            <h1 className=" py-1 text-black capitalize text-[20px] font-semibold">Bronze</h1>
            <h2 className="text-inf4 border w-full text-center  py-1 text-[20px] font-semibold">
              Rp 100.000 <small>/bulan</small>
            </h2>
            <div className="flex p-2 flex-col w-full gap-y-2  text-[12px]">
              <div className="flex items-center w-full gap-x-2">
                <i className="bx text-[20px] text-suc bx-check-circle"></i>
                <p className="text-[12px]">Dapatkan akses prioritas ketika melakukan booking</p>
              </div>
              <div className="flex items-center w-full gap-x-2">
                <i className="bx text-[20px] text-suc bx-check-circle"></i>
                <p className="text-[12px]">Akses gym tak terbatas di seluruh klub atlagym</p>
              </div>
              <div className="flex items-center w-full gap-x-2">
                <i className="bx text-[20px] text-dang4 bx-x-circle"></i>
                <p className="text-[12px]">Gratis kelas online setiap harinya </p>
              </div>
              <div className="flex items-center w-full gap-x-2">
                <i className="bx text-[20px] text-dang4 bx-x-circle"></i>
                <p className="text-[12px]">Gratis kelas offline selama berlangganan</p>
              </div>
              <div className="flex items-center w-full gap-x-2">
                <i className="bx text-[20px] text-dang4 bx-x-circle"></i>
                <p className="text-[12px]">Gratis 4 sesi personal training</p>
              </div>
              <div className="pt-6">
                <button className="btn btn-wide btn-outline bg-inf4 hover:bg-inf4 text-white">BELI SEKARANG</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] border overflow-hidden shadow-xl rounded-xl h-[500px] bg-white hover:scale-110 ease-in-out duration-300">
          <div className="w-full pt-3 bg-border"></div>
          <div className="flex  justify-between flex-col h-full p-3 items-center ">
            <img src={silverImage} alt="silver icon" />
            <h1 className=" py-1 text-black capitalize text-[20px] font-semibold">Silver</h1>
            <h2 className="text-border border w-full text-center  py-1 text-[20px] font-semibold">
              Rp 100.000 <small>/bulan</small>
            </h2>
            <div className="flex p-2 flex-col w-full gap-y-2  text-[12px]">
              <div className="flex items-center w-full gap-x-2">
                <i className="bx text-[20px] text-suc bx-check-circle"></i>
                <p className="text-[12px]">Dapatkan akses prioritas ketika melakukan booking</p>
              </div>
              <div className="flex items-center w-full gap-x-2">
                <i className="bx text-[20px] text-suc bx-check-circle"></i>
                <p className="text-[12px]">Akses gym tak terbatas di seluruh klub atlagym</p>
              </div>
              <div className="flex items-center w-full gap-x-2">
                <i className="bx text-[20px] text-suc bx-check-circle"></i>
                <p className="text-[12px]">Gratis kelas online setiap harinya </p>
              </div>
              <div className="flex items-center w-full gap-x-2">
                <i className="bx text-[20px] text-dang4 bx-x-circle"></i>
                <p className="text-[12px]">Gratis kelas offline selama berlangganan</p>
              </div>
              <div className="flex items-center w-full gap-x-2">
                <i className="bx text-[20px] text-dang4 bx-x-circle"></i>
                <p className="text-[12px]">Gratis 4 sesi personal training</p>
              </div>
              <div className="pt-6">
                <button className="btn btn-wide btn-outline bg-border hover:bg-border text-white">BELI SEKARANG</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] border overflow-hidden shadow-xl rounded-xl h-[500px] bg-white hover:scale-110 ease-in-out duration-300">
          <div className="w-full pt-3 bg-suc3">
            <div className="pb-2">
              <h1 className="text-center text-base-200">Best Value</h1>
            </div>
          </div>
          <div className="flex  justify-between flex-col h-full p-3 items-center ">
            <img src={goldImage} alt="gold icon" />
            <h1 className=" py-1 text-black capitalize text-[20px] font-semibold">Gold</h1>
            <h2 className="text-suc3 border w-full text-center  py-1 text-[20px] font-semibold">
              Rp 100.000 <small>/bulan</small>
            </h2>
            <div className="flex p-2 flex-col w-full gap-y-2  text-[12px]">
              <div className="flex items-center w-full gap-x-2">
                <i className="bx text-[20px] text-suc bx-check-circle"></i>
                <p className="text-[12px]">Dapatkan akses prioritas ketika melakukan booking</p>
              </div>
              <div className="flex items-center w-full gap-x-2">
                <i className="bx text-[20px] text-suc bx-check-circle"></i>
                <p className="text-[12px]">Akses gym tak terbatas di seluruh klub atlagym</p>
              </div>
              <div className="flex items-center w-full gap-x-2">
                <i className="bx text-[20px] text-suc bx-check-circle"></i>
                <p className="text-[12px]">Gratis kelas online setiap harinya </p>
              </div>
              <div className="flex items-center w-full gap-x-2">
                <i className="bx text-[20px] text-suc bx-check-circle"></i>
                <p className="text-[12px]">Gratis kelas offline selama berlangganan</p>
              </div>
              <div className="flex items-center w-full gap-x-2">
                <i className="bx text-[20px] text-dang4 bx-x-circle"></i>
                <p className="text-[12px]">Gratis 4 sesi personal training</p>
              </div>
              <div className="py-8">
                <button className="btn btn-wide btn-outline bg-suc3 hover:bg-suc3 text-white">BELI SEKARANG</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] border overflow-hidden shadow-xl rounded-xl h-[500px] bg-white hover:scale-110 ease-in-out duration-300">
          <div className="w-full pt-3 bg-dang3"></div>
          <div className="flex  justify-between flex-col h-full p-3 items-center ">
            <img src={platinumImage} alt="platinum icon" />
            <h1 className=" py-1 text-black capitalize text-[20px] font-semibold">Platinum</h1>
            <h2 className="text-dang3 border w-full text-center  py-1 text-[20px] font-semibold">
              Rp 100.000 <small>/bulan</small>
            </h2>
            <div className="flex p-2 flex-col w-full gap-y-2  text-[12px]">
              <div className="flex p-2 flex-col w-full gap-y-2  text-[12px]">
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-suc bx-check-circle"></i>
                  <p className="text-[12px]">Dapatkan akses prioritas ketika melakukan booking</p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-suc bx-check-circle"></i>
                  <p className="text-[12px]">Akses gym tak terbatas di seluruh klub atlagym</p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-suc bx-check-circle"></i>
                  <p className="text-[12px]">Gratis kelas online setiap harinya </p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-suc bx-check-circle"></i>
                  <p className="text-[12px]">Gratis kelas offline selama berlangganan</p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-suc bx-check-circle"></i>
                  <p className="text-[12px]">Gratis 4 sesi personal training</p>
                </div>
                <div className="pt-6">
                  <button className="btn btn-wide btn-outline bg-dang3 hover:bg-dang3 text-white">BELI SEKARANG</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="text-start pt-[250px] px-14 mx-14">
        <h1 className="font-bold text-4xl text-primary" id="testimony">
          Apa Kata Mereka?
        </h1>
        <p className="pt-6 text-2xl">Yuk, lihat cerita dari para sobat AltaGym biar kamu semakin terinspirasi dalam menjalani gaya hidup sehat!</p>
      </div>
      <br />

      <div className="grid gap-x-8 gap-y-4 grid-cols-3 mx-[15%] pt-[100px]">
        <div className="card w-80 bg-base shadow-xl cursor-pointer hover:scale-105 ease-in-out duration-300">
          <figure className="px-10 pt-10">
            <img src={profil5Image} alt="profil 5" className="rounded-xl" />
          </figure>
          <div className="card-body items-start text-start">
            <p className="text-info">
              Tempat gym paling nyaman, terus semua kelas olahraga ada dari kelas online atau offline, alat gym juga lengkap. Paling penting tempatnya bersih. Gym premium harga affordable yang worth it cuma di AltaGym sih.
            </p>
            <h2 className="card pt-2 text-2xl text-info font-semibold">Sherly</h2>
          </div>
        </div>
        <div className="card w-80 bg-base shadow-xl cursor-pointer hover:scale-105 ease-in-out duration-300">
          <figure className="px-10 pt-10">
            <img src={profil6Image} alt="profil 6" className="rounded-xl" />
          </figure>
          <div className="card-body items-start text-start">
            <p className="text-info">Nggak nyangka ada gym kualtitas premium gini, tapi affordable banget. Apalagi pas pandemi, setiap beberapa jam pasti di steriliasasi jadi merasa nyaman dan aman banget olahraga di sini.</p>
            <h2 className="card pt-2 text-2xl text-info font-semibold">Alfan</h2>
          </div>
        </div>
        <div className="card w-80 bg-base shadow-xl cursor-pointer hover:scale-105 ease-in-out duration-300">
          <figure className="px-10 pt-10">
            <img src={profil7Image} alt="profil 7" className="rounded-xl" />
          </figure>
          <div className="card-body items-start text-start">
            <p className="text-info">
              Saya nyaman banget ngegym di AltaGym. Alatnya highclass seperti megagym tapi hargaya terjangkau, tempatnya juga bersih dan rapi. Variasi kelasnya juga banyak dan seru banget. Pelatihnya juga kece - kece bikin semangat
              ngegymnya.
            </p>
            <h2 className="card pt-2 text-2xl text-info font-semibold">Marisa</h2>
          </div>
        </div>
      </div>

      <br />

      <div className="text-start pt-[300px] ml-[100px]">
        <h1 className="font-bold text-4xl text-info">Mulai Hidup Sehatmu Dari</h1>
        <h1 className="font-bold text-4xl text-info">Sekarang</h1>
        <p className="pt-6 text-lg text-info">Unduh aplikasi AltaGym sekarang untuk book</p>
        <p className="text-lg text-info">kelas olahraga dan pelatih dengan mudah</p>
        <br />
        <h3 className="font-bold text-2xl text-info">Dapatkan Aplikasinya</h3>
        <div className="w-40 pt-4">
          <img src={playImage} alt="playstore" />
        </div>
        <div className="flex justify-end mr-[300px] mb-50px]">
          <img src={mobileImage} alt="mobile" />
        </div>
      </div>

      <div>
        <footer className="footer p-10 bg-info text-base flex justify-evenly">
          <div className="">
            <img src={logofooterImage} alt="logo footer" />
            <p>
              <box-icon name="envelope" color="#ffffff"></box-icon>
              {"  "}
              altagym@gmail.com
              <br />
              <box-icon name="phone" color="#ffffff"></box-icon>
              {"  "}
              (024) 20192933
            </p>
          </div>
          <div>
            <span className="footer-title normal-case">Dapat Aplikasinya</span>
            {/* <img className="w-40" src={playImage} alt="playstore" /> */}
            <a
              href="#"
              class="w-full sm:w-auto bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-black dark:hover:bg-gray-800 dark:focus:ring-gray-800"
            >
              <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                ></path>
              </svg>
              <div class="text-left">
                <div class="mb-1 text-xs">GET IT ON</div>
                <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
          <div>
            <span className="footer-title text-2xl normal-case">Bantuan</span>
            <a className="link link-hover">FAQ</a>
            <a className="link link-hover">Syarat & Ketentuan</a>
            <a className="link link-hover">Kebijakan Privasi</a>
          </div>
          <div>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <p>© Copyright 2022 .AltaGym. All Right Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
