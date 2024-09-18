import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const SmallCta = () => {
  return (
    <div className="flex relative flex-col gap-8 justify-center items-center  shadow-ServiceSmallCTA rounded-lg px-6 tablet:px-12 py-8 w-full z-10">
      <div className="flex flex-col gap-2 justify-center items-center z-40">
        <div>
          <h3 className="text-center">Discover the Difference</h3>
        </div>
        <div>
          <p className="text-center">
            Unlock Your Business Potential: Schedule a Consultation with Our SAP
            Experts Today!
          </p>
        </div>
      </div>
      <div>
        <Link href="/">
          <div className="flex justify-center items-center gap-[10px] rounded px-6 py-4 bg-primary-btn-bg text-white font-bold">
            <h6 className="text-white font-bold">Schedule a Consultation</h6>
            <FaArrowRightLong />
          </div>
        </Link>
      </div>
      <div className="z-20 absolute top-0 left-0 bg-cover bg-[url('/homepage/smallCtaBg.png')] rounded-l-lg w-[300px] h-full">

      </div>
    </div>
  );
};

export default SmallCta;
