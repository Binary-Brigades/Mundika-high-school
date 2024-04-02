import React from "react";
import img1 from "../../../assets/mundikabuilding 3.png";
import img2 from "../../../assets/Games and sports 2.png";
import img3 from "../../../assets/gate mundika 2.png";
import img4 from "../../../assets/sportsmundinka 3.png";
import img5 from "../../../assets/staffmundika 1.png";
import img6 from "../../../assets/mundikabuilding 3.png";
function GalleryImages() {
  const imageGallaries = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
    {
      id: 5,
      image: img5,
    },
    {
      id: 6,
      image: img6,
    },
  ];
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 mt-6 md:px-12 lg:px-20 px-4 gap-12 lg:grid-cols-4">
      {imageGallaries?.map((image) => (
        <div className="rounded-lg" key={image?.id}>
          <img
            src={image?.image}
            alt="images"
            className="rounded-xl  object-cover w-full h-36 "
          />
        </div>
      ))}
    </div>
  );
}

export default GalleryImages;
