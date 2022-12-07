import React from "react";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div>
      <h4 className="font-bold text-primary-focus pl-6">Dashboard</h4>
      <br />
      <h3 className="font-bold text-primary-focus pl-6 text-2xl">Selamat Datang Kembali Admin 01</h3>
      <br />
      <div className="bg-white my-2 p-2">
        <h3 className="font-bold text-primary-focus pl-6 py-2 text-2xl">Anggota Terbaru</h3>
        <div>
          <table className="table w-full text-sm my-2 ">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Email</th>
                <th>Jenis</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody className="font-semibold"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
