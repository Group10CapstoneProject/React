import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useState } from "react";
import PostApi from "../apis/post.api";

export const ModalDetailTipeMember = ({ data, setShow, show }) => {
  return (
    <>
      <input defaultChecked={show} type="checkbox" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  p-0 overflow-hidden w-1/2">
          <div className="w-full p-3 bg-base2 flex">
            <div className="w-full relative ">
              <div className="flex flex-col items-center">
                <h2 className="font-bold text-center text-prim w-full  text-lg">
                  Tipe membership
                </h2>
                <img
                  className="w-10 "
                  src="https://ik.imagekit.io/rnwxyz/member_type/0914d40a-0c3a-4d44-ab6b-993eb3e013da"
                  alt="tipe member"
                />
              </div>
              <span
                onClick={() => setShow(false)}
                className="absolute cursor-pointer hover:scale-125 transition-all duration-100 ease-in-out top-0 right-0"
              >
                <i className="bx text-dang2 bx-sm bx-x"></i>
              </span>
              <div className="flex gap-x-8">
                <div>
                  <p>Nama</p>
                  <p>Harga</p>
                  <p>Akses Offline</p>
                  <p>Akses Online</p>
                  <p>Akses Trainer</p>
                  <p>Akses Gym</p>
                  <p>Deskripsi</p>
                </div>
                <div>
                  <p>: {data.name}</p>
                  <p>
                    : <FormatRupiah value={data.price} />{" "}
                  </p>
                  <p>
                    :{" "}
                    {data.access_offline_class == true ? (
                      <i className="bx text-[20px] text-suc bx-check-circle"></i>
                    ) : (
                      <i className="bx text-[20px] text-red-700 bx-check-circle"></i>
                    )}
                  </p>
                  <p>
                    :{" "}
                    {data.access_online_class == true ? (
                      <i className="bx text-[20px] text-suc bx-check-circle"></i>
                    ) : (
                      <i className="bx text-[20px] text-red-700 bx-check-circle"></i>
                    )}
                  </p>
                  <p>
                    :{" "}
                    {data.access_trainer == true ? (
                      <i className="bx text-[20px] text-suc bx-check-circle"></i>
                    ) : (
                      <i className="bx text-[20px] text-red-700 bx-check-circle"></i>
                    )}
                  </p>
                  <p>
                    :{" "}
                    {data.access_gym == true ? (
                      <i className="bx text-[20px] text-suc bx-check-circle"></i>
                    ) : (
                      <i className="bx text-[20px] text-red-700 bx-check-circle"></i>
                    )}
                  </p>
                  <p>: {data.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
