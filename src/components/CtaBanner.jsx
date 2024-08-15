import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
const CtaBanner = ({ data }) => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-[70px] py-12 ">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-start shadow-ctaBannerBoxShadow border-[0.5px] border-solid border-[var(--background-color)] rounded-lg">
        <div className="flex justify-center items-center gap-12 pl-12 rounded-t-lg">
          <div className="flex flex-col gap-12 justify-center items-start max-w-[612px] w-full">
            <div className="flex flex-col gap-1 justify-center items-start">
              <div><h1 className="text-[var(--accent-color)]">{data.title}</h1></div>
              <div> <p>{data.subtitle}</p></div>
            </div>
            <div>
              <Link href={data.btnHref}>
                <div className="flex justify-center items-center gap-[10px] rounded px-6 py-3 bg-primary-btn-bg text-white font-bold">
                  <div>{data.btnText}</div>
                  <FaArrowRightLong />
                </div>
              </Link>
            </div>
          </div>
          <div > <Image className="rounded-tr-lg" src={data.img} alt="Cta Banner" width={610} height={390} /></div>
        </div>
        <div className="flex justify-center items-center w-full bg-primary-btn-bg rounded-b-lg">
          <div className="flex flex-[3] justify-between items-center px-6 w-full">
            <div className="flex gap-4 justify-center items-center text-white px-6 py-4">
              <div className="w-6 h-6"><MdEmail size={24}/></div>
              <div className="flex flex-col gap-1 text-white">
                <h6 className="text-white font-semibold">Email address</h6>
                <h6 className="text-white">info@appcentric.ph</h6>
              </div>
            </div>
            <div className="flex gap-4 justify-center items-center text-white px-6 py-4">
              <div><FaPhone size={24} /></div>
              <div className="flex flex-col gap-1">
                <h6 className="text-white font-semibold">Contact us</h6>
                <h6 className="text-white ">+63(2)88835270</h6>
                <h6 className="text-white">Weekdays 9am to 6pm GMT+8</h6>
              </div>
            </div>
            <div className="flex gap-4 justify-center items-center text-white px-6 py-4">
              <div><IoPerson size={24} /></div>
              <div className="flex flex-col gap-1">
                <h6 className="text-white font-semibold">Sales inquiries</h6>
                <h6 className="text-white">+632 (xxxx-xxxx) </h6>
                <h6 className="text-white">Weekdays 9am to 6pm GMT+8</h6>
              </div>
            </div>
          </div>
          <div className="flex flex-[1] bg-white">
            <Image className="rounded-br-lg" src="/ctaBanner/ctaBuilding.png" width={276} height={126} alt="Cta-Building"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBanner;
