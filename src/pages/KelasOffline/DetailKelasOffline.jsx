import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useNavigate, useParams } from "react-router-dom";
import Gym from "../../apis/get.api";

function DetailKelasOffline() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  const details = () => {
    try {
      Gym.detailOfflineKelas(id).then((res) => setDetail(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(detail);
  useEffect(() => {
    details();
  }, []);

  return (
    <>
      {detail && (
        <>
          <div className="w-full flex justify-between mb-5">
            <h1 className="text-4xl text-prim font-bold text-center">{detail.title}</h1>
            <button onClick={() => navigate(`/editkelasoffline`, { state: detail })} className="px-4 py-1 bg-prim rounded-lg text-white font-bold hover:bg-info transition-all duration-200 ease-linear">
              <i className="bx bx-edit pr-1"></i> Edit
            </button>
          </div>
          <div className="flex gap-x-2 w-full ">
            <div className="w-[35%] flex">
              <div>
                <div className="h-72 mt-2 w-full  ">
                  <img className="h-full w-full" src={detail.picture} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[60%] flex justify-start">
              <div className="text-justify">
                <p className="text-md font-sans">{detail.description}</p>
                <p className="flex gap-x-1 items-center font-bold pt-4">
                  {" "}
                  <span>Harga :</span>
                  <FormatRupiah value={detail.price} />
                </p>

                <p className="flex gap-x-1 items-center font-bold">
                  {" "}
                  <span>Lokasi :</span>
                  {detail.location}
                </p>
                <p className="flex gap-x-1 items-center font-bold">
                  {" "}
                  <span>Pelatih :</span>
                  {detail.trainer?.name}
                </p>
                <p className="flex gap-x-1 items-center font-bold"> Slot :{detail.slot}</p>
                <p className="flex gap-x-1 items-center font-bold"> Durasi :{detail.duration}</p>
                <p className="flex gap-x-1 items-center font-bold"> Kategori :{detail.offline_class_category?.name}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DetailKelasOffline;
