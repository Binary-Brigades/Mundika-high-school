import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import PerformanceHero from "./PerformanceHero";
import DeputyPrincipal from "./DeputyPrincipal Details";
import PerfomanceDetails from "./PerfomanceDetails";

function Performance() {
  return(
    <>
    <Header />
    <PerformanceHero/>
    <DeputyPrincipal/>
    <PerfomanceDetails/>
    <Footer/>
    </>
  );
}

export default Performance;
