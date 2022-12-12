import React, { useEffect, useState } from "react";
import PostApi from "../apis/post.api";
const ModalTambahJenis = ({ setLoad, show, setShow }) => {
  const [btn, setBtn] = useState(true);
  const [check, setCheck] = useState(false);
  const [member, setMember] = useState({
    name: "",
    price: "",
    description: "",
    access_offline_class: false,
    access_online_class: false,
    access_trainer: false,
    access_gym: false,
    picture: null,
  });

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
      [name]: !Number.isNaN(valueAsNumber)
        ? valueAsNumber
        : type == "checkbox"
        ? checked
        : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    PostApi.tambahJenisMember(member).then((res) => setLoad(false));
    setShow(!show);
  };
  console.log(member);
  useEffect(() => {
    if (member.picture != null) {
      setBtn(false);
    }
  }, [member]);
  return (
    <>
      <input defaultChecked={show} type="checkbox" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box   p-0 overflow-hidden w-1/2 max-w-5xl">
          <div className="w-full p-3 bg-base2 flex">
            <span>❗</span>
            <div>
              <h2 className="font-bold text-lg">Tambah Jenis Member</h2>
              <p className="text-sm font-semibold">
                kamu dapat menambahkan jenis member disini.
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
                    onChange={handleImage}
                    name="member_type"
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
                    required
                  />
                  <input
                    onChange={onChange}
                    className="inputJenis w-full"
                    type="number"
                    name="price"
                    required
                  />
                  <input
                    onChange={onChange}
                    className="inputJenis w-full"
                    type="text"
                    name="description"
                    required
                  />

                  <div className="w-full  border px-1 ">
                    <div className="flex gap-x-2">
                      <input
                        onChange={onChange}
                        value={!check}
                        className="checkbox rounded-none checkbox-accent h-5 w-5 block py-1 my-1"
                        type="checkbox"
                        name="access_offline_class"
                      />
                      <label htmlFor="">Kelas Offline</label>
                    </div>
                    <div className="flex gap-x-2">
                      <input
                        onChange={onChange}
                        value={!check}
                        className="checkbox rounded-none checkbox-accent h-5 w-5  block py-1 my-1"
                        type="checkbox"
                        name="access_online_class"
                      />
                      <label htmlFor="">Kelas Online</label>
                    </div>

                    <div className="flex gap-x-2">
                      <input
                        onChange={onChange}
                        value={!check}
                        className="checkbox rounded-none checkbox-accent h-5 w-5  block py-1 my-1"
                        type="checkbox"
                        name="access_trainer"
                      />
                      <label htmlFor="">Trainer</label>
                    </div>
                    <div className="flex gap-x-2">
                      <input
                        onChange={onChange}
                        value={!check}
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
};

export default ModalTambahJenis;
