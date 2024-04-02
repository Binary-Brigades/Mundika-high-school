import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import AlumniHero from "../components/Alumni/AlumniHero";
import FeaturedAlumnis from "../components/Alumni/FeaturedAlumnis";
import AlumniDirectory from "../components/Alumni/AlumniDirectory";
import AlumniEvents from "../components/Alumni/AlumniEvents";
import AlumniNews from "../components/Alumni/AlumniNews";
import AlumniAssociation from "../components/Alumni/AlumniAssociation";

function AlumniPage() {
  return (
    <>
      <Header />
      <AlumniHero />
      <div className="px-8 md:px-12">
        <FeaturedAlumnis />
        <AlumniDirectory />
        <AlumniEvents />
        <AlumniNews/>
        <AlumniAssociation/>
      </div>
      <Footer />
    </>
  );
}

export default AlumniPage;