import React, { useState } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import MainNews from "../components/NewsAndEvents/MainNews"
function NewsAndEventsPage() {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <div className="">
        <MainNews />
      </div>
      <Footer />
    </div>
  );
}

export default NewsAndEventsPage;
