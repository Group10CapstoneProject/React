import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import PostApi from "../apis/post.api";

export const ModalEditPembayaran = ({ setLoad, show, setShow, setMessage, data }) => {
  const [pembayaran, setPembayaran] = useState({
    id: data.id,
    name: data.name,
    payment_number: data.payment_number,
    description: data.description,
    picture: data.picture,
  });
  const [error, setError] = useState("");
  const onChange = (e) => {
    const { name, value } = e.target;
    setPembayaran({
      ...pembayaran,
      [name]: value,
    });
  };

  const handleImage = (e) => {
    const { name, files } = e.target;
    PostApi.uploadFile({ title: name, files }).then((res) =>
      setPembayaran({
        ...pembayaran,
        picture: res.data.data.url,
      })
    );
  };
  console.log(pembayaran);

  const handleSubmit = (e) => {
    e.preventDefault();

    PostApi.editPembayaran(pembayaran)
      .then((res) => {
        setMessage(res.data.message);
        setShow(false);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <>
      <Toaster />
      <input defaultChecked={show} type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  p-0 overflow-hidden w-1/2 max-w-5xl">
          <div className="w-full p-3 bg-base2 flex">
            <span>❗</span>
            <div>
              <h2 className="font-bold text-lg">Edit Metode Pembayaran</h2>
              <p className="text-sm font-semibold">kamu dapat mengedit data member dan menkonfirmasi pembayaran disini.</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-3 ">
              <div className="flex w-full px-2 ">
                <div className="w-52 ">
                  <label className="block my-1 py-1" htmlFor="">
                    Nama
                  </label>
                  <label className="block my-1 py-1" htmlFor="">
                    Nomor Rekening
                  </label>
                  <label className="block my-1 py-1" htmlFor="">
                    Deskripsi
                  </label>
                  <label className="block my-1 py-1" htmlFor="">
                    Foto
                  </label>
                </div>
                <div className="w-full">
                  <input onChange={onChange} className="w-full input-sm border border-primary   block py-1 my-1 rounded-none input-primary" type="text" name="name" value={pembayaran.name} />
                  <input onChange={onChange} className="w-full input-sm border border-primary  block py-1 my-1 rounded-none input-primary" type="number" name="payment_number" value={pembayaran.payment_number} />
                  <input onChange={onChange} className="w-full input-sm border border-primary  block py-1 my-1 rounded-none input-primary" type="text" name="description" value={pembayaran.description} />
                  <div className=" w-28 bg-[#D3D3D3] gap-x-1 flex items-center justify-center rounded-full relative cursor-pointer  h-28  border">
                    <div className={`w-28  gap-x-1 flex items-center justify-center rounded-full relative cursor-pointer  h-28  border ${pembayaran.picture !== null ? "" : "bg-[#D3D3D3]"}`}>
                      {pembayaran.picture !== null && <img className="absolute w-28 h-28 cursor-pointer rounded-full" src={pembayaran.picture} alt="" />}
                      <input className="absolute block w-full h-full  cursor-pointer opacity-0  border pin-r pin-t" type="file" name="payment_method" onChange={handleImage} />
                      <i className="bx bxs-camera-plus"></i>
                      <span className="">Pilih Foto</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-action flex">
                <button className="btnp">
                  <i className="bx bx-save pr-2" />
                  Simpan
                </button>
                <label onClick={() => setShow(!show)} htmlFor="my-modal-5" className="btnd">
                  <i className="bx bx-message-square-x  pr-2" />
                  Batal
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
