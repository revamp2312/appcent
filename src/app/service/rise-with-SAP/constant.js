import { CiSettings } from "react-icons/ci";
import { PiBrainDuotone } from "react-icons/pi";
import { LuBarChart4 } from "react-icons/lu";
import { MdOutlineCloudDone } from "react-icons/md";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { PiLeafLight } from "react-icons/pi";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

export const HeroData = {
  title: "Elevate Your Business to New Heights",
  spanPart: "Rise with SAP:",
  description:
    "Take your business to the cloud and beyond with Rise with SAP. Transform your operations, accelerate innovation, and stay ahead in the digital economy.",
};


export const IntroData={
    title:"What is Rise with SAP?",
    description:"Rise with SAP is a comprehensive business transformation offering that combines SAP Rise Cloud, business process intelligence, and SAP Business Technology Platform into a single package, providing everything you need to transform your business in the cloud.",
    imgSrc:"/Services/rise-with-SAP/Intro.png"
}

export const CapabilityData={
    title:"Rise with SAP Capabilities",
    imgSrc:"/Services/rise-with-SAP/Capability.png",
    eachCapability:[
        {
            icon:<PiBrainDuotone size={24} />, 
            title:"Intelligent ERP",
            description:"Leverage SAP Rise Cloud for a next-generation ERP system that provides real-time insights and intelligent automation across your entire business."
        },
        {
            icon:<LuBarChart4 size={24}  />, 
            title:"Business Process Intelligence",
            description:"Analyze, improve, and transform your business processes with AI-powered tools that identify inefficiencies and suggest optimizations."
        },
        {
            icon:<MdOutlineCloudDone size={24}  />, 
            title:"Cloud Infrastracture",
            description:"Choose from a range of leading hyperscalers to host your SAP solutions, ensuring flexibility, scalability, and performance."
        },
        {
            icon:<LiaNetworkWiredSolid size={24}  />, 
            title:"SAP Business Network",
            description:"Connect with customers, suppliers, and partners through the world's largest business network, facilitating seamless collaboration and transactions."
        },
        {
            icon:<PiLeafLight size={24}  />, 
            title:"Sustainability Management",
            description:"Embed sustainability into your core business processes, measure your environmental impact, and drive towards your sustainability goals."
        },
        {
            icon:<HiOutlineWrenchScrewdriver size={24} />, 
            title:"Technical Managed Services",
            description:"Benefit from end-to-end support, including cloud operations, infrastructure, and application management, allowing you to focus on innovation rather than maintenance."
        },

    ]
}



export const BenefitsData={
    title:"Benefits of Rise with SAP",
    imgSrc:"/Services/rise-with-SAP/Benefits.png",
    eachBenefit:[
    {
        content:"Accelerate digital transformation"
    },
    {
        content:"Reduce total of cost of ownership"
    },
    {
        content:"Enhance business agility and flexibility"
    },
    {
        content:"Improve decision-making with real-time insights"
    },
    {
        content:"Streamline operations and increase efficiency"
    },
    {
        content:"Future-proof your business with continuous updates and innovations"
    },
]}



export const VideoSectionData={
    title:"What is RISE with SAP S/4HANA Cloud?",
    videoSrc:"https://www.youtube.com/embed/jVfkdwN5SDk?si=p94zkeXJ6dYWo7cR"
}