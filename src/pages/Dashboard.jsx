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
  console.log(anggota);
  return (
    <>
      <div className="">
        <h1 className="text-3xl mb-5 font-bold text-primary">
          Selamat Datang Kembali {dataAdmin && dataAdmin.role}
        </h1>
        {data && (
          <div className="grid grid-cols-4 mb-5">
            <div className="h-[136px] w-[240px] flex gap-x-2 justify-center rounded-lg items-center bg-warn">
              <div className="flex justify-center items-center">
                <box-icon size="lg" name="group"></box-icon>
              </div>
              <div>
                <h1 className="text-[20px] font-semibold">
                  {data.total_member} Anggota
                </h1>
                <p className="text-[16px]">Total Anggota</p>
              </div>
            </div>
            <div className="h-[136px] w-[240px] flex gap-x-2 justify-center rounded-lg items-center bg-[#76d38a]">
              <div className="flex justify-center items-center">
                <box-icon size="lg" name="dumbbell"></box-icon>
              </div>
              <div>
                <h1 className="text-[20px] font-semibold">
                  {" "}
                  {data.total_online_class} Kelas
                </h1>
                <p className="text-[16px]">Total Kelas</p>
              </div>
            </div>
            <div className="h-[136px] w-[240px] flex gap-x-2 justify-center rounded-lg items-center bg-inf">
              <div className="flex justify-center items-center">
                <box-icon size="lg" type="solid" name="id-card"></box-icon>
              </div>
              <div>
                <h1 className="text-[20px] font-semibold">
                  {data.total_member} member
                </h1>
                <p className="text-[16px]">Total Membership</p>
              </div>
            </div>
            <div className="h-[136px] w-[240px] flex gap-x-2 justify-center rounded-lg items-center bg-dang">
              <div className="flex justify-center items-center">
                <box-icon size="lg" name="user"></box-icon>
              </div>
              <div>
                <h1 className="text-[20px] font-semibold">
                  {data.total_trainer} Pelatih
                </h1>
                <p className="text-[16px]">Total Pelatih</p>
              </div>
            </div>
          </div>
        )}
        <h1 className="text-2xl mb-5 font-bold text-primary">
          Anggota Terbaru
        </h1>
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
              {anggota &&
                anggota.members?.map((m) => (
                  <tr key={m.id}>
                    <td className="  leading-none">{m.user_name}</td>
                    <td>{m.user_email}</td>
                    <td>{m.member_type_name}</td>
                    <td
                      className={`${
                        m.status === "ACTIVE"
                          ? "text-suc"
                          : m.status === "INACTIVE"
                          ? "text-dang2  "
                          : "text-inf2"
                      }`}
                    >
                      <div className={` lowercase `}>
                        <span
                          className={`${
                            m.status === "ACTIVE"
                              ? "bg-suc/10 pr-2"
                              : m.status === "INACTIVE"
                              ? "bg-dang2/10 pr-2  "
                              : "bg-inf2/10 pr-2"
                          } lowercase`}
                        >
                          <i className="bx  bx-wifi-0"></i>
                          {m.status}
                        </span>
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
