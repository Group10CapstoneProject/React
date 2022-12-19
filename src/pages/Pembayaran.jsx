import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Gym from "../apis/get.api";
import Get from "../apis/get.api";
import PostApi from "../apis/post.api";
import { ModalMethod } from "../components/ModalMethod";
import useHook from "../hooks/useHook";

export const Pembayaran = () => {
  const [method, setMethod] = useState([]);
  const { load, setLoad } = useHook();
  const [message, setMessage] = useState("");
  const { show, setShow } = useHook();
  const metode = async () => {
    try {
      Get.pembayaran().then((res) => setMethod(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    PostApi.deleteMethod(id).then((res) => setMessage(res.data.message));
  };
  useEffect(() => {
    metode();
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [load, message]);
  if (load) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="relative">
      {show ? <ModalMethod setMessage={setMessage} setLoad={setLoad} show={show} setShow={setShow} /> : ""}
      <Toaster />
      <div className="">
        <div className="w-full">
          <h4 className="font-bold text-info">Metode Pembayaran</h4>
        </div>

        <div className="pt-2 flex justify-end ">
          <label onClick={() => setShow(!show)} htmlFor="my-modal-5" className="btn text-primary border-primary bg-base hover:bg-primary hover:text-white transition duration-200 ease-in hover:border-base">
            Tambah Metode Pembayaran
          </label>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-5">
          {method &&
            method.map((m) => (
              <div key={m.id} className="  overflow-hidden flex items-center justify-center  shadow-xl w-72 h-32">
                <div className="w-full h-full relative">
                  <span onClick={(e) => handleDelete(e, m.id)} className="absolute right-0 cursor-pointer ">
                    <box-icon name="trash" size="sm" color="red"></box-icon>
                  </span>
                  <h1 className="text-center bg-primary text-white p-2 font-bold">{m.name}</h1>
                  <div className="p-3">
                    <p className="text-sm">Payment Number : {m.payment_number}</p>
                    <p className="text-sm">{m.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
