import React from "react";

const Modal = () => {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box p-0 overflow-hidden w-1/2 max-w-5xl">
          <div className="w-full p-3 bg-base2 flex">
            <span>❗</span>
            <div>
              <h2 className="font-bold text-lg">Edit Data Member</h2>
              <p className="text-sm font-semibold">
                kamu dapat mengedit data member dan menkonfirmasi pembayaran
                disini.
              </p>
            </div>
          </div>
          <div className="p-3 ">
            <div className="flex justi ">
              <div>data</div>
              <div>input</div>
            </div>
            <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn">
                Close!
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
