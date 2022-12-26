import Cookies from "js-cookie";
import React from "react";
import Navbar from "../components/Navbar";

function Dashboard() {
  const dataAdmin = JSON.parse(Cookies.get("data"));
  console.log(dataAdmin);
  return (
    <div>
      <h1 className="text-3xl mb-5 font-bold text-primary">Selamat Datang Kembali {dataAdmin && dataAdmin.role}</h1>
      <div className="grid grid-cols-4 mb-5">
        <div className="h-[136px] w-[240px] flex gap-x-2 justify-center rounded-lg items-center bg-warn">
          <div className="flex justify-center items-center">
            <box-icon size="lg" name="group"></box-icon>
          </div>
          <div>
            <h1 className="text-[20px] font-semibold">132 Orang</h1>
            <p className="text-[16px]">Total Anggota</p>
          </div>
        </div>
        <div className="h-[136px] w-[240px] flex gap-x-2 justify-center rounded-lg items-center bg-suc">
          <div className="flex justify-center items-center">
            <box-icon size="lg" name="dumbbell"></box-icon>
          </div>
          <div>
            <h1 className="text-[20px] font-semibold">4 Kelas</h1>
            <p className="text-[16px]">Total Kelas</p>
          </div>
        </div>
        <div className="h-[136px] w-[240px] flex gap-x-2 justify-center rounded-lg items-center bg-inf">
          <div className="flex justify-center items-center">
            <box-icon size="lg" type="solid" name="id-card"></box-icon>
          </div>
          <div>
            <h1 className="text-[20px] font-semibold">4 Membership</h1>
            <p className="text-[16px]">Total Membership</p>
          </div>
        </div>
        <div className="h-[136px] w-[240px] flex gap-x-2 justify-center rounded-lg items-center bg-dang6">
          <div className="flex justify-center items-center">
            <box-icon size="lg" name="user"></box-icon>
          </div>
          <div>
            <h1 className="text-[20px] font-semibold">8 Pelatih</h1>
            <p className="text-[16px]">Total Pelatih</p>
          </div>
        </div>
      </div>
      <h1 className="text-2xl mb-5 font-bold text-primary">Anggota Terbaru</h1>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Jenis</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="  leading-none">Kelompok 10</td>
              <td>Kel@gmail.com</td>
              <td>Gold</td>
              <td>Waiting</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;