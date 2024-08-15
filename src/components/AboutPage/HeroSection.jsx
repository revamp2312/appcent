import React from "react";
import VideoComponent from "./VideoComponent";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-[70px] py-12">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-12">
        <div className="flex flex-col gap-2 justify-center items-center max-w-[580px] w-full text-center">
          <div><h1>Empowering Innovation,<br/> <span className="bg-primary-btn-bg bg-clip-text text-transparent">Delivering Excellence</span></h1></div>
          <div><p>Welcome to Appcentric Solutions Inc., where we harness the transformative power of SAP technologies to drive business success.</p></div>
        </div>
        <div><VideoComponent /></div>
      </div>
    </div>
  );
};

export default HeroSection;
