'use client'
import { servicePreviewData } from "@/utils/servicePreviewData";
import Accordion from "../Accordion";
import { useState } from "react";

const ServicePreviewAccordionContainer = () => {
  const[openAccordion,setOpenAccordion]=useState(0)
  return (
    <div className="flex justify-center items-center m-auto w-full bg-[#FFF]">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center">
          {servicePreviewData.map((eachService,index)=>{
            return <Accordion  key={eachService.id} data={eachService} openAcc={()=>(setOpenAccordion(index))} closeAcc={()=>(setOpenAccordion(null))} open={openAccordion===index}  />
          })}
      </div>
    </div>
  );
};

export default ServicePreviewAccordionContainer;
