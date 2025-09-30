import React from "react";

export default function WaveDivider({ className = "", flip = false, color = "#F5F5F5" }) {
  return (
    <div className={`${className} w-full overflow-hidden leading-none`}>
      <svg
        className={`w-full h-20 ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={color}
          fillOpacity="1"
          d="M0,64L48,69.3C96,75,192,85,288,112C384,139,480,181,576,197.3C672,213,768,203,864,186.7C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
