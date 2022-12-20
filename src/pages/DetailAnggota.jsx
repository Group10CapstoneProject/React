import React from "react";

const DetailAnggota = () => {
  return (
    <>
      <h2 className="px-6 pt-2 text-3xl font-semibold text-prim">Kelola Anggota / Detail</h2>
      <div className="flex m-3 p-3  border ">
        <div className="w-1/2  flex gap-x-14 font-semibold text-md">
          <div>
            <p>Nama</p>
            <p>Email</p>
            <p>Jenis Kelamin</p>
            <p>Jenis Membership</p>
            <p>Durasi Membership</p>
            <p>Harga Membership</p>
            <p>Metode Membership</p>
          </div>
          <div>
            <p>: Muhammad Agil</p>
            <p>: agilz@gmail.com</p>
            <p>: Laki Laki</p>
            <p>: Gold</p>
            <p>: 3 Bulan</p>
            <p>: Rp.-</p>
            <p>: Dompet Digital DANA</p>
          </div>
        </div>
        <div className="w-1/2 flex-col py-14">
          <div className="w-1/2 pb-2 flex justify-end mx-20">
            <label htmlFor="my-modal-4" className="btn font-semibold text-md pb-2 bg-prim hover:bg-info text-white">
              Bukti pembayaran
            </label>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                <img
                  className="2 cursor-zoom-in hover:scale-105 transform-gpu ease-in-out duration-300 w-screen"
                  src="https://1.bp.blogspot.com/-vRxyZBWkyb4/Xn6k2sMrXuI/AAAAAAAAGog/Ay9PBsRutbo3Q6PcL6pXjsc-r-5MT9tLwCLcBGAsYHQ/s1600/buzzbreak%2Bbayar%2Blewat%2BDANA.png"
                  alt=""
                />
                {/* <div className="flex gap-x-10 justify-between">
                  <h2 className="text-lg font-semibold">Status Membership</h2>
                  <select name="nama" id="">
                    <option defaultValue="menunggu" className="font-semibold">
                      Pilih Status
                    </option>
                    <option value="" className="text-suc2 font-lg">
                      Active
                    </option>
                    <option value="" className="text-warn2 font-lg">
                      Waiting Payment
                    </option>
                    <option value="" className="text-inf2 font-lg">
                      Waiting Approval
                    </option>
                    <option value="" className="text-dang2 font-lg">
                      Reject
                    </option>
                    <option value="" className="text-base4 font-lg">
                      Inactive
                    </option>
                  </select>
                </div>
                <div className="flex gap-x-2 justify-end pr-0 pt-2">
                  <button className="h-8 px-3 btn-primary btn min-h-0 text-white">Simpan</button>
                  <button className="h-8 px-3 btn-error bg-dang hover:bg-dang2 text-white btn min-h-0">Batal</button>
                </div> */}
              </label>
            </label>
          </div>
          <div className="flex gap-x-10 justify-evenly">
            <h2 className="text-lg font-semibold">Status Membership</h2>
            <select name="nama" id="">
              <option defaultValue="menunggu" className="font-semibold">
                Pilih Status
              </option>
              <option value="" className="text-suc2 font-lg">
                Active
              </option>
              <option value="" className="text-warn2 font-lg">
                Waiting Payment
              </option>
              <option value="" className="text-inf2 font-lg">
                Waiting Approval
              </option>
              <option value="" className="text-dang2 font-lg">
                Reject
              </option>
              <option value="" className="text-base4 font-lg">
                Inactive
              </option>
            </select>
          </div>
          <div className="flex gap-x-2 justify-end px-14 mx-6 py-2">
            <button className="h-8 px-3 btn-primary btn min-h-0 text-white">Simpan</button>
            <button className="h-8 px-3 btn-error bg-dang1 text-white btn min-h-0">Batal</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailAnggota;
