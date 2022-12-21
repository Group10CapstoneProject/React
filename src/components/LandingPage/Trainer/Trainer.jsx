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
        <h1 className="text-center text-3xl font-bold text-prim">Trainer profesional yang ahli dibidangnya</h1>
      </div>
      <div className="flex justify-center pt-4">
        <p className="text-center text-lg">Menyediakan pelatih pribadi bersertifikat individual untuk membantu Anda dalam latihan untuk</p>
      </div>
      <div>
        <p className="text-center text-lg">mencapai tujuan gaya Kamu.</p>
      </div>

      <div className="w-full min-h-screen gap-8 flex-wrap flex justify-center items-center pb-[100px]">
        {/* Card */}
        <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          {/* Image */}
          <img className="h-70 object-cover rounded-xl" src={profil1Image} alt="" />
          <div className="p-2">
            {/* Heading */}
            <h2 className="font-bold text-lg mb-2 text-prim">Dika Pramudya</h2>
            {/* Description */}
            <p className="text-sm text-gray-600 tracking-wider">Weight Mangement, Muscle Building, Core, Mobility Agility, Postural Alignment, Strenght, Freestyle Movement, Fat Loss</p>
          </div>
        </div>
        {/* Card */}
        <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          {/* Image */}
          <img className="h-70 object-cover rounded-xl" src={profil2Image} alt="" />
          <div className="p-2">
            {/* Heading */}
            <h2 className="font-bold text-lg mb-2 text-prim">Ammy Novarianti</h2>
            {/* Description */}
            <p className="text-sm text-gray-600 tracking-wider">Weight Mangement, Muscle Building, Mobility Agility, Postural Alignment, Strenght, Freestyle Movement, Fat Loss, Functional Training</p>
          </div>
        </div>
        {/* Card */}
        <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          {/* Image */}
          <img className="h-70  object-cover rounded-xl" src={profil3Image} alt="" />
          <div className="p-2">
            {/* Heading */}
            <h2 className="font-bold text-lg mb-2 text-prim">Mark William</h2>
            {/* Description */}
            <p className="text-sm text-gray-600 tracking-wider">Muscle Building, Core, Mobility Agility, Postural Alignment, Strenght, Freestyle Movement, Fat Loss, Boxing, Muay Thai</p>
          </div>
        </div>
        {/* Card */}
        <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          {/* Image */}
          <img className="h-70 object-cover rounded-xl" src={profil4Image} alt="" />
          <div className="p-2">
            {/* Heading */}
            <h2 className="font-bold text-lg mb-2 text-prim">Redy Indra</h2>
            {/* Description */}
            <p className="text-sm text-gray-600 tracking-wider">Core, Mobility Agility, Postural Alignment, Strenght, Freestyle Movement, Fat Loss, Martial Arts, Nutrion Program, MMA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
