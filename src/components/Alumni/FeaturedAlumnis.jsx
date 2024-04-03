import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Alumnis = [
  {
    "name": "John Mwangi",
    "description": "Fictional character; achieved international recognition as a celebrated architect, known for designing iconic skyscrapers in major cities around the world."
  },
  {
    "name": "David Ochieng",
    "description": "Imaginary person; made significant contributions to the field of renewable energy, pioneering innovative technologies for sustainable power generation."
  },
  {
    "name": "Samuel Onyango",
    "description": "Fictitious individual; excelled as a professional athlete, breaking multiple world records in track and field events and inspiring a generation of young sports enthusiasts."
  },
  {
    "name": "Peter Kamau",
    "description": "Made-up character; achieved acclaim as a leading neuroscientist, conducting groundbreaking research on brain disorders and contributing to advancements in medical science."
  },
  {
    "name": "Michael Odhiambo",
    "description": "Fictional figure; gained prominence as an influential politician, advocating for social justice, education reform, and economic development in his country."
  }
];

function FeaturedAlumnis() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10009,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <h1 className="border-red-500 border-l-8 px-2 text-xl mt-12 sm:text-3xl font-semibold ">
        Featured Alumni
      </h1>
      <div>
        <Slider {...settings}>
          {Alumnis.map(({ id, name, description, image,year }) => {
            return (
              <div key={id} className="bg-red-5 my-6">
                <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl">
                  <img
                    src="https://thumbs.dreamstime.com/z/profile-anonymous-face-icon-gray-silhouette-person-male-businessman-profile-default-avatar-photo-placeholder-isolated-white-117831744.jpg?ct=jpeg"
                    alt={name}
                    className="h-20 w-20 rounded-full block mx-auto"
                  />
                  <h1 className="text-xl font-bold">{name}</h1>
                  <p className="text-gray-500 line-clamp-3 text-sm">{description}</p>
                  
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default FeaturedAlumnis;
