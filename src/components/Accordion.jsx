import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Accordion = ({ data, openAcc,closeAcc, open }) => {
  return (
    <div
      onClick={open?closeAcc:openAcc}
      style={open?{borderTop:"6px solid #EC622B",marginBottom:"8px"}:{borderTop:"1px solid #EFEFEF"}}
      className={`flex flex-col  justify-center items-start p-6   rounded-b-[4px] bg-[#FFF] w-full cursor-pointer ${open && "shadow-accordionBoxShadow"}`}>
      <div className="flex gap-4 justify-between items-center w-full bg-[#FFF]">
        <div> <p className="font-semibold">{data.title}</p></div>
        <div className="text-[var(--accent-color)]">
        {open?<MdOutlineKeyboardArrowUp size={24}/>:<MdOutlineKeyboardArrowDown size={24} />}
        </div>
      </div>
      <div
        className="grid transition-[grid-template-rows]  duration-[400ms]"
        style={open ? { gridTemplateRows: "1fr" } : { gridTemplateRows: "0fr" }}>
        <div className="overflow-hidden">
          <div className="flex flex-col gap-6 justify-center items-start bg-[#FFF] pt-2">
            <div>
              <h6 className="text-[var(--text-color)]">{data.description}</h6>
            </div>
            <Link href={data.redirectUrl}>
              <div className="flex gap-2 justify-start items-center text-[var(--accent-color)]">
                <h6 className="font-bold">Learn More</h6>
                <FaArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
