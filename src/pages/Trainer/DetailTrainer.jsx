import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import Gym from "../../apis/get.api";
import ModalEditTrainer from "./ModalEditTrainer";

function DetailTrainer() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [modal, setModal] = useState({
    showEdit: false,
    data: {},
  });
  const [message, setMessage] = useState("");

  const detailTrainer = () => {
    Gym.detailTrainer(id)
      .then((res) => {
        setDetail(res.data.data);
      })
      .catch((err) => toast.error(err.message));
  };
  useEffect(() => {
    detailTrainer();
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [message]);
  // const skills = detail?.trainer_skill.map((m) => m.skill_id);

  return (
    <>
      <Toaster />
      {modal.showEdit && <ModalEditTrainer show={modal.showEdit} setShow={setModal} data={modal.data} setMessage={setMessage} />}
      <div className="flex justify-center w-full">
        <div className="w-[25%]">
          <div className="avatar">
            <div className="w-56 rounded-lg">
              <img src={detail?.picture} />
            </div>
          </div>
        </div>
        <div className="w-[60%] ">
          <h1 className="text-3xl text-prim capitalize font-bold">{detail?.name}</h1>
          <p className="text-gray-700 text-sm">{detail?.email}</p>
          <p className="text-sm pr-44">{detail?.description}</p>
          <div className="flex  gap-x-6 mt-5 text-sm text-black">
            <div className="capitalize">
              <p>Nomor handphone</p>
              <p>Umur</p>
              <p>Gender</p>
              <p>Harga</p>
              <p>Daily slot</p>
              <p>Skill</p>
              <p>client active</p>
              <p>Acces trainer</p>
            </div>
            <div className="capitalize">
              <p>: {detail?.phone}</p>
              <p>: {detail?.age} Tahun</p>
              <p>: {detail?.gender}</p>
              <p>
                : <FormatRupiah value={detail?.price} />
              </p>
              <p>: {detail?.daily_slot}</p>

              <p>
                :
                {detail?.trainer_skill?.map((m) => (
                  <span key={m.id}>{m.skill_name} </span>
                ))}
              </p>
              <p>: {detail?.client_active}</p>
              <p>: {detail?.access_trainer == true ? "check" : "not"}</p>
            </div>
          </div>
        </div>
        <div className="w-[10%] h-8 items-center flex justify-center ">
          <button onClick={() => setModal({ showEdit: !modal.showEdit, data: detail })} className="btnp">
            <i className="bx bx-edit pr-2 " />
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default DetailTrainer;
