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
    speed: 0,
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
          className={`bg-cover bg-no-repeat aboutbg  h-[60vh] flex items-center flex-col text-center justify-center w-screen`}
        >
          <div className="flex text-white justify-center flex-col items-center w-full h-full">
            <h1 className="font-semibold lg:text-5xl md:text-3xl text-xl">
              Get to Know St Mary’s Mundika High School
            </h1>
            <p className="lg:text-2xl mt-10 text-base md:text-lg">
              Read More about our School History, Mission, Vision and our
              Achievements
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Hero;
