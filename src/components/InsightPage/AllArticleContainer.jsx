import React from "react";
import BlogCard from "./BlogCard";
import AllArticleHeroSection from "./AllArticleHeroSection";

const AllArticleContainer = ({ blogData, newsData, successStories }) => {
  const updatedData = [blogData, newsData, successStories];
  console.log(updatedData);

  return (
    <div className="flex justify-center items-center m-auto w-full ">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-12">
        <AllArticleHeroSection blogData={blogData}  newsData={newsData} successStories={successStories} />
        <div className="grid grid-cols-3 gap-x-6 gap-y-16 place-content-center ">
          {updatedData.map((eachData, index) => {
            return eachData.data.map((eachData, index) => {
              return <BlogCard key={index} blogdata={eachData} />;
            });
          })}
        </div>
      </div>
    </div>
  );
};

export default AllArticleContainer;
