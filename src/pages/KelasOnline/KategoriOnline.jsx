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
  {
    kategori && console.log(kategori);
  }

  const handleDelete = (e, id) => {
    e.preventDefault();

    PostApi.deleteKategoriOnline(id)
      .then((res) => {
        setMessage(res.data.message);
        setModalDelete(false);
      })
      .catch((err) => toast.error(err.message));
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
  if (load) {
    return <h1>loading...</h1>;
  }
  return (
    <>
      <Toaster />
      {show ? <ModalTambahKategoriOnline setLoad={setLoad} show={show} setShow={setShow} setMessage={setMessage} /> : ""}

      {modalEdit.isShow ? <ModalEditKategoriOnline setLoad={setLoad} show={modalEdit.isShow} setShow={setModalEdit} data={modalEdit.data} setMessage={setMessage} /> : ""}
      <Toaster />

      {modalDelete.isShow && <ModalHapus show={modalDelete.isShow} handleDelete={handleDelete} data={modalDelete.data} setShow={setModalDelete} />}
      <div>
        <div className="form-control">
          <br />
          <div className="flex items-center justify-between ">
            <h4 className="font-semibold text-prim" data-aos="fade-right" data-aos-duration="2000">
              Kategori Kelas <span className="text-black font-medium">/</span> <span className="text-prim1">Online</span>
            </h4>
            <div className="flex justify-end pr-8" data-aos="fade-left" data-aos-duration="2000">
              <label onClick={() => setShow(true)} htmlFor="my-modal-5" className="btn border-prim1 bg-prim1 hover:bg-prim text-white transition duration-200 ease-in hover:border-base">
                <i className="bx bx-user-plus bx-sm pr-2"></i> Tambah Kategori
              </label>
            </div>
          </div>

          <div className="grid mt-5 gap-x-3 gap-y-5 grid-cols-3" data-aos="zoom-in-down" data-aos-duration="2000">
            {kategori?.map((m) => (
              <div key={m.id} className="  card w-[320px]  h-72 bg-base-100 shadow-xl ">
                <figure className="  h-full">
                  <img className="h-full w-full" src={m.picture} alt="Yoga" />
                </figure>
                <div className="px-2 py-2  ">
                  <div className="flex items-center justify-between w-full">
                    <h2 className="card-title font-bold">{m.name}</h2>
                    <span className="">{m.online_class_count} Kelas</span>
                  </div>
                  <div className="w-full flex mt-2 gap-x-2 items-center justify-between">
                    <button
                      onClick={() => handleEdit(m)}
                      className="py-3 w-[90%] font-bold rounded-lg active:scale-95 text-center cursor-pointer transition-all duration-100 ease-linear leading-none text-white flex items-center justify-center bg-prim  "
                    >
                      <i className="bx bx-edit pr-2"></i>
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
