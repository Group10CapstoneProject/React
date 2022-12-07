import React, { useState } from "react";
import Gym from "../apis/get.api";

const OfflineClass = () => {
  const [member, setMember] = useState([]);
  const listUser = async () => {
    try {
      Gym.member().then((res) => setMember(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  // eve.holt@reqres.in
  // cityslicka

  return (
    <>
      <h1>Kelas Offline</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Job</th>
              <th>aksi</th>
              <th>aksi</th>
            </tr>
          </thead>
          <tbody>
            {/* {data && (
            <tr>
              <th>{data[0].name}</th>
              <td>sasa</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>
                <button className="btn btn-xs btn-primary">edit</button>
              </td>
            </tr>
          )} */}

            {/* {user &&
              user.map((m) => (
                <tr key={m.id}>
                  <th>1</th>
                  <td>{m.first_name}</td>
                  <td>
                    <img src={m.avatar} alt="" />
                  </td>
                  <td>Blue</td>
                  <td>
                    <button className="btn btn-xs btn-primary">edit</button>
                  </td>
                </tr>
              ))} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OfflineClass;
