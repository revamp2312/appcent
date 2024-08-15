
import { useInsightData } from "@/hooks/useInsightData";
import { FiSearch } from "react-icons/fi";
import EachMenu from "./EachMenu";

const BlogMenu = ({setMenuSelected,categories}) => {
      
  return ( 
    <div className="flex justify-center items-center m-auto w-full px-[70px] h-[80px]">
      <div className="w-full max-w-[1440px] flex  justify-between items-center">
            <div className="flex gap-12 justify-center items-center">
{categories?.data.map((each,index)=>{
  return <EachMenu key={index} categoryName={each?.attributes?.Title} />
})}
            </div>
            <div  className="flex  justify-center items-center  relative min-w-[347px] ">
           <FiSearch size={20} className="absolute left-1 top-[34%] bottom-0 " />
            <input
              className="border-none w-full rounded-lg border-[1px] border-[#D0D5DD] p-4 pl-9"
              type="text"
              name=""
              id=""
              placeholder="Search for blogs, news, and updates"
            />
          </div>
        </div>
        </div>
  )
}

export default BlogMenu