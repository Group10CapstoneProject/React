import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Gym from "../../apis/get.api";
import PostApi from "../../apis/post.api";

function EditKelasOnline() {
  let state = useLocation();
  console.log(state);
  const { id, title, link, price, description, online_class_category_id, tools, target_area, duration, level, picture } = state.state;

  let navigate = useNavigate();
  const [kategori, setKategori] = useState([]);
  const [data, setData] = useState({
    id: id,
    title: title,
    link: link,
    price: price,
    description: description,
    online_class_category_id: online_class_category_id,
    tools: tools,
    target_area: target_area,
    duration: duration,
    level: level,
    picture: picture,
  });

  const onChange = (e) => {
    const { name, value, valueAsNumber } = e.target;

    setData({
      ...data,
      [name]: name == "online_class_category_id" || name == "price" || name == "duration" ? parseInt(value) : value,
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
      PostApi.updateKelasOnline(data).then((res) => navigate(`/detailkelasonline/${id}`));
    } catch (error) {
      console.log(error);
    }
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

  return (
    <>
      <h1 className="text-3xl mb-5 font-bold text-primary">Edit kelas Online</h1>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="flex flex-col gap-y-3">
          <div className="flex gap-x-5 w-full justify-between">
            <div className="flex flex-col w-1/2 gap-y-2">
              <label className="font-bold" htmlFor="">
                Nama Kelas
              </label>
              <input type="text" placeholder="Masukkan Nama" className="input input-sm input-bordered w-full " onChange={onChange} name="title" value={data.title} />
            </div>
            <div className="flex flex-col w-1/2 gap-y-2">
              <label className="font-bold" htmlFor="">
                Level
              </label>
              <select className="select select-primary select-sm w-full max-w-xs" name="level" type="text" onChange={onChange} value={data.level}>
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
              <input type="number" placeholder="Masukkan Nama" className="input input-sm input-bordered w-full " onChange={onChange} name="price" value={data.price} />
            </div>
          </div>
          <div>
            <div className="flex gap-x-5 w-full justify-between">
              <div className="flex flex-col w-1/2 gap-y-2">
                <label className="font-bold" htmlFor="">
                  Pelatihan
                </label>
                <input type="text" placeholder="Masukkan Nama Pelatih" className="input input-sm input-bordered w-full " name="target_area" onChange={onChange} value={data.target_area} />
              </div>
              <div className="flex flex-col w-1/2 gap-y-2">
                <label className="font-bold" htmlFor="">
                  duration
                </label>
                <input type="number" placeholder="Masukkan Nama Pelatih" className="input input-sm input-bordered w-full " name="duration" onChange={onChange} value={data.duration} />
              </div>
              <div className="flex flex-col w-1/2 gap-y-2">
                <label className="font-bold" htmlFor="">
                  tools
                </label>
                <input type="text" placeholder="Masukkan Nama" className="input input-sm input-bordered w-full " name="tools" onChange={onChange} value={data.tools} />
              </div>
            </div>
          </div>
          <div className="flex gap-x-5 w-full justify-between">
            <div className="flex flex-col w-1/2 gap-y-2">
              <label className="font-bold" htmlFor="">
                Link Video
              </label>
              <input type="text" placeholder="Masukkan Nama" className="input input-sm input-bordered w-full " name="link" onChange={onChange} value={data.link} />
            </div>

            <div className="flex flex-col w-1/2 gap-y-2">
              <label className="font-bold" htmlFor="">
                Kategori
              </label>
              <select className="select select-primary select-sm w-full max-w-xs" name="online_class_category_id" onChange={onChange} value={data.online_class_category_id}>
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
          <div className="flex gap-x-2  w-full">
            <div className="flex flex-col gap-y-4 w-1/2">
              <label htmlFor="">Foto</label>
              <div className="w-full  flex justify-center items-center bg-transparent h-44">
                <div className="flex flex-col justify-center w-full h-full  items-center border">
                  <input onChange={handleImage} name="online_class" type="file" className="file-input w-full   p-10 h-full" />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2 gap-y-2">
              <label className="font-bold" htmlFor="">
                Deskripsi
              </label>
              <textarea type="text" placeholder="Masukkan Nama Pelatih" className="input input-sm input-bordered h-full w-full " onChange={onChange} name="description" value={data.description} />
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center mt-5 ">
          <button className="btnp w-full">Simpan</button>
        </div>
      </form>
    </>
  );
}

export default EditKelasOnline;
