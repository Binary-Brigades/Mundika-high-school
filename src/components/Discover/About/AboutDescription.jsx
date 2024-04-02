import React from "react";
import mundika from "../../../assets/mundika 2.png"
function AboutDescription() {
  return (
    <div className="w-full py-6 bg-white md:gap-16 px-4 flex flex-col md:flex-row md:px-12 lg:px-20">
      <img
        src={mundika}
        alt="mundika school gate"
        className="w-full md:w-1/2 h-[300px] object-cover md:h-[400px]  rounded-lg"
      />
      <div>
        <h2 className="font-bold mb-4 text-2xl">School History</h2>
        <p className="text-left flex items-center text-lg">
          Founded in 1990, Mundika has been a cornerstone of educational
          excellence and community engagement for over three decades. From
          humble beginnings with just a handful of students and dedicated
          educators, our school has grown into a thriving learning community
          serving hundreds of students from diverse backgrounds.Over the years,
          we have continuously evolved to meet the changing needs of our
          students and society, while remaining steadfast in our commitment to
          fostering academic achievement, character development, and lifelong
          learning. Today, Mundika is proud to be known for its innovative
          programs, supportive environment, and unwavering dedication to helping
          every student 'Sacrifice to Succeed' in their academic and personal
          pursuits.
        </p>
      </div>
    </div>
  );
}

export default AboutDescription;
