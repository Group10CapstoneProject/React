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

function BookingOffline() {
  let navigate = useNavigate();
  const [booking, setBooking] = useState([]);

  const [message, setMessage] = useState("");
  const [modalDelete, setModalDelete] = useState({
    isShow: false,
    data: {},
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [_text, setText] = useState("");
  const [text] = useDebounce(500, _text);
  const [postPerPage, setPostPerPage] = useState(10);
  const [load, setLoad] = useState(false);

  const listBooking = () => {
    setLoad(true);
    Gym.bookingOffline({ currentPage, postPerPage, text }).then((res) => {
      setLoad(false);
      setBooking(res.data.data);
    });
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    PostApi.deleteBookingOffline(id)
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
  console.log(load);
  return (
    <>
      <Toaster />
      {modalDelete.isShow && <ModalHapus show={modalDelete.isShow} setShow={setModalDelete} handleDelete={handleDelete} data={modalDelete.data} />}
      <h1 className="font-semibold text-2xl text-info">
        Booking <span className="text-black font-medium">/</span> <span className="text-prim1">Offline</span>
      </h1>
      <div className="flex  pt-4 input-group justify-start">
        <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Cari Anggota ....." className="input input-bordered input-black  w-56 max-w-xs" />
      </div>
      <br />
      <div className="overflow-x-auto">
        <table className="table table-compact text-black w-full text-center flex justify-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Nama Kelas</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody className="font-semibold capitalize">
            {booking &&
              booking.offline_class_bookings !== null &&
              booking.offline_class_bookings?.map((m, index) => (
                <tr key={m.id} className="font-semibold leading-none">
                  <td>{++index}</td>
                  <td>{m.user_name}</td>
                  <td>{m.user_email}</td>
                  <td>{m.offline_class_title}</td>
                  <td className={`${m.status === "ACTIVE" ? "text-suc" : m.status === "INACTIVE" ? "text-dang2  " : "text-inf2 "}`}>
                    <div className={` lowercase`}>
                      <span className={`${m.status === "ACTIVE" ? "bg-suc/10 px-2" : m.status === "INACTIVE" ? "bg-dang2/10 px-2  " : "bg-inf2/10 px-2"} `}>{m.status}</span>
                    </div>
                  </td>
                  <td className="flex gap-x-1 justify-center">
                    <button className="btnp" onClick={() => navigate(`/detailBookingOffline/${m.id}`)}>
                      <i className="bx bxs-user-detail pr-2" />
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
        </table>
        {booking && booking.offline_class_bookings == null && <div className="flex justify-center w-full">Pencarian tidak ditemukan..</div>}
      </div>
      <br />
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
        <Paginations postPerPage={postPerPage} totalPosts={booking?.count} paginate={paginate} currentPage={currentPage} />
      </div>
    </>
  );
}

export default BookingOffline;
