import React from "react";
import About from "../../components/LandingPage/About/About";
import Download from "../../components/LandingPage/Download/Download";
import Footer from "../../components/LandingPage/Footer/Footer";
import Hero from "../../components/LandingPage/Hero/Hero";
import Kelas from "../../components/LandingPage/Kelas/Kelas";
import Navbar from "../../components/LandingPage/Navbar/Navbar";
import Pricing from "../../components/LandingPage/Pricing/Pricing";
import Testimony from "../../components/LandingPage/Testimony/Testimony";
import Trainer from "../../components/LandingPage/Trainer/Trainer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Trainer />
      <Kelas />
      <Pricing />
      <Testimony />
      <Download />
      <Footer />
    </div>
  );
};

export default LandingPage;
