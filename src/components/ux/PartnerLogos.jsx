import React from "react";

const PartnerLogos = () => {
  const logos = [
    "public/vite.svg",
    "public/vite.svg",
    "public/vite.svg",
    "public/vite.svg",
    "public/vite.svg",
    "public/vite.svg",
  ];

  return (
    <div className="w-full py-10">
      <div className="flex justify-center items-center flex-wrap gap-20 px-8">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-10 w-auto grayscale hover:grayscale-0 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;
