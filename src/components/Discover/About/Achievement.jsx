import React from "react";
import img1 from "../../../assets/undraw_basketball_re_7701 1.svg";
import img3 from "../../../assets/undraw_graduation_re_gthn (1) 1.svg";
import img2 from "../../../assets/undraw_coffee_break_h3uu 1.png";
function Achievement() {
  return (
    <div className="w-full flex justify-center items-center flex-col text-center p-4 mt-4 mb-4 ">
      <h2 className="font-bold text-xl text-[#590000]/80">Achievement</h2>
      <p>
        Our Sacrifice to succeed has beared many fruits which we are proud of
        todate
      </p>
      <div className="w-screen bg-whit  p-6 grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center md:h-[250px] md:px-12 lg:px-20">
        <div className="bg-white text-center flex-1 md:max-w-[250px] h-[150px] rounded-lg flex justify-center flex-row items-center border-2 border-gray-500 p-2 ">
          <div className="flex flex-col gap-12 mr-4">
            <p className="font-semibold">Co-Curricular</p>
            <p className="font-semibold mr-4">15</p>
          </div>
          <img src={img1} alt="" />
        </div>
        <div className="bg-white text-center flex-1 md:max-w-[250px] h-[150px] rounded-lg flex justify-center flex-row items-center border-2 border-gray-500 p-2 ">
          <div className="flex flex-col gap-20 mr-2 relative">
            <p className="font-semibold w-[100px] absolute bottom-12">
              Stem projects
            </p>
            <p className="absolute left-4 font-semibold">5</p>
          </div>
          <img src={img2} alt="" />
        </div>
        <div className="bg-white text-center flex-1 md:max-w-[250px] h-[150px] rounded-lg flex justify-center flex-row items-center border-2 border-gray-500 p-2 ">
          <div className="flex flex-col gap-12 mr-4 relative">
            <p className="font-semibold absolute bottom-8 w-[150px]">
              Notable Alumni
            </p>
            <p className="absolute left-4 font-semibold">50</p>
          </div>
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Achievement;
