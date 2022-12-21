import React from "react";
import touchscreenImage from "../../../assets/images/touchscreen.png";
import liveImage from "../../../assets/images/live.png";
import membercardImage from "../../../assets/images/membercard.png";
import dumbbellImage from "../../../assets/images/dumbbell.png";
import applicationImage from "../../../assets/images/application.png";
import weightsImage from "../../../assets/images/weights.png";

const About = () => {
  return (
    <div className="bg-base h-[110vh]">
      <div className="flex justify-center pt-[60px]">
        <h1 className="text-center text-3xl font-bold text-prim2" id="product">
          Kenapa Harus AltaGym?
        </h1>
      </div>
      <div className="flex justify-center pt-4">
        <p className="text-center text-lg">AltaGym bisa bikin kamu sehat hanya dengan satu Aplikasi lho!</p>
      </div>

      <div>
        <div className="bg-blue-50 p-12 min-h-screen min-w-screen flex justify-center items-center">
          <div className="bg-white p-12 rounded-lg">
            <div className="grid md:grid-cols-3">
              <div className="border-b md:border-r p-6">
                <div className="text-center">
                  <div className="text-2xl bg-purple-100 text-purple-900 w-20 h-20 flex justify-center items-center rounded-full mb-3 mx-auto">
                    <img src={touchscreenImage} alt="" />
                  </div>
                  <div className="text-xl font-bold mb-2 text-info">Proses Booking Sangat Mudah</div>
                  <p className="text-sm text-black tracking-wider">Cari, pilih, dan pesan kelas olahraga pilihan kamu sehat dengan mudah.</p>
                </div>
              </div>
              <div className="border-b md:border-r p-6">
                <div className="text-center">
                  <div className="text-2xl bg-orange-100 text-orange-900 w-20 h-20 flex justify-center items-center rounded-full mb-3 mx-auto">
                    <img src={liveImage} alt="" />
                  </div>
                  <div className="text-xl font-bold mb-2 text-info">Online & Offline Kelas</div>
                  <p className="text-sm text-black tracking-wider">Lakukan latihan Kamu dengan kelas streaming atau secara langsung.</p>
                </div>
              </div>
              <div className="border-b p-6">
                <div className="text-center">
                  <div className="text-2xl bg-blue-100 text-blue-900 w-20 h-20 flex justify-center items-center rounded-full mb-3 mx-auto">
                    <img src={membercardImage} alt="" />
                  </div>
                  <div className="text-xl font-bold mb-2 text-info">Membership</div>
                  <p className="text-sm text-black tracking-wider">Berbagai opsi Membership yang sesuai dengan kantong Kamu!</p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3">
              <div className="border-b md:border-0 md:border-r p-6">
                <div className="text-center">
                  <div className="text-2xl bg-yellow-100 text-yellow-900 w-20 h-20 flex justify-center items-center rounded-full mb-3 mx-auto">
                    <img src={dumbbellImage} alt="" />
                  </div>
                  <div className="text-xl font-bold mb-2 text-info">AltaGym Trainer</div>
                  <p className="text-sm text-black tracking-wider">Capai tujuan sehat Kamu dengan pelatih terbaik pilihan Kamu</p>
                </div>
              </div>
              <div className="border-b md:border-0 md:border-r p-6">
                <div className="text-center">
                  <div className="text-2xl bg-green-100 text-green-900 w-20 h-20 flex justify-center items-center rounded-full mb-3 mx-auto">
                    <img src={applicationImage} alt="" />
                  </div>
                  <div className="text-xl font-bold mb-2 text-info">Banyak Pilihan!</div>
                  <p className="text-sm text-black tracking-wider">Temukan banyak kelas olahraga dan pelatih di AltaGym.</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-center">
                  <div className="text-2xl bg-indigo-100 text-indigo-900 w-20 h-20 flex justify-center items-center rounded-full mb-3 mx-auto">
                    <img src={weightsImage} alt="" />
                  </div>
                  <div className="text-xl font-bold mb-2 text-info">Fasilitas Gym Terbaik</div>
                  <p className="text-sm text-black tracking-wider">Berolahragalah di gym pribadi kami, yang dilengkapi dengan peralatan kebugaran berkualitas tinggi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
