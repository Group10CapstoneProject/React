import React from "react";
import logogymImage from "../assets/images/logogym.png";
import playImage from "../assets/images/play.png";
import touchscreenImage from "../assets/images/touchscreen.png";
import liveImage from "../assets/images/live.png";
import membercardImage from "../assets/images/membercard.png";
import dumbbellImage from "../assets/images/dumbbell.png";
import applicationImage from "../assets/images/application.png";
import weightsImage from "../assets/images/weights.png";
import profil1Image from "../assets/images/profil1.png";
import profil2Image from "../assets/images/profil2.png";
import profil3Image from "../assets/images/profil3.png";
import profil4Image from "../assets/images/profil4.png";
import muaythaiImage from "../assets/images/muaythai.png";
import poundfitImage from "../assets/images/poundfit.png";
import yoga2Image from "../assets/images/yoga2.png";
import zumbaImage from "../assets/images/zumba.png";
import bronzeImage from "../assets/images/bronze.png";
import silverImage from "../assets/images/silver.png";
import goldImage from "../assets/images/gold.png";
import platinumImage from "../assets/images/platinum.png";
import profil5Image from "../assets/images/profil5.png";
import profil6Image from "../assets/images/profil6.png";
import profil7Image from "../assets/images/profil7.png";
import mobileImage from "../assets/images/mobile.png";
import logofooterImage from "../assets/images/logofooter.png";

