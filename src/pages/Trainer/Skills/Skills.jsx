import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Gym from "../../../apis/get.api";
import PostApi from "../../../apis/post.api";
import ModalHapus from "../../../components/ModalHapus";
import ModalEditSkill from "./ModalEditSkill";
import ModalTambahSkill from "./ModalTambahSkill";

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
      {modal.showTambah && <ModalTambahSkill setMessage={setMessage} show={modal.showTambah} setShow={setModal} />}
      {modal.showEdit && <ModalEditSkill setMessage={setMessage} show={modal.showEdit} setShow={setModal} data={modal.data} />}
      {modal.showHapus && <ModalHapus setMessage={setMessage} show={modal.showHapus} setShow={setModal} data={modal.data} handleDelete={handleDelete} />}
      <Toaster />
      <div>
        <div className="flex items-center justify-betweenx ">
          <h4 className="font-bold text-prim w-full">Daftar Skill</h4>
          <div className="flex w-full justify-end ">
            <label onClick={() => setModal({ showTambah: !modal.showTambah })} className="btn border-prim1 bg-prim1 hover:bg-prim text-white transition duration-200 ease-in hover:border-base">
              <i className="bx bx-user-plus bx-sm pr-2"></i> Tambah Skill
            </label>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4">
        {skill?.map((m) => (
          <div key={m.id} className="w-56  mt-5 relative h-16 border-prim overflow-auto shadow-lg p-1 border bg-white rounded-xl">
            <h1 className="text-center  h-full flex items-center justify-center font-semibold ">{m.name}</h1>
            <div className="absolute gap-x-2 flex right-0 top-0 px-2">
              <button onClick={() => setModal({ showEdit: !modal.showEdit, data: m })} className=" cursor-pointer text-prim">
                <i className="bx bx-edit " />
              </button>
              <span onClick={() => setModal({ showHapus: !modal.showHapus, data: m.id })} className=" cursor-pointer text-prim">
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
