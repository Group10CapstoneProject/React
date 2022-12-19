import React from "react";
import touchscreenImage from "../../../assets/images/touchscreen.png";
import liveImage from "../../../assets/images/live.png";
import membercardImage from "../../../assets/images/membercard.png";
import dumbbellImage from "../../../assets/images/dumbbell.png";
import applicationImage from "../../../assets/images/application.png";
import weightsImage from "../../../assets/images/weights.png";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center pt-[60px]">
        <h1 className="text-center text-3xl font-semibold text-prim1">Kenapa Harus AltaGym?</h1>
      </div>
      <div className="flex justify-center pt-4">
        <p className="text-center text-lg">AltaGym bisa bikin kamu sehat hanya dengan satu Aplikasi lho!</p>
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
    </div>
  );
};

export default Product;
