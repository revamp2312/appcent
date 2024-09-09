import React from "react";
import BlogCard from "./BlogCard";
import { PiArrowCircleRightFill } from "react-icons/pi";
import Link from "next/link";

const AllArticleHeroSection = ({ blogData}) => {
  console.log(blogData[5]?.attributes?.title);
 
  return (
    <div className="flex justify-center items-center m-auto w-full ">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-16">
      <div className="flex justify-center items-center gap-4 w-full">
            {/* <div className="flex flex-1 h-[1px] w-full bg-[#CDD1DF]"></div> */}
            <div><h3 className="flex flex-1  text-center">Featured articles</h3></div>
            <div className="flex flex-1 h-[1px] w-full bg-[var(--accent-color)]"></div>
        </div>
        <div className="flex gap-6 justify-center items-center">
          <div className="w-[40%] h-full">
            <BlogCard blogdata={blogData[0]} />
          </div>
          <div className="flex flex-col gap-6 justify-center items-center w-[60%s]">

            <div className="flex justify-center items-center px-[30px] py-[35px] rounded-lg border-[1px] border-solid border-[#E8E7EE] w-full">
              <Link href={`/blog/${blogData[0]?.attributes?.slug}`} className="w-full">
              <div className="flex flex-col gap-5 items-start justify-center w-full">
              <div className="flex justify-start items-center w-full">
                  <div className="text-sm text-[#5B616E]">May 20, 2019  •  2 min read</div>
                </div>
                <div className="flex justify-between items-center text-[var(--accent-color)] w-full">
                    <h4 className="font-semibold">{blogData[0]?.attributes?.title}</h4>
                    <PiArrowCircleRightFill size={40} />
                    </div>
              </div>
              </Link>
            </div>
            <div className="flex justify-center items-center px-[30px] py-[35px] rounded-lg border-[1px] border-solid border-[#E8E7EE] w-full">
            <Link href={`/blog/${blogData[1]?.attributes?.slug}`} className="w-full">
              <div className="flex flex-col gap-5 items-start justify-center w-full">
              <div className="flex justify-start items-center w-full">
                  <div className="text-sm text-[#5B616E]">May 20, 2019  •  2 min read</div>
                </div>
                <div className="flex justify-between items-center text-[var(--accent-color)] w-full">
                    <h4 className="font-semibold">{blogData[1]?.attributes?.title}</h4>
                    <PiArrowCircleRightFill size={40} />
                    </div>
              </div>
              </Link>
            </div>
            <div className="flex justify-center items-center px-[30px] py-[35px] rounded-lg border-[1px] border-solid border-[#E8E7EE] w-full">
            <Link href={`/blog/${blogData[7]?.attributes?.slug}`} className="w-full">
              <div className="flex flex-col gap-5 items-start justify-center w-full">
                <div className="flex justify-start items-center w-full">
                  <div className="text-sm text-[#5B616E]">May 20, 2019  •  2 min read</div>
                </div>
                <div className="flex justify-between items-center text-[var(--accent-color)] w-full">
                    <h4 className="font-semibold">{blogData[7]?.attributes?.title}</h4>
                    <PiArrowCircleRightFill size={40} />
                    </div>
              </div>
              </Link>
            </div>
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
