import React from "react";
function Description() {
  
  return (
    <div
    
      className="w-full py-6 bg-white md:gap-16 px-4 flex flex-col md:flex-row md:px-12 lg:px-20">
      <img
        src="/games.png"
        alt="mundika school gate"
        className="w-full md:w-1/2 h-[300px] object-cover md:h-[400px]  rounded-lg"
      />
      <p className="text-center flex items-center text-lg">
        St Mary’s Mundika High School is a n Extra County Boys boarding School
        located in Matayos Sub-county, Busia County. The school has a population
        of 520 students, 30 qualified teachers and 20 support staff
      </p>
    </div>
  );
}

export default Description;
