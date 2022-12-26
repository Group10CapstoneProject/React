import React, { useState } from "react";
import Gym from "../apis/Gym";

const OfflineClass = () => {
  const [member, setMember] = useState([]);
  const listUser = async () => {
    try {
      Gym.member().then((res) => setMember(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

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
          <tbody></tbody>
        </table>
      </div>
    </>
  );
};

export default OfflineClass;
