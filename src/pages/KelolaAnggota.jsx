import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Gym from "../apis/get.api";
import PostApi from "../apis/post.api";
import addMember from "../assets/svg/addMember.svg";
import ModalAnggota from "../components/ModalAnggota";
import ModalTambahAnggota from "../components/ModalTambahAnggota";
import Auth from "../utils/Auth";
const KelolaAnggota = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [member, setMember] = useState(null);
  const [load, setLoad] = useState(false);
  const listMember = async () => {
    try {
      Gym.members().then((res) => setMember(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    setLoad(true);
    PostApi.hapusAnggota(id).then((res) => setLoad(false));
  };

  useEffect(() => {
    listMember();
  }, [load]);

  if (load) {
    return <h1>load...</h1>;
  }
  return (
    <div className="relative">
      {show ? <ModalTambahAnggota show={show} setShow={setShow} /> : ""}
      <div className="p-2  mx-5">
        <div className="w-full">
          <h4 className="font-bold">Kelola Anggota</h4>
        </div>

        <div className="pt-2 flex justify-between ">
          <input type="text" placeholder="Cari Anggota ....." className="input input-bordered input-black w-full max-w-xs" />

          <label onClick={() => setShow(!show)} htmlFor="my-modal-5" className="btn text-primary border-primary bg-base hover:bg-primary hover:text-white transition duration-200 ease-in hover:border-base">
            <img className="fill-gray-800" src={addMember} alt="" /> Tambah Anggota
          </label>
        </div>

        <div className="bg-white my-2 p-2">
          <h3 className="py-2 font-bold text-black text-2xl">Manage Member</h3>
          <div className="">
            <table className="table table-compact w-full text-sm ">
              <thead>
                <tr>
                  <th>Nomor</th>
                  <th>Nama</th>
                  <th>Jenis Membership</th>
                  <th>Status Membership</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody className="font-semibold">
                {member &&
                  member.members.map((m, index) => (
                    <tr key={m.id}>
                      <th>{++index}</th>
                      <td>{m.user_name}</td>
                      <td>{m.member_type_name}</td>
                      <td>{m.status}</td>
                      <td className="flex gap-x-2">
                        <label onClick={() => navigate("/detail")} htmlFor="my-modal-5" className="btnp flex items-center">
                          Detail
                        </label>
                        <button onClick={(e) => handleDelete(e, m.id)} className="btnp">
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="flex justify-between">
              <div className="flex gap-x-2 font-semibold">
                <label>Show : </label>
                {/* <select className="">
                  <option value="2" disabled selected>
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

export default KelolaAnggota;
