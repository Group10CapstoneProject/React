import React, { useState } from "react";
import PostApi from "../apis/post.api";

const ModalTambahJenis = ({ show, setShow }) => {
  const [check, setCheck] = useState(false);
  const [member, setMember] = useState({
    name: "",
    price: 20000,
    description: "",
    access_offline_class: false,
    access_online_class: false,
    access_trainer: false,
    access_gym: false,
    picture: null,
  });

  const handleImage = (e) => {
    // waiting;
    // console.log(e.target.files[0]);
    const img = e.target.files[0];
    if (!img) return;
    PostApi.uploadFile(img).then((res) => console.log(res));
  };
  const onChange = (e) => {
    const { name, value, type, checked, valueAsNumber } = e.target;

    setMember({
      ...member,
      [name]: !Number.isNaN(valueAsNumber)
        ? valueAsNumber
        : type == "checkbox"
        ? checked
        : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    PostApi.tambahJenisMember(member).then((res) => console.log(res));
    setShow(!show);
  };
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box   p-0 overflow-hidden w-1/2 max-w-5xl">
          <div className="w-full p-3 bg-base2 flex">
            <span>❗</span>
            <div>
              <h2 className="font-bold text-lg">Tambah Jenis Member</h2>
              <p className="text-sm font-semibold">
                kamu dapat mengedit data member dan menkonfirmasi pembayaran
                disini.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-3 ">
              <div className="flex w-full px-2 gap-x-2 ">
                <div className="w-[20%]  flex justify-center">
                  <input
                    className="bg-white  border w-24 h-24 file-input-bordered rounded-full file-input-ghost file"
                    type="file"
                    onChange={handleImage}
                  />
                </div>
                <div className=" w-[25%] text-sm flex flex-col  ">
                  <label className="block my-1" htmlFor="">
                    Jenis Membership
                  </label>
                  <label className="block my-1" htmlFor="">
                    Harga Membership
                  </label>
                  <label className="block my-1" htmlFor="">
                    Deskripsi Membership
                  </label>
                  <label className="block my-1" htmlFor="">
                    Fitur Yang ditawarkan
                  </label>
                </div>
                <div className=" w-[50%]">
                  <input
                    onChange={onChange}
                    className="inputJenis w-full"
                    type="text"
                    name="name"
                  />
                  <input
                    onChange={onChange}
                    className="inputJenis w-full"
                    type="number"
                    name="price"
                  />
                  <input
                    onChange={onChange}
                    className="inputJenis w-full"
                    type="text"
                    name="description"
                  />

                  <div className="w-full  border px-1 ">
                    <div className="flex gap-x-2">
                      <input
                        onChange={onChange}
                        className="checkbox rounded-none checkbox-accent h-5 w-5 block py-1 my-1"
                        type="checkbox"
                        name="access_offline_class"
                      />
                      <label htmlFor="">Kelas Offline</label>
                    </div>
                    <div className="flex gap-x-2">
                      <input
                        onChange={onChange}
                        className="checkbox rounded-none checkbox-accent h-5 w-5  block py-1 my-1"
                        type="checkbox"
                        name="access_online_class"
                      />
                      <label htmlFor="">Kelas Online</label>
                    </div>

                    <div className="flex gap-x-2">
                      <input
                        onChange={onChange}
                        className="checkbox rounded-none checkbox-accent h-5 w-5  block py-1 my-1"
                        type="checkbox"
                        name="access_trainer"
                      />
                      <label htmlFor="">Trainer</label>
                    </div>
                    <div className="flex gap-x-2">
                      <input
                        onChange={onChange}
                        className="checkbox rounded-none checkbox-accent h-5 w-5  block py-1 my-1"
                        type="checkbox"
                        name="access_gym"
                      />
                      <label htmlFor="">Gym</label>
                    </div>
                  </div>
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

export default ModalTambahJenis;
