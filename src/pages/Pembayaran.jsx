import React, { useEffect, useState } from "react";
import Get from "../apis/get.api";
import { ModalMethod } from "../components/ModalMethod";
import useHook from "../hooks/useHook";

export const Pembayaran = () => {
  const [method, setMethod] = useState([]);
  const { show, setShow } = useHook();
  console.log(show);
  const metode = async () => {
    try {
      Get.pembayaran().then((res) => setMethod(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    metode();
  }, []);
  return (
    <div className="relative">
      {show ? <ModalMethod show={show} setShow={setShow} /> : ""}
      <div className="p-2  mx-5">
        <div className="w-full">
          <h4 className="font-bold">Metode Pembayaran</h4>
        </div>

        <div className="pt-2 flex justify-end ">
          <label
            onClick={() => setShow(!show)}
            htmlFor="my-modal-5"
            className="btn text-primary border-primary bg-base hover:bg-primary hover:text-white transition duration-200 ease-in hover:border-base"
          >
            Tambah Metode Pembayaran
          </label>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-5">
          {method &&
            method.map((m) => (
              <div
                key={m.id}
                className="  overflow-hidden flex items-center justify-center  shadow-xl p-5 w-72 h-32"
              >
                <div>
                  <h1 className="text-center font-bold">{m.name}</h1>
                  <p className="text-sm">Payment Number : {m.payment_number}</p>
                  <p className="text-sm">{m.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
