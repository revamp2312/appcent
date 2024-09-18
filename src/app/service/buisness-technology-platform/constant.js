import { CiSettings } from "react-icons/ci";
import { MdOutlineCloudDownload } from "react-icons/md";
import { BsPuzzle } from "react-icons/bs";
import { TbDatabaseCog } from "react-icons/tb";
import { BsBarChartLine } from "react-icons/bs";
import { TfiSettings } from "react-icons/tfi";
import { MdOutlineStackedLineChart } from "react-icons/md";

export const HeroData = {
  title: " Innovate Without Limits",
  spanPart: "SAP Business Technology Platform:",
  description:
    "Unlock the full potential of your business with SAP Business Technology Platform. Build, Integrate, and extend applications with ease, leveraging cutting-edge technologies to drive innovation and growth.",
};


export const IntroData={
    title:"What is SAP Business Technology Platform?",
    description:"SAP Business Technology Platform (BTP) is a comprehensive, cloud-based platform that provides a foundation for developing, integrating, and extending SAP and non-SAP applications. It offers a suite of integrated solutions that enable businesses to harness the power of data, AI, and advanced analytics to drive digital transformation.",
    imgSrc:"/Services/buisness-technology-platform/Intro.png"
}

export const CapabilityData={
    title:"SAP Business Technology Platform Capabilities",
    imgSrc:"/Services/buisness-technology-platform/Capability.png",
    eachCapability:[
        {
            icon:<MdOutlineCloudDownload size={24} />, 
            title:"Application Development",
            description:"Create custom cloud applications quickly using low-code/no-code tools and professional development environments, supporting various programming languages and frameworks."
        },
        {
            icon:<BsPuzzle size={24}  />, 
            title:"Integration",
            description:"Connect and harmonize processes and data across your entire IT landscape, bridging cloud and on-premise systems seamlessly."
        },
        {
            icon:<TbDatabaseCog size={24}  />, 
            title:"Data Management",
            description:"Manage, analyze, and derive insights from your data with powerful tools for data warehousing, data lakes, and master data management."
        },
        {
            icon:<BsBarChartLine size={24}  />, 
            title:"Analytics",
            description:"Generate actionable insights with embedded analytics, augmented by AI and machine learning capabilities, to support data-driven decision-making."
        },
        {
            icon:<TfiSettings size={24}  />, 
            title:"Artificial Intelligence",
            description:"Implement intelligent technologies like machine learning, chatbots, and robotic process automation to enhance efficiency and drive innovation."
        },
        {
            icon:<MdOutlineStackedLineChart size={24} />, 
            title:"Extended Planning and Analysis",
            description:"Unify financial and operational planning processes across your organization, enabling more accurate forecasting and agile decision-making."
        },

    ]
}



export const BenefitsData={
    title:"Benefits of SAP BTP",
    imgSrc:"/Services/buisness-technology-platform/Benefits.png",
    eachBenefit:[
    {
        content:"Accelerate innovation with rapid application development"
    },
    {
        content:"Enhance business agility through seamless integration"
    },
    {
        content:"Unlock the value of your data with advanced analytics"
    },
    {
        content:"Reduce IT complexity with a unified technology platform "
    },
    {
        content:"Future-proof your business with continuous platform updates"
    },
    {
        content:"Scale effortlessly with cloud-native architecture"
    },
]}



export const VideoSectionData={
    title:"What is SAP Business Technology Platform?",
    videoSrc:"https://www.youtube.com/embed/XF4pjFQDmD0?si=EuJ-_ODCKtZ-4nKM"
}