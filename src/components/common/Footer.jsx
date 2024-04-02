import React from "react";
import svg from "../../assets/image.svg";
import { HashLink } from "react-router-hash-link";
function Footer() {
  return (
    <section className="text-white  bottom-0 relative" id="footer">
      <footer className="bg text-white py-8 relative pt-[160px] md:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
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
                  <span>mundikastmarys65@gmail.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-6">Partner Links</h5>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="hover:underline" rel="ugc">
                    mmust.ac.ke
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline" rel="ugc">
                    konza.go.ke
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-6">Quick Links</h5>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="hover:underline" rel="ugc">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline" rel="ugc">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline" rel="ugc">
                    Academics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline" rel="ugc">
                    Departments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline" rel="ugc">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p>2024 St.Mary's Mundika Boys High School. All rights Reserved</p>
          </div>
        </div>
        <a
          href=""
          className="absolute w-12 flex items-center justify-center float-right shadow rounded-full shadow-black px-2 py-2 bg-[#2c3e9e] mx-12 bottom-24 right-2"
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
        <p className="text-sm text-center text-gray-500">
          Made with ❤ by @BinaryBrigades
        </p>
        <a href="https://github.com/Binary-Brigades"></a>{" "}
      </footer>
    </section>
  );
}

export default Footer;
