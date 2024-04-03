import React from "react";

function AdminHero() {
  return (
    <div
      className={`bg-cover mt-[5%] bg-no-repeat bg-[url('https://www.kemi.ac.ke/wp-content/uploads/2021/03/158698381_244511464049486_4959600633536896780_n.jpg')]  h-[60vh] flex items-center flex-col text-center justify-center w-screen`}
    >
      <div className="h-full w-full bg-[rgba(39,39,92,0.6)] flex items-center text-white font-semibold px-4 md:px-12 lg:px-20">
        <p className="tracking-wide">
          <span className="text-xl md:text-3xl tracking-wider">
            Board Members /
          </span>{" "}
          Staff
        </p>
      </div>
    </div>
  );
}

export default AdminHero;
