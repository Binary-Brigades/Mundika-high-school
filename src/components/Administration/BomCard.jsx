import React from "react";

function BomCard({ title, name, image }) {
  return (
    <div
      
      className="rounded-md border-gray border-[2px] md:rounded-xl bg-[#b08b8d]"
    >
      <img
        src={image}
        alt={`${title} image`}
        className="w-full rounded-md md:rounded-xl object-cover object-top h-[300px]"
      />
      <div className="px-2 mt-2 ">
        <p className="font-semibold tracking-wide text-[#ffff]/70 ">{name}</p>
        <h3 className="font-bold capitalize text-[#590000]/80">{title}</h3>
      </div>
    </div>
  );
}

export default BomCard;
