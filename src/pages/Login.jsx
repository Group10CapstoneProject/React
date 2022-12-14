import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import APIAuth from "../apis/Auth.api";
import bgLogin from "../assets/images/Login1.png";
import logo from "../assets/images/logo.png";
import Auth from "../utils/Auth";
function Login() {
  // let token = localStorage.getItem("token");
  // const { decodedToken, isExpired } = useJwt(token);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const token = Auth.getAccessToken();
  const headers = { Authorization: `Bearer ${token}` };

  let navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    APIAuth.loginUser({ email, password })
      .then((res) => {
        res.data && navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="h-screen flex   text-black">
      <img className="absolute top-4 left-2 w-[100px] h-[70px] ml-4" data-aos="zoom-in" data-aos-duration="2000" src={logo} alt="" />
      <div className="flex w-full h-full items-center  ">
        <div className="flex justify-center   bg-white h-full items-center  w-full">
          <div className="w-[55%]" data-aos="zoom-in-up" data-aos-duration="2000">
            <h4 className="font-bold pb-2">Masuk Admin</h4>
            <p className="text-[16px]">Silakan masuk dengan email dan password admin yang telah diberikan</p>
            <form onSubmit={handleLogin}>
              <label className="block ply-2 pt-2">
                <b>Email</b>
              </label>
              <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="alta@gmail.com" className="input input-bordered w-full text-sm rounded-md" />
              <label className="block py-2">
                <b>Password</b>
              </label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="******" className="input input-bordered w-full rounded-md" />
              <div className="flex gap-x-1 py-2 justify-between">
                <div className="pl-2">
                  <input type="checkbox" name="" id="" />
                  <label className="pl-2">Ingat saya</label>
                </div>
                <p className="text-primary">Lupa password?</p>
              </div>
              <span className="text-red-600">{error}</span>
              <div className="flex justify-center h-full items-center  w-full pt-2">
                <button className={`${loading ? "opacity-50 btn-disabled" : ""} bg-primary w-full h-full py-2 text-white rounded-lg`}>
                  <span className={`${loading ? "flex" : "hidden"}   justify-center`}>
                    <box-icon name="loader-alt" animation="spin"></box-icon>
                  </span>{" "}
                  {`${!loading ? "MASUK" : ""}`}
                </button>
              </div>
            </form>
            <div className="footer">
              <p className="text-base3 pt-6">&copy; 2022 Altagym. All Rights Reserved</p>
            </div>
          </div>
        </div>
        <div className="flex bg-cover backdrop-brightness-50 bg-center items-center  justify-center h-full w-full " style={{ backgroundImage: `url(${bgLogin})` }}>
          <div className="opacity-100">
            <img className="opacity-100" src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
