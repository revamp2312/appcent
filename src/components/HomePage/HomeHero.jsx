import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoArrowDownOutline } from "react-icons/io5";


const HomeHero = () => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-6 tablet:px-14 laptop:px-[70px] py-12">
      <div className="w-full max-w-[1440px] flex flex-col justify-between items-center gap-6 tablet:gap-16 laptop:gap-6 laptop:flex-row">
        <div className="flex flex-col gap-12 justify-center items-start max-w-[718px] w-full">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div>
              <h1>
                Leading the Way in Business Transformation with&nbsp;
                <span className="text-[var(--accent-color)]  tablet:text-nowrap">SAP Innovations
                </span>
              </h1>
            </div>
            <div><p>Unleash the Power of Innovation with Appcentric – Where Visionary Leaders Shape the Future of Business</p></div>
          </div>
          <div className="flex flex-col gap-[10px] justify-start items-center tablet:flex-row w-full laptop:w-auto">
          <Link href="/contact" className="w-full"><div className="rounded px-6 py-4 bg-primary-btn-bg hover:bg-[#EC622B] text-white font-bold w-full text-center">Schedule a Demo</div></Link>
          <Link href="/#servicePreview" className="w-full">
          <div className="flex w-full tablet:w-[calc(100%-24px)] tablet:hover:w-[calc(100%)] laptop:w-[229px] laptop:hover:w-[249px] justify-center transition-all duration-300 items-center gap-[10px] rounded px-6 py-4 bg-[var(--primary-color)] border-[1px] border-solid border-[var(--accent-color)] text-[var(--accent-color)] font-bold">
          <div className="text-nowrap" >See Our SAP Services </div>
        
          <IoArrowDownOutline />
          </div></Link>
          </div>
        </div>
        <div className="flex justify-center items-center w-full max-w-[506px]">
            <Image className="w-full" src="/homepage/home-hero.png" alt="Hero Image" width={506} height={576} />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
