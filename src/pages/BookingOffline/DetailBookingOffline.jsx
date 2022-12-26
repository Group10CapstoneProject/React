import { FormatRupiah } from "@arismun/format-rupiah";
import { data } from "autoprefixer";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Moment from "react-moment";
import { useParams } from "react-router-dom";
import Gym from "../../apis/get.api";
import PostApi from "../../apis/post.api";
import ModalDetailPembayaran from "../../components/ModalDetailPembayaran";
import { ModalDetailProfile } from "../../components/ModalDetailProfile";
import { ModalDetailTipeMember } from "../../components/ModalDetailTipeMember";
import { Member } from "../Member";
import ModalEditBooking from "./ModalEditBooking";

function DetailBookingOffline() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [message, setMessage] = useState("");
  const [modalEdit, setModalEdit] = useState({
    isShow: false,
    data: {},
  });

  const [status, setStatus] = useState("");

  const detailBooking = () => {
    Gym.detailBookingOffline(id).then((res) => setDetail(res.data.data));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    PostApi.setStatusBookingOffline({ id, status })
      .then((res) => setMessage(res.data.message))
      .catch((err) => toast.error(err.message));
  };

  console.log(detail);
  useEffect(() => {
    detailBooking();
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [message]);
  return (
    <>
      <Toaster />
      {modalEdit.isShow && (
        <ModalEditBooking
          show={modalEdit.isShow}
          data={modalEdit.data}
          setShow={setModalEdit}
          setMessage={setMessage}
        />
      )}
      <h2 className="px-6 pt-2 text-3xl font-semibold text-prim">
        Kelola Anggota / Detail
      </h2>
      <div className="flex m-3 p-3 gap-x-5  border   ">
        <div className="w-[60%]  ">
          <div className=" flex gap-x-14 font-semibold text-md">
            <div className="capitalize">
              <p>Nama</p>
              <p>Email</p>
              <p>Aktif Pada Tanggal</p>
              <p>Pembayaran Melalui</p>
              <p>Nomor Pembayaran</p>
              <p>Code</p>
              <p>Total Harga</p>
              <p>Status</p>
            </div>
            <div className="capitalize">
              <p>: {detail.user?.name}</p>
              <p>: {detail.user?.email}</p>
              <p>
                :{" "}
                <Moment format="D MMM YYYY hh:mm:ss">
                  {detail?.actived_at}
                </Moment>
              </p>
              <p>: {detail.payment_method?.name}</p>
              <p>: {detail.payment_method?.payment_number}</p>
              <p>: {detail?.code}</p>
              <p>
                : <FormatRupiah value={detail?.total} />{" "}
              </p>
              <p>: {detail?.status}</p>
            </div>
          </div>
        </div>

        <div className="w-[40%]  flex-col justify-center ">
          <div className=" flex gap-x-14 font-semibold text-md">
            <div className="capitalize">
              <p>Nama Kelas</p>
              <p>Jam</p>
              <p>Harga</p>
              <p>Durasi</p>
              <p>Slot</p>
              <p>Pesanan</p>
              <p>Kategori</p>
            </div>
            <div className="capitalize">
              <p>: {detail.offline_class?.title}</p>
              <p>
                :{" "}
                <Moment format="hh:mm:ss">{detail.offline_class?.time}</Moment>
              </p>

              <p>
                : <FormatRupiah value={detail.offline_class?.price} />{" "}
              </p>
              <p>: {detail.offline_class?.duration}</p>
              <p>: {detail.offline_class?.slot}</p>
              <p>: {detail.offline_class?.slot_booked}</p>
              <p>: {detail.offline_class?.offline_class_category_id}</p>
            </div>
          </div>
        </div>
        <div className="w-[5%]">
          <button
            onClick={() =>
              setModalEdit({ isShow: !modalEdit.isShow, data: detail })
            }
            className="btnp"
          >
            Edit
          </button>
        </div>
      </div>

      <form className="flex flex-col  px-6  w-full" onSubmit={handleSubmit}>
        <div className="w-full pb-2">
          <h2 className="font-semibold  text-md pb-2">Bukti pembayaran</h2>
          <img className="w-44" src={detail.proof_payment} alt="" />
        </div>
        <div className="flex gap-x-10 py-5 w-full ">
          <h2 className="text-md font-semibold">Status Membership</h2>
          <select
            className="select select-bordered select-sm w-full max-w-xs"
            name="status"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option defaultValue="menunggu">Menunggu Konfirmasi</option>
            <option value="REJECT">REJECT</option>
            <option value="INACTIVE">INACTIVE</option>
            <option value="ACTIVE">ACTIVE</option>
          </select>
        </div>
        <div className="flex gap-x-2">
          <button className="h-8 px-3 bg-prim btn border-none min-h-0 text-white">
            Simpan
          </button>
          <button className="h-8 px-3 bg-dang2 border-none text-white btn min-h-0">
            Batal
          </button>
        </div>
      </form>
    </>
  );
}

export default DetailBookingOffline;
