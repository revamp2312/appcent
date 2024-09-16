import React from "react";
import BlogCard from "./BlogCard";
import { PiArrowCircleRightFill } from "react-icons/pi";
import Link from "next/link";
import BlogSlab from "./BlogSlab";

const AllArticleHeroSection = ({ blogData}) => {

 
  return (
    <div className="flex justify-center items-center m-auto w-full ">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-16">
      <div className="flex justify-center items-center gap-4 w-full">
            {/* <div className="flex flex-1 h-[1px] w-full bg-[#CDD1DF]"></div> */}
            <div><h3 className="flex flex-1  text-center">Featured articles</h3></div>
            <div className="flex flex-1 h-[1px] w-full bg-[var(--accent-color)]"></div>
        </div>
        <div className="flex flex-col gap-6 justify-center items-center laptop:flex-row w-full">
          <div className="w-full laptop:w-[40%] h-full ">
            <BlogCard blogdata={blogData[34]} />
          </div>
          <div className="flex flex-col gap-6 justify-center items-center w-full laptop:w-[60%]">

          <BlogSlab blogData={blogData[0]}/>
          <BlogSlab blogData={blogData[2]}/>
          <BlogSlab blogData={blogData[4]}/>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 w-full">
            {/* <div className="flex flex-1 h-[1px] w-full bg-[#CDD1DF]"></div> */}
            <div><h3 className="flex flex-1  text-center">Other articles</h3></div>
            <div className="flex flex-1 h-[1px] w-full bg-[var(--accent-color)]"></div>
        </div>
      </div>
    </div>
  );
};

export default AllArticleHeroSection;
