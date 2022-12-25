import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Gym from "../../apis/get.api";
import PostApi from "../../apis/post.api";
import ModalHapus from "../../components/ModalHapus";
import { useDebounce } from "../../hooks/Searching";

const KelasOffline = () => {
  let navigate = useNavigate();
  let link = useLocation();
  console.log(link);
  const [load, setLoad] = useState(false);
  const [_text, setText] = useState("");
  const [text] = useDebounce(500, _text);
  const [message, setMessage] = useState("");
  const [kelas, setKelas] = useState([]);
  const [modalDelete, setModalDelete] = useState({
    isShow: false,
    data: {},
  });
  const listKelas = () => {
    try {
      Gym.offlineKelas(text).then((res) => setKelas(res.data.data.offline_classes));
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = (e, id) => {
    e.preventDefault();

    PostApi.deleteKelasOffline(id)
      .then((res) => {
        setMessage(res.data.message);
        setModalDelete(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setModalDelete(false);
      });
  };

  useEffect(() => {
    listKelas();
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [load, text, message]);

  if (load) {
    return <h1>loading...</h1>;
  }
  return (
    <>
      <Toaster />

      {modalDelete.isShow && <ModalHapus show={modalDelete.isShow} setShow={setModalDelete} handleDelete={handleDelete} data={modalDelete.data} />}
      <div>
        <div className="form-control" data-aos="fade-right" data-aos-duration="2000">
          <div className="flex   input-group">
            <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Cari Kelas Offline..." className="input input-bordered input-black w-full max-w-xs" />
          </div>
          <br />
          <div className="flex items-center   justify-between">
            <h4 className="font-semibold text-info" data-aos="fade-right" data-aos-duration="2000">
              Kelas <span className="text-black font-medium">/</span> <span className="text-prim1">Offline</span>
            </h4>
            <div className="flex justify-end pr-12">
              <Link to="/tambahkelasoffline" className="btn border-prim1 bg-prim1 hover:bg-prim text-white transition duration-200 ease-in hover:border-base" data-aos="fade-left" data-aos-duration="2000">
                <i className="bx bx-user-plus bx-sm pr-2"></i>Tambah Kelas
              </Link>
            </div>
          </div>

          <div className="grid mt-5 gap-x-3 gap-y-5 grid-cols-3" data-aos="zoom-out-up" data-aos-duration="2000">
            {kelas?.map((m) => (
              <div key={m.id} className="card w-[320px] border-prim h-[300px] bg-base-100 shadow-xl">
                <figure className="  h-full">
                  <img className="h-full w-full" src={m.picture} alt="Yoga" />
                </figure>
                <div className="px-2 py-2  ">
                  <div className="flex items-center justify-between w-full">
                    <h2 className="card-title font-semibold">{m.title}</h2>
                    <span className="text-lg font-semibold text-prim">
                      <FormatRupiah value={m.price} />
                    </span>
                  </div>
                  <div className="flex items-center py-1 w-full gap-x-2 text-prim">
                    <div className="flex gap-x-1   items-center justify-center">
                      <i className="bx   flex bx-timer bx-md"></i>
                      <p className="text-md "> {m.duration} Menit</p>
                    </div>
                    <div className="flex gap-x-1   items-center justify-center">
                      <i className="bx   flex bxs-hot bx-md"></i>
                      <p className="text-md ">{m.level}</p>
                    </div>
                  </div>
                  <div className="w-full flex mt-2 gap-x-2 items-center justify-between">
                    <button
                      onClick={() => navigate(`/detailkelasoffline/${m.id}`)}
                      className="py-3 w-[90%] rounded-lg font-semibold active:scale-95 text-center cursor-pointer transition-all duration-100 ease-linear leading-none text-white btn-primary "
                    >
                      <i className="bx bxs-user-detail pr-2" />
                      Detail
                    </button>
                    <button
                      onClick={(e) =>
                        setModalDelete({
                          isShow: !modalDelete.isShow,
                          data: m.id,
                        })
                      }
                      className="rounded-lg active:scale-95 text-center cursor-pointer transition-all duration-100 ease-linear leading-none "
                    >
                      <i className="bx bx-sm rounded-lg bg-dang p-1 text-white bx-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default KelasOffline;