function LandingPage() {
  return (
    <div>
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
                <a>Home</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">Product</a>
              </li>
              <li>
                <a>Pricing</a>
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
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a>Product</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimony</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-primary hover:bg-accent text-white">Gabung Sekarang</a>
        </div>
      </div>

      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-start text-neutral-content">
          <div className="max-w-md text-start">
            <h1 className="mb-5 text-5xl font-bold text-white pb-8">Hidup lebih sehat dengan ALTAGYM</h1>
            <p className="mb-5 text-2xl text-white pb-8">Aplikasi pemesanan kebugaran dan kesehatan dengan bimbingan para pelatih profesional dibidangnya.</p>
            <div className="w-40">
              <img src={playImage} alt="button-playstore" />
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="text-center pt-10">
        <h1 className="font-bold text-4xl text-primary">Kenapa Harus AltaGym ?</h1>
        <p className="pt-6 text-2xl">AltaGym bisa bikin kamu sehat hanya dengan satu Aplikasi lho!</p>
      </div>

      <div className="grid gap-x-8 gap-y-4 grid-cols-3 justify-center items-center pt-14 mx-20 px-10">
        <div className="flex ml-5">
          <div className="h-[230px] w-[290px] flex gap-x-2 justify-center rounded-lg items-center bg-base2 shadow-lg">
            <div className="ml-4">
              <div className="flex justify-start w-10">
                <img src={touchscreenImage} alt="touchscreen" />
              </div>
              <h1 className="text-[20px] font-semibold pt-2">Proses Booking Sangat Mudah</h1>
              <p className="text-[16px] pt-2">Cari, pilih, dan pesan kelas olahraga pilihan kamu sehat dengan mudah.</p>
            </div>
          </div>
        </div>
        <div className="flex ml-5">
          <div className="h-[230px] w-[290px] flex gap-x-2 justify-center rounded-lg items-center bg-base2 shadow-lg">
            <div className="ml-4">
              <div className="flex justify-start w-10">
                <img src={liveImage} alt="live" />
              </div>
              <h1 className="text-[20px] font-semibold pt-2">Online & Offline Kelas</h1>
              <p className="text-[16px] pt-2">Lakukan latihan Kamu dengan kelas streaming atau secara langsung.</p>
            </div>
          </div>
        </div>
        <div className="flex ml-5">
          <div className="h-[230px] w-[290px] flex gap-x-2 justify-center rounded-lg items-center bg-base2 shadow-lg">
            <div className="ml-4">
              <div className="flex justify-start w-10">
                <img src={membercardImage} alt="member-card" />
              </div>
              <h1 className="text-[20px] font-semibold pt-2">Membership</h1>
              <p className="text-[16px] pt-2">Berbagai opsi Membership yang sesuai dengan kantong Kamu!</p>
            </div>
          </div>
        </div>
        <div className="flex ml-5">
          <div className="h-[230px] w-[290px] flex gap-x-2 justify-center rounded-lg items-center bg-base2 shadow-lg">
            <div className="ml-4">
              <div className="flex justify-start w-10">
                <img src={dumbbellImage} alt="dumbbell" />
              </div>
              <h1 className="text-[20px] font-semibold pt-2">AltaGym Trainer</h1>
              <p className="text-[16px] pt-2">Capai tujuan sehat Kamu dengan pelatih terbaik pilihan Kamu!</p>
            </div>
          </div>
        </div>
        <div className="flex ml-5">
          <div className="h-[230px] w-[290px] flex gap-x-2 justify-center rounded-lg items-center bg-base2 shadow-lg">
            <div className="ml-4">
              <div className="flex justify-start w-10">
                <img src={applicationImage} alt="application" />
              </div>
              <h1 className="text-[20px] font-semibold pt-2">Banyak Pilihan!</h1>
              <p className="text-[16px] pt-2">Temukan banyak kelas olahraga dan pelatih di AltaGym.</p>
            </div>
          </div>
        </div>
        <div className="flex ml-5">
          <div className="h-[230px] w-[290px] flex gap-x-2 justify-center rounded-lg items-center bg-base2 shadow-lg">
            <div className="ml-4">
              <div className="flex justify-start w-10">
                <img src={weightsImage} alt="weights" />
              </div>
              <h1 className="text-[20px] font-semibold pt-2">Fasilitas Gym Terbaik</h1>
              <p className="text-[16px] pt-2">Berolahragalah di gym pribadi kami, yang dilengkapi dengan peralatan kebugaran berkualitas tinggi.</p>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="text-center pt-10">
        <h1 className="font-bold text-4xl text-primary">Trainer profesional yang ahli dibidangnya</h1>
        <p className="pt-6 text-2xl">Menyediakan pelatih pribadi bersertifikat individual untuk membantu Anda dalam latihan untuk mencapai tujuan gaya Kamu.</p>
      </div>
      <br />

      <div className="flex space-x-8 mx-8 pt-10 ">
        <div className="card w-96 bg-base2 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={profil1Image} alt="profil 1" className="rounded-xl" />
          </figure>
          <div className="card-body items-start text-start">
            <h2 className="card-title">Dika Pramudya</h2>
            <p>Weight Mangement, Muscle Building, Core, Mobility Agility, Postural Alignment, Strenght, Freestyle Movement, Fat Loss</p>
          </div>
        </div>
        <div className="card w-96 bg-base2 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={profil2Image} alt="profil 2" className="rounded-xl" />
          </figure>
          <div className="card-body items-start text-start">
            <h2 className="card-title">Ammy Novarianti</h2>
            <p>Weight Mangement, Muscle Building, Core, Mobility Agility, Postural Alignment, Strenght, Freestyle Movement, Fat Loss, Functional Training</p>
          </div>
        </div>
        <div className="card w-96 bg-base2 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={profil3Image} alt="profil 3" className="rounded-xl" />
          </figure>
          <div className="card-body items-start text-start">
            <h2 className="card-title">Mark William</h2>
            <p>Muscle Building, Core, Mobility Agility, Postural Alignment, Strenght, Freestyle Movement, Fat Loss, Boxing, Muay Thai</p>
          </div>
        </div>
        <div className="card w-96 bg-base2 shadow-xl">
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

      <div className="text-center pt-10">
        <h1 className="font-bold text-4xl text-primary">Pilih berbagai kelas dengan banyak instruktur hebat</h1>
        <p className="pt-6 text-lg">Beragam kelas olahraga kami hadirkan untuk memacu semangat dan motivasi Kam agar lebih aktif bergerak bersama-sama. Dipandu oleh para pelatih profesional.</p>
      </div>
      <br />

      <div className="flex space-x-8 px-10 mx-14 pt-10">
        <img src={muaythaiImage} alt="group muaythai" />
        <img src={poundfitImage} alt="group poundfit" />
        <img src={yoga2Image} alt="group yoga" />
        <img src={zumbaImage} alt="group zumba" />
      </div>
      <br />

      <div className="text-center pt-10">
        <h1 className="font-bold text-4xl text-primary">Penawaran Terbaik Kami</h1>
        <p className="pt-6 text-2xl">Ngegym gak pake mahal! dapatkan akses tak terbatas ke seluruh premium gym AltaGym dan kelas gratis setiap harinya.</p>
      </div>
      <br />

      <div className="flex -space-x-4 px-1 mx-1 pt-10">
        <img src={bronzeImage} alt="Bronze Membership" />
        <img src={silverImage} alt="Silver Membership" />
        <img src={goldImage} alt="Gold Membership" />
        <img src={platinumImage} alt="Platinum Membership" />
      </div>
      <br />

      <div className="text-start pt-10 ml-8">
        <h1 className="font-bold text-4xl text-primary">Apa Kata Mereka?</h1>
        <p className="pt-6 text-2xl">Yuk, lihat cerita dari para sobat AltaGym biar kamu semakin terinspirasi dalam menjalani gaya hidup sehat!</p>
      </div>
      <br />

      <div className="flex space-x-8 mx-14 px-14 pt-10 ">
        <div className="card w-96 bg-base2 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={profil5Image} alt="profil 5" className="rounded-xl" />
          </figure>
          <div className="card-body items-start text-start">
            <p>Tempat gym paling nyaman, terus semua kelas olahraga ada dari kelas online atau offline, alat gym juga lengkap. Paling penting tempatnya bersih. Gym premium harga affordable yang worth it cuma di AltaGym sih.</p>
            <h2 className="card pt-2 text-2xl">Sherly</h2>
          </div>
        </div>
        <div className="card w-96 bg-base2 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={profil6Image} alt="profil 6" className="rounded-xl" />
          </figure>
          <div className="card-body items-start text-start">
            <p>Nggak nyangka ada gym kualtitas premium gini, tapi affordable banget. Apalagi pas pandemi, setiap beberapa jam pasti di steriliasasi jadi merasa nyaman dan aman banget olahraga di sini.</p>
            <h2 className="card pt-2 text-2xl">Alfan</h2>
          </div>
        </div>
        <div className="card w-96 bg-base2 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={profil7Image} alt="profil 7" className="rounded-xl" />
          </figure>
          <div className="card-body items-start text-start">
            <p>
              Saya nyaman banget ngegym di AltaGym. Alatnya highclass seperti megagym tapi hargaya terjangkau, tempatnya juga bersih dan rapi. Variasi kelasnya juga banyak dan seru banget. Pelatihnya juga kece - kece bikin semangat
              ngegymnya.
            </p>
            <h2 className="card pt-2 text-2xl">Marisa</h2>
          </div>
        </div>
      </div>
      <br />

      <div className="text-start pt-10 ml-8">
        <h1 className="font-bold text-4xl">Mulai Hidup Sehatmu Dari Sekarang</h1>
        <p className="pt-6 text-lg">Unduh aplikasi AltaGym sekarang untuk book kelas olahraga dan pelatih dengan mudah</p>
        <br />
        <h3 className="font-bold text-2xl">Dapatkan Aplikasinya</h3>
        <div className="w-40 pt-4">
          <img src={playImage} alt="playstore" />
        </div>
        <div className="flex justify-end mr-14 pr-14">
          <img src={mobileImage} alt="mobile" />
        </div>
      </div>

      <footer className="footer p-10 bg-info text-white">
        <div>
          <img src={logofooterImage} alt="logo footer" />
          <p>
            altagym@gmail.com
            <br />
            (024) 20192933
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Dapat Aplikasinya</span>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
