import React from "react";
import { useState } from "react";
import ModalTambahKategoriOnline from "./ModalTambahKategoriOnline";
import Gym from "../../apis/get.api";
import { useEffect } from "react";
import PostApi from "../../apis/post.api";
import { useNavigate } from "react-router-dom";
import ModalEditKategoriOnline from "./ModalEditKategoriOnline";

const KategoriOnline = () => {
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    isShow: false,
    data: {},
  });
  const [kategori, setKategori] = useState([]);
  const listKategori = () => {
    try {
      Gym.onlineKategori().then((res) => setKategori(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    setLoad(true);
    try {
      PostApi.deleteKategoriOnline(id).then((res) => setLoad(false));
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = (data) => {
    setModalEdit({ isShow: !modalEdit.isShow, data });
  };

  useEffect(() => {
    listKategori();
  }, [load]);

  if (load) {
    return <h1>loading...</h1>;
  }
  return (
    <>
      {show ? <ModalTambahKategoriOnline setLoad={setLoad} show={show} setShow={setShow} /> : ""}

      {modalEdit.isShow ? <ModalEditKategoriOnline setLoad={setLoad} show={modalEdit.isShow} setShow={setModalEdit} data={modalEdit.data} /> : ""}

      <div>
        <div className="form-control">
          <div className="flex   input-group">
            <input type="text" placeholder="Cari aktivitas" className="input input-bordered" />
            <button className="btn btn-square bg-base">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          <br />
          <div className="flex items-center justify-between ">
            <h4 className="font-bold text-prim">Kategori Kelas Online</h4>
            <div className="flex justify-end ">
              <label onClick={() => setShow(true)} htmlFor="my-modal-5" className="btn border-prim bg-prim hover:bg-accent text-white transition duration-200 ease-in hover:border-base">
                <i className="bx bx-user-plus bx-sm"></i> Tambah Kategori
              </label>
            </div>
          </div>

          <div className="grid mt-5 gap-x-3 gap-y-5 grid-cols-3">
            {kategori?.map((m) => (
              <div key={m.id} className="  card w-[320px]  h-72 bg-base-100 shadow-xl ">
                <figure className="  h-full">
                  <img className="h-full w-full" src={m.picture} alt="Yoga" />
                </figure>
                <div className="px-2 py-2  ">
                  <div className="flex items-center justify-between w-full">
                    <h2 className="card-title font-bold">{m.name}</h2>
                    <span className="">{m.online_class_count} Video</span>
                  </div>
                  <div className="w-full flex mt-2 gap-x-2 items-center justify-between">
                    <button className="py-3 w-[90%]  font-bold rounded-lg active:scale-95 text-center cursor-pointer transition-all duration-100 ease-linear leading-none text-white btn-primary ">DETAIL</button>
                    <button onClick={() => handleEdit(m)} className="rounded-lg active:scale-95 text-center cursor-pointer transition-all duration-100 ease-linear leading-none ">
                      <i className="bx bx-sm rounded-lg bg-dang p-1 text-white bx-edit"></i>
                    </button>
                    <button onClick={(e) => handleDelete(e, m.id)} className="rounded-lg active:scale-95 text-center cursor-pointer transition-all duration-100 ease-linear leading-none ">
                      <i className="bx bx-sm rounded-lg bg-red-700 p-1 text-white bx-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default KategoriOnline;
