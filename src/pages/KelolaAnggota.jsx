import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import Gym from "../apis/get.api";
import PostApi from "../apis/post.api";
import ModalHapus from "../components/ModalHapus";
import ModalTambahAnggota from "../components/ModalTambahAnggota";
import Paginations from "../components/Paginations";
import { useDebounce } from "../hooks/Searching";
import useHook from "../hooks/useHook";

const KelolaAnggota = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [member, setMember] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalDelete, setModalDelete] = useState({
    isShow: false,
    data: {},
  });
  const [message, setMessage] = useState("");
  const [_text, setText] = useState("");
  const [text] = useDebounce(500, _text);
  const [postPerPage, setPostPerPage] = useState(10);
  const [load, setLoad] = useState(false);
  const listMember = async () => {
    Gym.members({ currentPage, postPerPage, text })
      .then((res) => {
        setMember(res.data.data);
      })
      .catch((err) => toast.error(err.message));

    setLoad(false);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    PostApi.hapusAnggota(id).then((res) => {
      setMessage(res.data.message);
      setModalDelete(false);
    });
  };
  useEffect(() => {
    listMember();
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [load, currentPage, text, postPerPage, message]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (load) {
    return <h1>load...</h1>;
  }
  return (
    <div className="relative" data-aos="zoom-in-up" data-aos-duration="2000">
      {show ? <ModalTambahAnggota setMessage={setMessage} setLoad={setLoad} show={show} setShow={setShow} /> : ""}

      {modalDelete.isShow && <ModalHapus show={modalDelete.isShow} handleDelete={handleDelete} data={modalDelete.data} setShow={setModalDelete} />}
      <Toaster />
      <div className="">
        <div className="w-full">
          <h4 className="font-semibold text-prim">Kelola Member</h4>
        </div>

        <div className="pt-2 flex justify-between pr-10">
          <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Cari Member ....." className="input input-bordered input-black w-56 max-w-xs" />
          <label onClick={() => setShow(!show)} htmlFor="my-modal-5" className="btn border-prim1 bg-prim1 hover:bg-prim text-white transition duration-200 ease-in hover:border-base">
            <i className="bx bx-user-plus bx-sm pr-2"></i>Tambah member
          </label>
        </div>

        <div className="bg-white my-2 p-2">
          <div className="">
            <table className="table table-compact w-full text-sm text-center">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Jenis Membership</th>
                  <th>Status Membership</th>
                  <th>Durasi</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody className="font-semibold capitalize">
                {member &&
                  member.members !== null &&
                  member.members?.map((m, index) => (
                    <tr key={m.id}>
                      <th>{++index}</th>
                      <td>{m.user_name}</td>
                      <td>{m.member_type_name}</td>

                      <td className={`${m.status === "ACTIVE" ? "text-suc" : m.status === "INACTIVE" ? "text-dang2  " : "text-inf2"}`}>
                        <div className={` lowercase flex items-center justify-center`}>
                          <span className={`${m.status === "ACTIVE" ? "bg-suc/10 px-2" : m.status === "INACTIVE" ? "bg-dang2/10 px-2  " : "bg-inf2/10 px-2"} lowercase`}>{m.status}</span>
                        </div>
                      </td>
                      <td>{m.duration} Bulan</td>

                      <td className="flex gap-x-2 items-start justify-center">
                        <label onClick={() => navigate(`/detail/${m.id}`)} htmlFor="my-modal-5" className="btnp flex items-center">
                          <i className="bx bxs-user-detail pr-2" />
                          Detail
                        </label>
                        <button
                          onClick={() =>
                            setModalDelete({
                              isShow: !modalDelete.isShow,
                              data: m.id,
                            })
                          }
                          className="btnd"
                        >
                          <i class="bx bx-trash-alt pr-2"></i>Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {member && member?.members == null && (
              <div className=" text-center">
                <p>Member tidak ditemukan</p>
              </div>
            )}
            <div className="flex justify-between">
              <div className="flex gap-x-2 font-semibold">
                <label>Show : </label>
                <select defaultChecked="10" name="" id="" onChange={(e) => setPostPerPage(parseInt(e.target.value))}>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                </select>
              </div>
              <Paginations postPerPage={postPerPage} totalPosts={member?.count} paginate={paginate} currentPage={currentPage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KelolaAnggota;
