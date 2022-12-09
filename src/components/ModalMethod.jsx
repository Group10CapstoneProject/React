import React, { useState } from "react";
import PostApi from "../apis/post.api";

export const ModalMethod = ({ setLoad, show, setShow }) => {
  const [pembayaran, setPembayaran] = useState({
    name: "",
    payment_number: "",
    description: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;

    setPembayaran({
      ...pembayaran,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      PostApi.metode(pembayaran).then((res) => setLoad(false));
      setShow(!show);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  p-0 overflow-hidden w-1/2 max-w-5xl">
          <div className="w-full p-3 bg-base2 flex">
            <span>❗</span>
            <div>
              <h2 className="font-bold text-lg">Tambah Metode Pembayaran</h2>
              <p className="text-sm font-semibold">
                kamu dapat mengedit data member dan menkonfirmasi pembayaran
                disini.
              </p>
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
                </div>
                <div className="w-full">
                  <input
                    onChange={onChange}
                    className="w-full input-sm border border-primary   block py-1 my-1 rounded-none input-primary"
                    type="text"
                    name="name"
                  />
                  <input
                    onChange={onChange}
                    className="w-full input-sm border border-primary  block py-1 my-1 rounded-none input-primary"
                    type="number"
                    name="payment_number"
                  />
                  <input
                    onChange={onChange}
                    className="w-full input-sm border border-primary  block py-1 my-1 rounded-none input-primary"
                    type="text"
                    name="description"
                  />
                </div>
              </div>
              <div className="modal-action flex">
                <button className="btn">Tambah</button>
                <label
                  onClick={() => setShow(!show)}
                  htmlFor="my-modal-5"
                  className="btn"
                >
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
