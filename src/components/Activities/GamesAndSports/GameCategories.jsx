import React from "react";
import img1 from "../../../assets/undraw_basketball_re_7701 1.svg";

import img2 from "../../../assets/undraw_track_and_field_-33-qn 1.png";
import img3 from "../../../assets/undraw_grand_slam_84ep 1.png";

function GameCategories() {
  return (
    <div className="w-full flex justify-center items-center flex-col text-center p-4 mt-4 mb-4 ">
      <h2 className="font-bold text-xl text-[#590000]/80">Games Included</h2>
      {/* <p>
        Our Sacrifice to succeed has beared many fruits which we are proud of
        todate
      </p> */}
      <div className="w-screen bg-whit  p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center md:h-[250px] md:px-12 lg:px-20">
        <div className="bg-white text-center flex-1 md:max-w-[250px] h-[150px] rounded-lg flex justify-center flex-row items-center border-2 border-[#590000]/45 p-4 ">
          <div className="flex flex-col gap-12 mr-4 ">
            <p className="font-semibold mt-2">Team Sports</p>
            <p className="text-sm text-left mb-2">
              Football, <br /> Volleyball, <br />
              Netball, Basketball
            </p>
          </div>
          <img src={img1} alt="" className="h-[130px] w-[80px] object-cover" />
        </div>
        <div className="bg-white text-center flex-1 md:max-w-[250px] h-[150px] rounded-lg flex justify-center flex-row items-center border-2 border-[#590000]/45 p-4 ">
          <div className="flex flex-col gap-12 mr-4 ">
            <p className="font-semibold mt-2">Individual Sports</p>
            <p className="mr-4 text-sm text-left mb-2">
              Tennis track and Field
            </p>
          </div>
          <img src={img2} alt="" className="h-[150px] w-[80px] object-cover" />
        </div>
        <div className="bg-white text-center flex-1 md:max-w-[250px] h-[150px] rounded-lg flex justify-center flex-row items-center border-2 border-[#590000]/45 p-4 ">
          <div className="flex flex-col gap-12 mr-4 ">
            <p className="font-semibold mt-2 ">Indoor sports</p>
            <p className="mr-4 text-sm text-left mb-2">
              Badminton, Table Tennis
            </p>
          </div>
          <img src={img3} alt="" className="h-[130px] w-[80px] object-cover" />
        </div>
      </div>
    </div>
  );
}

export default GameCategories;
