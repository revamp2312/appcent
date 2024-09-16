import React from "react";
import BlogCard from "./BlogCard";
import AllArticleHeroSection from "./AllArticleHeroSection";

const AllArticleContainer = ({ blogData }) => {


  return (
    <div className="flex justify-center items-center m-auto w-full ">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-12">
        <AllArticleHeroSection blogData={blogData} />
        <div className="grid grid-col-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-6 gap-y-16 place-content-center ">
        {blogData?.map((eachData, index) => {
          return <BlogCard key={index} blogdata={eachData} />;
        })}
        </div>
      </div>
    </div>
  );
};

export default AllArticleContainer;
