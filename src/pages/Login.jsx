import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Auth from "../apis/Auth";
import CONST from "../utils/Constants";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [succes, setSucces] = useState(false);
  let navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    Auth.loginUser({ email, password })
      .then((res) => {
        res.data && navigate("/");
      })
      .catch((err) => console.log(err));

    // setSucces(true);
  };
  // console.log(succes);
  useEffect(() => {
    if (succes) {
      navigate("/");
    }
  }, [succes]);

  return (
    <div className="h-screen px-44 flex bg-base justify-center items-center ">
      <div className="flex w-full ">
        <div className="borders flex justify-center  w-full">GAMBAR</div>
        <div className="borders flex justify-center w-full">
          <form onSubmit={handleLogin}>
            <label className="block" htmlFor="">
              Email
            </label>

            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Type here"
              className="input w-full max-w-xs"
            />
            <label className="block" htmlFor="">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="masukkan password"
              className="input w-full max-w-xs"
            />

            <button className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
