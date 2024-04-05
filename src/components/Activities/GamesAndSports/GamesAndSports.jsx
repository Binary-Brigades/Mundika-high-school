import Sidebar from "../../common/Sidebar";
import GamesAbout from "./GamesAbout";
import GamesCategory from "./GameCategories";
import GamesHero from "./GamesHero";
import { useState } from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
function GamesAndSports() {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <GamesHero />
      <GamesAbout />
      <GamesCategory />
      <Footer />
    </div>
  );
}

export default GamesAndSports;
