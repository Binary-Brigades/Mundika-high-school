import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Hero from "../components/Homepage/Hero";
import Description from "../components/Homepage/Description";
import Partnership from "../components/Homepage/Partnership";

function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <Description />
      <Partnership />
      <Footer />
    </div>
  );
}

export default Homepage;
