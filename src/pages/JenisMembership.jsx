import React, { useEffect, useState } from "react";
import Gym from "../apis/get.api";
import PostApi from "../apis/post.api";
import addMember from "../assets/svg/addMember.svg";
import { ModalJenisMember } from "../components/ModalJenisMember";
import ModalTambahJenis from "../components/ModalTambahJenis.jsx";
import useHook from "../hooks/useHook";

const JenisMembership = () => {
  const [member, setMember] = useState(null);
  const { show, setShow } = useHook();
  const { show: modalTambah, setShow: setModalTambah } = useHook();

  const listMember = async () => {
    try {
      Gym.memberType().then((res) => setMember(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = (e, id) => {
    try {
      PostApi.hapusJenisMember(id).then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    listMember();
  }, []);

  return (
    <div className="relative">
      {show ? <ModalJenisMember show={show} setShow={setShow} /> : ""}

      {modalTambah ? <ModalTambahJenis show={modalTambah} setShow={setModalTambah} /> : ""}
      <div className="p-2  mx-5">
        <div className="w-full">
          <h4 className="font-bold">Jenis Membership</h4>
        </div>

        <div className="pt-2 flex justify-between ">
          <input type="text" placeholder="Cari Membership ....." className="input input-bordered input-black w-full max-w-xs" />

          <label htmlFor="my-modal-5" onClick={() => setModalTambah(!modalTambah)} className="btn text-primary border-primary bg-base hover:bg-primary hover:text-white transition duration-200 ease-in hover:border-base">
            <img className="fill-gray-800" src={addMember} alt="" /> Tambah Jenis
          </label>
        </div>

        <div className="bg-white my-2 p-2">
          <h3 className="py-2 font-bold text-black text-2xl">Daftar Membership</h3>

          <div className="grid grid-cols-4 gap-4">
            {member &&
              member.map((m) => (
                <div key={m.id} className=" py-3 flex flex-col items-center shadow-xl rounded-xl  bg-white ">
                  <span className="w-full h-5    bg-primary overflow-hidden "></span>
                  <img className="mt-2 w-20" src={m.picture} alt="icon" />
                  <h1 className="p-2 text-black font-semibold">{m.name}</h1>
                  <h2 className="text-primary p-2 font-semibold">{m.price}</h2>

                  <div className="flex p-2 flex-col w-full  text-[12px]">
                    <div className="flex items-center w-full gap-x-2">
                      <span className="h-full">✅</span>
                      <p>Dapatkan Akses Ketika melakukan Booking</p>
                    </div>
                    <div className="flex items-center w-full gap-x-2">
                      <span className="h-full">✅</span>
                      <p>Dapatkan Akses Ketika melakukan Booking</p>
                    </div>
                    <div className="flex items-center w-full gap-x-2">
                      <span className="h-full">✅</span>
                      <p>Dapatkan Akses Ketika melakukan Booking</p>
                    </div>
                    <div className="flex items-center w-full gap-x-2">
                      <span className="h-full">✅</span>
                      <p>Dapatkan Akses Ketika melakukan Booking</p>
                    </div>
                  </div>
                  <label onClick={() => setShow(!show)} htmlFor="my-modal-5" className="py-3 rounded-lg active:scale-95 text-center cursor-pointer transition-all duration-100 ease-linear leading-none text-white btn-primary w-44  ">
                    Detail
                  </label>
                </div>
              ))}
          </div>
          {/* <div className="">
            <table className="table w-full text-sm my-2 ">
              <thead>
                <tr>
                  <th>Jenis</th>
                  <th>Harga</th>
                  <th>Deskripsi</th>
                  <th>Kelas Offline</th>
                  <th>Kelas Online</th>
                  <th>Akses trainer</th>
                  <th>Akses gym</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody className="font-semibold">
                {member &&
                  member.map((m) => (
                    <tr key={m.id}>
                      <th>{m.name}</th>
                      <td>300.000</td>
                      <td>60 Hari</td>
                      <td>True</td>
                      <td>True</td>
                      <td>false</td>
                      <td>true</td>
                      <td className="flex gap-x-2">
                        <label
                          onClick={() => setShow(!show)}
                          htmlFor="my-modal-5"
                          className="px-4 py-2 bg-primary cursor-pointer text-white rounded-lg active:scale-90 transition duration-100 ease-in"
                        >
                          Detail
                        </label>
                        <label
                          onClick={(e) => handleDelete(e, m.id)}
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default JenisMembership;
