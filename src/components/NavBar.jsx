"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ServiceDropdown from "./ServiceDropdown";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSideBar } from "@/hooks/useSIdeBar";
import SideBar from "./SideBar";
import { RxCross2 } from "react-icons/rx";


const NavBar = () => {
  const [openDropdown,setOpenDropdown]=useState(false)
  const {openSideBar,setOpenSideBar} =useSideBar()
  return (
    <>
    <div className="bg-[var(--background-color)] h-[70px] tablet:h-[90px] w-full m-auto flex justify-center items-center relative ">
      <div className="flex justify-between items-center px-6 tablet:px-14 laptop:px-[70px]   max-w-[1440px] w-full">
        <Link href="/">
          <Image
            src="/appcentric-black-logo.png"
            alt="Appcentric Logo"
            width={188}
            height={62}
          />
        </Link>
        <div className="hidden laptop:flex justify-center items-center">
          <div className="flex justify-center items-center gap-6">
            <Link href="/">
              <h6 className="font-medium text-[var(--text-color)]">Home</h6>
            </Link>
            <Link href="/about">
              <h6 className="font-medium text-[var(--text-color)]">About Us</h6>
            </Link>
            <div onClick={()=>{setOpenDropdown(!openDropdown)}} className="relative flex justify-center items-center cursor-pointer ">
              <h6 className={`font-medium ${openDropdown?"text-[var(--accent-color)]":"text-[var(--text-color)]"}`}>Services</h6>
              {openDropdown ?<MdOutlineKeyboardArrowUp size={24} color="#EC622B"/>:<MdOutlineKeyboardArrowDown size={24} />}
            { openDropdown && <div className="absolute top-[72px] right-0 left-[50%] mr-auto ml-auto w-[398px] translate-x-[-50%]">
                <ServiceDropdown />
              </div>}
            </div>

            <Link href="/insight">
              <h6 className="font-medium text-[var(--text-color)]">Insights</h6>
            </Link>

            <Link href="/contact">
              <h6 className="rounded px-6 py-3 bg-primary-btn-bg text-white font-bold">
                Contact Us
              </h6>
            </Link>
          </div>
        </div>
        <div onClick={()=>{setOpenSideBar(!openSideBar)}} className="flex justify-center items-center laptop:hidden">
         {openSideBar?<RxCross2 size={24} />: <RxHamburgerMenu size={24} />}
        </div>
      </div>
      <div className="w-full absolute top-[70px] tablet:top-[90px] left-0 bg-white">
    <SideBar open={openSideBar} />
    </div>
    </div>
   
   
    </>
  );
};

export default NavBar;
