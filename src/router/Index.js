import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DetailAnggota from "../pages/DetailAnggota";
import JenisMembership from "../pages/JenisMembership";
import KelolaAnggota from "../pages/KelolaAnggota";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import { Member } from "../pages/Member";
import NotFoundPage from "../pages/NotFoundPage";
import OfflineClass from "../pages/OfflineClass";
import OnlineClass from "../pages/OnlineClass";
import { Pembayaran } from "../pages/Pembayaran";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";
import Trainer from "../pages/Trainer";
import DetailPelatih from "./../pages/DetailPelatih";

export const SetUpRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="pembayaran" element={<Pembayaran />} />
          <Route path="offline" element={<OfflineClass />} />
          <Route path="online" element={<OnlineClass />} />
          <Route path="anggota" element={<KelolaAnggota />} />
          <Route path="/detail" element={<DetailAnggota />} />
          <Route path="jenis" element={<JenisMembership />} />
          <Route path="member" element={<Member />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="landingpage" element={<LandingPage />} />
        <Route path="trainer" element={<Trainer />} />
        <Route path="detailpelatih" element={<DetailPelatih />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
