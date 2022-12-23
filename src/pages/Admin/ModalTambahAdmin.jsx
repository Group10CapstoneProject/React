import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import PostApi from "../../apis/post.api";

function ModalTambahAdmin({ setMessage, setLoad, show, setShow }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleDelete = (e, id) => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    PostApi.tambahAdmin(form)
      .then((res) => {
        setMessage(res.data.message);
        setShow(false);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <Toaster />
      <input defaultChecked={show} type="checkbox" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box   p-0 overflow-hidden w-1/2 max-w-5xl">
          <div className="w-full p-3 bg-base2 flex">
            <div>
              <h2 className="font-bold text-lg pl-4">Tambah Admin</h2>
            </div>
          </div>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="p-3 ">
              <div className="flex w-full px-2 gap-x-2 ">
                <div className=" w-[25%] text-sm flex flex-col  ">
                  <label className="block my-1" htmlFor="">
                    Nama
                  </label>
                  <label className="block my-1" htmlFor="">
                    Email
                  </label>

                  <label className="block my-1" htmlFor="">
                    Password
                  </label>
                </div>
                <div className=" w-[50%]">
                  <input
                    className="inputJenis w-full"
                    type="text"
                    name="name"
                    onChange={onChange}
                  />
                  <input
                    className="inputJenis w-full"
                    type="email"
                    name="email"
                    onChange={onChange}
                  />
                  <input
                    className="inputJenis w-full"
                    type="password"
                    name="password"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="modal-action flex">
                <button className="btnp">Tambah</button>
                <label
                  onClick={() => setShow(!show)}
                  htmlFor="my-modal-5"
                  className="btnd flex items-center"
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
}

export default ModalTambahAdmin;
