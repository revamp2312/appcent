import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-[var(--background-color)] h-[90px] w-full m-auto flex justify-center items-center">
      <div className="flex justify-between items-center px-[70px] max-w-[1440px] w-full">
        <Link href="/">
          <Image
            src="/appcentric-black-logo.png"
            alt="Appcentric Logo"
            width={188}
            height={62}
          />
        </Link>
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-6">
            <Link href="/"> <h6 className="font-medium text-[var(--text-color)]">Home</h6></Link>
            <Link href="/about"><h6 className="font-medium text-[var(--text-color)]">About Us</h6></Link>
            <Link href="/service"><h6 className="font-medium text-[var(--text-color)]">Services</h6></Link>
            <Link href="/insight"><h6 className="font-medium text-[var(--text-color)]">Insights</h6></Link>
            
            <Link href="/contact"><h6 className="rounded px-6 py-3 bg-primary-btn-bg text-white font-bold">Contact Us</h6></Link>
            </div> 
        </div>
      </div>
    </div>
  );
};

export default NavBar;
