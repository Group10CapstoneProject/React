import React from "react";
import altaImage from "../assets/images/alta.png";
import bg1Image from "../assets/images/bg1.png";

function LandingPage() {
  return (
    <div>
      <div className="navbar bg-info">
        <div className="avatar">
          <div className="w-24 rounded">
            <img src={altaImage} />
          </div>
        </div>
        <div className="navbar-start">{/* <a className="btn btn-ghost normal-case text-xl text-primary">Altagym</a> */}</div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a className="text-accent">Home</a>
            </li>
            <li>
              <a className="text-white">Trainer</a>
            </li>
            <li>
              <a className="text-white">Memberships</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-primary text-white">Join Now</a>
        </div>
      </div>
      <div className="stats shadow bg-neutral text-white">
        {/* <div className="stat">
          <div className="stat-value">100+</div>
          <div className="stat-title text-white">Great</div>
          <div className="stat-title text-white">Member</div>
          <div className="stat-title text-white">Experience</div>
        </div> */}
      </div>
      <div className="hero min-h-screen">
        <img src={bg1Image} />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-3 text-3xl font-bold text-white">Mulai Hidup Sehat Dimanapun dan Kapanpun</h1>
            <p className="mb-5 text-white">Dengan Altagym kamu dapatkan melakukan gym dimanapun dengan bimbingan para trainer pilihan yang profesional dibidangnya.</p>
            <button className="btn btn-primary text-white">Gabung Sekarang</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
