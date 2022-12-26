import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Gym from "../apis/get.api";
import PostApi from "../apis/post.api";

const ModalTambahAnggota = ({ show, setShow, setMessage }) => {
  const [anggota, setAnggota] = useState({
    email: "",
    member_type_id: 0,
    duration: 0,
    total: 0,
  });
  const [type, setType] = useState([]);

  const memberType = () => {
    Gym.memberType()
      .then((res) => setType(res.data.data))
      .catch((err) => console.log(err));
  };

  const onChange = (e) => {
    const { name, value, type } = e.target;
    setAnggota({
      ...anggota,
      [name]: type == "number" || name == "member_type_id" ? parseInt(value) : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    PostApi.tambahMemberAdmin(anggota)
      .then((res) => {
        setMessage(res.data.message);
        setShow(false);
      })
      .catch((err) => toast.error(err.message));
  };
  useEffect(() => {
    memberType();
  }, []);
  return (
    <>
      <Toaster />
      <input defaultChecked={show} type="checkbox" id="my-modal" className="modal-toggle" />
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box  p-0 overflow-hidden w-1/2 max-w-5xl">
          <div className="w-full p-3 bg-base2 flex">
            <span>❗</span>
            <div>
              <h2 className="font-bold text-lg">Tambah Member</h2>
              <p className="text-sm font-semibold">kamu dapat menambahkan data member disini.</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} action="">
            <div className="p-3 ">
              <div className="flex w-full px-2 ">
                <div className="w-52 font-bold">
                  <label className="block my-1 py-1" htmlFor="">
                    Email
                  </label>
                  <label className="block my-1 py-1" htmlFor="">
                    Member Type
                  </label>
                  <label className="block my-1 py-1" htmlFor="">
                    Duration
                  </label>
                  <label className="block my-1 py-1" htmlFor="">
                    Total
                  </label>
                </div>
                <div className="w-full">
                  <input onChange={onChange} className="w-full input-sm border border-primary   block py-1 my-1 rounded-none input-primary" type="text" name="email" />

                  <select className="select select-primary w-44 select-sm max-w-xs" name="member_type_id" onChange={onChange} required>
                    <option disabled selected>
                      Pilih tipe member
                    </option>
                    {type &&
                      type?.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.name}
                        </option>
                      ))}
                  </select>
                  <input className="w-full input-sm border border-primary block py-1 my-1 rounded-none input-primary" name="duration" type="number" onChange={onChange} />
                  <input className="w-full input-sm border border-primary  block py-1 my-1 rounded-none input-primary" name="total" type="number" onChange={onChange} />
                </div>
              </div>
              <div className="modal-action flex items-center">
                <button className="btnp">
                  <i className="bx bx-add-to-queue pr-2" />
                  Tambah
                </button>
                <label onClick={() => setShow(!show)} htmlFor="my-modal-5" className="btnd">
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
};

export default ModalTambahAnggota;
