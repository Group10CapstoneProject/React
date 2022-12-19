import React from "react";
import profil5Image from "../../../assets/images/profil5.png";
import profil6Image from "../../../assets/images/profil6.png";
import profil7Image from "../../../assets/images/profil7.png";

const Testimony = () => {
  return (
    <div className="bg-border3 h-[110vh]">
      <div className="flex justify-start pt-[60px] pl-[100px]">
        <h1 className="text-center text-3xl font-semibold text-prim1">Apa Kata Mereka?</h1>
      </div>
      <div className="flex justify-start pt-4 pl-[100px]">
        <p className="text-center text-lg">Yuk, lihat cerita dari para sobat AltaGym biar kamu semakin terinspirasi dalam menjalani gaya hidup sehat!</p>
      </div>
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
    </div>
  );
};

export default Testimony;
