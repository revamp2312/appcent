import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCTA = () => {
  return (
    <div className="flex  justify-center items-center m-auto w-full px-6 tablet:px-14 laptop:px-[70px] py-12">
      <div className="flex relative flex-col items-start  justify-between laptop:items-center p-6 laptop:py-14 laptop:px-10 w-full max-w-[1440px] bg-[var(--primary-color)] rounded-2xl laptop:flex-row gap-12 laptop:gap-0">
        <div className="z-30 flex flex-col gap-2 items-start justify-center">
          <h3 className="tablet:text-[28px]">Do you need an Intelligent Enterprise Technology?</h3>
          <p>Book a session with Appcentric!</p>
        </div>
        <div>
          <Link href="/">
            <div className="flex  z-30 justify-center items-center gap-[10px] rounded px-6 py-4 bg-primary-btn-bg text-white font-bold">
              <div>Contact us now</div>
              <FaArrowRightLong />
            </div>
          </Link>
        </div>
        <div className="z-20 absolute top-0 left-0 bg-cover bg-[url('/homepage/smallCtaBg.png')] w-full tablet:w-[300px] h-full"></div>
      </div>
   
    </div>
  );
};

export default ServiceCTA;
