"use client";

import useInsightData from "@/hooks/useInsightData";
import BlogCard from "./BlogCard";
import NewsContainer from "./NewsContainer";
import BlogContainer from "./BlogContainer";
import BlogMenu from "./BlogMenu";
import SuccessStoriesContainer from "./SuccessStoriesContainer";
import AllArticleContainer from "./AllArticleContainer";

const ArticlesSection = ({
  blogData,
  newsData,
  successStories,
  categories,
}) => {
  const { menuSelected, setMenuSelected } = useInsightData();
  // console.log(menuSelected);

  return (
    <>
      <BlogMenu setMenuSelected={setMenuSelected} categories={categories} />
      <div className="flex flex-col justify-center items-center m-auto w-full px-[70px] py-12">
        <BlogContainer blogData={blogData} />
      </div>
    </>
  );
};

export default ArticlesSection;
