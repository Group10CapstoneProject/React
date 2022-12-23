import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Gym from "../../apis/get.api";
import PostApi from "../../apis/post.api";
import ModalHapus from "../../components/ModalHapus";
import ModalEditKategoriOffline from "./ModalEditKategoriOffline";
import ModalTambahKategoriOffline from "./ModalTambahKategoriOffline";

const KategoriOffline = () => {
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);
  const [modalDelete, setModalDelete] = useState({
    isShow: false,
    data: {},
  });
  const [message, setMessage] = useState("");
  const [modalEdit, setModalEdit] = useState({
    isShow: false,
    data: {},
  });
  const [kategori, setKategori] = useState([]);
  const listKategori = () => {
    try {
      Gym.offlineKategori().then((res) => setKategori(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    PostApi.deleteKategoriOffline(id)
      .then((res) => {
        setMessage(res.data.message);
        setModalDelete(false);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleEdit = (data) => {
    setModalEdit({ isShow: !modalEdit.isShow, data });
  };

  useEffect(() => {
    listKategori();
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [load, message]);

  if (load) {
    return <h1>loading...</h1>;
  }
  return (
    <>
      <Toaster />
      {show && (
        <ModalTambahKategoriOffline
          show={show}
          setLoad={setLoad}
          setShow={setShow}
          setMessage={setMessage}
        />
      )}
      {modalEdit.isShow && (
        <ModalEditKategoriOffline
          show={modalEdit.isShow}
          setLoad={setLoad}
          setShow={setModalEdit}
          data={modalEdit.data}
          setMessage={setMessage}
        />
      )}

      {modalDelete.isShow && (
        <ModalHapus
          show={modalDelete.isShow}
          setShow={setModalDelete}
          handleDelete={handleDelete}
          data={modalDelete.data}
        />
      )}
      <div>
        <div className="form-control">
          <div className="flex   input-group"></div>
          <br />
          <div className="flex items-center justify-between ">
            <h4 className="font-bold text-prim">Kategori Kelas Offline</h4>
            <div className="flex justify-end ">
              <label
                onClick={() => setShow(true)}
                htmlFor="my-modal-5"
                className="btn border-prim bg-prim hover:bg-accent text-white transition duration-200 ease-in hover:border-base"
              >
                <i className="bx bx-user-plus bx-sm"></i> Tambah Kategori
              </label>
            </div>
          </div>

          <div className="grid mt-5 gap-x-3 gap-y-5 grid-cols-3">
            {kategori?.map((m) => (
              <div
                key={m.id}
                className="  card w-[320px]  h-72 bg-base-100 shadow-xl "
              >
                <figure className="  h-full">
                  <img className="h-full w-full" src={m.picture} alt="Yoga" />
                </figure>
                <div className="px-2 py-2  ">
                  <div className="flex items-center justify-between w-full">
                    <h2 className="card-title font-bold">{m.name}</h2>
                    <span className="">{m.offline_class_count} Kelas</span>
                  </div>
                  <div className="w-full flex mt-2 gap-x-2 items-center justify-between">
                    <button
                      onClick={() => handleEdit(m)}
                      className="py-3 w-[90%] font-bold rounded-lg active:scale-95 text-center cursor-pointer transition-all duration-100 ease-linear leading-none text-white flex items-center justify-center bg-primary  "
                    >
                      <i className="bx  bx-edit"></i>
                      Edit
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

export default KategoriOffline;
