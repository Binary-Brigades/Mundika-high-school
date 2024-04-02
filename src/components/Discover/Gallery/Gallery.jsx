import React, { useState } from "react";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import Footer from "../../common/Footer";
import GalleryHero from "../Gallery/GalleryHero";
import GalleryImages from "./GalleryImages";
function Gallery() {
  const [showSideBar, setShowSidebar] = useState(false);
  const imagesMap = [
    {
      id: 1,
      title: "All Images",
    },
    {
      id: 1,
      title: "Students",
    },
    {
      id: 1,
      title: "Teachers",
    },
    {
      id: 1,
      title: "Classes",
    },
    {
      id: 1,
      title: "Facilities",
    },
    {
      id: 1,
      title: "Others",
    },
  ];
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <GalleryHero />
      <h2 className="font-bold text-lg  text-center mt-4 ">
        Our Photo Gallery
      </h2>
      <div className="w-full flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grids-cols-6 mt-4 gap-4 md:px-12 lg:px-20 px-4 w-[100%] justify-center items-center">
          {imagesMap.map((image) => (
            <div
              className="bg-[#730000] py-2 px-2 rounded-lg text-center text-white font-semibold"
              key={image?.id}
            >
              <p>{image?.title}</p>
            </div>
          ))}
        </div>
      </div>
      <GalleryImages />
      <Footer />
    </div>
  );
}

export default Gallery;
