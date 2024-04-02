import React from 'react';
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

function AcademicsHero (){
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoPlaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
      };
    return (
        <Slider {...settings}>
        {HeroItems.map((items) => (
            <div
            key={items.id}
            className="h-[60vh] relative flex items-center flex-col text-center justify-center w-screen"
            >
            <img
                src={items.image}
                className="w-full z-[-1] h-full absolute top-0 right-0 object-cover self-center"
                alt=""
            />
            <div className="text-white h-full flex flex-col p-16 items-start bg-[#000068]/20 justify-end">
                <h1 className="font-semibold lg:text-3xl md:text-1xl text-xl">
                Academics
                </h1>
               {" "}
            </div>
            </div>
        ))}
        </Slider>
    );
}

export default AcademicsHero