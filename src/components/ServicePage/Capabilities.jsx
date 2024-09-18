import Image from "next/image";
import CapabilityCard from "./CapabilityCard";

const Capabilities = ({data}) => {
  
  
  return (
    <div className="flex justify-center items-center m-auto w-full px-6 tablet:px-14 laptop:px-[70px] py-12 ">
      <div className="w-full max-w-[1440px] flex flex-col  justify-center items-start gap-12 laptop:flex-row relative">
        <div className="flex flex-1 flex-col gap-9 items-start justify-start z-20 w-full">
          <h2>{data.title}</h2>
          <Image
          className="rounded-lg w-full"
            src={data.imgSrc}
            alt="Service-Capability"
            width={612}
            height={373}
          />
        </div>
        <div className="flex flex-1 justify-center items-center bg-[#FFFFFF] z-20">
          <div className="grid grid-cols-1 tablet:grid-cols-2 place-content-center gap-y-8  gap-x-9 tablet:gap-y-12">
       {data.eachCapability.map((each,index)=>{
        return <CapabilityCard key={index} cardData={each}/>
       })}
          </div>
        </div>

        <div className="absolute  laptop:block left-[-100px] top-[-99px]  laptop:top-[0%] bottom-0 z-10 w-[300px] laptop:w-[738px] overflow-hidden ">
            <Image className="w-full" src="/Services/capabilityBg.png" alt="mesh-bg" width={738} height={308}/>
        </div>
      </div>
      
    </div>
  );
};

export default Capabilities;
