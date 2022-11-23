import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../pages/Layout";

const PrivateRoute = () => {
  let token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <Layout />
    </>
  );
};

export default PrivateRoute;
