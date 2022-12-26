import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useEffect, useState } from "react";
import Gym from "../apis/get.api";
import PostApi from "../apis/post.api";
import addMember from "../assets/svg/addMember.svg";
import ModalEditJenis from "../components/ModalEditJenis";
import { ModalJenisMember } from "../components/ModalJenisMember";
import ModalTambahJenis from "../components/ModalTambahJenis.jsx";
import useHook from "../hooks/useHook";
import toast, { Toaster } from "react-hot-toast";
import ModalHapus from "../components/ModalHapus";

const JenisMembership = () => {
  const [member, setMember] = useState(null);
  const [data, setDatas] = useState(null);
  const [message, setMessage] = useState("");
  const { show, setShow } = useHook();
  const { load, setLoad } = useHook();
  const { show: modalTambah, setShow: setModalTambah } = useHook();
  const [modalDelete, setModalDelete] = useState({
    isShow: false,
    data: {},
  });
  const [modalEdit, setModalEdit] = useState({
    isShow: false,
    data: {},
  });

  const listMember = async () => {
    try {
      Gym.memberType().then((res) => setMember(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = (e, id) => {
    e.preventDefault();
    try {
      PostApi.hapusJenisMember(id).then((res) => {
        setMessage(res.data.message);
        setModalDelete(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (data) => {
    setModalEdit({ isShow: !modalEdit.isShow, data });
  };

  useEffect(() => {
    listMember();
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [load, message]);

  if (load) {
    return (
      <div className="flex items-center relative h-screen justify-center">
        <span className="absolute">🔃</span>
      </div>
    );
  }
  return (
    <>
      <Toaster />
      <div className="relative">
        {show ? <ModalJenisMember show={show} setShow={setShow} /> : ""}
        {modalEdit.isShow ? <ModalEditJenis setLoad={setLoad} setShow={setModalEdit} show={modalEdit.isShow} data={modalEdit.data} setMessage={setMessage} /> : ""}

        {modalTambah ? <ModalTambahJenis setMessage={setMessage} setLoad={setLoad} show={modalTambah} setShow={setModalTambah} /> : ""}

        {modalDelete.isShow && <ModalHapus show={modalDelete.isShow} setShow={setModalDelete} data={modalDelete.data} handleDelete={handleDelete} />}
        <div className="">
          <div className="w-full">
            <h4 className="font-bold text-prim">Jenis Membership</h4>
          </div>

          <div className="pt-2 flex justify-between ">
            <input type="text" placeholder="Cari Membership ....." className="input input-bordered input-black w-56 max-w-xs" />

            <label htmlFor="my-modal-5" onClick={() => setModalTambah(!modalTambah)} className="btn text-primary border-primary bg-base hover:bg-primary hover:text-white transition duration-200 ease-in hover:border-base">
              <i className="bx bx-user-plus bx-sm pr-2"></i> Tambah Jenis
            </label>
          </div>

          <div className="bg-white my-2 p-2">
            <div className="grid grid-cols-3 gap-4 ">
              {member &&
                member.map((m) => (
                  <div key={m.id} className="w-[300px] border overflow-hidden shadow-xl rounded-xl h-[400px] bg-white ">
                    <div className="w-full pt-3 bg-prim"></div>
                    <div className="flex  justify-between flex-col h-full p-3 items-center ">
                      <img className="mt-2 h-20 w-20" src={m.picture} alt="icon" />
                      <h1 className=" py-1 text-black capitalize text-[20px] font-semibold">{m.name}</h1>
                      <h2 className="text-prim border w-full text-center  py-1 text-[20px] font-semibold">
                        <FormatRupiah value={m.price} />
                        /Bulan
                      </h2>

                      <div className="flex p-2 flex-col w-full gap-y-2  text-[12px]">
                        <div className="flex items-center w-full gap-x-2">
                          {m.access_offline_class == true ? <i className="bx text-[20px] text-suc bx-check-circle"></i> : <i className="bx text-[20px] text-red-700 bx-check-circle"></i>}
                          <p className="text-[12px]">Dapatkan akses kelas Offline</p>
                        </div>

                        <div className="flex items-center w-full gap-x-2">
                          {m.access_online_class == true ? <i className="bx text-[20px] text-suc bx-check-circle"></i> : <i className="bx text-[20px] text-red-700 bx-check-circle"></i>}
                          <p className="text-[12px]"> Dapatkan akses kelas Online</p>
                        </div>
                        <div className="flex items-center w-full gap-x-2">
                          {m.access_trainer == true ? <i className="bx text-[20px] text-suc bx-check-circle"></i> : <i className="bx text-[20px] text-red-700 bx-check-circle"></i>}
                          <p className="text-[12px]">Dapatkan Trainer</p>
                        </div>

                        <div className="flex items-center w-full gap-x-2">
                          {m.access_gym == true ? <i className="bx text-[20px] text-suc bx-check-circle"></i> : <i className="bx text-[20px] text-red-700 bx-check-circle"></i>}
                          <p className="text-[12px]">Dapatkan akses Gym</p>
                        </div>
                      </div>
                      <div className="flex flex-col w-full  gap-y-2 pb-3 justify-end ">
                        <label onClick={() => handleEdit(m)} className="btnp w-full text-center  ">
                          Edit
                        </label>
                        <label
                          onClick={() =>
                            setModalDelete({
                              isShow: !modalDelete.isShow,
                              data: m.id,
                            })
                          }
                          className="btnd w-full text-center  "
                        >
                          Hapus
                        </label>
                        <div className="absolute bottom-0"></div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default JenisMembership;