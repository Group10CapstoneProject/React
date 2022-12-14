import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useState } from "react";
import Gym from "../apis/get.api";
import Navbar from "../components/Navbar";

function Dashboard() {
  const dataAdmin = JSON.parse(Cookies.get("data"));
  const [data, setDatas] = useState([]);
  const [anggota, setAnggota] = useState([]);
  const dashboard = () => {
    Gym.Dashboard()
      .then((res) => setDatas(res.data.data))
      .catch((err) => console.log(err));
  };
  const newAnggota = () => {
    Gym.newAnggota()
      .then((res) => setAnggota(res.data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    dashboard();
    newAnggota();
  }, []);
  return (
    <>
      <div className="" data-aos="fade-up" data-aos-duration="2000">
        <h1 className="text-3xl mb-5 font-semibold text-prim">Selamat Datang Kembali {dataAdmin && dataAdmin.role}</h1>
        {data && (
          <div className="grid grid-cols-4 mb-5" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div className="h-[136px] w-[240px] flex gap-x-2 justify-center rounded-lg items-center bg-warn">
              <div className="flex justify-center items-center">
                <box-icon size="lg" name="group"></box-icon>
              </div>
              <div>
                <h1 className="text-[20px] font-semibold">{data.total_member} Anggota</h1>
                <p className="text-[16px]">Total Anggota</p>
              </div>
            </div>
            <div className="h-[136px] w-[240px] flex gap-x-2 justify-center rounded-lg items-center bg-suc4">
              <div className="flex justify-center items-center">
                <box-icon size="lg" name="dumbbell"></box-icon>
              </div>
              <div>
                <h1 className="text-[20px] font-semibold"> {data.total_online_class + data.total_offline_class} Kelas</h1>
                <p className="text-[16px]">Total Kelas</p>
              </div>
            </div>
            <div className="h-[136px] w-[240px] flex gap-x-2 justify-center rounded-lg items-center bg-inf">
              <div className="flex justify-center items-center">
                <box-icon size="lg" type="solid" name="id-card"></box-icon>
              </div>
              <div>
                <h1 className="text-[20px] font-semibold">{data.total_member} Member</h1>
                <p className="text-[16px]">Total Membership</p>
              </div>
            </div>
            <div className="h-[136px] w-[240px] flex gap-x-2 justify-center rounded-lg items-center bg-dang6">
              <div className="flex justify-center items-center">
                <box-icon size="lg" name="user"></box-icon>
              </div>
              <div>
                <h1 className="text-[20px] font-semibold">{data.total_trainer} Pelatih</h1>
                <p className="text-[16px]">Total Pelatih</p>
              </div>
            </div>
          </div>
        )}
        <h1 className="text-3xl mb-5 font-semibold text-prim">Anggota Terbaru</h1>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full flex justify-center text-center">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Jenis</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="font-semibold capitalize">
              {anggota &&
                anggota.members?.map((m, index) => (
                  <tr key={m.id}>
                    <td className="  leading-none">{++index}</td>
                    <td className="  leading-none">{m.user_name}</td>
                    <td>{m.user_email}</td>
                    <td>{m.member_type_name}</td>
                    <td className={`${m.status === "ACTIVE" ? "text-suc2" : m.status === "INACTIVE" ? "text-dang2  " : "text-inf2"}`}>
                      <div className={` lowercase `}>
                        <span className={`${m.status === "ACTIVE" ? "bg-suc/10 px-2" : m.status === "INACTIVE" ? "bg-dang2/10 px-2  " : "bg-inf2/10 px-2"} lowercase`}>{m.status}</span>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
