import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const serviceRoutes=[
    {
        title:"Rise with SAP",
        description:"Elevate Your Business to New Heights",
        route:"/service/rise-with-SAP"
    },
    {
        title:"Grow with SAP",
        description:"Accelerate Your Midmarket Sucess",
        route:"/service/grow-with-SAP"
    },
    {
        title:"SAP Business Technology Platform",
        description:"Innovate Without Limits",
        route:"/service/buisness-technology-platform"
    },
]


const ServiceDropdown = () => {
  return (
    <div className="flex justify-center items-center laptop:p-6 w-full laptop:max-w-[398px] z-[99] bg-white rounded-2xl">
            <div className="flex flex-col gap-[10px] justify-center items-center w-full">
                {serviceRoutes.map((eachRoute,index)=>{
                    return ( <Link key={index} href={eachRoute.route} className="w-full"> <div  className="flex justify-between items-center py-4 laptop:p-4 w-full hover:bg-[var(--primary-color)] bg-white rounded-md">
                        <div className="flex flex-col gap-[2px] justify-center items-start">
                            <h6 className="font-medium">{eachRoute.title}</h6>
                            <p className="text-sm text-[#5A6E80]">{eachRoute.description}</p>
                        </div>
                        <div className="text-[var(--accent-color)] p-[10px] bg-white">
                            <FaArrowRightLong size={14} />
                        </div>
                    </div></Link>)
                })}
              

            </div>
    </div>
  )
}

export default ServiceDropdown