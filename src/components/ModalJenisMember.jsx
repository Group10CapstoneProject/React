import React from "react";

export const ModalJenisMember = ({ show, setShow }) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <>
      <input defaultChecked={show} type="checkbox" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box  p-0 overflow-hidden w-1/2 max-w-5xl">
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
          <form action="">
            <div className="p-3 ">
              <div className="flex w-full px-2 ">
                <div className="w-52 ">
                  <label className="block my-1 py-1" htmlFor="">
                    Nama
                  </label>
                  <label className="block my-1 py-1" htmlFor="">
                    Jatuh Tempo
                  </label>
                  <label className="block my-1 py-1" htmlFor="">
                    Jenis Membership
                  </label>
                  <label className="block my-1 py-1" htmlFor="">
                    Harga Membership
                  </label>
                  <label className="block my-1 py-1" htmlFor="">
                    Total Tagihan
                  </label>
                  <label className="block my-1 py-1" htmlFor="">
                    Status Pembayaran
                  </label>
                </div>
                <div className="w-full">
                  <input
                    onChange={onChange}
                    className="w-full input-sm border border-primary   block py-1 my-1 rounded-none input-primary"
                    type="text"
                    name="nama"
                  />
                  <input
                    onChange={onChange}
                    className="w-full input-sm border border-primary  block py-1 my-1 rounded-none input-primary"
                    type={"date"}
                    name="date"
                  />
                  <input
                    className="w-full input-sm border border-primary  block py-1 my-1 rounded-none input-primary"
                    type="text"
                  />
                  <input
                    className="w-full input-sm border border-primary block py-1 my-1 rounded-none input-primary"
                    type="text"
                  />
                  <input
                    className="w-full input-sm border border-primary  block py-1 my-1 rounded-none input-primary"
                    type="text"
                  />
                  <input
                    className="w-full input-sm border border-primary  block py-1 my-1 rounded-none input-primary"
                    type="file"
                  />
                </div>
              </div>
              <div className="modal-action flex">
                <label
                  onClick={handleUpdate}
                  htmlFor="my-modal-5"
                  className="btn"
                >
                  Update
                </label>
                <label
                  onClick={() => setShow(!show)}
                  htmlFor="my-modal-5"
                  className="btn"
                >
                  Batal
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};