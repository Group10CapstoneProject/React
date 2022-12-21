import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import Gym from "../../apis/get.api";
import PostApi from "../../apis/post.api";

function TambahKelasOffline() {
  let navigate = useNavigate();
  const [kategori, setKategori] = useState([]);
  const [btn, setBtn] = useState(true);
  const [data, setData] = useState({
    title: "",
    time: "",
    duration: 0,
    slot: 0,
    price: 0,
    picture: null,
    description: "",
    location: "",
    offline_class_category_id: null,
  });
  const onChange = (e) => {
    const { name, value, valueAsNumber } = e.target;
    const time = value.split("T");

    setData({
      ...data,
      [name]:
        name == "offline_class_category_id" ||
        name == "price" ||
        name == "duration" ||
        name == "slot"
          ? parseInt(value)
          : name == "time"
          ? time.join(" ") + ":00"
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
    try {
      PostApi.tambahkelasOffline(data).then((res) => navigate("/kelasoffline"));
    } catch (error) {
      console.log(error);
    }
  };

  const listKategori = () => {
    try {
      Gym.offlineKategori().then((res) => setKategori(res.data.data));
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
      <h1 className="text-3xl mb-5 font-bold text-primary">
        Tambah Kelas Offline
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
                Slot
              </label>
              <input
                type="number"
                placeholder="Jumlah Slot"
                className="input input-sm input-bordered w-full "
                onChange={onChange}
                name="slot"
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
                onChange={onChange}
                name="duration"
                required
              />
            </div>
          </div>
          <div>
            <div className="flex gap-x-5 w-full justify-between">
              <div className="flex flex-col w-1/2 gap-y-2">
                <label className="font-bold" htmlFor="">
                  Waktu
                </label>
                <input
                  type="datetime-local"
                  className="input input-sm input-bordered w-full "
                  onChange={onChange}
                  name="time"
                  required
                />
              </div>
              <div className="flex flex-col w-1/2 gap-y-2">
                <label className="font-bold" htmlFor="">
                  Harga
                </label>
                <input
                  type="number"
                  placeholder="Masukkan Harga"
                  className="input input-sm input-bordered w-full "
                  name="price"
                  onChange={onChange}
                  required
                />
              </div>
              <div className="flex flex-col w-1/2 gap-y-2">
                <label className="font-bold" htmlFor="">
                  Lokasi
                </label>
                <input
                  type="text"
                  placeholder="Lokasi"
                  className="input input-sm input-bordered w-full "
                  name="location"
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex gap-x-5 w-full justify-between">
            <div className="flex flex-col w-1/2 gap-y-2">
              <label className="font-bold" htmlFor="">
                Kategori
              </label>
              <select
                className="select select-primary select-sm w-full max-w-xs"
                name="offline_class_category_id"
                onChange={onChange}
                required
              >
                <option disabled>Pilih kategori</option>
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
                    name="offline_class"
                    type="file"
                    className="file-input w-full  p-10 h-full"
                    required
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
                placeholder="Deskripsi Kelas"
                className="input input-sm input-bordered w-full h-full"
                onChange={onChange}
                name="description"
                required
              />
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center mt-5 ">
          <button disabled={btn} className={`${btn ? "btnw" : "btnp"} w-full`}>
            Simpan
          </button>
        </div>
      </form>
    </>
  );
}

export default TambahKelasOffline;