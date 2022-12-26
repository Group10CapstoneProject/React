import { FormatRupiah } from "@arismun/format-rupiah";
import { data } from "autoprefixer";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import Moment from "react-moment";
import { useParams } from "react-router-dom";
import Gym from "../apis/get.api";
import PostApi from "../apis/post.api";
import ModalAnggota from "../components/ModalAnggota";
import ModalDetailPembayaran from "../components/ModalDetailPembayaran";
import { ModalDetailProfile } from "../components/ModalDetailProfile";
import { ModalDetailTipeMember } from "../components/ModalDetailTipeMember";

const DetailAnggota = () => {
  const { id } = useParams();
  const [modal, setModal] = useState({
    profile: false,
    tipe: false,
    metode: false,
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [member, setmembers] = useState([]);
  const memberDetails = () => {
    setLoading(true);
    try {
      Gym.membersDetail(id).then((res) => setmembers(res.data.data));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      PostApi.konfirmasiMembers({ id, status }).then((res) => {
        setMessage(res.data.message);
      });
    } catch (err) {
      toast.error(err.message);
    }
  };
  useEffect(() => {
    memberDetails();
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [loading, message]);
  if (loading) {
    return <h1>loading</h1>;
  }
  return (
    // <>
    //   {member && (
    //     <>
    //       {modal.showProfile ? (
    //         <ModalDetailProfile
    //           data={member.user}
    //           setShow={setModal}
    //           show={modal.showProfile}
    //         />
    //       ) : (
    //         ""
    //       )}
    //       {modal.showTipe && (
    //         <ModalDetailTipeMember
    //           data={member.member_type}
    //           setShow={setModal}
    //           show={modal.showTipe}
    //         />
    //       )}
    //       {modal.showMetode && (
    //         <ModalDetailPembayaran
    //           data={member.payment_method}
    //           setShow={setModal}
    //           show={modal.showMetode}
    //         />
    //       )}
    //       <h2 className="px-6 pt-2 text-3xl font-semibold text-prim">
    //         Kelola Anggota / Detail
    //       </h2>
    //       <div className="flex m-3 p-3  border ">
    //         <div className="w-1/2 ">
    //           <div className=" flex gap-x-14 font-semibold text-md">
    //             <div className="capitalize">
    //               <p>Nama</p>
    //               <p>Jenis Membership</p>
    //               <p>Durasi Membership</p>
    //               <p>Pembayaran Melalui</p>
    //               <p>Durasi Membership</p>
    //               <p>Total Harga</p>
    //               <p>Status member</p>
    //             </div>
    //             <div className="capitalize">
    //               <p>: {member.user?.name}</p>
    //               <p>: {member.member_type?.name}</p>
    //               <p>: {member?.duration} bulan</p>
    //               <p>: {member?.payment_method?.name}</p>
    //               <p>
    //                 :
    //                 <Moment format="D MMM YYYY hh:mm:ss">
    //                   {member.expired_at}
    //                 </Moment>
    //               </p>
    //               <p>
    //                 : <FormatRupiah value={member?.total} />{" "}
    //               </p>
    //               <p>: {member?.status}</p>
    //             </div>
    //           </div>
    //           <div>
    //             <div className="flex gap-x-2">
    //               <button
    //                 onClick={() => setModal({ showProfile: !modal.profile })}
    //                 className="btnp"
    //               >
    //                 Profile
    //               </button>
    //               <button
    //                 onClick={() => setModal({ showTipe: !modal.tipe })}
    //                 className="btnp"
    //               >
    //                 Tipe member
    //               </button>
    //               <button
    //                 onClick={() => setModal({ showMetode: !modal.metode })}
    //                 className="btnp"
    //               >
    //                 Metode Pembayaran
    //               </button>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="w-1/2 flex-col justify-center ">
    //           <div className="w-1/2 pb-2">
    //             <h2 className="font-semibold text-md pb-2">Bukti pembayaran</h2>
    //             <img
    //               className="2 cursor-zoom-in hover:scale-150 transform-gpu ease-in-out duration-300"
    //               src={member.proof_payment}
    //               alt=""
    //             />
    //           </div>
    //           <div className="flex gap-x-10">
    //             <h2 className="text-lg font-semibold">Status Membership</h2>
    //             <select
    //               onChange={(e) => setStatus(e.target.value)}
    //               name="status"
    //             >
    //               <option defaultValue="menunggu">Menunggu Konfirmasi</option>
    //               <option value="REJECT">REJECT</option>
    //               <option value="INACTIVE">INACTIVE</option>
    //               <option value="ACTIVE">ACTIVE</option>
    //             </select>
    //           </div>
    //           <div className="flex gap-x-2">
    //             <button
    //               onClick={handleSubmit}
    //               className="h-8 px-3 bg-prim btn border-none min-h-0 text-white"
    //             >
    //               Simpan
    //             </button>
    //             <button className="h-8 px-3 bg-dang2 border-none text-white btn min-h-0">
    //               Batal
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   )}
    // </>
    <>
      <Toaster />

      <h2 className="px-6 pt-2 text-3xl font-semibold text-prim">Kelola Anggota / Detail</h2>
      <div className="flex m-3 p-3 gap-x-5  border   ">
        <div className="w-[60%]  ">
          <div className=" flex gap-x-14 font-semibold text-md">
            <div className="capitalize">
              <p>Nama</p>
              <p>Email</p>
              <p>Aktif Pada Tanggal</p>
              <p>Pembayaran Melalui</p>
              <p>Nomor Pembayaran</p>
              <p>Total Harga</p>
              <p>Status</p>
            </div>
            <div className="capitalize">
              <p>: {member.user?.name}</p>
              <p>: {member.user?.email}</p>
              <p>
                : <Moment format="D MMM YYYY hh:mm:ss">{member?.actived_at}</Moment>
              </p>
              <p>: {member.payment_method?.name}</p>
              <p>: {member.payment_method?.payment_number}</p>

              <p>
                : <FormatRupiah value={member.total} />{" "}
              </p>
              <p>: {member.status}</p>
            </div>
          </div>
        </div>

        <div className="w-[40%]  flex-col justify-center ">
          <div className=" flex gap-x-14 font-semibold text-md">
            <div className="capitalize">
              <p>Jenis Member</p>
              <p>Harga</p>
              <p>Durasi</p>
              <p>Akses Offline</p>
              <p>Akses Online</p>
              <p>Akses Trainer</p>
              <p>Akses Gym</p>
            </div>
            <div className="capitalize">
              <p>: {member.member_type?.name}</p>

              <p>
                : <FormatRupiah value={member.member_type?.price} />{" "}
              </p>
              <p>: {member.duration} Bulan</p>
              <p>: {member.member_type?.access_offline_class == true ? <i className="bx text-[20px] text-suc bx-check-circle"></i> : <i className="bx text-[20px] text-red-700 bx-check-circle"></i>}</p>
              <p>: {member.member_type?.access_online_class == true ? <i className="bx text-[20px] text-suc bx-check-circle"></i> : <i className="bx text-[20px] text-red-700 bx-check-circle"></i>}</p>
              <p>: {member.member_type?.access_trainer == true ? <i className="bx text-[20px] text-suc bx-check-circle"></i> : <i className="bx text-[20px] text-red-700 bx-check-circle"></i>}</p>
              <p>: {member.member_type?.access_gym == true ? <i className="bx text-[20px] text-suc bx-check-circle"></i> : <i className="bx text-[20px] text-red-700 bx-check-circle"></i>}</p>
            </div>
          </div>
        </div>
      </div>

      <form className="flex flex-col  px-6  w-full" onSubmit={handleSubmit}>
        <div className="w-full pb-2">
          <h2 className="font-semibold  text-md pb-2">Bukti pembayaran</h2>
          <img className="w-44" src={``} alt="" />
        </div>
        <div className="flex gap-x-10 py-5 w-full ">
          <h2 className="text-md font-semibold">Status Membership</h2>
          <select className="select select-bordered select-sm w-full max-w-xs" name="status" onChange={(e) => setStatus(e.target.value)}>
            <option defaultValue="menunggu">Menunggu Konfirmasi</option>
            <option value="REJECT">REJECT</option>
            <option value="INACTIVE">INACTIVE</option>
            <option value="ACTIVE">ACTIVE</option>
          </select>
        </div>
        <div className="flex gap-x-2">
          <button className="h-8 px-3 bg-prim btn border-none min-h-0 text-white">Simpan</button>
          <button className="h-8 px-3 bg-dang2 border-none text-white btn min-h-0">Batal</button>
        </div>
      </form>
    </>
  );
};

export default DetailAnggota;
