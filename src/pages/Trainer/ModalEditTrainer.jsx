import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Select from "react-select";
import Gym from "../../apis/get.api";
import PostApi from "../../apis/post.api";

function ModalEditTrainer({ show, setShow, setMessage, data }) {
  const { id, name, email, phone, dob, gender, price, daily_slot, trainer_skill, description, picture } = data;

  const [trainer, setTrainer] = useState({
    id: id,
    name: name,
    email: email,
    phone: phone,
    dob: dob,
    gender: gender,
    price: price,
    daily_slot: daily_slot,
    skills: [],
    description: description,
    picture: picture,
  });
  const [skill, setSkills] = useState([]);
  const [selected, setSelected] = useState([]);
  const [select, setSelect] = useState([]);
  const [image, showImage] = useState("");

  const trainerSkill = () => {
    Gym.Skills().then((res) => setSkills(res.data.data));
  };

  const options = skill?.map((m) => ({ label: m.name, value: m.id }));
  const onChange = (e) => {
    const { value, name, type } = e.target;
    setTrainer({
      ...trainer,
      [name]: type == "number" ? Number(value) : value,
    });
  };
  const handleSelect = (item) => {
    const skills = item.map((m) => m.value);
    setTrainer({
      ...trainer,
      skills: skills,
    });
  };

  console.log(trainer);
  const handleImage = (e) => {
    const { name, files } = e.target;
    PostApi.uploadFile({ title: name, files }).then((res) => {
      setTrainer({
        ...trainer,
        picture: res.data.data.url,
      });
      showImage(res.data.data.url);
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    PostApi.updateTrainer(trainer)
      .then((res) => {
        setMessage(res.data.message);
        setShow(false);
      })
      .catch((err) => toast.error(err.message));
  };
  useEffect(() => {
    trainerSkill();
  }, []);
  return (
    <>
      <Toaster />
      <input defaultChecked={true} type="checkbox" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box   p-0 w-full max-w-[60%]">
          <div className="w-full p-3 bg-base2 flex">
            <span>❗</span>
            <div>
              <h2 className="font-bold text-lg">Tambah Trainer</h2>
              <p className="text-sm font-semibold">Kamu dapat menambahkan Kategori disini</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="p-3 ">
              <div className="flex flex-col w-full  px-2 gap-x-4 ">
                <div className=" relative  flex justify-center">
                  <div className={`w-24  gap-x-1 flex items-center justify-center rounded-full relative cursor-pointer  h-24  border ${trainer.picture ? "" : "bg-[#D3D3D3]"}`}>
                    {trainer.picture && <img className="absolute w-24 h-24 cursor-pointer rounded-full" src={trainer.picture} alt="" />}
                    <input className="absolute block w-full h-full  cursor-pointer opacity-0  border pin-r pin-t" type="file" name="trainer" onChange={handleImage} />
                    <i className="bx bxs-camera-plus"></i>
                    <span className="">Pilih Foto</span>
                  </div>
                </div>
                <div className="w-full flex gap-x-4 ">
                  <div className="w-1/2 text-sm">
                    <div>
                      <label htmlFor="">Nama</label>
                      <input className="inputTrainer w-full" type="text" name="name" onChange={onChange} value={trainer.name} />
                    </div>
                    <div>
                      <label htmlFor="">Email</label>
                      <input className="inputTrainer w-full" type="text" name="email" onChange={onChange} value={trainer.email} />
                    </div>
                    <div>
                      <label htmlFor="">Nomor HandPhone</label>
                      <input className="inputTrainer w-full" type="text" name="phone" onChange={onChange} value={trainer.phone} />
                    </div>
                    <div>
                      <label htmlFor="">dob</label>
                      <input className="inputTrainer w-full" type="date" name="dob" onChange={onChange} value={trainer.dob} />
                    </div>
                  </div>
                  <div className="w-1/2 text-sm">
                    <div>
                      <label htmlFor="">Harga</label>
                      <input className="inputTrainer w-full" type="number" name="price" onChange={onChange} value={trainer.price} />
                    </div>
                    <div>
                      <label htmlFor="">Slot</label>
                      <input className="inputTrainer w-full" type="number" name="daily_slot" onChange={onChange} value={trainer.daily_slot} />
                    </div>
                    <div>
                      <label htmlFor="">Trainer</label>
                      <div className="flex items-center gap-x-2">
                        <Select className="w-[90%]" isMulti onChange={(item) => handleSelect(item)} options={options} isDisabled={false} isLoading={false} isRtl={false} defaultValue={trainer.skills} />
                        <label className="border cursor-pointer bg-prim text-white p-1 rounded-lg" onClick={handleSelect} htmlFor="">
                          <i className="bx bx-add-to-queue flex justify-center" />
                          Tambah
                        </label>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="">Gender</label>
                      <div className="flex my-1">
                        <div className="flex gap-x-2 mr-2">
                          <span className="flex items-center text-sm gap-x-2">
                            L <input type="radio" name="gender" onClick={onChange} className="radio radio-accent w-4 h-4" checked={trainer.gender === "L" && true} value="L" />
                          </span>
                        </div>
                        <div className="flex gap-x-2">
                          <span className="flex items-center gap-x-2">
                            P <input type="radio" name="gender" onClick={onChange} checked={trainer.gender === "P" && true} value="P" className="radio radio-accent w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center flex-col">
                  <label className="" htmlFor="">
                    Deskripsi
                  </label>
                  <textarea name="description" onChange={onChange} value={trainer.description} id="" className="w-full border  focus:border-prim"></textarea>
                </div>
                {/* <div className="w-full">
                  <div className="flex gap-x-4 items-center">
                    <label className="w-[20%]" htmlFor="">
                      Nama
                    </label>
                    <input
                      className="inputTrainer w-full"
                      type="text"
                      name="name"
                      onChange={onChange}
                    />
                  </div>
                  <div className="flex gap-x-4 items-center">
                    <label className="w-[20%]" htmlFor="">
                      Email
                    </label>
                    <input
                      className="inputTrainer w-full"
                      type="email"
                      name="email"
                      onChange={onChange}
                    />
                  </div>
                  <div className="flex gap-x-4 items-center">
                    <label className="w-[20%]" htmlFor="">
                      No Hp
                    </label>
                    <input
                      className="inputTrainer w-full"
                      type="number"
                      name="phone"
                      onChange={onChange}
                    />
                  </div>
                  <div className="flex gap-x-4 items-center">
                    <label className="w-[20%]" htmlFor="">
                      Dob
                    </label>
                    <input
                      className="inputTrainer w-full"
                      type="text"
                      name="dob"
                      onChange={onChange}
                    />
                  </div>
                  <div className="flex  items-center">
                    <label className="w-[20%]" htmlFor="">
                      Gender
                    </label>
                    <div className="flex gap-x-2 mr-2">
                      <span className="flex items-center gap-x-2">
                        L{" "}
                        <input
                          type="radio"
                          name="radio-4"
                          className="radio radio-accent w-5 h-5"
                          checked
                        />
                      </span>
                    </div>
                    <div className="flex gap-x-2">
                      <span className="flex items-center gap-x-2">
                        P{" "}
                        <input
                          type="radio"
                          name="radio-4"
                          className="radio radio-accent w-5 h-5"
                          checked
                        />
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-x-4 items-center">
                    <label className="w-[20%]" htmlFor="">
                      No Hp
                    </label>
                    <input
                      className="inputTrainer w-full"
                      type="text"
                      name="phone"
                      onChange={onChange}
                    />
                  </div>
                  <div className="flex gap-x-4 items-center">
                    <label className="w-[20%]" htmlFor="">
                      Price
                    </label>
                    <input
                      className="inputTrainer w-full"
                      type="text"
                      name="price"
                      onChange={onChange}
                    />
                  </div>
                  <div className="flex gap-x-4 items-center">
                    <label className="w-[20%]" htmlFor="">
                      daily_slot
                    </label>
                    <input
                      className="inputTrainer w-full"
                      type="text"
                      name="daily_slot"
                      onChange={onChange}
                    />
                  </div>
                  <div className="flex gap-x-4 items-center">
                    <label className="w-[20%]" htmlFor="">
                      Skills
                    </label>
                    <select
                      name="trainer_skill"
                      className="select-sm border  select-bordered w-full"
                    >
                      <option disabled selected>
                        Skills
                      </option>
                      <option>Han Solo</option>
                    </select>
                  </div>

                  <div className="flex gap-x-4 items-center">
                    <label className="w-[20%]" htmlFor="">
                      Deskripsi
                    </label>
                    <textarea
                      className="inputTrainer w-full"
                      type="text"
                      name="description"
                      onChange={onChange}
                    />
                  </div>
                </div> */}
              </div>
              <div className="modal-action flex pr-2">
                <button className={`btnp flex items-center justify-center`}>
                  <i className="bx bx-save pr-2" />
                  Simpan
                </button>
                <label onClick={() => setShow(false)} htmlFor="my-modal-5" className="btnd flex items-center">
                  <i className="bx bx-message-square-x  pr-2" />
                  Batal
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalEditTrainer;
