import React from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import PostApi from "../../../apis/post.api";

function ModalEditSkill({ show, setShow, setMessage, data }) {
  const [skill, setSkill] = useState({
    id: data.id,
    name: data.name,
    description: data.description,
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
    PostApi.editSkill(skill)
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
              <h2 className="font-bold text-lg">Edit Skill</h2>
              <p className="text-sm font-semibold">
                Kamu dapat mengedit Skill disini
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
                    value={skill.name}
                  />
                  <textarea
                    className="inputJenis w-full"
                    type="text"
                    name="description"
                    onChange={onChange}
                    value={skill.description}
                  />
                </div>
              </div>
              <div className="modal-action flex">
                <button className={`btnp flex items-center justify-center`}>
                  simpan
                </button>
                <label
                  onClick={() => setShow(false)}
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

export default ModalEditSkill;
