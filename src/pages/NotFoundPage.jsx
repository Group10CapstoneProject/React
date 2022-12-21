import React from "react";

const NotFoundPage = () => {
  return (
    <div className="relative h-screen">
      <img className="w-full absolute -top-24 " src={require("../assets/images/notfound.jpg")} alt="" />
    </div>
  );
};

export default NotFoundPage;