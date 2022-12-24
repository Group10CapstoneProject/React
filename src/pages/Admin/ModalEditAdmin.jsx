import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import PostApi from "../../apis/post.api";

function ModalEditAdmin({ setMessage, setLoad, data, show, setShow }) {
  const { id, name, email, password } = data;
  const [form, setForm] = useState({
    id: id,
    name: name,
    email: email,
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

    PostApi.updateAdmin(form)
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
              <h2 className="font-bold text-lg pl-4">Edit Admin</h2>
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
                </div>
                <div className=" w-[50%]">
                  <input className="inputJenis w-full" type="text" name="name" onChange={onChange} value={form.name} />
                  <input className="inputJenis w-full" type="email" name="email" onChange={onChange} value={form.email} />
                </div>
              </div>
              <div className="modal-action flex justify-center">
                <button className="btnp">
                  <i className="bx bx-add-to-queue pr-2" />
                  Tambah
                </button>
                <label onClick={() => setShow(!show)} htmlFor="my-modal-5" className="btnd flex items-center">
                  <i className="bx bx-message-square-x pr-2" />
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

export default ModalEditAdmin;
