'use client'
import ClientCarousel from "@/components/HomePage/ClientCarousel"
import { usePathname } from "next/navigation";
const Client = ({bgColor}) => {
  const pathname = usePathname();
  return (
    <div style={pathname=="/"?{"backgroundColor":"white"}:{"backgroundColor":"#FFF7EF"}} className="flex justify-center items-center m-auto w-full px-6 tablet:px-14 laptop:px-[70px] py-12 laptop:pt-12 laptop:pb-20 ">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-12">
        <div className="flex justify-center items-center gap-4 w-full">
            <div className="flex flex-1 h-[1px] w-full bg-[#CDD1DF]"></div>
            <div><h6 className="flex flex-1 uppercase text-center">Trusted by Leading Companies for SAP Excellence</h6></div>
            <div className="flex flex-1 h-[1px] w-full bg-[#CDD1DF]"></div>
        </div>
        <div className="flex gap-8 justify-center items-center w-full">
              <ClientCarousel />
        </div>
        </div>
        </div>
  )
}

export default Client