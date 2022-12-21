import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PostApi from "../../apis/post.api";

function ModalEditKategoriOnline({ setLoad, show, setShow, data }) {
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
    setLoad(true);
    try {
      PostApi.updateKategoriOnline(form).then((res) => setLoad(false));
      setShow(!show);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (form.picture !== null && form.name !== "" && form.description !== "") {
      setBtn(false);
    }
  }, [form]);

  return (
    <>
      <input defaultChecked={show} type="checkbox" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box   p-0 overflow-hidden w-1/2 max-w-5xl">
          <div className="w-full p-3 bg-base2 flex">
            <span>❗</span>
            <div>
              <h2 className="font-bold text-lg">Edit Kategori Online</h2>
              <p className="text-sm font-semibold">
                kamu dapat mengedit Kategori disini.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="p-3 ">
              <div className="flex w-full px-2 gap-x-2 ">
                <div className="w-[20%] relative  flex justify-center">
                  <input
                    className="bg-white cursor-pointer border w-24 h-24 file-input-bordered rounded-full file-input-ghost file"
                    type="file"
                    name="online_class_category"
                    onChange={handleImage}
                  />
                </div>
                <div className=" w-[25%] text-sm flex flex-col  ">
                  <label className="block my-1" htmlFor="">
                    Nama
                  </label>
                  <label className="block my-1" htmlFor="">
                    Deskripsi
                  </label>
                </div>
                <div className=" w-[50%]">
                  <input
                    className="inputJenis w-full"
                    type="text"
                    name="name"
                    onChange={onChange}
                    value={form.name}
                  />
                  <textarea
                    className="inputJenis w-full h-20"
                    type="text"
                    name="description"
                    onChange={onChange}
                    value={form.description}
                  />
                </div>
              </div>
              <div className="modal-action flex">
                <button
                  disabled={btn}
                  className={`${
                    btn ? "btnw" : "btnp"
                  }  flex items-center justify-center`}
                >
                  simpan
                </button>
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

export default ModalEditKategoriOnline;