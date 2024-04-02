import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Hero from "../components/Homepage/Hero";
import Description from "../components/Homepage/Description";
import Partnership from "../components/Homepage/Partnership";
import About from "../components/Homepage/About";
import PricipalMessage from "../components/Homepage/PricipalMessage";
import Testimonials from "../components/Homepage/Testimonials";

function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <Description />
      <About />
      <PricipalMessage />
      <Testimonials />
      <Partnership />
      <Footer />
    </div>
  );
}

export default Homepage;
