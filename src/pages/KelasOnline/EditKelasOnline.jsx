import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Gym from "../../apis/get.api";
import PostApi from "../../apis/post.api";

function EditKelasOnline() {
  let state = useLocation();
  const {
    id,
    title,
    link,
    price,
    description,
    online_class_category,
    tools,
    target_area,
    duration,
    level,
    picture,
    trainer,
  } = state.state;
  console.log(state);
  let navigate = useNavigate();
  const [kategori, setKategori] = useState([]);
  const [trainers, setTrainer] = useState([]);
  const [data, setData] = useState({
    id: id,
    title: title,
    link: link,
    price: price,
    description: description,
    online_class_category_id: online_class_category.id,
    tools: tools,
    target_area: target_area,
    duration: duration,
    level: level,
    trainer_id: trainer.id,
    picture: picture,
  });
  const onChange = (e) => {
    const { name, value, valueAsNumber } = e.target;

    setData({
      ...data,
      [name]:
        name == "online_class_category_id" ||
        name == "price" ||
        name == "duration" ||
        name == "trainer_id"
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

    PostApi.updateKelasOnline(data)
      .then((res) => {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate(`/detailkelasonline/${id}`);
        }, 2000);
      })
      .catch((err) => toast.error(err.message));
  };

  const listKategori = () => {
    try {
      Gym.onlineKategori().then((res) => setKategori(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  const listTrainer = () => {
    Gym.Trainers().then((res) => setTrainer(res.data.data));
  };

  useEffect(() => {
    listKategori();
    listTrainer();
  }, []);

  return (
    <>
      <Toaster />
      <h1 className="text-3xl mb-5 font-bold text-primary">
        Edit kelas Online
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
                Nama Pelatih
              </label>
              <select
                onChange={onChange}
                name="trainer_id"
                value={data.trainer_id}
                className="select-sm border w-full max-w-xs"
                defaultValue={trainer?.id}
              >
                <option disabled selected>
                  {trainer?.name}
                </option>
                {trainers?.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
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
                value={data.level}
              >
                <option disabled>pilih kategori</option>
                <option value="mudah">Mudah</option>
                <option value="sedang">Sedang</option>
                <option value="sulit">Sulit</option>
              </select>
            </div>
            <div className="flex flex-col w-1/2 gap-y-2">
              <label className="font-bold" htmlFor="">
                Harga Pelatihan
              </label>
              <input
                type="number"
                placeholder="Masukkan Nama"
                className="input input-sm input-bordered w-full "
                onChange={onChange}
                name="price"
                value={data.price}
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
                  placeholder="Masukkan Nama Pelatih"
                  className="input input-sm input-bordered w-full "
                  name="target_area"
                  onChange={onChange}
                  value={data.target_area}
                />
              </div>
              <div className="flex flex-col w-1/2 gap-y-2">
                <label className="font-bold" htmlFor="">
                  duration
                </label>
                <input
                  type="number"
                  placeholder="Masukkan Nama Pelatih"
                  className="input input-sm input-bordered w-full "
                  name="duration"
                  onChange={onChange}
                  value={data.duration}
                />
              </div>
              <div className="flex flex-col w-1/2 gap-y-2">
                <label className="font-bold" htmlFor="">
                  Peralatan
                </label>
                <input
                  type="text"
                  placeholder="Masukkan Nama"
                  className="input input-sm input-bordered w-full "
                  name="tools"
                  onChange={onChange}
                  value={data.tools}
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
                placeholder="Masukkan Nama"
                className="input input-sm input-bordered w-full "
                name="link"
                onChange={onChange}
                value={data.link}
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
                value={data.online_class_category_id}
              >
                <option defaultValue="Kategori" disabled>
                  pilih kategori
                </option>
                {kategori &&
                  kategori.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col w-full gap-y-4">
            <label className="font-bold" htmlFor="">
              Deskripsi
            </label>
            <textarea
              type="text"
              placeholder="Deskripsi"
              className="input input-sm input-bordered w-full h-full"
              onChange={onChange}
              value={data.description}
              name="description"
            />
          </div>
          <div className="flex flex-col gap-y-4 w-full">
            <label className="font-bold" htmlFor="">
              Foto
            </label>
            <div className="w-full  flex justify-center items-center bg-transparent h-40">
              <div className="flex cursor-pointer relative flex-col justify-center w-full h-full  items-center border">
                <input
                  onChange={handleImage}
                  name="online_class"
                  type="file"
                  className="file-input w-full z-50 opacity-0 cursor-pointer borders  p-10 h-full"
                />
                <div className="absolute w-44 flex  flex-col  items-center">
                  {data.picture !== null ? (
                    <img className="w-28" src={data.picture} alt="" />
                  ) : (
                    <i class="bx bx-lg bxs-image-add"></i>
                  )}
                  <p className="text-sm text-center font-semibold">
                    <span className="text-prim">Tarik gambar kesini </span>atau
                    <span className="text-prim"> cari</span> untuk memilih
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end mt-5 gap-x-2 ">
          <button className={`btnp w-48`}>Simpan</button>
          <Link to="/kelasonline" className="btnd2 w-48 text-center">
            Hapus
          </Link>
        </div>
      </form>
    </>
  );
}

export default EditKelasOnline;
