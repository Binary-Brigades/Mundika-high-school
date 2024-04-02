import React from "react";

function PricipalMessage() {
  return (
    <div className="bg-white py-4 md:py-6 px-4 md:px-12 lg:px-20 w-screen">
      <p className="tracking-widest font-semibold md:text-xl text-lg text-[#590000]/80">
        Message from the Pricipal
      </p>
      <div className="w-full  mt-4 flex items-center flex-col-reverse md:justify-between   md:flex-row">
        <p className="md:max-w-[60%] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          quaerat, magnam nesciunt omnis eveniet molestias officiis fuga dolores
          iste aspernatur odit nemo eligendi vitae, officia provident? Odit fuga
          explicabo veritatis.
        </p>
        <figcaption>
          <img
            src="/download.jfif"
            className="w-56 h-56 md:h-auto object-cover md:rounded-md md:w-64 my-2  rounded-[50%]"
            alt="Pricipal Picture"
          />
          <legend className="font-semibold tracking-wider text-center mb-5">
            The principal
          </legend>
        </figcaption>
      </div>
    </div>
  );
}

export default PricipalMessage;
