import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Gym from "../../apis/get.api";
import PostApi from "../../apis/post.api";

function TambahAdmin() {
  let navigate = useNavigate();
  const [kategori, setKategori] = useState([]);
  const [trainer, setTrainer] = useState([]);
  const [btn, setBtn] = useState(true);

  const [data, setData] = useState({
    title: "",
    link: "https://youtu.be/TQQuqLmqYEE",
    price: 0,
    description: "",
    online_class_category_id: 0,
    tools: "",
    target_area: "",
    trainer_id: 0,
    duration: 0,
    level: "",
    picture: null,
  });

  const onChange = (e) => {
    const { name, value, valueAsNumber } = e.target;

    setData({
      ...data,
      [name]: name == "online_class_category_id" || name == "price" || name == "duration" || name == "trainer_id" ? parseInt(value) : value,
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
  const listTrainer = () => {
    Gym.Trainers().then((res) => setTrainer(res.data.data));
  };

  useEffect(() => {
    listKategori();
    listTrainer();
  }, []);

  useEffect(() => {
    if (data.picture !== null) {
      setBtn(false);
    }
  }, [data]);
  return (
    <>
      <Toaster />
      {/* <span className="text-3xl mb-5 font-bold text-prim"> Admin</span> <span className="text-3xl mb-5 font-bold text-prim1">Tambah Admin</span> */}
      <h1 className="text-3xl mb-5 font-bold text-primary">
        <span className="text-prim">Admin </span> <span className="text-black">/</span> <span className="text-prim1">Tambah Admin</span>
      </h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col w-[100%] gap-y-2">
            <label className="font-bold" htmlFor="username">
              Username
            </label>
            <input type="text" placeholder="Masukkan Username" className="input input-xl input-bordered w-full " onChange={onChange} name="title" required />
          </div>

          <div className="flex flex-col w-[100%] gap-y-2">
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <input type="text" placeholder="Masukkan Email" className="input input-xl input-bordered w-full " onChange={onChange} name="title" required />
          </div>

          <div className="flex flex-col w-[100%] gap-y-2">
            <label className="font-bold" htmlFor="password">
              Password
            </label>
            <input type="text" placeholder="Masukkan Password" className="input input-xl input-bordered w-full " onChange={onChange} name="title" required />
          </div>

          <div className="flex flex-col w-[100%] gap-y-2">
            <label className="font-bold" htmlFor="konfirmasi password">
              Konfirmasi Password
            </label>
            <input type="text" placeholder="Masukkan Kembali Password" className="input input-xl input-bordered w-full " onChange={onChange} name="title" required />
          </div>

          <div className="flex flex-col gap-y-4 w-full">
            <label className="font-bold" htmlFor="">
              Foto Profile
            </label>
            <div className="w-full  flex justify-center items-center bg-transparent h-40">
              <div className="flex cursor-pointer relative flex-col justify-center w-full h-full  items-center border-4 border-dashed">
                <input onChange={handleImage} name="online_class" type="file" className="file-input w-full z-50 opacity-0 cursor-pointer borders  p-10 h-full" />
                <div className="absolute w-44 flex  flex-col  items-center">
                  {data.picture !== null ? <img src={data.picture} alt="" /> : <i class="bx bx-lg bxs-image-add"></i>}
                  <p className="text-sm text-center font-semibold">
                    <span className="text-base6">Tarik gambar kesini </span>
                    <span className="text-black">atau</span>
                    {"  "}
                    <span className="text-prim">Cari</span>
                    {"  "}
                    <span className="text-black">untuk memilih</span>
                  </p>
                  <div className="pt-2">
                    <button className="btn btn-sm bg-prim3 text-white">UPLOAD</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end mt-5 gap-x-2 ">
          <button disabled={btn} className={`${btn ? "btnw" : "btnp"} w-48`}>
            Tambah Admin
          </button>
          <Link to="/kelasonline" className="btnd2 w-48 text-center">
            Batal
          </Link>
        </div>
      </form>
    </>
  );
}

export default TambahAdmin;
