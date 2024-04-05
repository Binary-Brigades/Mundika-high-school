import React, { useState } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import FInanceDetails from "./Finance/FInanceDetails";

function Finance() {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <FInanceDetails />
      <Footer />
    </>
  );
}

export default Finance;
