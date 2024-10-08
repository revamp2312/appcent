import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-6 tablet:px-14 laptop:px-[70px] py-12">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-12">
        <div className="flex flex-col justify-between items-start gap-12 laptop:gap-0 laptop:items-center w-full laptop:flex-row">
          <div className="flex flex-col gap-6 items-start justify-center max-w-[496px] w-full">
            <div>
              <Image
                src="/appcentricLogo.png"
                width={188}
                height={62}
                alt="Appcentric-Logo"
              />
            </div>
            <div>
              <p>
                Building a great company takes time.
                <span className="text-[var(--accent-color)]">
                  We&apos;re here to support your digital transformation.
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-start justify-center laptop:items-center gap-6 laptop:flex-row">
              <Link href="/">
                {" "}
                <h6 className="font-medium text-[var(--text-color)] hover:text-[var(--accent-color)]">
                  Home
                </h6>
              </Link>
              <Link href="/about">
                <h6 className="font-medium text-[var(--text-color)] hover:text-[var(--accent-color)]">
                  About Us
                </h6>
              </Link>
              <Link target="blank"  href="/pdf/AppcentricProfile.pdf">
                  <h6 className="font-medium text-[var(--text-color)] hover:text-[var(--accent-color)]">Company Profile</h6>
              </Link>
              <Link href="#servicePreview">
                <h6 className="font-medium text-[var(--text-color)] hover:text-[var(--accent-color)]">
                  Services
                </h6>
              </Link>
              <Link href="/insight">
                <h6 className="font-medium text-[var(--text-color)] hover:text-[var(--accent-color)]">
                  Insights
                </h6>
              </Link>
              <Link href="/contact">
                <h6 className="font-medium text-[var(--text-color)] hover:text-[var(--accent-color)]">
                  Contact Us
                </h6>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-6 tablet:gap-0 justify-between items-start laptop:items-center w-full tablet:flex-row">
          <div>
            <p className="text-sm">
              © 2024 Appcentric Solutions, Inc. All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-col-reverse gap-8 justify-center items-start tablet:items-center w-full tablet:w-auto tablet:flex-row">
            <div>
              <p className="text-sm">Data Privacy</p>
            </div>
            <div className="flex gap-6 justify-center items-center text-[var(--accent-color)]">
              <a
                className="cursor-pointer"
                target="blank"
                href="https://www.linkedin.com/company/appcentric-ph/"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                className="cursor-pointer"
                target="blank"
                href="https://www.facebook.com/AppcentricPH"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
