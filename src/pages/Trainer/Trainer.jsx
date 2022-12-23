import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Gym from "../../apis/get.api";
import PostApi from "../../apis/post.api";
import ModalHapus from "../../components/ModalHapus";
import ModalTambahTrainer from "./ModalTambahTrainer";

function Trainer() {
  let navigate = useNavigate();
  const [modal, setModal] = useState({
    showTambah: false,
    showEdit: false,
    showHapus: false,
    data: {},
  });
  const [trainer, setTrainer] = useState([]);
  const [message, setMessage] = useState("");

  const getTrainer = () => {
    Gym.Trainers().then((res) => setTrainer(res.data.data));
  };

  const handleDelete = (e, id) => {
    PostApi.deleteTrainer(id)
      .then((res) => {
        setMessage(res.data.message);
        setModal(false);
      })
      .catch((err) => toast.error(err.message));
  };

  useEffect(() => {
    getTrainer();
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [message]);
  return (
    <>
      {modal.showTambah && <ModalTambahTrainer show={modal.showTambah} setShow={setModal} setMessage={setMessage} />}
      {modal.showHapus && <ModalHapus show={modal.showHapus} setShow={setModal} data={modal.data} handleDelete={handleDelete} />}

      <Toaster />
      <div>
        <div className="flex items-center justify-between ">
          <h4 className="font-bold text-prim">Daftar Trainer</h4>
          <div className="flex justify-end ">
            <label onClick={() => setModal({ showTambah: !modal.showTambah })} className="btn border-prim1 bg-prim1 hover:bg-prim text-white transition duration-200 ease-in hover:border-base">
              <i className="bx bx-user-plus bx-sm pr-2"></i> Tambah Trainer
            </label>
          </div>
        </div>
        {!trainer && <div className="absolute top-1/2 left-1/2">Belum ada Trainer...</div>}
        <div className="grid grid-cols-4 gap-y-5 gap-x-4 mt-5 ">
          {trainer?.map((m) => (
            <div className="h-28 relative shadow-lg ">
              <div className="flex  p-2 gap-x-5 ">
                <div className="w-[20%]">
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src={m.picture} />
                    </div>
                  </div>
                </div>
                <div className="w-[80%]">
                  <p className="text-sm font-semibold">
                    {m.name} ({m.gender})
                  </p>
                  <p className="text-[11px] font-semibold">{m.phone}</p>
                  <p className="text-[11px] font-semibold">
                    {" "}
                    <FormatRupiah value={m.price} />{" "}
                  </p>
                </div>
              </div>
              <div className="px-3">
                <button onClick={() => navigate(`/trainer/${m.id}`)} className="rounded-lg cursor-pointer bg-prim text-white font-semibold active:scale-95 hover:bg-prim/80 transition-all duration-100 ease-linear w-full">
                  Detail
                </button>
              </div>
              <div className="absolute gap-x-2 flex right-0 top-0 px-2">
                <span onClick={() => setModal({ showHapus: !modal.showHapus, data: m.id })} className=" cursor-pointer text-prim">
                  <i class="bx bx-trash-alt"></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Trainer;
