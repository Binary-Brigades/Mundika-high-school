import React from "react";

function AdminAbout() {
  return (
    <div className="w-full bg-[#b08b8d] px-2 mt-4 md:rounded-xl">
      <div className="flex md:flex-row flex-col gap-4 md:justify-between md:py-12 py-5">
        <div className="bg-[#590000]/30 flex-col gap-3 rounded-md justify-center items-center flex md:w-[350px] max-w-[350px] shadow-md md:shadow-lg p-5 md:p-8 border-[1px] border-[#590000]/80">
          <h3 className="font-bold capitalize text-[#590000]/80">Vision</h3>
          <p className="font-semibold text-center tracking-wide text-[#ffff]/70 ">
            "To be a leading center of academic excellence, fostering
            innovation, critical thinking, and global citizenship."
          </p>
        </div>
        <div className="bg-[#590000]/30 flex-col gap-3 rounded-md justify-center items-center flex max-w-[350px] shadow-md md:shadow-lg p-5 md:p-8 border-[1px] border-[#590000]/80">
          <h3 className="font-bold capitalize text-[#590000]/80">Mission</h3>
          <p className="font-semibold text-center tracking-wide text-[#ffff]/70">
            Our mission is to provide a dynamic and inclusive learning
            environment that empowers students to achieve their full potential
            and become lifelong learners.
          </p>
        </div>
        <div className="bg-[#590000]/30 flex-col gap-3 rounded-md justify-center items-center flex max-w-[350px] shadow-md md:shadow-lg p-5 md:p-8 border-[1px] border-[#590000]/80">
          <h3 className="font-bold capitalize text-[#590000]/80">Values</h3>
          <p className="font-semibold tracking-wide text-center text-[#ffff]/70">
            Excellence, Respect, Integrity, Collaboration, Innovation,
            Community, Responsibility.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminAbout;
