import React, { useState } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";

function NewsAndEventsPage() {
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

export default NewsAndEventsPage;
