import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Gym from "../../../apis/get.api";
import PostApi from "../../../apis/post.api";
import ModalHapus from "../../../components/ModalHapus";
import ModalEditSkill from "./ModalEditSkill";
import ModalTambahSkill from "./ModalTambahSkill";
import ModalTambahTrainer from "./ModalTambahSkill";

function Skills() {
  const [modal, setModal] = useState({
    showTambah: false,
    showEdit: false,
    data: {},
    showHapus: false,
  });
  const [message, setMessage] = useState("");
  const [skill, setSkill] = useState([]);

  const getSkill = () => {
    Gym.Skills()
      .then((res) => setSkill(res.data.data))
      .catch((err) => console.log(err));
  };
  const handleDelete = (e, id) => {
    PostApi.deleteSkill(id)
      .then((res) => toast.success(res.data.message))
      .catch((err) => toast.error(err.message));
  };

  useEffect(() => {
    getSkill();
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [message]);
  return (
    <>
      {modal.showTambah && (
        <ModalTambahSkill
          setMessage={setMessage}
          show={modal.showTambah}
          setShow={setModal}
        />
      )}
      {modal.showEdit && (
        <ModalEditSkill
          setMessage={setMessage}
          show={modal.showEdit}
          setShow={setModal}
          data={modal.data}
        />
      )}
      {modal.showHapus && (
        <ModalHapus
          setMessage={setMessage}
          show={modal.showHapus}
          setShow={setModal}
          data={modal.data}
          handleDelete={handleDelete}
        />
      )}
      <Toaster />
      <div>
        <div className="flex items-center justify-between ">
          <h4 className="font-bold text-prim">Daftar Skill</h4>
          <div className="flex justify-end ">
            <label
              onClick={() => setModal({ showTambah: !modal.showTambah })}
              className="btn border-prim bg-prim hover:bg-accent text-white transition duration-200 ease-in hover:border-base"
            >
              <i className="bx bx-user-plus bx-sm"></i> Tambah Skill
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4">
        {skill?.map((m) => (
          <div
            key={m.id}
            className="w-56 mt-5 relative h-24 shadow-lg p-2 border bg-white rounded-xl"
          >
            <h1 className="text-center font-semibold ">{m.name}</h1>
            <p className="text-sm">{m.description}</p>
            <div className="absolute gap-x-2 flex right-0 top-0 px-2">
              <span
                onClick={() => setModal({ showEdit: !modal.showEdit, data: m })}
                className=" cursor-pointer text-prim"
              >
                <i class="bx bxs-edit-alt"></i>
              </span>
              <span
                onClick={() =>
                  setModal({ showHapus: !modal.showHapus, data: m.id })
                }
                className=" cursor-pointer text-prim"
              >
                <i class="bx bx-trash-alt"></i>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
