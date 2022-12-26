import React from "react";
import Moment from "react-moment";

function Admin() {
  return (
    <div>
      <h1 className="text-info font-bold text-3xl">Admin</h1>
      <div className="flex  pt-4 input-group justify-start">
        <input type="text" placeholder="Cari Akun Admin ......" className="input input-bordered input-black  w-56 max-w-xs" />
      </div>

      <div className="flex items-center justify-between pt-8">
        <h4 className="font-bold text-neutral text-lg">Daftar Admin</h4>
        <div className="flex justify-end ">
          <label htmlFor="my-modal-5" className="btn border-prim1 bg-prim1 hover:bg-prim text-white transition duration-200 ease-in hover:border-base">
            <i className="bx bx-user-plus bx-sm pr-2 text-center"></i> Tambah Admin
          </label>
        </div>
      </div>

      <div className="overflow-x-auto pt-8">
        <table className="table table-compact text-black w-full text-center">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-semibold">
              <td className=" leading-none text-info font-bold">Kelompok 10</td>
              <td className=" leading-none text-info font-bold">kelompok10@gmail.com</td>
              <td className=" leading-none text-info font-bold">Admin123</td>

              <td className="flex gap-x-1 justify-center">
                <button className="btnp hover:bg-prim1">Detail</button>
                <button className="btnd hover:bg-dang2">
                  <i className="bx bx-trash bx-sm text-white"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="font-semibold">
              <td className=" leading-none text-info font-bold">Kelompok 10</td>
              <td className=" leading-none text-info font-bold">kelompok10@gmail.com</td>
              <td className=" leading-none text-info font-bold">Admin123</td>

              <td className="flex gap-x-1 justify-center">
                <button className="btnp hover:bg-prim1">Detail</button>
                <button className="btnd hover:bg-dang2">
                  <i className="bx bx-trash bx-sm text-white"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="font-semibold">
              <td className=" leading-none text-info font-bold">Kelompok 10</td>
              <td className=" leading-none text-info font-bold">kelompok10@gmail.com</td>
              <td className=" leading-none text-info font-bold">Admin123</td>

              <td className="flex gap-x-1 justify-center">
                <button className="btnp hover:bg-prim1">Detail</button>
                <button className="btnd hover:bg-dang2">
                  <i className="bx bx-trash bx-sm text-white"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="font-semibold">
              <td className=" leading-none text-info font-bold">Kelompok 10</td>
              <td className=" leading-none text-info font-bold">kelompok10@gmail.com</td>
              <td className=" leading-none text-info font-bold">Admin123</td>

              <td className="flex gap-x-1 justify-center">
                <button className="btnp hover:bg-prim1">Detail</button>
                <button className="btnd hover:bg-dang2">
                  <i className="bx bx-trash bx-sm text-white"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="font-semibold">
              <td className=" leading-none text-info font-bold">Kelompok 10</td>
              <td className=" leading-none text-info font-bold">kelompok10@gmail.com</td>
              <td className=" leading-none text-info font-bold">Admin123</td>

              <td className="flex gap-x-1 justify-center">
                <button className="btnp hover:bg-prim1">Detail</button>
                <button className="btnd hover:bg-dang2">
                  <i className="bx bx-trash bx-sm text-white"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-x-2 font-semibold">
          <label className="pt-5">Show : </label>
          <select defaultChecked="10" name="" id="">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">30</option>
          </select>
        </div>
        {/* <Paginations postPerPage={postPerPage} totalPosts={booking?.count} paginate={paginate} currentPage={currentPage} /> */}
        <div className="pt-4">
          <div className="btn-group">
            <button className="btn btn-active">1</button>
            <button className="btn btn-outline hover:bg-prim1">2</button>
            <button className="btn btn-outline hover:bg-prim1">...</button>
            <button className="btn btn-outline hover:bg-prim1">10</button>
            <button className="btn btn-outline normal-case hover:bg-prim1">Lanjut</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
