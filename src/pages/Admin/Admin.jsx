import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Gym from "../../apis/get.api";
import PostApi from "../../apis/post.api";
import ModalHapus from "../../components/ModalHapus";
import Paginations from "../../components/Paginations";
import { useDebounce } from "../../hooks/Searching";
import ModalEditAdmin from "./ModalEditAdmin";
import ModalTambahAdmin from "./ModalTambahAdmin";

function Admin() {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [admin, setAdmin] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalDelete, setModalDelete] = useState({
    isShow: false,
    data: {},
  });
  const [modalEdit, setModalEdit] = useState({
    isShow: false,
    data: {},
  });
  const link = useLocation();
  const [message, setMessage] = useState("");
  const [_text, setText] = useState("");
  const [text] = useDebounce(500, _text);
  const [postPerPage, setPostPerPage] = useState(10);
  const [load, setLoad] = useState(false);
  const listAdmin = async () => {
    Gym.getAdmin({ currentPage, postPerPage, text })
      .then((rest) => {
        setAdmin(rest.data.data);
      })
      .catch((err) => toast.error(err.message));
  };

  const handleEdit = (data) => {
    setModalEdit({ isShow: !modalEdit.isShow, data });
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    PostApi.hapusAdmin(id).then((res) => {
      setMessage(res.data.message);
      setModalDelete(false);
    });
  };
  useEffect(() => {
    listAdmin();
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [load, currentPage, text, postPerPage, message]);
  console.log(modalDelete);
  if (load) {
    return <h1>load....</h1>;
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (load) {
    return <h1>load...</h1>;
  }

  return (
    <>
      {modalEdit.isShow ? <ModalEditAdmin setLoad={setLoad} show={modalEdit.isShow} setShow={setModalEdit} data={modalEdit.data} setMessage={setMessage} /> : ""}
      {show && <ModalTambahAdmin setLoad={setLoad} show={show} setShow={setShow} setMessage={setMessage} />}
      <Toaster />

      {modalDelete.isShow && <ModalHapus show={modalDelete.isShow} handleDelete={handleDelete} data={modalDelete.data} setShow={setModalDelete} />}

      <div className="relative" data-aos="zoom-out" data-aos-duration="2000">
        <Toaster />
        <h1 className="text-info font-semibold text-3xl">Admin</h1>
        <div className="flex  pt-4 input-group justify-start"></div>
        <div className="flex items-center justify-between pt-8">
          <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Cari Akun Admin ......" className="input input-bordered input-black  w-56 max-w-xs" />
          <div className="flex justify-end ">
            <button onClick={() => setShow(true)} className="btn border-prim1 bg-prim1 hover:bg-prim text-white transition duration-200 ease-in hover:border-base mr-12">
              <i className="bx bx-user-plus bx-sm pr-2 text-center"></i> Tambah Admin
            </button>
          </div>
        </div>

        <div className="overflow-x-auto pt-8">
          <table className="table table-compact text-black w-full text-center">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Role</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {admin &&
                admin.users !== null &&
                admin.users?.map((m, index) => (
                  <tr key={m.id}>
                    <th>{++index}</th>
                    <td>{m.name}</td>
                    <td>{m.email}</td>

                    <td>{m.role}</td>

                    <td className="flex gap-x-2 items-start justify-center">
                      <label onClick={() => setModalEdit({ isShow: !modalEdit.isShow, data: m })} htmlFor="my-modal-5" className="btnp flex items-center">
                        <i className="bx bx-edit pr-2"></i>Edit
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
        </div>
        {admin && admin?.users == null && (
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
          <Paginations postPerPage={postPerPage} totalPosts={admin?.count} paginate={paginate} currentPage={currentPage} />
        </div>
      </div>
    </>
  );
}

export default Admin;
