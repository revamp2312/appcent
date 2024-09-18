import { useInsightData } from "@/hooks/useInsightData";
import { FiSearch } from "react-icons/fi";
import EachMenu from "./EachMenu";
import { Search } from "../custom/Search";

const BlogMenu = ({ setMenuSelected, categories, menuSelected }) => {
  return (
    <div className="flex justify-center items-center laptop:h-[80px] m-auto w-full px-6 tablet:px-14 laptop:px-[70px] py-6 ">
      <div className="w-full max-w-[1440px] flex flex-col-reverse justify-between items-start gap-2 laptop:gap-0 laptop:items-center laptop:flex-row">
        <div className="flex gap-8  tablet:gap-12 justify-center items-center">
          {categories?.data.map((each, index) => {
            return (
              <EachMenu
                key={index}
                categoryName={each?.attributes?.Title}
                setMenuSelected={setMenuSelected}
                menuSelected={menuSelected}
              />
            );
          })}
        </div>
        <div className="flex  laptop:hidden  h-[1px] w-full bg-[#E8E7EE]"></div>
        <div className="flex  justify-start items-center  relative w-full tablet:w-auto  tablet:min-w-[347px] ">
          <FiSearch size={20} className="absolute left-1 top-[34%] bottom-0 " color="#767676" />
          <Search />
        </div>
      </div>
    </div>
  );
};

export default BlogMenu;
