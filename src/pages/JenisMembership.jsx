import React, { useEffect, useState } from "react";
import Gym from "../apis/Gym";
import addMember from "../assets/svg/addMember.svg";
import Modal from "../components/Modal";

const JenisMembership = () => {
  const [member, setMember] = useState(null);

  const listMember = async () => {
    try {
      Gym.members().then((res) => setMember(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    listMember();
  }, []);
  return (
    <div className="relative">
      <Modal />
      <div className="p-2  mx-5">
        <div className="w-full">
          <h4 className="font-bold">Jenis Membership</h4>
        </div>

        <div className="pt-2 flex justify-between ">
          <input
            type="text"
            placeholder="Cari Membership ....."
            className="input input-bordered input-black w-full max-w-xs"
          />

          <button className="btn text-primary border-primary bg-base hover:bg-primary hover:text-white transition duration-200 ease-in hover:border-base">
            <img className="fill-gray-800" src={addMember} alt="" /> Tambah
            Kelas
          </button>
        </div>

        <div className="bg-white my-2 p-2">
          <h3 className="py-2 font-bold text-black text-2xl">
            Daftar Membership
          </h3>
          <div className="">
            <table className="table w-full text-sm my-2 ">
              <thead>
                <tr>
                  <th>Jenis</th>
                  <th>Harga</th>
                  <th>Durasi</th>
                  <th>Kelas Offline</th>
                  <th>Kelas Online</th>
                  <th>Gyn</th>
                  <th>Trainer</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody className="font-semibold">
                {member &&
                  member.members.map((m) => (
                    <tr key={m.id}>
                      <th>{m.member_type_name}</th>
                      <td>300.000</td>
                      <td>60 Hari</td>
                      <td>True</td>
                      <td>True</td>
                      <td>false</td>
                      <td>true</td>
                      <td className="flex gap-x-2">
                        <label
                          htmlFor="my-modal-5"
                          className="px-4 py-2 bg-primary cursor-pointer text-white rounded-lg active:scale-90 transition duration-100 ease-in"
                        >
                          Detail
                        </label>
                        <label
                          htmlFor="my-modal-5"
                          className="px-4 py-2 bg-red-700 cursor-pointer text-white rounded-lg active:scale-90 transition duration-100 ease-in"
                        >
                          Hapus
                        </label>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="flex justify-between">
              <div className="flex gap-x-2 font-semibold">
                <label>Show : </label>
                {/* <select className="">
                  <option disabled selected>
                    10
                  </option>
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                  <option>50</option>
                  <option>60</option>
                </select> */}
                <p>For Page</p>
              </div>
              <div>
                <div className="btn-group bg-base font-semibold">
                  <button className="btn-sm">Kembali</button>
                  <button className="btn-sm">1</button>
                  <button className="btn-sm btn-active">2</button>
                  <button className="btn-sm">3</button>
                  <button className="btn-sm">4</button>
                  <button className="btn-sm">lanjut</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JenisMembership;
