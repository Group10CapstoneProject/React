import React from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import PostApi from "../../../apis/post.api";

function ModalTambahSkill({ show, setShow, setMessage }) {
  const [skill, setSkill] = useState({
    name: "",
    description: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setSkill({
      ...skill,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    PostApi.tambahSkill(skill)
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
      <input defaultChecked={show} type="checkbox" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box   p-0 overflow-hidden w-1/2 max-w-5xl">
          <div className="w-full p-3 bg-base2 flex">
            <span>❗</span>
            <div>
              <h2 className="font-bold text-lg">Tambah Skill</h2>
              <p className="text-sm font-semibold">
                Kamu dapat menambahkan Skill disini
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-3 ">
              <div className="flex w-full px-2 gap-x-2 ">
                <div className=" w-[25%] text-sm flex flex-col  ">
                  <label className="block my-1" htmlFor="">
                    Nama
                  </label>
                  <label className="block my-1" htmlFor="">
                    Deskripsi
                  </label>
                </div>
                <div className=" w-[75%]">
                  <input
                    className="inputJenis w-full"
                    type="text"
                    name="name"
                    onChange={onChange}
                  />
                  <input
                    className="inputJenis w-full"
                    type="text"
                    name="description"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="modal-action flex">
                <button className={`btnp flex items-center justify-center`}>
                  simpan
                </button>
                <label
                  onClick={() => setShow(false)}
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

export default ModalTambahSkill;
