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
        <div className="w-1/2 flex-col justify-center ">
          <div className="w-1/2 pb-2">
            <h2 className="font-semibold text-md pb-2">Bukti pembayaran</h2>
            <img
              className="2 cursor-zoom-in hover:scale-150 transform-gpu ease-in-out duration-300"
              src="https://1.bp.blogspot.com/-vRxyZBWkyb4/Xn6k2sMrXuI/AAAAAAAAGog/Ay9PBsRutbo3Q6PcL6pXjsc-r-5MT9tLwCLcBGAsYHQ/s1600/buzzbreak%2Bbayar%2Blewat%2BDANA.png"
              alt=""
            />
          </div>
          <div className="flex gap-x-10">
            <h2 className="text-lg font-semibold">Status Membership</h2>
            <select name="nama" id="">
              <option defaultValue="menunggu">Menunggu Konfirmasi</option>
              <option value="">Belum</option>
            </select>
          </div>
          <div className="flex gap-x-2">
            <button className="h-8 px-3 btn-primary btn min-h-0 text-white">Simpan</button>
            <button className="h-8 px-3 btn-error bg-dang1 text-white btn min-h-0">Batal</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailAnggota;