import Header from "../../common/Header";
import Footer from "../../common/Footer";
import AboutHero from "../About/AboutHero";
import Description from "../About/AboutDescription";
import Partnership from "../../Homepage/Partnership";
import AboutVisionMission from "./AboutVisionMission";
import Achievement from "./Achievement";
import Sidebar from "../../common/Sidebar";
import { useState } from "react";

function About() {
  const [showSideBar, setShowSidebar] = useState(false);
  // console.log(showSideBar);
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <AboutHero />
      <Description />
      <AboutVisionMission />
      <Achievement />
      {/* <Partnership /> */}
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
export default About;
