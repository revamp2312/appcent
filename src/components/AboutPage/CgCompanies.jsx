import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const 


CgCompanies = () => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-6 tablet:px-14 laptop:px-[70px] py-12 bg-[var(--primary-color)]">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-6 h-full laptop:flex-row">
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
        <div className="w-full laptop:w-[294px] flex flex-col justify-center items-center gap-9 p-6 bg-infocentric-bg rounded h-full min-h-[342px]">
          <div>
            <Image
              src="/infocentrc-logo.png"
              alt="Infocentric-Logo"
              width={140}
              height={34}
            />
          </div>
          <div>
            <p className="font-bold text-white text-center">
              The Identity Access Management Leader in the Philippines. Trusted
              by the top Enterprises in the country.
            </p>
          </div>
          <div>
            <Link href="/contact">
              <div className="flex justify-center items-center gap-2 rounded px-6 py-3 bg-[#FFF]  font-bold">
                <div>Visit website</div>
                <FaArrowRightLong />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full laptop:w-[294px] flex flex-col justify-start items-center gap-9 p-6 bg-white rounded h-full min-h-[342px]">
          <div>
            <Image
              src="/blink-logo.png"
              alt="Blink-Logo"
              width={78}
              height={27}
            />
          </div>
          <div>
            <p className="font-bold text-center">
            A Customer Experience Leader
            </p>
          </div>
          <div>
            <Link href="/contact">
              <div className="flex justify-center items-center gap-2 rounded px-6 py-3 bg-[#FFF]  font-bold">
                <div>Visit website</div>
                <FaArrowRightLong />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CgCompanies;
