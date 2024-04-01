import React from "react";

function Partnership() {
  return (
    <div className="bg-white flex-col w-screen py-5 px-4 md:px-12 lg:px-20 justify-center items-center">
      <p className="font-semibold text-lg w-full text-center">
        In Partnership With
      </p>
      <div className="w-full flex justify-center my-4 md:my-6 items-center flex-row gap-4 md:gap-12">
        <img src="/mmust.png" alt="mmust" className="h-24" />
        <img src="/konza.png" alt="Konza" className="h-24" />
      </div>
    </div>
  );
}

export default Partnership;
