import React from "react";
import Admission from "../components/Academics/Admission";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";



function Academics() {
  return <div>
    <Header/>
    <div className="px-4">
    <Admission/>
    </div>
    <Footer/>
  </div>;
}

export default Academics;
