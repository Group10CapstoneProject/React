import React from "react";
import addMember from "../assets/svg/addMember.svg";
import YogaImage from "../assets/images/Yoga.png";
import trashImage from "../assets/images/trash.png";
import StrenghtImage from "../assets/images/Strenght.png";
import CardioImage from "../assets/images/Cardio.png";
import StrechingImage from "../assets/images/Streching.png";

function OnlineClass() {
  return (
    <div className="form-control">
      <div className="flex pl-7 pt-4 input-group">
        <input type="text" placeholder="Cari aktivitas" className="input input-bordered" />
        <button className="btn btn-square bg-base">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
      <br />
      <div>
        <h4 className="pl-7 font-bold">Kategori Kelas Online</h4>
      </div>
      <div className="flex justify-end pr-7 pb-2">
        <label htmlFor="my-modal-5" className="btn border-primary bg-primary hover:bg-accent text-white transition duration-200 ease-in hover:border-base">
          <img className="fill-gray-800" src={addMember} alt="" /> Tambah Kategori
        </label>
      </div>
      <br />
      <div className="grid gap-x-8 gap-y-4 grid-cols-3">
        <div className="flex card w-96 ml-5 bg-base-100 shadow-xl">
          <figure className="flex justify-start">
            <img src={YogaImage} alt="Yoga" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold pr-4">
              Yoga
              <div className="flex justify-end gap-x-10 badge badge-neutral">12 Video</div>
            </h2>
            <div className="card-actions justify-center">
              <div className="py-3 rounded-lg active:scale-95 text-center cursor-pointer transition-all duration-100 ease-linear leading-none text-white btn-primary w-44">DETAIL</div>
              <div className="flex pb-15 gap-x-10 w-30 h-30">
                <a href="*">
                  <img src={trashImage} alt="trash" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex card w-96 ml-5 bg-base-100 shadow-xl">
          <figure className="">
            <img src={StrenghtImage} alt="Strenght" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold pr-4">
              Strenght
              <div className="flex justify-end gap-x-10 badge badge-neutral">23 Video</div>
            </h2>
            <div className="card-actions justify-center">
              <div className="py-3 rounded-lg active:scale-95 text-center cursor-pointer transition-all duration-100 ease-linear leading-none text-white btn-primary w-44">DETAIL</div>
              <div className="flex pb-15 gap-x-10 w-30 h-30">
                <a href="*">
                  <img src={trashImage} alt="trash" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex card w-96 ml-5 bg-base-100 shadow-xl">
          <figure className="">
            <img src={CardioImage} alt="Cardio" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold pr-4">
              Cardio
              <div className="flex justify-end gap-x-10 badge badge-neutral">8 Video</div>
            </h2>
            <div className="card-actions justify-center">
              <div className="py-3 rounded-lg active:scale-95 text-center cursor-pointer transition-all duration-100 ease-linear leading-none text-white btn-primary w-44">DETAIL</div>
              <div className="flex pb-15 gap-x-10 w-30 h-30">
                <a href="*">
                  <img src={trashImage} alt="trash" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex card w-96 ml-5 bg-base-100 shadow-xl">
          <figure className="">
            <img src={StrechingImage} alt="Streching" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold pr-4">
              Streching
              <div className="flex justify-end gap-x-10 badge badge-neutral">22 Video</div>
            </h2>
            <div className="card-actions justify-center">
              <div className="py-3 rounded-lg active:scale-95 text-center cursor-pointer transition-all duration-100 ease-linear leading-none text-white btn-primary w-44">DETAIL</div>
              <div className="flex pb-15 gap-x-10 w-30 h-30">
                <a href="*">
                  <img src={trashImage} alt="trash" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex card w-96 ml-5 bg-base-100 shadow-xl">
          <figure className="">
            <img src={StrenghtImage} alt="Strenght" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold pr-4">
              Strenght
              <div className="flex justify-end gap-x-10 badge badge-neutral">23 Video</div>
            </h2>
            <div className="card-actions justify-center">
              <div className="py-3 rounded-lg active:scale-95 text-center cursor-pointer transition-all duration-100 ease-linear leading-none text-white btn-primary w-44">DETAIL</div>
              <div className="flex pb-15 gap-x-10 w-30 h-30">
                <a href="*">
                  <img src={trashImage} alt="trash" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex card w-96 ml-5 bg-base-100 shadow-xl">
          <figure className="">
            <img src={CardioImage} alt="Cardio" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold pr-4">
              Cardio
              <div className="flex justify-end gap-x-10 badge badge-neutral">8 Video</div>
            </h2>
            <div className="card-actions justify-center">
              <div className="py-3 rounded-lg active:scale-95 text-center cursor-pointer transition-all duration-100 ease-linear leading-none text-white btn-primary w-44">DETAIL</div>
              <div className="flex pb-15 gap-x-10 w-30 h-30">
                <a href="*">
                  <img src={trashImage} alt="trash" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineClass;
