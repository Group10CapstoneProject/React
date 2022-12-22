import React from "react";

// Router
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

// Landing Page
import LandingPage from "../pages/LandingPage/LandingPage";

// Login
import Login from "../pages/Login";

// Dashboard
import Dashboard from "../pages/Dashboard";

// Pembayaran
import { Pembayaran } from "../pages/Pembayaran";

// Membership
import DetailAnggota from "../pages/DetailAnggota";
import JenisMembership from "../pages/JenisMembership";
import KelolaAnggota from "../pages/KelolaAnggota";

// Kelas Offline
import DetailKelasOffline from "../pages/KelasOffline/DetailKelasOffline";
import EditKelasOffline from "../pages/KelasOffline/EditKelasOffline";
import KategoriOffline from "../pages/KelasOffline/KategoriOffline";
import KelasOffline from "../pages/KelasOffline/KelasOffline";
import TambahKelasOffline from "../pages/KelasOffline/TambahKelasOffline";

// Kelas Online
import DetailKelasOnline from "../pages/KelasOnline/DetailKelasOnline";
import EditKelasOnline from "../pages/KelasOnline/EditKelasOnline";
import KategoriOnline from "../pages/KelasOnline/KategoriOnline";
import KelasOnline from "../pages/KelasOnline/KelasOnline";
import TambahKelasOnline from "../pages/KelasOnline/TambahKelasOnline";

// Booking Offline
import BookingOffline from "../pages/BookingOffline/BookingOffline";
import DetailBookingOffline from "../pages/BookingOffline/DetailBookingOffline";

// Booking Online
import BookingKelasOnline from "../pages/BookingOnline/BookingKelasOnline";
// punya agil
import Trainer from "../pages/Trainer/Trainer";
import Skills from "../pages/Trainer/skils/Skills";
import DetailTrainer from "../pages/Trainer/DetailTrainer";

// punya gua
import DetailBookingOnline from "../pages/BookingOnline/DetailBookingOnline";
import ModalBookingOnline from "../pages/BookingOnline/ModalBookingOnline";
// Admin
import Admin from "../pages/Admin";
import TambahAdmin from "../pages/Admin/TambahAdmin";

// 404 Error
import NotFoundPage from "../pages/NotFoundPage";
import { Member } from "../pages/Member";

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
          <Route path="detailkelasoffline/:id" element={<DetailKelasOffline />} />
          <Route path="editkelasoffline" element={<EditKelasOffline />} />
          <Route path="detailkelasoffline/:id" element={<DetailKelasOffline />} />
          <Route path="editkelasonline" element={<EditKelasOnline />} />
          <Route path="anggota" element={<KelolaAnggota />} />
          <Route path="detail/:id" element={<DetailAnggota />} />
          <Route path="jenis" element={<JenisMembership />} />
          <Route path="member" element={<Member />} />

          <Route path="bookingonline" element={<BookingKelasOnline />} />
          <Route path="detailBookingOnline/:id" element={<DetailBookingOnline />} />
          <Route path="bookingoffline" element={<BookingOffline />} />
          <Route path="detailBookingOffline/:id" element={<DetailBookingOffline />} />
          <Route path="admin" element={<Admin />} />
          <Route path="tambahadmin" element={<TambahAdmin />} />
          <Route path="modalbookingonline" element={<ModalBookingOnline />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
