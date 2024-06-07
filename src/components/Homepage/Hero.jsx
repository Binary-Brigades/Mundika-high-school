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
      <div
        className={`bg-cover mt-[5%] bg-no-repeat bg-[url('/book.jpg')]  h-[60vh] flex items-center flex-col text-center justify-center w-screen`}
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
      <div
        className={`bg-cover mt-[5%] bg-no-repeat bg-[url('/konza.png')]  h-[60vh] flex items-center flex-col text-center justify-center w-screen`}
      >
        <div className="bg-[rgba(0,0,0,.5)] flex text-white justify-center flex-col items-center w-full h-full">
          <h1 className="font-semibold lg:text-5xl md:text-3xl text-xl tracking-widest">
            Empowering Future Leaders
          </h1>
          <p className="lg:text-2xl mt-10 text-base md:text-lg">
            Join us at Mundika High School
          </p>
        </div>
      </div>
    </Slider>
  );
}

export default Hero;
