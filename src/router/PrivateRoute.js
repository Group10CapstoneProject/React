import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "../pages/Layout";
import Auth from "../utils/Auth";

const PrivateRoute = () => {
  if (!Auth.isAuthorization()) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <Layout />
    </>
  );
};

export default PrivateRoute;