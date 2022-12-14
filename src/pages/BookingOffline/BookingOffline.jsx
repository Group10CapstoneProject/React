import React from "react";
import { useEffect, useState } from "react";
import Gym from "../../apis/get.api";

function BookingOffline() {
  const [booking, setBooking] = useState([]);
  const [load, setLoad] = useState(false);
  const getBooking = () => {
    try {
      Gym.bookingOffline().then((res) => setBooking(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooking();
  }, [load]);
  {
    getBooking && console.log(booking);
  }

  if (load) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <div className="flex font-semibold text-info">
        <a href="#">Booking / </a>

        <p style={{ color: "#52A1A4", marginLeft: 5 }}>Offline</p>
      </div>
      <div className="pt-[40px]">
        <h1 className="text-2xl font-bold">Daftar Booking</h1>
      </div>
      <div className="flex pl-7 pt-4 input-group justify-end">
        <input type="text" placeholder="Cari Daftar Booking" className="input input-bordered" />
        <button className="btn btn-square bg-base hover:bg-info">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
      <br />

      <div className="overflow-x-auto">
        <table className="table table-compact w-full text-center">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Kelas</th>
              <th>Hari</th>
              <th>Jam Booking</th>
              <th>Kode Unik</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" leading-none text-info font-bold">Kelompok 10</td>
              <td className=" leading-none text-info font-bold">kelompok10@gmail.com</td>
              <td className=" leading-none text-info font-bold">Yoga</td>
              <td className=" leading-none text-info font-bold">Senin</td>
              <td className=" leading-none text-info font-bold">13.00 WIB</td>
              <td className=" leading-none text-info font-bold">YG001</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className=" leading-none text-info font-bold">Kelompok 10</td>
              <td className=" leading-none text-info font-bold">kelompok10@gmail.com</td>
              <td className=" leading-none text-info font-bold">Yoga</td>
              <td className=" leading-none text-info font-bold">Senin</td>
              <td className=" leading-none text-info font-bold">13.00 WIB</td>
              <td className=" leading-none text-info font-bold">YG001</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className=" leading-none text-info font-bold">Kelompok 10</td>
              <td className="leading-none text-info font-bold">kelompok10@gmail.com</td>
              <td className="leading-none text-info font-bold">Yoga</td>
              <td className="leading-none text-info font-bold">Senin</td>
              <td className="leading-none text-info font-bold">13.00 WIB</td>
              <td className="leading-none text-info font-bold">YG001</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className=" leading-none text-info font-bold">Kelompok 10</td>
              <td className="leading-none text-info font-bold">kelompok10@gmail.com</td>
              <td className="leading-none text-info font-bold">Yoga</td>
              <td className="leading-none text-info font-bold">Senin</td>
              <td className="leading-none text-info font-bold">13.00 WIB</td>
              <td className="leading-none text-info font-bold">YG001</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className=" leading-none text-info font-bold">Kelompok 10</td>
              <td className="leading-none text-info font-bold">kelompok10@gmail.com</td>
              <td className="leading-none text-info font-bold">Yoga</td>
              <td className="leading-none text-info font-bold">Senin</td>
              <td className="leading-none text-info font-bold">13.00 WIB</td>
              <td className="leading-none text-info font-bold">YG001</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />

      <div className="flex gap-x-2 font-semibold my-2 ml-2">
        <label>Menampilkan : </label>
        <p>10 dari halaman</p>
      </div>

      <div>
        <div className="flex justify-end btn-group bg-base font-semibold">
          <button className="btn btn-sm hover:bg-primary bg-base text-black">Kembali</button>
          <button className="btn btn-sm hover:bg-primary bg-base text-black">1</button>
          <button className="btn btn-sm btn-active">2</button>
          <button className="btn btn-sm hover:bg-primary bg-base text-black">...</button>
          <button className="btn btn-sm hover:bg-primary bg-base text-black">10</button>
          <button className="btn btn-sm hover:bg-primary bg-base text-black">Lanjut</button>
        </div>
      </div>
    </div>
  );
}

export default BookingOffline;
