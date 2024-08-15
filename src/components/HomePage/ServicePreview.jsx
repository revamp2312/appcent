import Image from "next/image";
import React from "react";
import ServicePreviewAccordionContainer from "./ServicePreviewAccordionContainer";
import SmallCta from "./SmallCta";

const ServicePreview = () => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center m-auto w-full px-[70px] py-12">
      <div className="w-full max-w-[1440px] flex justify-center items-center gap-12">
        <div className="flex flex-col gap-14 justify-center items-start max-w-[612px] w-full">
            <div className="flex flex-col gap-2 justify-center items-start">
                <h2>Joining Hands with Appcentric</h2>
                <p>At Appcentric Solutions Inc., we offer a comprehensive suite of services designed to empower your business at every stage of its SAP journey. From initial strategy to ongoing support, our services are categorized to ensure a clear pathway to digital transformation and operational excellence.</p>
            </div>
            <div>
                <Image src="/homepage/servicePreview.png" alt="ServicePreview" width={611} height={482} />
            </div>
        </div>
        <div>
          <ServicePreviewAccordionContainer />
        </div>
      </div>
      <div className="w-full">
        <SmallCta />
      </div>
    </div>
  );
};

export default ServicePreview;
