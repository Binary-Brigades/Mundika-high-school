import React from "react";

function About() {
  return (
    <div className="w-screen bg-[#b08b8d] px-4 md:px-12 lg:px-20">
      <p className="text-white md:text-xl text-lg font-semibold py-2">
        About Us
      </p>
      <div className="flex md:flex-row flex-col gap-4 md:justify-between md:py-12 py-5">
        <div className="bg-[#590000]/30 flex-col gap-3 rounded-md justify-center items-center flex max-w-[350px] shadow-md md:shadow-lg p-5 md:p-8 border-[1px] border-[#590000]/80">
          <h3 className="font-bold capitalize text-[#590000]/80">Motto</h3>
          <p className="font-semibold tracking-wide text-[#ffff]/70">
            Sacrifice to Succeed
          </p>
        </div>
        <div className="bg-[#590000]/30 flex-col gap-3 rounded-md justify-center items-center flex max-w-[350px] shadow-md md:shadow-lg p-5 md:p-8 border-[1px] border-[#590000]/80">
          <h3 className="font-bold capitalize text-[#590000]/80">
            Our Mission
          </h3>
          <p className="font-semibold tracking-wide text-[#ffff]/70">
            To empower students with the values of sacrifice, perseverance, and
            excellence to prepare them for academic and personal success.
          </p>
        </div>
        <div className="bg-[#590000]/30 flex-col gap-3 rounded-md justify-center items-center flex max-w-[350px] shadow-md md:shadow-lg p-5 md:p-8 border-[1px] border-[#590000]/80">
          <h3 className="font-bold capitalize text-[#590000]/80">Our Vision</h3>
          <p className="font-semibold tracking-wide text-[#ffff]/70">
            To inspire future leaders who embody the spirit of 'Sacrifice to
            Succeed,' creating a brighter future through education, innovation,
            and community engagement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;