import Image from "next/image";
import CapabilityCard from "./CapabilityCard";

const Capabilities = ({data}) => {
  
  
  return (
    <div className="flex justify-center items-center m-auto w-full px-6 tablet:px-14 laptop:px-[70px] pt-12 pb-20 relative">
      <div className="w-full max-w-[1440px] flex flex-col  justify-center items-start gap-12 laptop:flex-row">
        <div className="flex flex-1 flex-col gap-9 items-start justify-start z-20">
          <h2>{data.title}</h2>
          <Image
            src={data.imgSrc}
            alt="Service-Capability"
            width={612}
            height={373}
          />
        </div>
        <div className="flex flex-1 justify-center items-center bg-[#FFFFFF] z-20">
          <div className="grid grid-cols-1 tablet:grid-cols-2 place-content-cente gap-x-9 gap-y-12">
       {data.eachCapability.map((each,index)=>{
        return <CapabilityCard key={index} cardData={each}/>
       })}
          </div>
        </div>

        <div className="absolute hidden left-[-100px] top-[-30%] laptop:bottom-0 z-10 laptop:visible">
            <Image src="/Services/capabilityBg.png" alt="mesh-bg" width={738} height={738}/>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
