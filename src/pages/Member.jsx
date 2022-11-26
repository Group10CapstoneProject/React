import React from "react";

export const Member = () => {
  return (
    <div className="p-2 h-screen">
      <div className="w-full p-2  flex  bg-white">
        <div className=" w-10 text-center">
          <box-icon type="solid" name="error-circle"></box-icon>
        </div>
        <div className="w-full">
          <h2 className="font-semibold">Info Status Pembayaran</h2>
          <ul class="list-disc pl-6 leading-none">
            <li>Belum upload</li>
            <li>Menunggu Konfirmasi</li>
            <li>aktif</li>
            <li>Ditolak</li>
          </ul>
        </div>
      </div>

      <div className="bg-white my-2 p-2">
        <h3 className="py-2 font-bold text-black text-2xl">Manage Member</h3>
        <div className="overflow-x-auto">
          <table className="table w-full text-sm">
            <thead>
              <tr>
                <th>Nomor</th>
                <th>Nama</th>
                <th>Jenis Membership</th>
                <th>Tanggal Pembelian</th>
                <th>Jatuh Tempo</th>
                <th>Jumlah Pembayaran</th>
                <th>Status Pembayaran</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
