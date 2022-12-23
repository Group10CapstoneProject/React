import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Gym from "../../apis/get.api";

function DetailArtikel({ show, setShow, data }) {
  const [artikel, setArtikel] = useState([]);
  const getDetailArtikel = () => {
    Gym.artikelDetail(data).then((res) => setArtikel(res.data.data));
  };

  useEffect(() => {
    getDetailArtikel();
  }, []);

  return (
    <>
      <input defaultChecked={true} type="checkbox" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box p-2 w-full max-w-[60%]">
          <div className="p-3">
            <div className=" relative flex-col items-center flex justify-center">
              <h1 className="font-bold text-prim text-lg mb-3">
                {artikel?.title}
              </h1>
              <p className="text-black">{artikel?.content}</p>
            </div>
            <div className="modal-action flex items-center">
              <label onClick={() => setShow(!show)} className="btnp">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailArtikel;
