import React from "react";

function TeacherCard({ name, role, subjects, image }) {
  return (
    <div className="rounded-md border-gray border-[2px] md:rounded-xl bg-[#b08b8d]">
      <img
        src={image}
        alt={`${name} image`}
        className="w-full rounded-md md:rounded-xl object-cover object-top h-32 md:h-[300px]"
      />
      <div className="px-2 mt-2 text-sm md:text-base pb-3">
        <h3 className="font-bold capitalize text-[#590000]/80">{role}</h3>
        <p className="font-semibold tracking-wide text-[#ffff]/70 ">{name}</p>
        <p className="w-full ">
          {subjects.map((subject) => {
            return <span className="text-gray-500">{subject}, </span>;
          })}
        </p>
      </div>
    </div>
  );
}

export default TeacherCard;
