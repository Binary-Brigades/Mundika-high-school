import React from "react";
import svg from "../../assets/image.svg";
import { HashLink } from "react-router-hash-link";
import { Link, NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
function Footer() {
  const dropdownAcademics = [
    {
      name: "Finance",
      link: "#",
    },
    {
      name: "Performance",
      link: "#",
    },
    {
      name: "Admission",
      link: "#",
    },
    {
      name: "E-library",
      link: "#",
    },
  ];

  const dropdownActivities = [
    {
      name: "Clubs & Societies",
      link: "#",
    },
    {
      name: "Games & Sports",
      link: "#",
    },
  ];
  const dropdownDiscover = [
    {
      name: "About",
      link: "#",
    },
    {
      name: "Gallery",
      link: "#",
    },
  ];
  return (
    <section className="text-white  bottom-0 relative" id="footer">
      <footer className="bg text-white py-8 relative pt-[160px] md:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-4">
            <div>
              <h5 className="text-xl font-semibold mb-6">Contact Us</h5>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white w-6 h-6"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>P.O Box 38, Busia</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white w-6 h-6"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>0711201107</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white w-6 h-6"
                  >
                    <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"></path>
                    <polyline points="15,9 18,9 18,11"></polyline>
                    <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"></path>
                    <line x1="6" x2="7" y1="10" y2="10"></line>
                  </svg>
                  <span className="truncate">mundikastmarys65@gmail.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-6">Quick Links</h5>
              <div className=" flex flex-col ">
                <ul className="flex flex-col ml-4 gap-2">
                  <li className="">
                    <NavLink
                      to="/"
                      // activeClsName="active"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="relative group cursor-pointer">
                    <div className="dropdown flex items-center">
                      <span>Discover</span>
                      <span>
                        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                      </span>
                    </div>
                    <div className="absolute -left-9 z-[999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
                      <ul>
                        {dropdownDiscover.map((data) => {
                          return (
                            <li key={data.name}>
                              <Link
                                className="inline-block w-full rounded-md p-2 hover:bg-[#2c3e9e]/20"
                                to={"/discover"}
                                state={data?.name}
                              >
                                {data.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                  <li className="relative group cursor-pointer">
                    <div className="dropdown flex items-center">
                      <span>Academics</span>
                      <span>
                        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                      </span>
                    </div>
                    <div className="absolute -left-9 z-[999] hidden group-hover:block shadow-md text-black w-[180px] bg-white p-2">
                      <ul>
                        {dropdownAcademics.map((data) => {
                          return (
                            <li key={data.name}>
                              <Link
                                className="inline-block w-full rounded-md p-2 hover:bg-[#2c3e9e]/20"
                                to={"/academics"}
                                state={data?.name}
                              >
                                {data.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                  <li className="">
                    <NavLink
                      activeclassname="active"
                      to="/alumni"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Alumni
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      activeclassname="active"
                      to="/administration"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Administration
                    </NavLink>
                  </li>
                  {/* dropdown */}
                  <li className="relative group cursor-pointer">
                    <div className="dropdown flex items-center">
                      <span>Activities</span>
                      <span>
                        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                      </span>
                    </div>
                    <div className="absolute -left-9 z-[999] hidden group-hover:block shadow-md text-black w-[180px] bg-white p-2">
                      <ul>
                        {dropdownActivities.map((data) => {
                          return (
                            <li key={data.name}>
                              <Link
                                className="inline-block w-full rounded-md p-2 hover:bg-[#2c3e9e]/20"
                                to={"/activities"}
                                state={data?.name}
                              >
                                {data.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                  <li className="py-2">
                    <NavLink
                      activeclassname="active"
                      to="/newsandevents"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      News & Events
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col py-5 px-4 justify-center items-center w-full">
              <h5 className="font-semibold text-xl mb-6 w-full text-center md:text-left">
                Partnership
              </h5>
              <div className="w-full flex justify-center my-4 md:my-6 items-center flex-row gap-4 md:gap-2 text-center md:text-left pl-8 md:pl-2">
                <a
                  href="https://www.mmust.ac.ke/"
                  target="_blank"
                  className="h-24 w-40 flex flex-col gap-2"
                >
                  <img
                    src="/mmust.png"
                    alt="mmust"
                    className=" rounded-full object-cover bg-white w-[150px] h-[150px] p-[2px] md:w-[80px] md:h-[80px]"
                  />
                  <p>mmust.ac.ke</p>
                </a>
                <a
                  href="www.konza.com"
                  target="_blank"
                  className="h-24 w-40 flex flex-col gap-2 "
                >
                  <img
                    src="/konza.png"
                    alt="Konza"
                    className=" rounded-full object-cover bg-white w-[150px] h-[150px] p-[2px] md:w-[80px] md:h-[80px]"
                  />
                  <p>konza.com</p>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p>2024 St.Mary's Mundika Boys High School. All rights Reserved</p>
          </div>
        </div>
        <div className="absolute flex items-center  justify-center float-right flex-col bottom-24 right-2">
          <a
            href=""
            className="w-12 flex items-center justify-center  shadow rounded-full shadow-black px-2 py-2 bg-[#2c3e9e] mx-12 "
            rel="ugc"
          >
            <HashLink smooth to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white w-8 h-8"
              >
                <path d="m5 12 7-7 7 7"></path>
                <path d="M12 19V5"></path>
              </svg>
            </HashLink>
          </a>
          <p className="font-bold">Back To Top </p>
        </div>
        <p className="text-sm text-center text-gray-500">
          Made with ❤ by @BinaryBrigades
        </p>
        <a href="https://github.com/Binary-Brigades"></a>{" "}
      </footer>
    </section>
  );
}

export default Footer;
