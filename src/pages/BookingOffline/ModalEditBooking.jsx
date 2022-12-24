import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Gym from "../../apis/get.api";
import PostApi from "../../apis/post.api";

function ModalEditBooking({ show, setShow, data, setMessage }) {
  const { id, offline_class, payment_method, total } = data;
  const [form, setForm] = useState({
    id: id,
    offline_class_id: offline_class.id,
    payment_method_id: payment_method.id,
    total: total,
  });
  const [kelas, setKelas] = useState([]);
  const [pembayaran, setPembayaran] = useState([]);
  const offlineClass = () => {
    Gym.offlineKelas()
      .then((res) => setKelas(res.data.data))
      .catch((err) => console.log(err));
  };
  const metodePembayaran = () => {
    Gym.pembayaran()
      .then((res) => setPembayaran(res.data.data))
      .catch((err) => console.log(err));
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: parseInt(value),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    PostApi.updateBookingOffline(form)
      .then((res) => {
        setMessage(res.data.message);
        setShow(false);
      })
      .catch((err) => toast.error(err.message));
  };

  useEffect(() => {
    offlineClass();
    metodePembayaran();
  }, []);
  return (
    <>
      <input className="input-sm modal-toggle" defaultChecked={show} type="checkbox" />
      <div className="modal">
        <div className="modal-box  p-0 overflow-hidden w-1/2">
          <div className="w-full p-3 bg-base2 flex">
            <div className="w-full relative ">
              <div className="flex flex-col items-center">
                <h2 className="font-bold text-center text-prim w-full  text-lg">Update Booking Online</h2>
              </div>
              <span onClick={() => setShow(false)} className="absolute cursor-pointer hover:scale-125 transition-all duration-100 ease-in-out top-0 right-0">
                <i className="bx text-dang2 bx-sm bx-x"></i>
              </span>
              <form action="" className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
                <div className="flex gap-x-4">
                  <label>Pilih Kelas Offline :</label>
                  <select name="offline_class_id" defaultValue={form.offline_class_id} onChange={onChange}>
                    {kelas &&
                      kelas?.offline_classes?.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.title}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="flex gap-x-4">
                  <label>Pilih metode Pembayaran :</label>
                  <select name="payment_method_id" defaultValue={form.payment_method_id} onChange={onChange}>
                    {pembayaran &&
                      pembayaran?.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="flex gap-x-4">
                  <label htmlFor="">Total Harga</label>
                  <input className="input-sm" type="number" placeholder="Total Harga" defaultValue={form.total} />
                </div>
                <button className="btnp">
                  <i className="bx bx-cloud-download  pr-2" />
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalEditBooking;
