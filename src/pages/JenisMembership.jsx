import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useEffect, useState } from "react";
import Gym from "../apis/get.api";
import PostApi from "../apis/post.api";
import addMember from "../assets/svg/addMember.svg";
import ModalEditJenis from "../components/ModalEditJenis";
import { ModalJenisMember } from "../components/ModalJenisMember";
import ModalTambahJenis from "../components/ModalTambahJenis.jsx";
import useHook from "../hooks/useHook";
import toast, { Toaster } from "react-hot-toast";

const JenisMembership = () => {
  const [member, setMember] = useState(null);
  const { show, setShow } = useHook();
  const { load, setLoad } = useHook();
  const { show: modalTambah, setShow: setModalTambah } = useHook();
  const { show: modalEdit, setShow: setModalEdit } = useHook();

  const listMember = async () => {
    try {
      Gym.memberType().then((res) => setMember(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (e, id) => {
    setLoad(true);
    e.preventDefault();
    try {
      PostApi.hapusJenisMember(id).then((res) => setLoad(false));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    listMember();
  }, [load]);

  if (load) {
    return <h1>loading...</h1>;
  }
  return (
    <>
      <div className="relative">
        {show ? <ModalJenisMember show={show} setShow={setShow} /> : ""}

        {modalEdit ? (
          <ModalEditJenis
            setLoad={setLoad}
            show={modalEdit}
            setShow={setModalEdit}
          />
        ) : (
          ""
        )}

        {modalTambah ? (
          <ModalTambahJenis
            setLoad={setLoad}
            show={modalTambah}
            setShow={setModalTambah}
          />
        ) : (
          ""
        )}
        <div className="">
          <div className="w-full">
            <h4 className="font-bold text-prim">Jenis Membership</h4>
          </div>

          <div className="pt-2 flex justify-between ">
            <input
              type="text"
              placeholder="Cari Membership ....."
              className="input input-bordered input-black w-full max-w-xs"
            />

            <label
              htmlFor="my-modal-5"
              onClick={() => setModalTambah(!modalTambah)}
              className="btn text-primary border-primary bg-base hover:bg-primary hover:text-white transition duration-200 ease-in hover:border-base"
            >
              <i className="bx bx-user-plus bx-sm"></i> Tambah Jenis
            </label>
          </div>

          <div className="bg-white my-2 p-2">
            <h3 className="py-2 font-bold text-prim text-[24px]">
              Daftar Membership
            </h3>

            <div className="grid grid-cols-3 gap-4 ">
              {member &&
                member.map((m) => (
                  <div
                    key={m.id}
                    className="w-[300px] border overflow-hidden shadow-xl rounded-xl h-[400px] bg-white "
                  >
                    <div className="w-full pt-3 bg-prim"></div>
                    <div className="flex  justify-between flex-col h-full p-3 items-center ">
                      <img
                        className="mt-2 h-20 w-20"
                        src={m.picture}
                        alt="icon"
                      />
                      <h1 className=" py-1 text-black text-[20px] font-semibold">
                        {m.name}
                      </h1>
                      <h2 className="text-prim border w-full text-center  py-1 text-[20px] font-semibold">
                        <FormatRupiah value={m.price} />
                        /Bulan
                      </h2>

                      <div className="flex p-2 flex-col w-full gap-y-2  text-[12px]">
                        <div className="flex items-center w-full gap-x-2">
                          <span className="h-full">✅</span>
                          <p className="text-[12px]">
                            Dapatkan Akses Ketika melakukan Booking
                          </p>
                        </div>

                        <div className="flex items-center w-full gap-x-2">
                          <span className="h-full">✅</span>
                          <p className="text-[12px]">yayay</p>
                        </div>
                        <div className="flex items-center w-full gap-x-2">
                          <span className="h-full">✅</span>
                          <p className="text-[12px]">
                            Dapatkan Akses Ketika melakukan Booking
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col w-full  gap-y-2 pb-3 justify-end ">
                        <label
                          onClick={() => setModalEdit(!modalEdit)}
                          htmlFor="my-modal-5"
                          className="btnp w-full text-center  "
                        >
                          Edit
                        </label>
                        <label
                          onClick={(e) => handleDelete(e, m.id)}
                          className="btnd w-full text-center  "
                        >
                          Hapus
                        </label>
                        <div className="absolute bottom-0"></div>
                      </div>
                    </div>
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
      <Toaster />
    </>
  );
};

export default JenisMembership;
