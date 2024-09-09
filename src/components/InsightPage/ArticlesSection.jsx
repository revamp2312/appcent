"use client";

import useInsightData from "@/hooks/useInsightData";
import BlogCard from "./BlogCard";
import NewsContainer from "./NewsContainer";
import BlogContainer from "./BlogContainer";
import BlogMenu from "./BlogMenu";
import SuccessStoriesContainer from "./SuccessStoriesContainer";
import AllArticleContainer from "./AllArticleContainer";
import { Search } from "../custom/Search";

const ArticlesSection = ({ blogData, categories }) => {
  const { menuSelected, setMenuSelected } = useInsightData();
  console.log(blogData);

  const filteredBlogs =
    menuSelected === "All"
      ? blogData?.data
      : blogData?.data.filter(
          (each) =>
            each?.attributes?.categories?.data[0]?.attributes?.Title ===
            menuSelected
        );
  console.log(filteredBlogs);

  return (
    <>
      <BlogMenu
        setMenuSelected={setMenuSelected}
        categories={categories}
        menuSelected={menuSelected
        }
      />
      {/* <Search /> */}
      <div className="flex flex-col justify-center items-center m-auto w-full px-6 tablet:px-14 laptop:px-[70px] py-12">
        {menuSelected === "All" ? (
          <AllArticleContainer blogData={filteredBlogs} />
        ) : (
          <BlogContainer blogData={filteredBlogs} />
        )}
      </div>
    </>
  );
};

export default ArticlesSection;
