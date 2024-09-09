import { useInsightData } from "@/hooks/useInsightData";
import { FiSearch } from "react-icons/fi";
import EachMenu from "./EachMenu";
import { Search } from "../custom/Search";

const BlogMenu = ({ setMenuSelected, categories,menuSelected }) => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-[70px] h-[80px]">
      <div className="w-full max-w-[1440px] flex  justify-between items-center">
        <div className="flex gap-12 justify-center items-center">
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
        <div className="flex  justify-center items-center  relative min-w-[347px] ">
          <FiSearch size={20} className="absolute left-1 top-[34%] bottom-0 " />
       <Search />
        </div>
      </div>
    </div>
  );
};

export default BlogMenu;
