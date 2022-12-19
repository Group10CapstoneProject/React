import React from "react";
import Hero from "../../components/LandingPage/Hero/Hero";
import Kelas from "../../components/LandingPage/Kelas/Kelas";
import Navbar from "../../components/LandingPage/Navbar/Navbar";
import Product from "../../components/LandingPage/Product/Product";
import Trainer from "../../components/LandingPage/Trainer/Trainer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <Trainer />
      <Kelas />
    </div>
  );
};

export default LandingPage;
