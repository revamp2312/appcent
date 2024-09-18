import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const 


CgCompanies = () => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-6 tablet:px-14 laptop:px-[70px] py-12 laptop:py-20 bg-[var(--primary-color)]">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-8 tablet:gap-12 laptop:gap-6 h-full laptop:flex-row">
        <div className="flex flex-col gap-2 justify-center items-start w-full laptop:max-w-[612px] ">
          <div>
            <h2>We Are Part of a Bigger and More Exciting Group</h2>
          </div>
          <div>
            <p>
              Appcentric Solutions Inc. is part of the Centric Group of
              companies. Your true end-to-end partner in security and
              infrastructure consultancy, enterprise management, and customer
              experience.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full justify-center items-center tablet:flex-row">
        <div className="w-full laptop:w-[294px] flex flex-col justify-center items-center gap-9 p-6 bg-[#F8FAFF] rounded h-full min-h-[342px] border border-solid border-[#EFEFEF] ">
          <div>
            <Image
              src="/infocentrc-logo.png"
              alt="Infocentric-Logo"
              width={140}
              height={32}
            />
          </div>
          <div>
            <p className="font-bold  text-center">
              The Identity Access Management Leader in the Philippines. Trusted
              by the top Enterprises in the country.
            </p>
          </div>
          <div>
            <a target='blank' href="https://infocentric.ph/">
              <div className="flex justify-center items-center gap-2 rounded text-white px-6 py-3 bg-infocentric-bg  font-bold">
                <div>Visit website</div>
                <FaArrowRightLong />
              </div>
            </a>
          </div>
        </div>
        <div className="w-full laptop:w-[294px] flex flex-col justify-between items-center gap-9 p-6 bg-[#FBFBFF] rounded h-full min-h-[342px] border border-solid border-[#EFEFEF] ">
          <div className="flex flex-col gap-9 justify-start items-center">
          <div className="w-[90px]">
            <Image
              className="w-full"
              src="/blink-logo.png"
              alt="Blink-Logo"
              width={78}
              height={32}
            />
          </div>
          <div>
            <p className="font-bold text-center">
            The Technology-driven Customer Experience (CX) Leader in the Philippines.
            </p>
          </div>
          </div>
        
          <div>
            <a target='blank' href="https://blink-digital.com/">
              <div className="flex justify-center items-center gap-2 rounded px-6 py-3 bg-blink-logo-bg text-white  font-bold">
                <div>Visit website</div>
                <FaArrowRightLong />
              </div>
            </a>
          </div>
        </div>
        </div>
     
      </div>
    </div>
  );
};

export default CgCompanies;
