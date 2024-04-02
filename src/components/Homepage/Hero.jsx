import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroItems = [
  {
    color: "bg-red-500",
    text: "hero text",
    id: 1,
  },
  {
    color: "bg-blue-500",
    text: "hero text",
    id: 2,
  },
];

function Hero() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <Slider {...settings}>
      {HeroItems.map((items) => (
        <div
          key={items.id}
          className={`bg-cover mt-[5%] bg-no-repeat bg-[url('https://s3-alpha-sig.figma.com/img/eb1f/29f1/b200e7e8abde2e9e6967df28b54a097d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N5ihzogf2DpkgWjX~l9CmfaTHkxbbthKKzBFDPe428mU1O6Rbmt325pfar5l~xvXhpq1pd1KKeAt8O61239YIjZ9M-rnVGxCRH5sUqWpN5t01mBk1s8-DTA4ePS9fQ4gTHrvW1oyk88EAUYC0zZwh7i9FT~K2Z9DUny1D5vNoZDhJQV4XS7KJcVmvbk3i06N9XE2dNgjMjafQeBIsLoLyK-Oe0js6EulVSkTitwfEKoUkaEIA0rz81kUzBS8iBxyur~Vl06tDLW9-me4xYyhv1p4Xcm4gyTZgChp0guERZfQ60blVQNBm3Ya9WzaT-D18mPyPtnQKGZjDyVI83x6SQ__')]  h-[60vh] flex items-center flex-col text-center justify-center w-screen`}
        >
          <div className="bg-[rgba(0,0,0,.5)] flex text-white justify-center flex-col items-center w-full h-full">
            <h1 className="font-semibold lg:text-5xl md:text-3xl text-xl tracking-widest">
              Welcome to Mundika High School
            </h1>
            <p className="lg:text-2xl mt-10 text-base md:text-lg">
              Where we strive for excellence
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Hero;
