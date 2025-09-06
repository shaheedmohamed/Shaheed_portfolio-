import React from "react";
import AboutUs from "./AboutUs.jsx";
import AboutDetails from "./about-details.jsx";

const AboutCombined = () => {
  return (
    <div>
      {/* Primary About section (from /about) */}
      <AboutUs />
      {/* Detailed section (from /about-details) */}
      <div id="details">
        <AboutDetails />
      </div>
    </div>
  );
};

export default AboutCombined;
