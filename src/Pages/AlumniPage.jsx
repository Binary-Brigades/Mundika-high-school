import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import AlumniHero from "../components/Alumni/AlumniHero";
import FeaturedAlumnis from "../components/Alumni/FeaturedAlumnis";
import AlumniDirectory from "../components/Alumni/AlumniDirectory";
import AlumniEvents from "../components/Alumni/AlumniEvents";

function AlumniPage() {
  return (
    <>
      <Header />
      <AlumniHero />
      <div className="px-12">
        <FeaturedAlumnis />
        <AlumniDirectory />
        <AlumniEvents />
      </div>
      <Footer />
    </>
  );
}

export default AlumniPage;
