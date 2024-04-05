import React, { useEffect } from "react";
import About from "../components/Discover/About/About";
import Gallery from "../components/Discover/Gallery/Gallery";
import { useLocation } from "react-router";
function Discover() {
  var { state } = useLocation();

  if (state === null) {
    state = "About";
  }

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
