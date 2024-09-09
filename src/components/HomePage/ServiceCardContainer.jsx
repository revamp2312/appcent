import Image from "next/image";
import React from "react";
import ServicePreviewCard from "./ServicePreviewCard";


const serviceRoutes=[
    {
        title:"Rise with SAP: Elevate Your Business to New Heights",
        route:"/service/rise-with-SAP"
    },
    {
        title:"Grow with SAP: Accelerate Your Midmarket Sucess",
        route:"/service/grow-with-SAP"
    },
    {
        title:"SAP Business Technology Platform: Innovate Without Limits",
        route:"/service/buisness-technology-platform"
    },
]

const ServiceCardContainer = () => {
  return (
    <div className="flex justify-center items-center m-auto w-full  py-12">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-16">
            <div><h2>Service</h2></div>
            <div className="flex justify-center items-center flex-wrap  gap-6">
                {serviceRoutes.map((eachCard,index)=>{
                    return <ServicePreviewCard key={index} data={eachCard} />
                })}
            </div>
      </div>
    </div>
  );
};

export default ServiceCardContainer;
