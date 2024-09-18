import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const ServicePreviewCard = ({ data }) => {
  return (
    <Link href={data.route}>
    <div className="flex justify-center items-center max-w-[396px] h-[297px] rounded border-2 bg-white hover:bg-gradient-95 hover:border-transparent hover:from-[#EC622B] hover:from-0%  hover:to-[#F39D43] hover:to-100% hover:bg-clip-border]">
      <div className="flex flex-col justify-between items-start w-full h-full bg-white p-8 ">
        <div className="flex flex-col gap-9 items-start justify-start">
          <div>
            <Image
              src="/homepage/sap_logo.png"
              alt="saplogo"
              width={78}
              height={36}
            />
          </div>
          <div>
            <h4>{data.title}</h4>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <h6>Learn More</h6>
          
          <div className="flex justify-center items-center w-10 h-10 border-[1px] border-solid border-[#DFE5EC]">
            <GoArrowRight size={24} />
          </div>
      

        </div>
      </div>
    </div>
        </Link>
  );
};

export default ServicePreviewCard;
