import React from "react";
import { BoxIconElement } from "boxicons";
import addMember from "../assets/svg/addMember.svg";
const KelolaAnggota = () => {
  return (
    <div className="p-2 h-screen mx-5">
      <div className="w-full">
        <h4 className="font-bold">Kelola Anggota</h4>
      </div>

      <div className="pt-2 flex justify-between ">
        <input
          type="text"
          placeholder="Cari Anggota ....."
          className="input input-bordered input-black w-full max-w-xs"
        />

        <button className="btn text-primary border-primary bg-base hover:bg-primary hover:text-white transitio duration-200 ease-in hover:border-base">
          <img className="fill-gray-800" src={addMember} alt="" /> Tambah
          Anggota
        </button>
      </div>

      <div className="bg-white my-2 p-2">
        <h3 className="py-2 font-bold text-black text-2xl">Manage Member</h3>
        <div className="">
          <table className="table w-full text-sm ">
            <thead>
              <tr>
                <th>Nomor</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Jenis Membership</th>
                <th>Status Membership</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody className="font-semibold">
              <tr>
                <th>1</th>
                <td>Muhammad Agil</td>
                <td>agilz@gmail.com</td>
                <td>Gold</td>
                <td>aktif</td>
                <td>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg active:scale-90 transition duration-100 ease-in">
                    Detail
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default KelolaAnggota;
