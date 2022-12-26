import React from "react";
import { useState } from "react";
import ModalTambahKategoriOnline from "./ModalTambahKategoriOnline";
import Gym from "../../apis/get.api";
import { useEffect } from "react";
import PostApi from "../../apis/post.api";
import { useNavigate } from "react-router-dom";
import ModalEditKategoriOnline from "./ModalEditKategoriOnline";
import ModalKategoriOnline from "./ModalKategoriOnline";
import { toast, Toaster } from "react-hot-toast";
import ModalHapus from "../../components/ModalHapus";

const KategoriOnline = () => {
  const [show, setShow] = useState(false);
  const [modalDetail, setModalDetail] = useState(false);
  const [modalDelete, setModalDelete] = useState({
    isShow: false,
    data: {},
  });
  const [load, setLoad] = useState(false);
  const [message, setMessage] = useState("");
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
    try {
      PostApi.deleteKategoriOnline(id).then((res) => {
        setMessage(res.data.message);
        setModalDelete(false);
      });
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleEdit = (data) => {
    setModalEdit({ isShow: !modalEdit.isShow, data });
  };

  useEffect(() => {
    listKategori();
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [load, message]);
  console.log(modalDelete);
  if (load) {
    return <h1>loading...</h1>;
  }
  return (
    <>
      {show ? <ModalTambahKategoriOnline setLoad={setLoad} show={show} setShow={setShow} setMessage={setMessage} /> : ""}

      {modalEdit.isShow ? <ModalEditKategoriOnline setLoad={setLoad} show={modalEdit.isShow} setShow={setModalEdit} data={modalEdit.data} setMessage={setMessage} /> : ""}
      <Toaster />

      {modalDelete.isShow && <ModalHapus show={modalDelete.isShow} handleDelete={handleDelete} data={modalDelete.data} setShow={setModalDelete} />}
      <div>
        <div className="form-control">
          <div className="flex   input-group">
            <input type="text" placeholder="Cari Kategori..." className="input input-bordered input-black w-full max-w-xs" />
          </div>
          <br />
          <div className="flex items-center justify-between ">
            <h4 className="font-bold text-prim">Kategori Kelas Online</h4>
            <div className="flex justify-end ">
              <label onClick={() => setShow(true)} htmlFor="my-modal-5" className="btn border-prim1 bg-prim1 hover:bg-prim text-white transition duration-200 ease-in hover:border-base">
                <i className="bx bx-user-plus bx-sm pr-2"></i> Tambah Kategori
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
                    <button
                      onClick={() => handleEdit(m)}
                      className="py-3 w-[90%] font-bold rounded-lg active:scale-95 text-center cursor-pointer transition-all duration-100 ease-linear leading-none text-white flex items-center justify-center bg-prim  "
                    >
                      <i className="bx  bx-edit"></i>
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        setModalDelete({
                          isShow: !modalDelete.isShow,
                          data: m.id,
                        })
                      }
                      className="rounded-lg active:scale-95 text-center cursor-pointer transition-all duration-100 ease-linear leading-none "
                    >
                      <i className="bx bx-sm rounded-lg bg-dang p-1 text-white bx-trash"></i>
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
