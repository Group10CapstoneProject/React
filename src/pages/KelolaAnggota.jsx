import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Moment from "react-moment";
import { Navigate, useNavigate } from "react-router-dom";
import Gym from "../apis/get.api";
import PostApi from "../apis/post.api";
import addMember from "../assets/svg/addMember.svg";
import ModalAnggota from "../components/ModalAnggota";
import ModalHapus from "../components/ModalHapus";
import ModalTambahAnggota from "../components/ModalTambahAnggota";
import Paginations from "../components/Paginations";
import useHook from "../hooks/useHook";
import Auth from "../utils/Auth";
const KelolaAnggota = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [member, setMember] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalDelete, setModalDelete] = useState({
    isShow: false,
    data: {},
  });
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [postPerPage, setPostPerPage] = useState(10);
  const { load, setLoad } = useHook();
  const listMember = async () => {
    try {
      Gym.members({ currentPage, postPerPage, search }).then((res) =>
        setMember(res.data.data)
      );
    } catch (error) {
      console.log(error);
    }
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
  }, [load, currentPage, search, postPerPage, message]);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleSearch = (e) => {
    e.preventDefault(setSearch(name));
  };
  console.log(member);
  if (load) {
    return <h1>load...</h1>;
  }
  return (
    <div className="relative">
      {show ? (
        <ModalTambahAnggota setLoad={setLoad} show={show} setShow={setShow} />
      ) : (
        ""
      )}

      {modalDelete.isShow && (
        <ModalHapus
          show={modalDelete.isShow}
          handleDelete={handleDelete}
          data={modalDelete.data}
          setShow={setModalDelete}
        />
      )}
      <Toaster />
      <div className="">
        <div className="w-full">
          <h4 className="font-bold text-prim">Kelola Member</h4>
        </div>

        <div className="pt-2 flex justify-between ">
          {/* <form action="" onSubmit={handleSearch}>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Cari Anggota ....."
              className="input input-bordered input-black w-full max-w-xs"
            />
          </form> */}
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Cari Anggota ....."
            className="input input-bordered input-black w-56 max-w-xs"
          />

          <label
            onClick={() => setShow(!show)}
            htmlFor="my-modal-5"
            className="btn text-primary border-primary bg-base hover:bg-primary hover:text-white transition duration-200 ease-in hover:border-base"
          >
            <i className="bx bx-user-plus bx-sm"></i>Tambah member
          </label>
        </div>

        <div className="bg-white my-2 p-2">
          <div className="">
            <table className="table table-compact w-full text-center text-sm ">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Jenis Membership</th>
                  <th>Status Membership</th>
                  <th>Durasi</th>
                  <th>Aktif pada tanggal</th>
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
                      <td
                        className={`${
                          m.status === "ACTIVE"
                            ? "text-suc"
                            : m.status === "INACTIVE"
                            ? "text-dang2"
                            : "text-inf2"
                        }`}
                      >
                        <span> </span>
                        <span>{m.status}</span>
                      </td>
                      <td>{m.duration} Bulan</td>
                      <td>
                        {" "}
                        <Moment format="D MMM YYYY hh:mm:ss">
                          {m.actived_at}
                        </Moment>
                      </td>

                      <td className="flex gap-x-2 items-start justify-center">
                        <label
                          onClick={() => navigate(`/detail/${m.id}`)}
                          htmlFor="my-modal-5"
                          className="btnp flex items-center"
                        >
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
                          Hapus
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
                <select
                  defaultChecked="10"
                  name=""
                  id=""
                  onChange={(e) => setPostPerPage(parseInt(e.target.value))}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">30</option>
                </select>
              </div>
              <Paginations
                postPerPage={postPerPage}
                totalPosts={member?.count}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KelolaAnggota;
