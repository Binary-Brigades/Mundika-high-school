import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  FaCaretDown,
  FaCross,
  FaMailBulk,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";
import { HiMail, HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

function Sidebar({ showSideBar }) {
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
    <>
      <nav
        className={`fixed h-screen w-[250px] bg-[#2c3e9e]/95 z-[999] pt-24 md:hidden text-white transition-all duration-[5000] ease-in-out ${
          showSideBar ? "left-0" : "left-[-100%]"
        } `}
      >
        <div className=" flex flex-col mt-6 ml-8 ">
          <ul className="flex flex-col ml-4 gap-2">
            <li className="py-2">
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
              <HashLink smooth to="/#footer">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
