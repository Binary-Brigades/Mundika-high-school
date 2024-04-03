import React from "react";
import mundika from "../../../assets/sportsmundinka 3.png";
function AboutDescription() {
  return (
    <div className="w-full py-6 bg-white md:gap-16 px-4 flex flex-col md:flex-row-reverse md:px-12 lg:px-20">
      <img
        src={mundika}
        alt="mundika school gate"
        className="w-full md:w-1/2 h-[300px] object-cover md:h-[400px]  rounded-lg"
      />
      <div>
        <h2 className="font-bold mb-4 text-2xl">Games and Sports</h2>
        <p className="text-left flex items-center text-lg">
          At Mundika High, we believe that games and sports play a vital role in
          the holistic development of our students. Beyond promoting physical
          fitness and teamwork, sports teach valuable life lessons such as
          discipline, resilience, and sportsmanship. Our comprehensive sports
          program offers a wide range of athletic opportunities for students of
          all ages and skill levels, encouraging participation, healthy
          competition, and personal growth. Whether it's on the field, court, or
          track, our dedicated coaches and supportive community foster an
          environment where students can excel, build confidence, and create
          lasting memories through sports
        </p>
      </div>
    </div>
  );
}

export default AboutDescription;
