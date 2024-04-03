import React, { useState } from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import AdminHero from "../components/Administration/AdminHero";
import AdminText from "../components/Administration/AdminText";

function AdministrationPage() {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <AdminHero />
      <AdminText />
      <Footer />
    </div>
  );
}

export default AdministrationPage;
