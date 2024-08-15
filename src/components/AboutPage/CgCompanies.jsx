import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CgCompanies = () => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-[70px] py-12 bg-[var(--primary-color)]">
      <div className="w-full max-w-[1440px] flex justify-center items-center gap-6 ">
        <div className="flex flex-col gap-2 justify-center items-start max-w-[612px] w-full">
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
        <div className="w-[294px] flex flex-col justify-center items-center gap-9 p-6 bg-infocentric-bg rounded">
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
        <div className="w-[294px] flex flex-col justify-center items-center gap-9 p-6 bg-white rounded">
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
      </div>
    </div>
  );
};

export default CgCompanies;
