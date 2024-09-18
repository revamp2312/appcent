import { CiSettings } from "react-icons/ci";
import { MdOutlineCloudDone } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { BsBarChart } from "react-icons/bs";
import { PiBuildingThin } from "react-icons/pi";
import { IoIosRefresh } from "react-icons/io";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";

export const HeroData = {
  title: " Accelerate Your Midmarket Success",
  spanPart: "Grow with SAP:",
  description:
    "Elevate your midmarket business with Grow with SAP. Experience rapid digital transformation, streamlined operations, and enhanced competitiveness through our tailored cloud ERP solution.",
};


export const IntroData={
    title:"What is Grow with SAP?",
    description:"Grow with SAP is a comprehensive solution package designed specifically for midmarket companies and subsidiaries of large enterprises. It offers a swift, cost-effective path to adopting cloud ERP, combining the power of SAP Grow Cloud with industry-specific best practices and AI-driven insights.",
    imgSrc:"/Services/grow-with-SAP/Intro.png"
}

export const CapabilityData={
    title:"Grow with SAP Capabilities",
    imgSrc:"/Services/grow-with-SAP/Capability.png",
    eachCapability:[
        {
            icon:<MdOutlineCloudDone size={24} />, 
            title:"Cloud-Native ERP",
            description:"Leverage SAP Grow Cloud, public edition, for a state-of-the-art, intelligent ERP system tailored to midmarket needs and scalable for future Growth."
        },
        {
            icon:<IoRocketOutline size={24}  />, 
            title:"Rapid Deployment Framework",
            description:"Implement quickly with preconfigured best practices and fixed-scope implementations, dramatically reducing time-to-value."
        },
        {
            icon:<BsBarChart size={24}  />, 
            title:"Embedded Intelligence",
            description:"Make data-driven decisions with AI and advanced analytics capabilities integrated throughout the solution, providing real-time insights and automation."
        },
        {
            icon:<PiBuildingThin size={24}  />, 
            title:"Industry-Specific Solutions",
            description:"Benefit from preconfigured, industry-specific best practices that address the unique challenges and opportunities in your sector."
        },
        {
            icon:<IoIosRefresh size={24}  />, 
            title:"Continuous Innovation",
            description:"Stay ahead with quarterly updates that bring the latest technologies and innovations directly to your business without disruptive upgrades."
        },
        {
            icon:<HiMiniWrenchScrewdriver size={24} />, 
            title:"Comprehensive Support",
            description:"Access end-to-end support, including implementation assistance, user enablement, and ongoing technical support to ensure your success."
        },

    ]
}



export const BenefitsData={
title:"Benefits of Grow with SAP",
imgSrc:"/Services/grow-with-SAP/Benefits.png",
eachBenefit:[
    {
        content:"Accelerate time-to-value with rapid Implementation"
    },
    {
        content:"Scale your business with confidence"
    },
    {
        content:"Enhance decision-making with real-time insights"
    },
    {
        content:"Streamline operations and increase efficiency"
    },
    {
        content:"Innovate continuously with regular updates "
    },
    {
        content:"Reduce IT complexity and total cost of ownership"
    },
]}



export const VideoSectionData={
    title:"What is GROW with SAP?",
    videoSrc:"https://www.youtube.com/embed/XAqp54zZ_Ro?si=ppJyCpbtyBoj6T_H"
}