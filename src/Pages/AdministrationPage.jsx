import React, { useState } from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";

function AdministrationPage() {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <div className="min-h-screen  text-black flex items-center justify-center">
        <p>comming soon...</p>
      </div>
      <Footer />
    </div>
  );
}

export default AdministrationPage;
