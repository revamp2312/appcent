import { AiFillBulb } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbPuzzle2 } from "react-icons/tb";
import { FaGlobe } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";


const KeyPointCard = () => {
  return (
    <div className="flex flex-col gap-8 justify-start items-start p-6 tablet:p-8  w-full h-full min-h-[400px] border-[0.7px] border-solid border-[#EFEFEF] shadow-keyPointBoxShadow">
      <div className="w-12 bg-[var(--primary-color)] p-1">
        <div className="w-full flex justify-center items-center p-2 bg-[#FFEBD7] text-[var(--accent-color)]">
          <AiFillBulb size={24} />
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-start items-start">
      <div><h4>Leadership in SAP Innovation</h4></div>
      <div><p>Appcentric is recognized as the first and leading SAP innovations partner in the Philippines, significantly influencing the SAP ecosystem.</p></div>
      </div>

      <div className="flex justify-center items-center w-full">
      <Image src="/KeyPointsBg/KeyPoint1Img.png" alt="key-point" width={386} height={343} />
      </div>

    </div>
  );
};

export default KeyPointCard;


export const KeyPointCard2 = () => {
    return (
      <div className="flex flex-col gap-6 justify-start items-start p-6 tablet:p-8  w-full h-full min-h-[400px] border-[0.7px] border-solid border-[#EFEFEF] shadow-keyPointBoxShadow">
        <div className="w-12 bg-[var(--primary-color)] p-1">
          <div className="w-full flex justify-center items-center p-2 bg-[#FFEBD7] text-[var(--accent-color)]">
            <IoIosSettings size={24} />
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
        <div><h4>Extensive SAP Expertise</h4></div>
        <div><p>The leadership team boasts extensive experience in SAP consulting, providing expert guidance in logistics and manufacturing sectors with multiple projects covering the entire supply chain from logistics execution to warehouse management.</p></div>
        <div className="flex justify-center items-center w-full">
      <Image className="w-full" src="/KeyPointsBg/KeyPoint2Img.png" alt="key-point" width={386} height={343} />
      </div>
        </div>

      </div>
    );
  };



  export const KeyPointCard3 = () => {
    return (
      <div className="flex flex-col gap-6 justify-start items-start p-6 tablet:p-8  w-full h-full min-h-[400px] border-[0.7px] border-solid border-[#EFEFEF] shadow-keyPointBoxShadow">
        <div className="w-12 bg-[var(--primary-color)] p-1">
          <div className="w-full flex justify-center items-center p-2 bg-[#FFEBD7] text-[var(--accent-color)]">
            <TbPuzzle2 size={24} />
          </div>
        </div>
        <div className="flex flex-col  justify-between items-start h-full">
          <div className="flex flex-col gap gap-8">
            <div className="flex flex-col gap-2 ">
            <div><h4>Comprehensive Service Offerings</h4></div>
            <div><p>Having established a strong presence in the Philippines, Appcentric is expanding its operations into other emerging markets in Asia.</p></div>
         
            </div>
            <div className="flex gap-2 justify-start items-center">
            <Link href="/#servicePreview"><h6 className="font-bold">See our SAP Services</h6></Link>
            <FaArrowRightLong color="#EC622B"/>
            </div>
          </div>


        <div className="flex justify-center items-center w-full">
      <Image className="w-full" src="/KeyPointsBg/KeyPoint3Img.png" alt="key-point" width={386} height={343} />
      </div>
        </div>

      </div>
    );
  };
  

  export const KeyPointCard4 = () => {
    return (
      <div className="flex flex-col gap-6 justify-start items-start p-6 tablet:p-8  w-full h-full min-h-[400px] border-[0.7px] border-solid border-[#EFEFEF] shadow-keyPointBoxShadow">
        <div className="w-12 bg-[var(--primary-color)] p-1">
          <div className="w-full flex justify-center items-center p-2 bg-[#FFEBD7] text-[var(--accent-color)]">
            <FaGlobe size={24} />
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
        <div><h4>Global Expansion</h4></div>
        <div><p>Having established a strong presence in the Philippines, Appcentric has expanded its operations to Sydney, Australia, and is planning further expansion into other emerging markets in Asia.</p></div>
        </div>
        <div className="flex justify-end items-center w-full">
         <Image className="w-full" src="/KeyPointsBg/KeyPoint4Img.png" alt="key-point" width={386} height={343} />
        </div>

      </div>
    );
  };
  

  export const KeyPointCard5 = () => {
    return (
      <div className="flex flex-col gap-6 justify-start items-start p-6 tablet:p-8   w-full h-full min-h-[400px] border-[0.7px] border-solid border-[#EFEFEF] shadow-keyPointBoxShadow">
        <div className="w-12 bg-[var(--primary-color)] p-1">
          <div className="w-full flex justify-center items-center p-2 bg-[#FFEBD7] text-[var(--accent-color)]">
            <IoIosPeople size={24} />
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
        <div><h4>Diverse Client Base</h4></div>
        <div><p>The company serves a broad range of industries with solutions that enhance operational efficiencies and decision-making capabilities, tailored to meet the diverse needs of its clients.</p></div>
        </div>
        <div className="flex gap-2 justify-start items-center">
            <Link href="/contact"><h6 className="font-bold">Schedule a Consultation</h6></Link>
            <FaArrowRightLong color="#EC622B"/>
        </div>
        <div className="flex justify-center items-center w-full">
      <Image className="w-full" src="/KeyPointsBg/KeyPoint5Img.png" alt="key-point" width={386} height={343} />
      </div>
      </div>
    );
  };
  