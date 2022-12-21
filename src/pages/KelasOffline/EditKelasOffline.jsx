import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Gym from "../../apis/get.api";
import PostApi from "../../apis/post.api";

function EditKelasOffline() {
  let state = useLocation();
  const {
    id,
    title,
    time,
    duration,
    slot,
    price,
    picture,
    description,
    location,
    offline_class_category_id,
  } = state.state;
  console.log(state);
  const [btn, setBtn] = useState(true);

  let navigate = useNavigate();
  const [kategori, setKategori] = useState([]);
  const [data, setData] = useState({
    id: id,
    title: title,
    time: time,
    duration: duration,
    slot: slot,
    price: price,
    picture: picture,
    description: description,
    location: location,
    offline_class_category_id: offline_class_category_id,
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
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      PostApi.updateKelasOffline(data).then((res) =>
        navigate(`/detailkelasoffline/${id}`)
      );
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
        Edit Kelas Offline
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
                value={data.title}
              />
            </div>

            <div className="flex flex-col w-1/2 gap-y-2">
              <label className="font-bold" htmlFor="">
                Slot
              </label>
              <input
                type="number"
                placeholder="Masukkan Nama"
                className="input input-sm input-bordered w-full "
                onChange={onChange}
                name="slot"
                value={data.slot}
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
                value={data.duration}
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
                  placeholder="Harga"
                  className="input input-sm input-bordered w-full "
                  name="price"
                  onChange={onChange}
                  value={data.price}
                />
              </div>
              <div className="flex flex-col w-1/2 gap-y-2">
                <label className="font-bold" htmlFor="">
                  Lokasi
                </label>
                <input
                  type="text"
                  placeholder="Masukkan Nama Pelatih"
                  className="input input-sm input-bordered w-full "
                  name="location"
                  onChange={onChange}
                  value={data.location}
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
                value={data.offline_class_category_id}
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
                    name="offline_class"
                    type="file"
                    className="file-input w-full  p-10 h-full"
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
                value={data.description}
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

export default EditKelasOffline;