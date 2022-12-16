import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Gym from "../../apis/get.api";
import PostApi from "../../apis/post.api";

function TambahKelasOnline() {
  let navigate = useNavigate();
  const [kategori, setKategori] = useState([]);
  const [btn, setBtn] = useState(true);

  const [data, setData] = useState({
    title: "",
    link: "https://youtu.be/TQQuqLmqYEE",
    price: 0,
    description: "",
    online_class_category_id: 0,
    tools: "",
    target_area: "",
    duration: 0,
    level: "",
    picture: null,
  });

  const onChange = (e) => {
    const { name, value, valueAsNumber } = e.target;

    setData({
      ...data,
      [name]:
        name == "online_class_category_id" ||
        name == "price" ||
        name == "duration"
          ? parseInt(value)
          : value,
    });
  };

  const handleImage = (e) => {
    const { name, files } = e.target;
    PostApi.uploadFile({ title: name, files }).then((res) =>
      setData({
        ...data,
        picture: res.data.data.url,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    PostApi.tambahKelasOnline(data)
      .then((res) => navigate("/kelasonline"))
      .catch((err) => toast.error(err.message));
  };

  const listKategori = () => {
    try {
      Gym.onlineKategori().then((res) => setKategori(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listKategori();
  }, []);

  useEffect(() => {
    if (data.picture !== null) {
      setBtn(false);
    }
  }, [data]);
  return (
    <>
      <Toaster />
      <h1 className="text-3xl mb-5 font-bold text-primary">
        Tambah Kelas Online
      </h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="flex flex-col gap-y-3">
          <div className="flex gap-x-5 w-full justify-between">
            <div className="flex flex-col w-1/2 gap-y-2">
              <label className="font-bold" htmlFor="">
                Nama Kelas
              </label>
              <input
                type="text"
                placeholder="Masukkan Nama"
                className="input input-sm input-bordered w-full "
                onChange={onChange}
                name="title"
                required
              />
            </div>
            <div className="flex flex-col w-1/2 gap-y-2">
              <label className="font-bold" htmlFor="">
                Level
              </label>
              <select
                className="select select-primary select-sm w-full max-w-xs"
                name="level"
                type="text"
                onChange={onChange}
                required
              >
                <option defaultValue="Kategori" disabled>
                  pilih kategori
                </option>
                <option value="mudah">Mudah</option>
                <option value="sedang">Sedang</option>
                <option value="sulit">Sulit</option>
              </select>
            </div>
            <div className="flex flex-col w-1/2 gap-y-2">
              <label className="font-bold" htmlFor="">
                Harga
              </label>
              <input
                type="number"
                placeholder="Masukkan Nama"
                className="input input-sm input-bordered w-full "
                onChange={onChange}
                name="price"
                required
              />
            </div>
          </div>
          <div>
            <div className="flex gap-x-5 w-full justify-between">
              <div className="flex flex-col w-1/2 gap-y-2">
                <label className="font-bold" htmlFor="">
                  Pelatihan
                </label>
                <input
                  type="text"
                  placeholder="Pelatihan"
                  className="input input-sm input-bordered w-full "
                  name="target_area"
                  onChange={onChange}
                  required
                />
              </div>
              <div className="flex flex-col w-1/2 gap-y-2">
                <label className="font-bold" htmlFor="">
                  Durasi
                </label>
                <input
                  type="number"
                  placeholder="Durasi"
                  className="input input-sm input-bordered w-full "
                  name="duration"
                  onChange={onChange}
                  required
                />
              </div>
              <div className="flex flex-col w-1/2 gap-y-2">
                <label className="font-bold" htmlFor="">
                  Peralatan
                </label>
                <input
                  type="text"
                  placeholder="Peralatan"
                  className="input input-sm input-bordered w-full "
                  name="tools"
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex gap-x-5 w-full justify-between">
            <div className="flex flex-col w-1/2 gap-y-2">
              <label className="font-bold" htmlFor="">
                Link Video
              </label>
              <input
                type="text"
                placeholder="Link Video"
                className="input input-sm input-bordered w-full "
                name="link"
                onChange={onChange}
                required
              />
            </div>

            <div className="flex flex-col w-1/2 gap-y-2">
              <label className="font-bold" htmlFor="">
                Kategori
              </label>
              <select
                className="select select-primary select-sm w-full max-w-xs"
                name="online_class_category_id"
                onChange={onChange}
                required
              >
                <option defaultValue="Kategori" disabled>
                  pilih kategori
                </option>
                {kategori &&
                  kategori?.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="flex gap-x-2  w-full">
            <div className="flex flex-col gap-y-4 w-1/2">
              <label className="font-bold" htmlFor="">
                Foto
              </label>
              <div className="w-full  flex justify-center items-center bg-transparent h-44">
                <div className="flex flex-col justify-center w-full h-full  items-center border">
                  <input
                    onChange={handleImage}
                    name="online_class"
                    type="file"
                    className="file-input w-full   p-10 h-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2 gap-y-4">
              <label className="font-bold" htmlFor="">
                Deskripsi
              </label>
              <textarea
                type="text"
                placeholder="Deskripsi"
                className="input input-sm input-bordered w-full h-full"
                onChange={onChange}
                name="description"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end mt-5 gap-x-2 ">
          <button disabled={btn} className={`${btn ? "btnw" : "btnp"} w-48`}>
            Simpan
          </button>
          <Link to="/kelasonline" className="btnd2 w-48 text-center">
            Batal
          </Link>
        </div>
      </form>
    </>
  );
}

export default TambahKelasOnline;
