import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const HeroItems = [
  {
    color: "bg-red-500",
    text: "hero text",
    image:
      "https://s3-alpha-sig.figma.com/img/eb1f/29f1/b200e7e8abde2e9e6967df28b54a097d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N5ihzogf2DpkgWjX~l9CmfaTHkxbbthKKzBFDPe428mU1O6Rbmt325pfar5l~xvXhpq1pd1KKeAt8O61239YIjZ9M-rnVGxCRH5sUqWpN5t01mBk1s8-DTA4ePS9fQ4gTHrvW1oyk88EAUYC0zZwh7i9FT~K2Z9DUny1D5vNoZDhJQV4XS7KJcVmvbk3i06N9XE2dNgjMjafQeBIsLoLyK-Oe0js6EulVSkTitwfEKoUkaEIA0rz81kUzBS8iBxyur~Vl06tDLW9-me4xYyhv1p4Xcm4gyTZgChp0guERZfQ60blVQNBm3Ya9WzaT-D18mPyPtnQKGZjDyVI83x6SQ__",
    id: 1,
  },
  {
    color: "bg-blue-500",
    text: "hero text",
    id: 2,
    image:
      "https://s3-alpha-sig.figma.com/img/eb1f/29f1/b200e7e8abde2e9e6967df28b54a097d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N5ihzogf2DpkgWjX~l9CmfaTHkxbbthKKzBFDPe428mU1O6Rbmt325pfar5l~xvXhpq1pd1KKeAt8O61239YIjZ9M-rnVGxCRH5sUqWpN5t01mBk1s8-DTA4ePS9fQ4gTHrvW1oyk88EAUYC0zZwh7i9FT~K2Z9DUny1D5vNoZDhJQV4XS7KJcVmvbk3i06N9XE2dNgjMjafQeBIsLoLyK-Oe0js6EulVSkTitwfEKoUkaEIA0rz81kUzBS8iBxyur~Vl06tDLW9-me4xYyhv1p4Xcm4gyTZgChp0guERZfQ60blVQNBm3Ya9WzaT-D18mPyPtnQKGZjDyVI83x6SQ__",
  },
];

function AlumniHero() {
  
  return (
    <div>
        <div
          
          className="h-[60vh] relative flex items-center flex-col text-center justify-center w-screen"
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/eb1f/29f1/b200e7e8abde2e9e6967df28b54a097d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N5ihzogf2DpkgWjX~l9CmfaTHkxbbthKKzBFDPe428mU1O6Rbmt325pfar5l~xvXhpq1pd1KKeAt8O61239YIjZ9M-rnVGxCRH5sUqWpN5t01mBk1s8-DTA4ePS9fQ4gTHrvW1oyk88EAUYC0zZwh7i9FT~K2Z9DUny1D5vNoZDhJQV4XS7KJcVmvbk3i06N9XE2dNgjMjafQeBIsLoLyK-Oe0js6EulVSkTitwfEKoUkaEIA0rz81kUzBS8iBxyur~Vl06tDLW9-me4xYyhv1p4Xcm4gyTZgChp0guERZfQ60blVQNBm3Ya9WzaT-D18mPyPtnQKGZjDyVI83x6SQ__"
            className="w-full z-[-1] h-full absolute top-0 right-0 object-cover self-center"
            alt=""
          />
          <div className="text-white w-full h-full flex px-4 flex-col items-center bg-[#590000]/60 justify-center ">
            <h1 className="font-semibold lg:text-5xl pt-12 md:text-4xl text-2xl">
              Alumni
            </h1>
            <p className="lg:text-2xl text-md mt-10  md:text-lg">
            Welcome back to Mundika High School Alumni Page! Whether you graduated last year or decades ago, you're an important part of our school's history and legacy.
            </p>{" "}
          </div>
        </div>
    </div>  
  );
}

export default AlumniHero;
