import React from "react";

function AboutVisionMission() {
  return (
    <div className="w-screen bg-[#b08b8d]  p-6 grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center md:h-[250px] md:px-12 lg:px-20">
      <div className="bg-[#590000]/30 text-center flex-1 md:max-w-[300px] h-[200px] rounded-lg flex justify-center flex-col items-center border-2 border-[#590000]/80 p-2">
        <h3 className="font-bold capitalize text-[#590000]/80">Motto</h3>
        <p>Sacrifice to Succees</p>
      </div>
      <div className="bg-[#590000]/30 text-center flex-1 md:max-w-[300px] h-[200px] rounded-lg flex justify-center flex-col items-center border-2 border-[#590000]/80 p-2">
        <h3 className="font-bold capitalize text-[#590000]/80">Our Mission</h3>
        <p>
          To empower students with the values of sacrifice, perseverance, and
          excellence to prepare them for academic and personal success.
        </p>
      </div>
      <div className="bg-[#590000]/30 text-center flex-1 md:max-w-[300px] h-[200px] rounded-lg flex justify-center flex-col items-center border-2 border-[#590000]/80 p-2">
        <h3 className="font-bold capitalize text-[#590000]/80">Our Vision</h3>
        <p>
          To inspire future leaders who embody the spirit of 'Sacrifice to
          Succeed,' creating a brighter future through education, innovation,
          and community engagement.
        </p>
      </div>
    </div>
  );
}

export default AboutVisionMission;
