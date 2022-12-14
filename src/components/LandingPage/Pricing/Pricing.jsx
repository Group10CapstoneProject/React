import React from "react";
import bronzeImage from "../../../assets/images/bronze.png";
import silverImage from "../../../assets/images/silver.png";
import goldImage from "../../../assets/images/gold.png";
import platinumImage from "../../../assets/images/platinum.png";

const Pricing = () => {
  return (
    <div className="bg-border2 h-[100%] overflow-hidden">
      <div className="flex justify-center pt-[60px]">
        <h1 className="text-center text-3xl font-bold text-prim2" id="pricing">
          Penawaran <span className="text-info">Terbaik Kami</span>
        </h1>
      </div>
      <div className="flex justify-center pt-4">
        <p className="text-center text-lg">Ngegym gak pake mahal! dapatkan akses tak terbatas ke seluruh premium gym AltaGym dan kelas</p>
      </div>
      <div>
        <p className="text-center text-lg">gratis setiap harinya.</p>
      </div>

      <div className="flex min-h-screen items-center justify-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <div className="grid gap-x-8 gap-y-4 grid-cols-4 px-14 mx-10 pb-[80px]">
          <div className="w-[300px] border overflow-hidden shadow-xl rounded-xl h-[500px] bg-white">
            <div className="w-full pt-3 bg-inf4"></div>
            <div className="flex  justify-between flex-col h-full p-3 items-center ">
              <img src={bronzeImage} alt="bronze icon" />
              <h1 className=" py-1 text-black capitalize text-[20px] font-semibold">Bronze</h1>
              <h2 className="text-inf4 border w-full text-center  py-1 text-[20px] font-semibold">
                Rp 100.000 <small>/bulan</small>
              </h2>
              <div className="flex p-2 flex-col w-full gap-y-2  text-[12px]">
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-suc bx-check-circle"></i>
                  <p className="text-[12px]">Dapatkan akses prioritas ketika melakukan booking</p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-suc bx-check-circle"></i>
                  <p className="text-[12px]">Akses gym tak terbatas di seluruh klub atlagym</p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-dang4 bx-x-circle"></i>
                  <p className="text-[12px]">Gratis kelas online setiap harinya </p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-dang4 bx-x-circle"></i>
                  <p className="text-[12px]">Gratis kelas offline selama berlangganan</p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-dang4 bx-x-circle"></i>
                  <p className="text-[12px]">Gratis 4 sesi personal training</p>
                </div>
                <div className="pt-6">
                  <button className="btn btn-wide btn-outline bg-inf4 hover:bg-inf4 text-white">BELI SEKARANG</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[300px] border overflow-hidden shadow-xl rounded-xl h-[500px] bg-white">
            <div className="w-full pt-3 bg-border"></div>
            <div className="flex  justify-between flex-col h-full p-3 items-center ">
              <img src={silverImage} alt="silver icon" />
              <h1 className=" py-1 text-black capitalize text-[20px] font-semibold">Silver</h1>
              <h2 className="text-border border w-full text-center  py-1 text-[20px] font-semibold">
                Rp 200.000 <small>/bulan</small>
              </h2>
              <div className="flex p-2 flex-col w-full gap-y-2  text-[12px]">
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-suc bx-check-circle"></i>
                  <p className="text-[12px]">Dapatkan akses prioritas ketika melakukan booking</p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-suc bx-check-circle"></i>
                  <p className="text-[12px]">Akses gym tak terbatas di seluruh klub atlagym</p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-suc bx-check-circle"></i>
                  <p className="text-[12px]">Gratis kelas online setiap harinya </p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-dang4 bx-x-circle"></i>
                  <p className="text-[12px]">Gratis kelas offline selama berlangganan</p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-dang4 bx-x-circle"></i>
                  <p className="text-[12px]">Gratis 4 sesi personal training</p>
                </div>
                <div className="pt-6">
                  <button className="btn btn-wide btn-outline bg-border hover:bg-border text-white">BELI SEKARANG</button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[300px] border overflow-hidden shadow-xl rounded-xl h-[500px] bg-white">
            <div className="w-full pt-3 bg-suc3"></div>
            <div className="flex  justify-between flex-col h-full p-3 items-center ">
              <img src={goldImage} alt="silver icon" />
              <h1 className=" py-1 text-black capitalize text-[20px] font-semibold">Gold</h1>
              <h2 className="text-suc3 border w-full text-center  py-1 text-[20px] font-semibold">
                Rp 300.000 <small>/bulan</small>
              </h2>
              <div className="flex p-2 flex-col w-full gap-y-2  text-[12px]">
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-suc bx-check-circle"></i>
                  <p className="text-[12px]">Dapatkan akses prioritas ketika melakukan booking</p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-suc bx-check-circle"></i>
                  <p className="text-[12px]">Akses gym tak terbatas di seluruh klub atlagym</p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-suc bx-check-circle"></i>
                  <p className="text-[12px]">Gratis kelas online setiap harinya </p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-suc bx-check-circle"></i>
                  <p className="text-[12px]">Gratis kelas offline selama berlangganan</p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-dang4 bx-x-circle"></i>
                  <p className="text-[12px]">Gratis 4 sesi personal training</p>
                </div>
                <div className="pt-6">
                  <button className="btn btn-wide btn-outline bg-suc3 hover:bg-suc3 text-white">BELI SEKARANG</button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[300px] border overflow-hidden shadow-xl rounded-xl h-[500px] bg-white">
            <div className="w-full pt-3 bg-dang4"></div>
            <div className="flex  justify-between flex-col h-full p-3 items-center ">
              <img src={platinumImage} alt="silver icon" />
              <h1 className=" py-1 text-black capitalize text-[20px] font-semibold">Platinum</h1>
              <h2 className="text-dang4 border w-full text-center  py-1 text-[20px] font-semibold">
                Rp 400.000 <small>/bulan</small>
              </h2>
              <div className="flex p-2 flex-col w-full gap-y-2  text-[12px]">
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-suc bx-check-circle"></i>
                  <p className="text-[12px]">Dapatkan akses prioritas ketika melakukan booking</p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-suc bx-check-circle"></i>
                  <p className="text-[12px]">Akses gym tak terbatas di seluruh klub atlagym</p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-suc bx-check-circle"></i>
                  <p className="text-[12px]">Gratis kelas online setiap harinya </p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-suc bx-check-circle"></i>
                  <p className="text-[12px]">Gratis kelas offline selama berlangganan</p>
                </div>
                <div className="flex items-center w-full gap-x-2">
                  <i className="bx text-[20px] text-suc bx-check-circle"></i>
                  <p className="text-[12px]">Gratis 4 sesi personal training</p>
                </div>
                <div className="pt-6">
                  <button className="btn btn-wide btn-outline bg-dang4 hover:bg-dang4 text-white">BELI SEKARANG</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
