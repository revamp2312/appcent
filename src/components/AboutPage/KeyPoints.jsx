import KeyPointCard, {
  KeyPointCard2,
  KeyPointCard3,
  KeyPointCard4,
  KeyPointCard5,
} from "./KeyPointCard";

const KeyPoints = () => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-6 tablet:px-14 laptop:px-[70px] py-12 laptop:py-20">
      <div className="max-w-[1440px] grid gap-6 grid-cols-1  laptop:grid-cols-3 laptop:grid-rows-[590px,171px,601px] w-full h-full">
        <div className="w-full h-full laptop:col-span-1 laptop:col-start-1 laptop:col-end-2">
          <KeyPointCard />
        </div>
        <div className="w-full h-full laptop:col-span-1 laptop:col-start-2 laptop:col-end-3 ">
          <KeyPointCard2 />
        </div>
        <div className="w-full h-full laptop:col-span-1  laptop:col-start-3 laptop:col-end-4 laptop:row-start-1 laptop:row-end-3 ">
          <KeyPointCard3 />
        </div>
        <div className="w-full h-full laptop:col-span-2 laptop:row-start-2 laptop:row-end-4 laptop:col-start-1 laptop:col-end-3">
          <KeyPointCard5 />
        </div>
        <div className="w-full h-full laptop:col-span-1 laptop:row-start-3 laptop:row-end-4 laptop:col-start-3 laptop:col-end-4">
          <KeyPointCard4 />
        </div>
      </div>
    </div>
  );
};

export default KeyPoints;
