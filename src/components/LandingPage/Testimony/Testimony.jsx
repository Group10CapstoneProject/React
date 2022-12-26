import React from "react";
import profil5Image from "../../../assets/images/profil5.png";
import profil6Image from "../../../assets/images/profil6.png";
import profil7Image from "../../../assets/images/profil7.png";

const Testimony = () => {
  return (
    <div className="bg-border3 h-[110vh]">
      <div className="flex justify-start pt-[60px] pl-[125px]">
        <h1 className="text-center text-3xl font-bold text-prim" id="testimony">
          Apa Kata Mereka?
        </h1>
      </div>
      <div className="flex justify-start pt-4 pl-[125px]">
        <p className="text-center text-lg tracking-wider">Yuk, lihat cerita dari para sobat AltaGym biar kamu semakin terinspirasi dalam menjalani gaya hidup sehat!</p>
      </div>

      <section className="md:h-full flex items-center text-gray-600 pb-32" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
        <div className="container px-32 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-xl shadow-xl overflow-hidden bg-base">
                <img className="lg:h-72 md:h-48 w-full object-cover object-center hover:scale-110 ease-in-out duration-300" src={profil5Image} alt="testimony 1" />
                <div className="p-6 hover:bg-info hover:text-white transition duration-300 ease-in">
                  <h2 className="text-base font-medium text-indigo-300 mb-1">October 29, 2021</h2>
                  <h1 className="text-2xl font-semibold mb-3">Sherly</h1>
                  <p className="leading-relaxed mb-3">
                    Tempat gym paling nyaman, terus semua kelas olahraga ada dari kelas online atau offline, alat gym juga lengkap. Paling penting tempatnya bersih. Gym premium harga affordable yang worth it cuma di AltaGym sih.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-xl shadow-xl overflow-hidden bg-base">
                <img className="lg:h-72 md:h-48 w-full object-cover object-center hover:scale-110 ease-in-out duration-300" src={profil6Image} alt="testimony 2" />
                <div className="p-6 hover:bg-info hover:text-white transition duration-300 ease-in">
                  <h2 className="text-base font-medium text-indigo-300 mb-1">October 29, 2021</h2>
                  <h1 className="text-2xl font-semibold mb-3">Alfan</h1>
                  <p className="leading-relaxed mb-3">
                    Nggak nyangka ada gym kualitas premium gini, tapi affordable banget. Apalagi pas pandemi, setiap beberapa jam pasti di steriliasasi jadi merasa nyaman dan aman banget olahraga di sini.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-xl shadow-xl overflow-hidden bg-base">
                <img className="lg:h-72 md:h-48 w-full object-cover object-center hover:scale-110 ease-in-out duration-300" src={profil7Image} alt="testimony 3" />
                <div className="p-6 hover:bg-info hover:text-white transition duration-300 ease-in">
                  <h2 className="text-base font-medium text-indigo-300 mb-1">October 29, 2021</h2>
                  <h1 className="text-2xl font-semibold mb-3">Marisa</h1>
                  <p className="leading-relaxed mb-3">
                    Saya nyaman banget ngegym di AltaGym. Alatnya highclass seperti megagym tapi hargaya terjangkau, tempatnya juga bersih dan rapi. Variasi kelasnya juga banyak dan seru banget. Pelatihnya keren dan asik-asik.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimony;
