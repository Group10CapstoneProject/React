import React from "react";

function LandingPage() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="avatar">
          <div className="w-24 rounded">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl text-primary">Altagym</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a className="text-primary">Home</a>
            </li>
            <li>
              <a>Trainer</a>
            </li>
            <li>
              <a>Memberships</a>
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
          <div className="stat-title">Great</div>
          <div className="stat-title">Member</div>
          <div className="stat-title">Experience</div>
        </div> */}
      </div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
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
