import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Gym from "../../apis/get.api";

function DetailKelasOnline() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  const details = () => {
    try {
      Gym.detailOnlineKelas(id).then((res) => setDetail(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    details();
  }, []);

  return (
    <>
      {detail && (
        <>
          <div className="w-full flex justify-between mb-5">
            <h1 className="text-4xl text-prim font-bold text-center">{detail.title}</h1>
            <button onClick={() => navigate(`/editkelasonline`, { state: detail })} className="px-4 py-1 bg-prim1 rounded-lg text-white font-bold hover:bg-prim transition-all duration-200 ease-linear">
              <i className="bx bx-edit"></i> Edit
            </button>
          </div>
          <div className="flex gap-x-2 w-full ">
            <div className="w-[35%] flex ">
              <div>
                <div className="h-72 mt-2 w-full  ">
                  <img className="h-full w-full" src={detail.picture} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[60%] flex justify-start">
              <div className="text-justify">
                <p className="text-md">{detail.description}</p>
                <p className="flex gap-x-1 items-center">
                  {" "}
                  <span>Harga :</span>
                  <FormatRupiah value={detail.price} />
                </p>
                <p className="flex gap-x-1 items-center">
                  {" "}
                  <span>Level :</span>
                  {detail.level}
                </p>
                <p className="flex gap-x-1 items-center">
                  {" "}
                  <span>Durasi :</span>
                  {detail.duration} Menit
                </p>
                <p className="flex gap-x-1 items-center">
                  {" "}
                  <span>Pelatan :</span>
                  {detail.tools}
                </p>
                <p className="flex gap-x-1 items-center">
                  {" "}
                  <span>Pelatihan: </span>
                  {detail.target_area}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DetailKelasOnline;
