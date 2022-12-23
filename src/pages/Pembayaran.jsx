import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Gym from "../apis/get.api";
import Get from "../apis/get.api";
import PostApi from "../apis/post.api";
import { ModalEditPembayaran } from "../components/ModalEditPembayaran";
import { ModalTambahPembayaran } from "../components/ModalTambahPembayaran";
import useHook from "../hooks/useHook";

export const Pembayaran = () => {
  const [method, setMethod] = useState([]);
  const { load, setLoad } = useHook();
  const [modal, setModal] = useState({
    modalTambah: false,
    modalEdit: false,
    data: {},
  });
  const [message, setMessage] = useState("");
  const { show, setShow } = useHook();
  const metode = async () => {
    try {
      Get.pembayaran().then((res) => setMethod(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    PostApi.deleteMethod(id).then((res) => setMessage(res.data.message));
  };
  useEffect(() => {
    metode();
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [load, message]);
  console.log(modal.modalEdit);
  if (load) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="relative">
      {modal.modalTambah && <ModalTambahPembayaran setMessage={setMessage} setLoad={setLoad} show={modal.modalTambah} setShow={setModal} />}
      {modal.modalEdit && <ModalEditPembayaran setMessage={setMessage} setLoad={setLoad} show={modal.modalEdit} setShow={setModal} data={modal.data} />}

      <Toaster />
      <div className="">
        <div className="w-full">
          <h4 className="font-bold text-prim">Metode Pembayaran</h4>
        </div>

        <div className="pt-2 flex justify-end ">
          <label onClick={() => setModal({ modalTambah: !modal.modalTambah })} className="btn border-prim1 bg-prim1 hover:bg-prim text-white transition duration-200 ease-in hover:border-base">
            <i className="bx bx-user-plus bx-sm pr-2"></i>Tambah Metode Pembayaran
          </label>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-5">
          {method &&
            method.map((m) => (
              <div key={m.id} className="  overflow-hidden flex items-center justify-center border-1 border-prim rounded-xl  shadow-xl w-72 h-42 py-2">
                <div className="w-full h-full flex flex-col justify-between relative">
                  <div className="flex justify-center  text-white font-bold">
                    <img className="w-10" src={m.picture} alt="" />
                  </div>

                  <div className="p-3 capitalize text-sm">
                    <p>Nama : {m.name}</p>
                    <p>Payment Number : {m.payment_number}</p>
                    <p>Deskripsi : {m.description}</p>
                  </div>
                  <div className="flex justify-center w-full gap-x-2">
                    <button
                      onClick={() => setModal({ modalEdit: !modal.modalEdit, data: m })}
                      className="px-2 py-1 rounded-lg cursor-pointer bg-prim text-white font-semibold active:scale-95 hover:bg-prim/80 transition-all duration-100 ease-linear"
                    >
                      Edit
                    </button>
                    <button onClick={(e) => handleDelete(e, m.id)} className="px-2 py-1 rounded-lg cursor-pointer bg-dang text-white font-semibold active:scale-95 hover:bg-dang/80 transition-all duration-100 ease-linear">
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
