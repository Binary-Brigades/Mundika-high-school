import React from "react";

function PricipalMessage() {
  return (
    <div className="bg-white py-4 md:py-6 px-4 md:px-12 lg:px-20 w-screen">
      <p className="tracking-widest font-semibold md:text-xl text-lg text-[#590000]/80">
        Message from the Pricipal
      </p>
      <div className="w-full  mt-4 flex items-center flex-col-reverse md:justify-between   md:flex-row">
        <p className="md:max-w-[60%] ">
          At Mundika High, we are dedicated to providing a nurturing and
          inclusive learning environment that fosters academic excellence,
          personal growth, and the development of essential life skills. Our
          committed team of educators works tirelessly to inspire a love for
          learning, encourage critical thinking, and prepare our students to
          face the challenges of the future with confidence and integrity. We
          believe in a holistic approach to education, which is reflected in our
          comprehensive curriculum, diverse extracurricular activities, and
          community engagement initiatives.
        </p>
        <figcaption>
          <img
            src="https://netstorage-tuko.akamaized.net/images/9b314b58e9df057b.jpg"
            className="w-56 h-56 md:h-auto object-cover md:rounded-md md:w-64 my-2  rounded-[50%]"
            alt="Pricipal Picture"
          />
          <legend className="font-semibold tracking-wider italic text-center mb-5">
            The principal
          </legend>
        </figcaption>
      </div>
    </div>
  );
}

export default PricipalMessage;
