import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";

const Benefits = ({ data }) => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-6 tablet:px-14 laptop:px-[70px] py-12">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center  gap-6 tablet:gap-12">
        <div className="flex justify-start items-center w-full">
          <h2>Benefits of Rise with SAP</h2>
        </div>
        <div className="flex flex-col gap-12 justify-center items-start w-full laptop:flex-row">
          <div className="flex flex-1 flex-col gap-8 justify-center items-start">
            {data.eachBenefit.map((each, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-3 items-center justify-start">
                  <CiCircleCheck size={24} color="#EC622B" />
                  <p>{each.content}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-1 justify-center items-center w-full">
            <Image
            className="w-full"
              src={data.imgSrc}
              alt="benefits-image"
              width={612}
              height={378}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
