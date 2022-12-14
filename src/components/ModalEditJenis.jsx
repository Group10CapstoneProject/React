import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import PostApi from "../apis/post.api";

const ModalEditJenis = ({ data, show, setShow, setLoad, setMessage }) => {
  const [check, setCheck] = useState(false);
  const { id, name, price, description, picture, access_online_class, access_offline_class, access_trainer, access_gym } = data;
  const [member, setMember] = useState({
    id: id,
    name: name,
    price: price,
    description: description,
    access_offline_class: access_offline_class,
    access_online_class: access_online_class,
    access_trainer: access_trainer,
    access_gym: access_gym,
    picture: picture,
  });
  console.log(member);
  const handleImage = (e) => {
    const { name, files } = e.target;
    PostApi.uploadFile({ title: name, files }).then((res) =>
      setMember({
        ...member,
        picture: res.data.data.url,
      })
    );
  };

  const onChange = (e) => {
    const { name, value, type, checked, valueAsNumber } = e.target;

    setMember({
      ...member,
      [name]: !Number.isNaN(valueAsNumber) ? valueAsNumber : type == "checkbox" ? checked : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    PostApi.updateJenis(member)
      .then((res) => {
        setMessage(res.data.message);
        setShow(!show);
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
              <h2 className="font-bold text-lg">Edit Jenis Member</h2>
              <p className="text-sm font-semibold">kamu dapat mengedit data member dan menkonfirmasi pembayaran disini.</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-3 ">
              <div className="flex w-full px-2 gap-x-2 ">
                <div className="w-[20%]  flex justify-center">
                  <div className={`${member.picture !== null ? "" : "bg-[#D3D3D3]"} w-28  gap-x-1 flex items-center justify-center rounded-full relative cursor-pointer  h-28  border`}>
                    <input onChange={handleImage} className="absolute block w-full h-full z-50  cursor-pointer opacity-0  border pin-r pin-t" type="file" name="member_type" />
                    {member.picture !== null && <img className="absolute w-28 h-28 cursor-pointer rounded-full" src={member.picture} alt="" />}
                    <i className="bx bxs-camera-plus"></i>
                    <span className="">Pilih Foto</span>
                  </div>
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
                  <input onChange={onChange} className="inputJenis w-full" type="text" name="name" defaultValue={name} />
                  <input onChange={onChange} className="inputJenis w-full" type="number" name="price" defaultValue={price} />
                  <input onChange={onChange} className="inputJenis w-full" type="text" name="description" defaultValue={description} />

                  <div className="w-full  border px-1 ">
                    <div className="flex gap-x-2">
                      <input onChange={onChange} className="checkbox rounded-none checkbox-accent h-5 w-5 block py-1 my-1" type="checkbox" name="access_offline_class" defaultChecked={access_offline_class} />
                      <label htmlFor="">Kelas Offline</label>
                    </div>
                    <div className="flex gap-x-2">
                      <input onChange={onChange} className="checkbox rounded-none checkbox-accent h-5 w-5  block py-1 my-1" type="checkbox" name="access_online_class" defaultChecked={access_online_class} />
                      <label htmlFor="">Kelas Online</label>
                    </div>

                    <div className="flex gap-x-2">
                      <input onChange={onChange} className="checkbox rounded-none checkbox-accent h-5 w-5  block py-1 my-1" type="checkbox" name="access_trainer" defaultChecked={access_trainer} />
                      <label htmlFor="">Trainer</label>
                    </div>
                    <div className="flex gap-x-2">
                      <input onChange={onChange} className="checkbox rounded-none checkbox-accent h-5 w-5  block py-1 my-1" type="checkbox" name="access_gym" defaultChecked={access_gym} />
                      <label htmlFor="">Gym</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-action flex">
                <button className="btnp">
                  <i className="bx bx-save pr-2" />
                  Simpan
                </button>
                <label onClick={() => setShow(!show)} htmlFor="my-modal-5" className="btnd">
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
};

export default ModalEditJenis;
