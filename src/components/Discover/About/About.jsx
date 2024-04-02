import Header from "../../common/Header";
import Footer from "../../common/Footer";
import AboutHero from "../About/AboutHero";
import Description from "../About/AboutDescription";
import Partnership from "../../Homepage/Partnership";
import AboutVisionMission from "./AboutVisionMission";
import Achievement from "./Achievement";

function About() {
  return (
    <div>
      <Header />
      <AboutHero />
      <Description />
      <AboutVisionMission />
      <Achievement />
      <Partnership />
      <Footer />
    </div>
  );
}
export default About;
