import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Hero from "../components/Homepage/Hero";
import Description from "../components/Homepage/Description";
import About from "../components/Homepage/About";
import PricipalMessage from "../components/Homepage/PricipalMessage";
import Testimonials from "../components/Homepage/Testimonials";
import Sidebar from "../components/common/Sidebar";

function Homepage() {
    const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <Hero />
      <Description />
      <About />
      <PricipalMessage />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Homepage;
