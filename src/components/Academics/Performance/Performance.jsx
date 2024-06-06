import React, {useState} from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Sidebar from "../../../components/common/Sidebar";
import PerformanceHero from "./PerformanceHero";
import DeputyPrincipal from "./DeputyPrincipal Details";
import PerfomanceDetails from "./PerfomanceDetails";

function Performance() {
  const [showSideBar, setShowSidebar] = useState(false);
  return(
    <>
    <Header setShowSidebar={setShowSidebar}/>
    <Sidebar showSideBar={showSideBar} />
    <PerformanceHero/>
    <DeputyPrincipal/>
    <PerfomanceDetails/>
    <Footer/>
    </>
  );
}

export default Performance;
