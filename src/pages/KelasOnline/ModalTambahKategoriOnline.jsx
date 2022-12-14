import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import PostApi from "../../apis/post.api";

function ModalTambahKategoriOnline({ setLoad, show, setShow, setMessage }) {
  const [btn, setBtn] = useState(true);
  const [form, setForm] = useState({
    name: "",
    description: "",
    picture: null,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      PostApi.tambahOnlineKategori(form).then((res) => {
        setMessage(res.data.message);
        setShow(!show);
      });
    } catch (error) {
      toast.error(error.message);
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
            <span>❗</span>
            <div>
              <h2 className="font-bold text-lg">Tambah Kategori Online</h2>
              <p className="text-sm font-semibold">Kamu dapat menambahkan Kategori disini</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="p-3 ">
              <div className="flex w-full px-2 gap-x-2 ">
                <div className="w-[20%] relative  flex justify-center">
                  <div className=" w-28 bg-[#D3D3D3] gap-x-1 flex items-center justify-center rounded-full relative cursor-pointer  h-28  border">
                    <input onChange={handleImage} className="absolute block w-full h-full  cursor-pointer opacity-0  border pin-r pin-t" type="file" name="online_class_category" />
                    {form.picture !== null && <img className="absolute w-28 h-28 cursor-pointer rounded-full" src={form.picture} alt="" />}
                    <i className="bx bxs-camera-plus"></i>
                    <span className="">Pilih Foto</span>
                  </div>
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
                  <input className="inputJenis w-full" type="text" name="name" onChange={onChange} />
                  <input className="inputJenis w-full" type="text" name="description" onChange={onChange} />
                </div>
              </div>
              <div className="modal-action flex">
                <button disabled={btn} className={`${btn ? "btnw" : "btnp"}  flex items-center justify-center`}>
                  <i className="bx bx-save pr-2" />
                  Simpan
                </button>
                <label onClick={() => setShow(!show)} htmlFor="my-modal-5" className="btnd flex items-center">
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
}

export default ModalTambahKategoriOnline;
