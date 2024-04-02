import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Slider from "react-slick";

function Testimonials() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 100,
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
    <div className="w-screen px-4 py-4 md:px-12 lg:px-20 bg-[#b08b8d]">
      <h2 className="text-white font-semibold text-xl tracking-wider">
        Testimonials
      </h2>

      <Slider {...settings}>
        <div className=" shadow-lg justify-center items-center flex flex-col text-[#fff]/70 p-1">
          <p>
            <RiDoubleQuotesL className="text-4xl" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe
            distinctio possimus obcaecati dignissimos qui? Fugit dignissimos
            possimus officiis voluptas, inventore cumque perferendis dolor,
            aspernatur amet voluptatibus veritatis distinctio consectetur!
            <RiDoubleQuotesR className="text-4xl" />
          </p>
          <p className="ml-2 w-full text-[#590000]/80 font-mono tracking-wider font-semibold">
            Michael maina
          </p>
          <p className="ml-2 text-sm w-full italic text-[#590000]/80 tracking-widest">
            Parent
          </p>
        </div>

        <div className=" shadow-lg justify-center items-center flex flex-col text-[#fff]/70 p-1">
          <p>
            <RiDoubleQuotesL className="text-4xl" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe
            distinctio possimus obcaecati dignissimos qui? Fugit dignissimos
            possimus officiis voluptas, inventore cumque perferendis dolor,
            aspernatur amet voluptatibus veritatis distinctio consectetur!
            <RiDoubleQuotesR className="text-4xl" />
          </p>
          <p className="ml-2 w-full text-[#590000]/80 font-mono tracking-wider font-semibold">
            Michael maina
          </p>
          <p className="ml-2 text-sm w-full italic text-[#590000]/80 tracking-widest">
            Parent
          </p>
        </div>
        <div className=" shadow-lg justify-center items-center flex flex-col text-[#fff]/70 p-1">
          <p>
            <RiDoubleQuotesL className="text-4xl" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe
            distinctio possimus obcaecati dignissimos qui? Fugit dignissimos
            possimus officiis voluptas, inventore cumque perferendis dolor,
            aspernatur amet voluptatibus veritatis distinctio consectetur!
            <RiDoubleQuotesR className="text-4xl" />
          </p>
          <p className="ml-2 w-full text-[#590000]/80 font-mono tracking-wider font-semibold">
            Michael maina
          </p>
          <p className="ml-2 text-sm w-full italic text-[#590000]/80 tracking-widest">
            Parent
          </p>
        </div>
        <div className=" shadow-lg justify-center items-center flex flex-col text-[#fff]/70 p-1">
          <p>
            <RiDoubleQuotesL className="text-4xl" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe
            distinctio possimus obcaecati dignissimos qui? Fugit dignissimos
            possimus officiis voluptas, inventore cumque perferendis dolor,
            aspernatur amet voluptatibus veritatis distinctio consectetur!
            <RiDoubleQuotesR className="text-4xl" />
          </p>
          <p className="ml-2 w-full text-[#590000]/80 font-mono tracking-wider font-semibold">
            Michael maina
          </p>
          <p className="ml-2 text-sm w-full italic text-[#590000]/80 tracking-widest">
            Parent
          </p>
        </div>
        <div className=" shadow-lg justify-center items-center flex flex-col text-[#fff]/70 p-1">
          <p>
            <RiDoubleQuotesL className="text-4xl" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe
            distinctio possimus obcaecati dignissimos qui? Fugit dignissimos
            possimus officiis voluptas, inventore cumque perferendis dolor,
            aspernatur amet voluptatibus veritatis distinctio consectetur!
            <RiDoubleQuotesR className="text-4xl" />
          </p>
          <p className="ml-2 w-full text-[#590000]/80 font-mono tracking-wider font-semibold">
            Michael maina
          </p>
          <p className="ml-2 text-sm w-full italic text-[#590000]/80 tracking-widest">
            Parent
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default Testimonials;
