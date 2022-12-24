// import React, { useEffect, useState } from "react";
// import { toast, Toaster } from "react-hot-toast";
// import Moment from "react-moment";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Gym from "../apis/get.api";
// import PostApi from "../apis/post.api";
// import { useDebounce } from "../hooks/Searching";
// import Paginations from "../components/Paginations";
// import ModalHapus from "../components/ModalHapus";
// import ModalTambahKategoriOnline from "./Admin/ModalTambahAnggota";
// import ModalEditAdmin from "./Admin/ModalEditAdmin";

// function Admin() {
//   let navigate = useNavigate();
//   const [show, setShow] = useState(false);
//   const [member, setMember] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [modalDelete, setModalDelete] = useState({
//     isShow: false,
//     data: {},
//   });
//   const [modalEdit, setModalEdit] = useState({
//     isShow: false,
//     data: {},
//   });
//   const link = useLocation();
//   const [message, setMessage] = useState("");
//   const [_text, setText] = useState("");
//   const [text] = useDebounce(3000, _text);
//   const [postPerPage, setPostPerPage] = useState(10);
//   const [load, setLoad] = useState(false);
//   const listMember = async () => {
//     Gym.members({ currentPage, postPerPage, text })
//       .then((rest) => {
//         setMember(rest.data.data);
//       })
//       .catch((err) => toast.error(err.message));

//     setLoad(false);
//   };

//   const handleEdit = (data) => {
//     setModalEdit({ isShow: !modalEdit.isShow, data });
//   };

//   const handleDelete = (e, id) => {
//     e.preventDefault();
//     PostApi.hapusAnggota(id).then((res) => {
//       setMessage(res.data.message);
//       setModalDelete(false);
//     });
//   };
//   useEffect(() => {
//     listMember();
//     if (message !== "") {
//       toast.success(message);
//       setMessage("");
//     }
//   }, [load, currentPage, text, postPerPage, message]);
//   console.log(modalDelete);
//   if (load) {
//     return <h1>load....</h1>;
//   }

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   if (load) {
//     return <h1>load...</h1>;
//   }

//   return (
//     <>
//       {modalEdit.isShow ? <ModalEditAdmin setLoad={setLoad} show={modalEdit.isShow} setShow={setModalEdit} data={modalEdit.data} setMessage={setMessage} /> : ""}
//       <Toaster />

//       {modalDelete.isShow && <ModalHapus show={modalDelete.isShow} handleDelete={handleDelete} data={modalDelete.data} setShow={setModalDelete} />}

//       <div className="relative">
//         <Toaster />
//         <h1 className="text-info font-bold text-3xl">Admin</h1>
//         <div className="flex  pt-4 input-group justify-start"></div>
//         <div className="flex items-center justify-between pt-8">
//           <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Cari Akun Admin ......" className="input input-bordered input-black  w-56 max-w-xs" />
//           <div className="flex justify-end ">
//             <Link to="/tambahadmin" className="btn border-prim1 bg-prim1 hover:bg-prim text-white transition duration-200 ease-in hover:border-base">
//               <i className="bx bx-user-plus bx-sm pr-2 text-center"></i> Tambah Admin
//             </Link>
//           </div>
//         </div>

//         <div className="overflow-x-auto pt-8">
//           <table className="table table-compact text-black w-full text-center">
//             <thead>
//               <tr>
//                 <th>No</th>
//                 <th>Nama</th>
//                 <th>Jenis Membership</th>
//                 <th>Status Membership</th>
//                 <th>Durasi</th>
//                 <th>Aktif pada tanggal</th>
//                 <th>Aksi</th>
//               </tr>
//             </thead>
//             <tbody>
//               {member &&
//                 member.members !== null &&
//                 member.members?.map((m, index) => (
//                   <tr key={m.id}>
//                     <th>{++index}</th>
//                     <td>{m.user_name}</td>
//                     <td>{m.member_type_name}</td>

//                     <td className={`${m.status === "ACTIVE" ? "text-suc" : m.status === "INACTIVE" ? "text-dang2  " : "text-inf2"}`}>
//                       <div className={` lowercase flex justify-center items-center`}>
//                         <span className={`${m.status === "ACTIVE" ? "bg-suc/10 pr-2" : m.status === "INACTIVE" ? "bg-dang2/10 pr-2  " : "bg-inf2/10 pr-2"} lowercase`}>
//                           <i className="bx  bx-wifi-0"></i>
//                           {m.status}
//                         </span>
//                       </div>
//                     </td>
//                     <td>{m.duration} Bulan</td>
//                     <td>
//                       {" "}
//                       <Moment format="D MMM YYYY hh:mm:ss">{m.actived_at}</Moment>
//                     </td>

//                     <td className="flex gap-x-2 items-start justify-center">
//                       <label onClick={() => handleEdit(m)} htmlFor="my-modal-5" className="btnp flex items-center">
//                         Detail
//                       </label>
//                       <button
//                         onClick={() =>
//                           setModalDelete({
//                             isShow: !modalDelete.isShow,
//                             data: m.id,
//                           })
//                         }
//                         className="btnd"
//                       >
//                         Hapus
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//         {member && member?.members == null && (
//           <div className=" text-center">
//             <p>Member tidak ditemukan</p>
//           </div>
//         )}
//         <div className="flex justify-between">
//           <div className="flex gap-x-2 font-semibold">
//             <label>Show : </label>
//             <select defaultChecked="10" name="" id="" onChange={(e) => setPostPerPage(parseInt(e.target.value))}>
//               <option value="10">10</option>
//               <option value="20">20</option>
//               <option value="30">30</option>
//               <option value="40">40</option>
//             </select>
//           </div>
//           <Paginations postPerPage={postPerPage} totalPosts={member?.count} paginate={paginate} currentPage={currentPage} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Admin;
