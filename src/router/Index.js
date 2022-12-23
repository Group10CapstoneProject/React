import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin/Admin";
import Artikel from "../pages/Artikel.jsx/Artikel";
import BookingOffline from "../pages/BookingOffline/BookingOffline";
import DetailBookingOffline from "../pages/BookingOffline/DetailBookingOffline";
import BookingKelasOnline from "../pages/BookingOnline/BookingKelasOnline";
import DetailBookingOnline from "../pages/BookingOnline/DetailBookingOnline";
import Dashboard from "../pages/Dashboard";
import DetailAnggota from "../pages/DetailAnggota";
import JenisMembership from "../pages/JenisMembership";
import DetailKelasOffline from "../pages/KelasOffline/DetailKelasOffline";
import EditKelasOffline from "../pages/KelasOffline/EditKelasOffline";
import KategoriOffline from "../pages/KelasOffline/KategoriOffline";
import KelasOffline from "../pages/KelasOffline/KelasOffline";
import TambahKelasOffline from "../pages/KelasOffline/TambahKelasOffline";
import DetailKelasOnline from "../pages/KelasOnline/DetailKelasOnline";
import EditKelasOnline from "../pages/KelasOnline/EditKelasOnline";
import KategoriOnline from "../pages/KelasOnline/KategoriOnline";
import KelasOnline from "../pages/KelasOnline/KelasOnline";
import TambahKelasOnline from "../pages/KelasOnline/TambahKelasOnline";
import KelolaAnggota from "../pages/KelolaAnggota";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";
import { Pembayaran } from "../pages/Pembayaran";
import DetailTrainer from "../pages/Trainer/DetailTrainer";
import Skills from "../pages/Trainer/Skills/Skills";
import Trainer from "../pages/Trainer/Trainer";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

export const SetUpRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="pembayaran" element={<Pembayaran />} />
          <Route path="trainer" element={<Trainer />} />
          <Route path="trainer" element={<Trainer />} />
          <Route path="trainer/:id" element={<DetailTrainer />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="kategorionline" element={<KategoriOnline />} />
          <Route path="kelasonline" element={<KelasOnline />} />
          <Route path="tambahkelasonline" element={<TambahKelasOnline />} />
          <Route path="detailkelasonline/:id" element={<DetailKelasOnline />} />
          <Route path="editkelasonline" element={<EditKelasOnline />} />
          <Route path="kategorioffline" element={<KategoriOffline />} />
          <Route path="kelasoffline" element={<KelasOffline />} />
          <Route path="tambahkelasoffline" element={<TambahKelasOffline />} />
          <Route
            path="detailkelasoffline/:id"
            element={<DetailKelasOffline />}
          />
          <Route path="editkelasoffline" element={<EditKelasOffline />} />
          <Route
            path="detailkelasoffline/:id"
            element={<DetailKelasOffline />}
          />
          <Route path="editkelasonline" element={<EditKelasOnline />} />
          <Route path="anggota" element={<KelolaAnggota />} />
          <Route path="detail/:id" element={<DetailAnggota />} />
          <Route path="jenis" element={<JenisMembership />} />
          <Route path="bookingonline" element={<BookingKelasOnline />} />
          <Route path="artikel" element={<Artikel />} />
          <Route path="admin" element={<Admin />} />
          <Route
            path="detailBookingOnline/:id"
            element={<DetailBookingOnline />}
          />
          <Route path="bookingoffline" element={<BookingOffline />} />
          <Route
            path="detailBookingOffline/:id"
            element={<DetailBookingOffline />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="landingpage" element={<LandingPage />} />

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
