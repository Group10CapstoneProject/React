import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import Gym from "../../apis/get.api";
import PostApi from "../../apis/post.api";
import ModalHapus from "../../components/ModalHapus";
import Paginations from "../../components/Paginations";
import { useDebounce } from "../../hooks/Searching";
import useHook from "../../hooks/useHook";

function BookingKelasOnline() {
  let navigate = useNavigate();
  const [booking, setBooking] = useState([]);

  const [message, setMessage] = useState("");
  const [modalDelete, setModalDelete] = useState({
    isShow: false,
    data: {},
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [_text, setText] = useState("");
  const [text] = useDebounce(3000, _text);
  const [postPerPage, setPostPerPage] = useState(10);
  const { load, setLoad } = useHook();

  const listBooking = () => {
    Gym.bookingOnline({ currentPage, postPerPage, text }).then((res) =>
      setBooking(res.data.data)
    );
  };
  const handleDelete = (e, id) => {
    e.preventDefault();
    PostApi.deleteBookingOnline(id)
      .then((res) => {
        setMessage(res.data.message);
        setModalDelete(false);
      })
      .catch((err) => toast.error(err.message));
  };
  useEffect(() => {
    listBooking();
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [postPerPage, text, currentPage, message]);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (load) {
    return <h1>load...</h1>;
  }
  return (
    <>
      <Toaster />
      {modalDelete.isShow && (
        <ModalHapus
          show={modalDelete.isShow}
          setShow={setModalDelete}
          handleDelete={handleDelete}
          data={modalDelete.data}
        />
      )}
      <h1 className="font-bold text-2xl text-info">DAFTAR BOOKING CLASS</h1>
      <div className="flex  pt-4 input-group justify-start">
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Cari Anggota ....."
          className="input input-bordered input-black  w-56 max-w-xs"
        />
      </div>
      <br />
      <div className="overflow-x-auto">
        <table className="table table-compact text-black w-full">
          <thead className="bg-black">
            <tr>
              <th>Nomor</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Nama Kelas</th>
              <th>Aktif pada tanggal</th>
              <th>Durasi</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {booking &&
              booking.online_class_bookings !== null &&
              booking.online_class_bookings?.map((m, index) => (
                <tr className="font-semibold" key={m.id}>
                  <td className=" leading-none">{++index}</td>
                  <td className=" leading-none">{m.user_name}</td>
                  <td className="leading-none">{m.user_email}</td>
                  <td className="leading-none">{m.online_class_title}</td>
                  <td className="leading-none">
                    {m.status == "ACTIVE" ? (
                      <>
                        {" "}
                        <Moment format="D MMM YYYY hh:mm:ss">
                          {m.actived_at}
                        </Moment>
                      </>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="leading-none">{m.duration} Bulan</td>
                  <td
                    className={`${
                      m.status === "ACTIVE"
                        ? "text-suc"
                        : m.status === "INACTIVE"
                        ? "text-dang2  "
                        : "text-inf2"
                    }`}
                  >
                    <div className={` lowercase`}>
                      <span
                        className={`${
                          m.status === "ACTIVE"
                            ? "bg-suc/10 pr-2"
                            : m.status === "INACTIVE"
                            ? "bg-dang2/10 pr-2  "
                            : "bg-inf2/10 pr-2"
                        } `}
                      >
                        <i className="bx  bx-wifi-0"></i>
                        {m.status}
                      </span>
                    </div>
                  </td>

                  <td className="flex gap-x-1 ">
                    <button
                      className="btnp"
                      onClick={() => navigate(`/detailBookingOnline/${m.id}`)}
                    >
                      Detail
                    </button>
                    <button
                      className="btnd"
                      onClick={(e) =>
                        setModalDelete({
                          isShow: !modalDelete.isShow,
                          data: m.id,
                        })
                      }
                    >
                      <i className="bx bx-trash bx-sm text-white"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
          {booking && booking.online_class_bookings == null && (
            <div className=" w-full text-center">
              <p>Pencarian Tidak Ditemukan</p>
            </div>
          )}
        </table>
      </div>
      <br />
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
          totalPosts={booking?.count}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

export default BookingKelasOnline;
