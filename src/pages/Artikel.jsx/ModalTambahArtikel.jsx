import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Gym from "../../apis/get.api";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";
import { data } from "autoprefixer";
import PostApi from "../../apis/post.api";
function ModalTambahArtikel({ show, setShow, setMessage }) {
  const [artikel, setArtikel] = useState({
    title: "",
    content: "",
    picture: null,
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setArtikel({
      ...artikel,
      [name]: value,
    });
  };

  const handleImage = (e) => {
    const { name, files } = e.target;
    PostApi.uploadFile({ title: name, files }).then((res) => {
      setArtikel({
        ...artikel,
        picture: res.data.data.url,
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    PostApi.tambahArtikel(artikel)
      .then((res) => {
        setMessage(res.data.message);
        setShow(false);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <Toaster />
      <input defaultChecked={true} type="checkbox" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box p-2 w-full max-w-[60%]">
          <div className="w-full p-3 bg-base2 flex">
            <span>❗</span>
            <div>
              <h2 className="font-bold text-lg">Tambah Artikel</h2>
              <p className="text-sm font-semibold">
                Kamu dapat menambahkan artikel
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} action="">
            <div className="">
              <div className=" relative  flex justify-center">
                <div
                  className={`w-24  gap-x-1 flex items-center z-50 justify-center rounded-lg my-2 relative cursor-pointer  h-24  border ${
                    artikel.picture ? "" : "bg-[#D3D3D3]"
                  }`}
                >
                  {artikel.picture !== null && (
                    <img
                      className="absolute w-24 h-24 cursor-pointer "
                      src={artikel.picture}
                      alt=""
                    />
                  )}
                  <input
                    className="absolute block w-full h-full  cursor-pointer opacity-0  border pin-r pin-t"
                    type="file"
                    name="article"
                    onChange={handleImage}
                  />
                  <i className="bx bxs-camera-plus"></i>
                  <span className="">Pilih Foto</span>
                </div>
              </div>
              <div className="flex w-full px-10">
                <div className="w-32 ">
                  <label className="block my-1 py-1" htmlFor="">
                    Title
                  </label>
                  <label className="block my-1 py-1" htmlFor="">
                    Content
                  </label>
                </div>
                <div className="w-full">
                  <input
                    onChange={onChange}
                    className="w-full input-sm border border-primary   block py-1 my-1 rounded-none input-primary"
                    type="text"
                    name="title"
                  />

                  <textarea
                    className="w-full input-sm border border-primary block py-1 my-1 rounded-none input-primary"
                    type="text"
                    onChange={onChange}
                    name="content"
                  />
                </div>
              </div>
              <div className="modal-action flex items-center">
                <button className="btnp">Tambah</button>
                <label onClick={() => setShow(!show)} className="btnd">
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

export default ModalTambahArtikel;
