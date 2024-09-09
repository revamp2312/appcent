"use client"
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import ServiceDropdown from "./ServiceDropdown";
import { useState } from "react";

const SideBar = ({ open }) => {
  const [openSideBarSevice, setOpenSideBarService] = useState(false);
  return (
    <div
      className="grid transition-[grid-template-rows]  duration-[400ms]"
      style={open ? { gridTemplateRows: "1fr" } : { gridTemplateRows: "0fr" }}
    >
      <div className="overflow-hidden">
        <div className="flex justify-center items-center px-6 pb-12 tablet:px-14 tablet:pt-6 w-full laptop:hidden">
          <div className="flex flex-col justify-center items-center gap-6 w-full ">
            <div className="flex flex-col justify-center items-start w-full">
            <Link href="/">
              <div className="p-4 flex justify-start items-center border-b-[1px] border-solid border-[#F1F1F1] w-full">
              <h6 className="font-medium text-[var(--text-color)]">Home</h6>
              </div>
           
            </Link>
             
              <Link href="/about">
              <div className="p-4 flex justify-start items-center border-b-[1px] border-solid border-[#F1F1F1] w-full">
              <h6 className="font-medium text-[var(--text-color)]">About Us</h6>
              </div>
           
            </Link>
              <div
                onClick={() => {
                  setOpenSideBarService(!openSideBarSevice);
                }}
                className="w-full"
              >
                <div className="p-4 flex justify-start items-center border-b-[1px] border-solid border-[#F1F1F1] w-full">
                <h6 className="font-medium text-[var(--text-color)]">Service</h6>
                  {openSideBarSevice ?<MdOutlineKeyboardArrowUp size={24} color="#EC622B"/>:<MdOutlineKeyboardArrowDown size={24} />}
                </div>
                {openSideBarSevice && (
                  <div className="w-full"> 
                    <ServiceDropdown />
                  </div>
                )}
              </div>

              <Link href="/insight">
              <div className="p-4 flex justify-start items-center border-b-[1px] border-solid border-[#F1F1F1] w-full">
              <h6 className="font-medium text-[var(--text-color)]">Insight</h6>
              </div>
           
            </Link>
            </div>

            <div className="w-full">
              <Link href="/demo" className="w-full">
                <div className="rounded px-6 py-3 bg-primary-btn-bg text-white font-bold w-full text-center">
                  Contact us
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
