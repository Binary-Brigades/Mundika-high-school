import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const HeroItems = [
  {
    color: "bg-red-500",
    text: "hero text",
    id:1
  },
  {
    color: "bg-blue-500",
    text: "hero text",
    id:2
  },
]

  

function AlumniHero() {
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
        {
          HeroItems.map((items)=>(
            <div key={items.id} className={`${items.color} h-[60vh] flex items-center flex-col text-center justify-center w-screen`}>
              <p>{items.text}</p>
            </div>
          ))
        }
        </Slider>
  )
}

export default AlumniHero