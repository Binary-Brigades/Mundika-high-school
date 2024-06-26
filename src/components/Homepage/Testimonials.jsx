import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";


const AnyReactComponent = ({ text }) => <div>{text}</div>;

import Slider from "react-slick";
const testimonials = [
  {
    id: 1,
    parentName: "Wanjiku Muthoni",
    role: "parent",
    testimonial:
      "Mundika High School has provided my child with an excellent learning environment. The teachers are dedicated and supportive, and my child has shown significant academic improvement since joining the school.",
  },
  {
    id: 2,
    parentName: "Maina Gitonga",
    role: "parent",
    testimonial:
      "I am extremely impressed with the quality of education at Mundika High School. The teachers go above and beyond to ensure that each student receives personalized attention and support. My child has flourished academically and socially thanks to the nurturing environment provided by the school.",
  },
  {
    id: 3,
    parentName: "Wangari Chepkorir",
    role: "parent",
    testimonial:
      "Mundika High School has exceeded my expectations in every way. The faculty and staff are caring and dedicated professionals who truly care about the success of their students. I am confident that my child is receiving the best possible education at this school.",
  },
  {
    id: 4,
    parentName: "Kariuki Omondi",
    role: "parent",
    testimonial:
      "As a parent, I couldn't be happier with my child's experience at Mundika High School. The school offers a diverse range of academic and extracurricular activities, allowing students to explore their interests and develop their talents. I highly recommend this school to any parent looking for a supportive and enriching educational environment for their child.",
  },
  {
    id: 5,
    parentName: "Nyambura Wanjala",
    role: "parent",
    testimonial:
      "My child has thrived at Mundika High School thanks to the caring and dedicated teachers who go above and beyond to ensure that each student reaches their full potential. The school's focus on holistic development has helped my child become not only a better student but also a more confident and compassionate individual.",
  },
  {
    id: 6,
    parentName: "Kimani Oduor",
    role: "parent",
    testimonial:
      "I am continually impressed by the level of professionalism and dedication exhibited by the staff at Mundika High School. They are committed to providing students with a well-rounded education that prepares them for success in college and beyond. I am grateful to have found such an outstanding school for my child.",
  },
  {
    id: 7,
    parentName: "Wanjiru Mwangi",
    role: "parent",
    testimonial:
      "Mundika High School has been a fantastic choice for my child's education. The teachers are passionate about their subjects and genuinely care about their students' success. My child has grown academically and personally during their time at this school, and I am confident that they are well-prepared for whatever the future holds.",
  },
  {
    id: 8,
    parentName: "Njoroge Nyong'o",
    role: "parent",
    testimonial:
      "I couldn't be happier with my decision to enroll my child at Mundika High School. The school's emphasis on academic excellence, character development, and community involvement has had a profoundly positive impact on my child's growth and development. I am proud to be a part of the Mundika High School family.",
  },
  {
    id: 9,
    parentName: "Akinyi Wafula",
    role: "parent",
    testimonial:
      "Mundika High School has been instrumental in shaping my child into the confident and capable individual they are today. The school's nurturing environment and rigorous academic program have helped my child succeed academically and prepare for the challenges of the future. I am grateful for the dedicated teachers and staff who have made such a difference in my child's life.",
  },
  {
    id: 10,
    parentName: "Odhiambo Mugo",
    role: "parent",
    testimonial:
      "I am continually impressed by the caliber of education my child receives at Mundika High School. The teachers are passionate about their subjects and are always willing to go the extra mile to help their students succeed. My child has grown both academically and personally during their time at this school, and I am confident that they are well-prepared for college and beyond.",
  },
];

function Testimonials() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 0,
    focusOnSelect: true,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,

    responsive: [
      {
        breakpoint: 10009,
        settings: {
          slidesToShow: 3,
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
    const defaultProps = {
      center: {
        lat: 10.99835602,
        lng: 77.01502627,
      },
      zoom: 11,
    };

  return (
    <div className="w-screen px-4 py-6 md:px-12 lg:px-20 bg-[#b08b8d] md:mb-8">
      <h2 className="text-white font-semibold text-xl tracking-wider">
        Testimonials
      </h2>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className=" shadow-3xl shadow-black justify-center items-center flex flex-col text-[#fff]/70 p-1"
          >
            <p>
              <RiDoubleQuotesL className="text-4xl" />
              {testimonial.testimonial}
              <RiDoubleQuotesR className="text-4xl" />
            </p>
            <p className="ml-2 w-full text-[#590000]/80 font-mono tracking-wider font-semibold">
              {testimonial.parentName}
            </p>
            <p className="ml-2 text-sm w-full italic text-[#590000]/80 tracking-widest">
              {testimonial.role}
            </p>
          </div>
        ))}
      </Slider>
      <div className="w-full justify-center items-center flex flex-col bg-white rounded-lg p-3">
        <h2 className="text-xl tracking-wider mt-5 font-semibold">
          Our Location
        </h2>
        <p>werytvbnm</p>
      </div>
    </div>
  );
}

export default Testimonials;
