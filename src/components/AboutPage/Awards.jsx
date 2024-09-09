import { awards } from "@/utils/awards"
import Image from "next/image"

const Awards = () => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-6 tablet:px-14 laptop:px-[70px] py-12 ">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-16">
            <div className="flex flex-col gap-2 justify-center items-center max-w-[612px] w-full">
                <div><h2>Recognized Excellence</h2></div>
                <div><p className="text-center">Appcentric&apos;s commitment to innovation has been acknowledged through various prestigious awards.</p></div>
            </div>
            <div className="flex flex-wrap gap-y-6 justify-center items-center">
                   {awards.map((eachAward)=>{
                    return(<div key={eachAward.id} className="flex justify-center items-center  p-6 w-[294px] h-[200px]">
                        <Image className="font-semibold text-center" src={eachAward.imgSrc} alt="awards" width={294} height={236}></Image>
                    </div>)
                   }) }
            </div>
        </div>
        </div>
  )
}

export default Awards