import { CiSettings } from "react-icons/ci";


const CapabilityCard = ({cardData}) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-start">
        <div className="text-[var(--accent-color)]">{cardData.icon}</div>
        <div className="flex flex-col gap-2 justify-center items-start">
            <p className="font-semibold text-lg">{cardData.title}</p>
            <p className="text-base">{cardData.description}</p>
        </div>
    </div>
  )
}

export default CapabilityCard