import React from "react";
import { Link } from "react-router-dom";

const Alumnis = [
  {
    name: "Odhiambo Oloo",
    image: "https://thumbs.dreamstime.com/z/profile-anonymous-face-icon-gray-silhouette-person-male-businessman-profile-default-avatar-photo-placeholder-isolated-white-107003824.jpg?w=768",
    year: "2016-2020",
    id: 1,
    career: "Doctor",
  },
  {
    name: "Ochieng' Were",
    image: "https://thumbs.dreamstime.com/z/profile-anonymous-face-icon-gray-silhouette-person-male-businessman-profile-default-avatar-photo-placeholder-isolated-white-107003824.jpg?w=768",
    year: "2016-2020",
    id: 2,
    career: "Engineer",
  },
  {
    name: "Omondi Onyango",
    image: "https://thumbs.dreamstime.com/z/profile-anonymous-face-icon-gray-silhouette-person-male-businessman-profile-default-avatar-photo-placeholder-isolated-white-107003824.jpg?w=768",
    year: "2016-2020",
    id: 3,
    career: "CEO Uzima llc",
  },
  {
    name: "Ouma Otieno",
    image: "https://thumbs.dreamstime.com/z/profile-anonymous-face-icon-gray-silhouette-person-male-businessman-profile-default-avatar-photo-placeholder-isolated-white-107003824.jpg?w=768",
    year: "2016-2020",
    id: 4,
    career: "Managing Director KALRO",
  },
  {
    name: "Wamalwa Masika",
    image: "https://thumbs.dreamstime.com/z/profile-anonymous-face-icon-gray-silhouette-person-male-businessman-profile-default-avatar-photo-placeholder-isolated-white-107003824.jpg?w=768",
    year: "2016-2020",
    id: 5,
    career: "Managing Director KALRO",
  },
  {
    name: "Wafula Barasa",
    image: "https://thumbs.dreamstime.com/z/profile-anonymous-face-icon-gray-silhouette-person-male-businessman-profile-default-avatar-photo-placeholder-isolated-white-107003824.jpg?w=768",
    year: "2016-2020",
    id: 6,
    career: "Managing Director KALRO",
  },
  {
    name: "Wafula Mulongo",
    image: "https://thumbs.dreamstime.com/z/profile-anonymous-face-icon-gray-silhouette-person-male-businessman-profile-default-avatar-photo-placeholder-isolated-white-107003824.jpg?w=768",
    year: "2016-2020",
    id: 7,
    career: "Managing Director KALRO",
  },
  {
    name: "Obonyo Amoth",
    image: "https://thumbs.dreamstime.com/z/profile-anonymous-face-icon-gray-silhouette-person-male-businessman-profile-default-avatar-photo-placeholder-isolated-white-107003824.jpg?w=768",
    year: "2016-2020",
    id: 8,
    career: "Managing Director KALRO",
  },
];

function AlumniDirectory() {
  return (
    <div>
      <h1 className="border-[#590000] px-2 border-l-8 mt-12 text-3xl font-semibold">
        Alumni
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 my-4">
        {Alumnis.map((alumnus) => (
          <div
            key={alumnus.id}
            className="flex flex-col items-start space-y-1 justify-center overflow-hidden bg-white shadow-md rounded-md"
          >
            <div className="w-full h-[200px] overflow-hidden">
              <img
                src={alumnus.image}
                alt=""
                className="self-center w-full object-cover hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h1 className="text-xl text-nowrap font-semibold">
                {alumnus.name}
              </h1>
              <h1 className="text-md text-start w-full text-gray-500">
                {alumnus.year}
              </h1>
              <p className="line-clamp-3 text-start w-full text-[12px] md:text-md md:text-nowrap">
                Career: {alumnus.career}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link className="text-blue-400 mt-4">View more..</Link>
    </div>
  );
}

export default AlumniDirectory;
