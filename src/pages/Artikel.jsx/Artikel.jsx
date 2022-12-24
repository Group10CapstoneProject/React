import { FormatRupiah } from "@arismun/format-rupiah";
import { data } from "autoprefixer";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Gym from "../../apis/get.api";
import PostApi from "../../apis/post.api";
import ModalHapus from "../../components/ModalHapus";
import ModalTambahTrainer from "../Trainer/ModalTambahTrainer";
import DetailArtikel from "./DetailArtikel";
import ModalEditArtikel from "./ModalEditArtikel";
import ModalTambahArtikel from "./ModalTambahArtikel";

function Artikel() {
  let navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState({
    showTambah: false,
    showEdit: false,
    showHapus: false,
    showDetail: false,
    data: {},
  });
  const [artikel, setArtikel] = useState([]);

  const getArtikel = () => {
    Gym.artikel().then((res) => setArtikel(res.data.data));
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    PostApi.deleteArtikel(id)
      .then((res) => {
        setMessage(res.data.message);
        setModal(false);
      })
      .catch((err) => toast.error(err.message));
  };

  useEffect(() => {
    getArtikel();
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [message]);
  return (
    <>
      {modal.showTambah && <ModalTambahArtikel show={modal.showTambah} setShow={setModal} setMessage={setMessage} />}
      {modal.showHapus && <ModalHapus show={modal.showHapus} setShow={setModal} data={modal.data} handleDelete={handleDelete} />}

      {modal.showDetail && <DetailArtikel show={modal.showDetail} setShow={setModal} handleDelete={handleDelete} data={modal.data} />}

      {modal.showEdit && <ModalEditArtikel show={modal.showEdit} setShow={setModal} handleDelete={handleDelete} data={modal.data} setMessage={setMessage} />}

      <Toaster />
      <div>
        <div className="flex items-center justify-between ">
          <h4 className="font-semibold text-prim">Artikel</h4>
          <div className="flex justify-end ">
            <label onClick={() => setModal({ showTambah: !modal.showTambah })} className="btn border-prim1 bg-prim1 hover:bg-prim text-white transition duration-200 ease-in hover:border-base">
              <i className="bx bx-user-plus bx-sm pr-2"></i> Tambah Artikel
            </label>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-4 gap-y-5 mt-5 ">
          {artikel?.map((m) => (
            <div key={m.id} className="h-56 py-2 flex flex-col justify-between relative shadow-lg ">
              <div className="flex h-full w-full justify-center ">
                <div className="flex flex-col items-center h-full w-full">
                  <img className="h-36 w-full" src={m.picture} />
                  <div className="flex items-center h-full">
                    <p onClick={() => setModal({ showDetail: !modal.showDetail, data: m.id })} className="text-lg px-4 text-center cursor-pointer hover:underline font-bold">
                      {m.title}
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 flex gap-x-2">
                <button
                  onClick={() => setModal({ showEdit: !modal.showEdit, data: m.id })}
                  className="rounded-lg cursor-pointer bg-prim text-white font-semibold active:scale-95 hover:bg-prim/80 transition-all duration-100 ease-linear w-full"
                >
                  <i className="bx bx-edit pr-2"></i>Edit
                </button>
                <button
                  onClick={() => setModal({ showHapus: !modal.showHapus, data: m.id })}
                  className="rounded-lg cursor-pointer bg-dang text-white font-semibold active:scale-95 hover:bg-dang/80 transition-all duration-100 ease-linear w-full"
                >
                  <i className="bx bx-trash pr-2" />
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Artikel;
