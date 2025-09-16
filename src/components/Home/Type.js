import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
<<<<<<< HEAD
          "Software Development Engineer",
          "Data Analyst",
=======
          "Software Developer",
          "Machine Learning Engineer",
          "Reader",
>>>>>>> Portfolio/main
          "Cloud Enthusiast",
          "Reader",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
