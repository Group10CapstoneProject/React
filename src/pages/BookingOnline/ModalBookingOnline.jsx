import React, { useState } from "react";

function ModalBookingOnline() {
  return (
    <>
      <input type="checkbox" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box p-0 overflow-hidden w-1/2 max-w-5xl">
          <div className="w-full p-3 bg-base2 flex">
            <span>❗</span>
            <div>
              <h2 className="font-bold text-lg">Konfirmasi Pendaftaran</h2>
            </div>
          </div>
          <form onSubmit="">
            <div className="p-3">
              <div className="flex w-full px-2 gap-x-2">
                <div className="w-[20%] flex justify-center">
                  <input className="bg-white border w-24 h-24 file-input-bordered rounded-full file-input-ghost file" type="file" onChange="" name="" />
                </div>
                <div className="w-[25%] text-sm flex flex-col">
                  <label className="block my-1" htmlFor="">
                    Jenis Membership
                  </label>
                  <label className="block my-1" htmlFor="">
                    Status Membership
                  </label>
                  <label className="block my-1" htmlFor="">
                    Kelas Yang Diambil
                  </label>
                  <label className="block my-1" htmlFor="">
                    Harga Kelas
                  </label>
                  <label className="block my-1" htmlFor="">
                    Tanggal Booking
                  </label>
                  <label className="block my-1" htmlFor="">
                    Status Pendaftaran
                  </label>
                </div>
                <div className="w-[50%]">
                  <input onChange="" className="" type="text" NAME="name" defaultValue="" />
                  <input onChange="" className="" type="text" NAME="name" defaultValue="" />
                  <input onChange="" className="" type="text" NAME="name" defaultValue="" />

                  <div className="w-full border px-1">
                    <div className="flex gap-x-2">
                      <input onChange="" className="checkbox rounded-none checkbox-accent h-5 w-5 block py-1 my-1" type="text" name="" defaultChecked="" />
                    </div>
                    <div className="flex gap-x-2">
                      <input onChange="" className="checkbox rounded-none checkbox-accent h-5 w-5 block py-1 my-1" type="text" name="" defaultChecked="" />
                    </div>
                    <div className="flex gap-x-2">
                      <input onChange="" className="checkbox rounded-none checkbox-accent h-5 w-5 block py-1 my-1" type="text" name="" defaultChecked="" />
                    </div>
                    <div className="flex gap-x-2">
                      <input onChange="" className="checkbox rounded-none checkbox-accent h-5 w-5 block py-1 my-1" type="text" name="" defaultChecked="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-action flex">
                <button className="btnp">SIMPAN PERUBAHAN</button>
                <label onClick="" htmlFor="my-modal-5" className="btnd">
                  Batal
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalBookingOnline;
