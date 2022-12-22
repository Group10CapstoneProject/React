import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import PostApi from "../../apis/post.api";

function ModalEditAdmin({ setMessage, setLoad, show, setShow, data }) {
  const [btn, setBtn] = useState(true);
  const [form, setForm] = useState({
    id: data.id,
    name: data.name,
    description: data.description,
    picture: data.picture,
  });

  const handleImage = (e) => {
    const { name, files } = e.target;
    PostApi.uploadFile({ title: name, files }).then((res) =>
      setForm({
        ...form,
        picture: res.data.data.url,
      })
    );
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      PostApi.updateKategoriOnline(form).then((res) => {
        setMessage(res.data.message);
        setShow(false);
      });
    } catch (err) {
      toast.err.message(err.message);
    }
  };

  useEffect(() => {
    if (form.picture !== null) {
      setBtn(false);
    }
  }, [form]);

  return (
    <>
      <Toaster />
      <input defaultChecked={show} type="checkbox" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box   p-0 overflow-hidden w-1/2 max-w-5xl">
          <div className="w-full p-3 bg-base2 flex">
            <div>
              <h2 className="font-bold text-lg pl-4">Update Admin</h2>
            </div>
          </div>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="p-3 ">
              <p className="pl-10 pb-2 font-bold">Foto Profil</p>
              <div className="flex w-full px-2 gap-x-2 ">
                <div className="w-[20%] relative  flex justify-center">
                  <div className=" w-28 bg-[#D3D3D3] gap-x-1 flex items-center justify-center rounded-full relative cursor-pointer  h-28  border">
                    <input onChange={handleImage} className="absolute block w-full h-full  cursor-pointer opacity-0  border pin-r pin-t" type="file" name="online_class_category" />
                    <i className="bx bxs-camera-plus"></i>
                    <span className="">Pilih Foto</span>
                  </div>
                </div>

                <div className=" w-[25%] text-sm flex flex-col  ">
                  <label className="block my-1" htmlFor="">
                    Username
                  </label>
                  <label className="block my-1" htmlFor="">
                    Email
                  </label>
                  <label className="block my-1" htmlFor="">
                    Password
                  </label>
                </div>
                <div className=" w-[50%]">
                  <input className="inputJenis w-full" type="text" name="name" onChange={onChange} value={form.name} />
                  <input className="inputJenis w-full" type="text" name="name" onChange={onChange} value={form.email} />
                  <input className="inputJenis w-full" type="text" name="name" onChange={onChange} value={form.password} />
                </div>
              </div>
              <div className="modal-action flex">
                <button disabled={btn} className={`${btn ? "btnw" : "btnp"}  flex items-center justify-center`}>
                  simpan
                </button>
                <label onClick={() => setShow(!show)} htmlFor="my-modal-5" className="btnd flex items-center">
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
