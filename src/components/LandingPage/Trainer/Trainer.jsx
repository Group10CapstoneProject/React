import React from "react";
import rectangleImage from "../../../assets/images/rectangle.png";
import profil1Image from "../../../assets/images/profil1.png";
import profil2Image from "../../../assets/images/profil2.png";
import profil3Image from "../../../assets/images/profil3.png";
import profil4Image from "../../../assets/images/profil4.png";

const Trainer = () => {
  return (
    <div className="bg-border2 h-[110vh]">
      <div className="flex justify-center pt-[60px]">
        <h1 className="text-center text-3xl font-semibold text-prim1">Trainer profesional yang ahli dibidangnya</h1>
      </div>
      <div className="flex justify-center pt-4">
        <p className="text-center text-lg">Menyediakan pelatih pribadi bersertifikat individual untuk membantu Anda dalam latihan untuk</p>
      </div>
      <div>
        <p className="text-center text-lg">mencapai tujuan gaya Kamu.</p>
      </div>

      <div className="pt-[90px]">
        {/* <img src={rectangleImage} alt="" /> */}
        <div className="grid gap-x-32 gap-y-4 grid-cols-4 py-8 mx-[15%] pr-[5%] pt-[60px]">
          <div className="card w-60 bg-base shadow-xl cursor-pointer hover:scale-125 ease-in-out duration-300">
            <figure className="px-10 pt-10">
              <img src={profil1Image} alt="profil 1" className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-start">
              <h2 className="card-title text-info font-bold">Dika Pramudya</h2>
              <p>Weight Mangement, Muscle Building, Core, Mobility Agility, Postural Alignment, Strenght, Freestyle Movement, Fat Loss</p>
            </div>
          </div>
          <div className="card w-60 bg-base shadow-xl cursor-pointer hover:scale-125 ease-in-out duration-300">
            <figure className="px-10 pt-10">
              <img src={profil2Image} alt="profil 2" className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-start">
              <h2 className="card-title text-info font-bold">Ammy Novarianti</h2>
              <p>Weight Mangement, Muscle Building, Core, Mobility Agility, Postural Alignment, Strenght, Freestyle Movement, Fat Loss, Functional Training</p>
            </div>
          </div>
          <div className="card w-60 bg-base shadow-xl cursor-pointer hover:scale-125 ease-in-out duration-300">
            <figure className="px-10 pt-10">
              <img src={profil3Image} alt="profil 3" className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-start">
              <h2 className="card-title text-info font-bold">Mark William</h2>
              <p>Muscle Building, Core, Mobility Agility, Postural Alignment, Strenght, Freestyle Movement, Fat Loss, Boxing, Muay Thai</p>
            </div>
          </div>
          <div className="card w-60 bg-base shadow-xl cursor-pointer hover:scale-125 ease-in-out duration-300">
            <figure className="px-10 pt-10">
              <img src={profil4Image} alt="profil 4" className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-start">
              <h2 className="card-title text-info font-bold">Redy Indra</h2>
              <p>Core, Mobility Agility, Postural Alignment, Strenght, Freestyle Movement, Fat Loss, Martial Arts, Nutrion Program, MMA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
