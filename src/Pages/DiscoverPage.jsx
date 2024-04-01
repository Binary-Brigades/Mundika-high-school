import React from "react";
import About from "../components/Discover/About";
import Gallery from "../components/Discover/Gallery";
import { useLocation } from "react-router";
function Discover() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      {
        <div>
          {state === "About" && <About />}
          {state === "Gallery" && <Gallery />}
        </div>
      }
    </div>
  );
}

export default Discover;
