import React from "react";
import BlogCard from "./BlogCard";



const BlogContainer =  ({blogData}) => {

  return (
    <div className="flex justify-center items-center m-auto w-full max-w-[1440px] ">
      <div className="grid grid-col-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-6 gap-y-6 laptop:gap-y-16 place-content-center ">
        {blogData?.map((eachData, index) => {
          return <BlogCard key={index} blogdata={eachData} />;
        })}
      </div>
    </div>
  );
};

export default BlogContainer;
