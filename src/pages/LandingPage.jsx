import React from "react";
import altaImage from "../assets/images/alta.png";
import bg1Image from "../assets/images/bg1.png";

function LandingPage() {
  return (
    <div>
      <div className="navbar bg-info">
        <div className="avatar w-auto">
          <div className="w-24 rounded">
            <img src={altaImage} />
          </div>
        </div>
        <div className="navbar-start">{/* <a className="btn btn-ghost normal-case text-xl text-primary">Altagym</a> */}</div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a className="text-accent w-65 h-28 py-10" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="text-white w-65 h-28 py-10" href="/trainer">
                Trainer
              </a>
            </li>
            <li>
              <a className="text-white w-65 h-28 py-10" href="/jenis">
                Memberships
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-primary text-white" href="*">
            Join Now
          </a>
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
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center">
          <div className="max-w-md w-565">
            <h1 className="mb-3 text-3xl font-bold text-white h-112">Mulai Hidup Sehat Dimanapun dan Kapanpun</h1>
            <p className="mb-5 text-white h-140">Dengan Altagym kamu dapatkan melakukan gym dimanapun dengan bimbingan para trainer pilihan yang profesional dibidangnya.</p>
            <button className="btn btn-primary text-white">
              <a href="*">Gabung Sekarang</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
