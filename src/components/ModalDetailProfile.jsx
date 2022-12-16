import React, { useState } from "react";
import PostApi from "../apis/post.api";

export const ModalDetailProfile = ({ data, setShow, show }) => {
  console.log(data);
  return (
    <>
      <input defaultChecked={show} type="checkbox" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  p-0 overflow-hidden w-1/2">
          <div className="w-full p-3 bg-base2 flex">
            <div className="w-full relative ">
              <h2 className="font-bold text-center text-prim w-full  text-lg">
                Profile Anggota
              </h2>
              <span
                onClick={() => setShow(false)}
                className="absolute cursor-pointer hover:scale-125 transition-all duration-100 ease-in-out top-0 right-0"
              >
                <i className="bx text-dang2 bx-sm bx-x"></i>
              </span>
              <div className="flex">
                <div>
                  <p>Nama</p>
                  <p>Email</p>
                </div>
                <div>
                  <p>: {data.name}</p>
                  <p>: {data.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
