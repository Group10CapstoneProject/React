import React, { useEffect, useState } from "react";
import ListUsers from "../apis/ListUsers";

const OfflineClass = () => {
  const [user, serUser] = useState([]);
  const listUser = async () => {
    try {
      ListUsers.users().then((res) => serUser(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  // eve.holt@reqres.in
  // cityslicka
  useEffect(() => {
    listUser();
  }, []);
  console.log(user);
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
            {user &&
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
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OfflineClass;
