import React from "react";
import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "../utils/Auth";
import { useJwt } from "react-jwt";

function ProtectedRoute() {
  if (Auth.isAuthorization()) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
