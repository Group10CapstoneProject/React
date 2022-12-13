import React from "react";

function BookingOnline() {
  return (
    <div>
      <h1 className="font-bold text-2xl">DAFTAR BOOKING CLASS</h1>
      <div className="flex pl-7 pt-4 input-group justify-end">
        <input type="text" placeholder="Cari" className="input input-bordered" />
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
              <th>Nama</th>
              <th>Email</th>
              <th>Jenis Member</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" leading-none text-info font-bold">Kelompok 10</td>
              <td className="leading-none text-info font-bold">kelompok10@gmail.com</td>
              <td className="leading-none text-info font-bold">Gold</td>
              <td className="leading-none text-inf2 font-bold">Waiting Approval</td>
              <td className="flex gap-x-1 justify-center">
                <button>
                  <i className="bx bx-edit bx-sm text-inf2" href="/modalbookingonline"></i>
                </button>
                <button>
                  {" "}
                  <i className="bx bx-trash bx-sm text-dang"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="  leading-none text-info font-bold">Kelompok 10</td>
              <td className="  leading-none text-info font-bold">kelompok10@gmail.com</td>
              <td className="  leading-none text-info font-bold">Gold</td>
              <td className="  leading-none text-suc2 font-bold">Active</td>
              <td className="flex gap-x-1 justify-center">
                <button>
                  <i className="bx bx-edit bx-sm text-inf2" href="/modalbookingonline"></i>
                </button>
                <button>
                  {" "}
                  <i className="bx bx-trash bx-sm text-dang"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="  leading-none text-info font-bold">Kelompok 10</td>
              <td className="  leading-none text-info font-bold">kelompok10@gmail.com</td>
              <td className="  leading-none text-info font-bold">Gold</td>
              <td className="  leading-none text-dang2 font-bold">Reject</td>
              <td className="flex gap-x-1 justify-center">
                <button>
                  <i className="bx bx-edit bx-sm text-inf2" href="/modalbookingonline"></i>
                </button>
                <button>
                  {" "}
                  <i className="bx bx-trash bx-sm text-dang"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="  leading-none text-info font-bold">Kelompok 10</td>
              <td className="  leading-none text-info font-bold">kelompok10@gmail.com</td>
              <td className="  leading-none text-info font-bold">Gold</td>
              <td className="  leading-none text-inf2 font-bold">Waiting Approval</td>
              <td className="flex gap-x-1 justify-center">
                <button>
                  <i className="bx bx-edit bx-sm text-inf2" href="/modalbookingonline"></i>
                </button>
                <button>
                  {" "}
                  <i className="bx bx-trash bx-sm text-dang"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="  leading-none text-info font-bold">Kelompok 10</td>
              <td className="  leading-none text-info font-bold">kelompok10@gmail.com</td>
              <td className="  leading-none text-info font-bold">Gold</td>
              <td className="  leading-none text-dang2 font-bold">Reject</td>
              <td className="flex gap-x-1 justify-center">
                <button>
                  <i className="bx bx-edit bx-sm text-inf2" href="/modalbookingonline"></i>
                </button>
                <button>
                  {" "}
                  <i className="bx bx-trash bx-sm text-dang"></i>
                </button>
              </td>
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

export default BookingOnline;
