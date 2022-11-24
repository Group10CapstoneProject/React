import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";
import OfflineClass from "../pages/OfflineClass";
import OnlineClass from "../pages/OnlineClass";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

export const SetUpRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="offline" element={<OfflineClass />} />
          <Route path="online" element={<OnlineClass />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
