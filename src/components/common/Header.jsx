import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaCaretDown,
  FaCross,
  FaMailBulk,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";
import { HiMail, HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

import LogoImg from "../../assets/image-removebg-preview 1.png";

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

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="fixed top-0 right-0 bg-[#2c3e9e] w-screen text-white shadow-md z-[9999] justify-between items-center px-6 flex h-[80px]">
        <div className="container py-3 sm:py-0 relative">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div className="flex items-center justify-center ">
              <Link to="/" onClick={window.scrollTo(0, 0)}>
                <div className="flex h-full gap-2 items-center font-semibold justify-center text-primary">
                  <img src={LogoImg} alt="" className="h-16 block" />
                  <div>
                    <h1>St Mary’s Mundika High School</h1>
                    <p className="text-sm text-gray-400">
                      {" "}
                      Sacrifice to Succeed
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            {/* navlinks */}
            <div className="hidden md:block mt-6 ml-8">
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavLink
                    to="/"
                    // activeClsName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="relative py-4 group cursor-pointer">
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
                <li className="relative py-4 group cursor-pointer">
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
                <li className="py-4">
                  <NavLink
                    activeclassname="active"
                    to="/alumni"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Alumni
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    activeclassname="active"
                    to="/administration"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Administration
                  </NavLink>
                </li>
                {/* dropdown */}
                <li className="relative py-4 group cursor-pointer">
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
                <li className="py-4">
                  <NavLink
                    activeclassname="active"
                    to="/newsandevents"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    News & Events
                  </NavLink>
                </li>
                <li className="py-4">
                  <Link to="/#footer" onClick={() => window.scrollTo(80, 800)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <FaTimes
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-primary to-secondary text-white absolute right-[100px] bottom-[45px]">
            <div className="container py-[2px] sm:block hidden text-md text-gray-300">
              <div className="flex justify-end py-[2px] gap-8">
                <div className="flex items-center justify-center gap-3 ">
                  <FaPhoneAlt color="#590000" />
                  <a href="tel:+254740920640">
                    <p>+254740920640</p>
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3 ">
                  <HiMail color="#590000" />
                  <a href="mailto:email@example.com">
                    <p>email@example.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
