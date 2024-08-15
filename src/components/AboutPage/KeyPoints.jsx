import KeyPointCard, {
  KeyPointCard2,
  KeyPointCard3,
  KeyPointCard4,
  KeyPointCard5,
} from "./KeyPointCard";

const KeyPoints = () => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-[70px] py-12">
      <div className="max-w-[1440px] grid gap-3  grid-cols-3 grid-rows-[580px,171px,601px] w-full h-full">
        <div className="w-full h-full col-span-1 col-start-1 col-end-2">
          <KeyPointCard />
        </div>
        <div className="w-full h-full col-span-1 col-start-2 col-end-3 ">
          <KeyPointCard2 />
        </div>
        <div className="w-full h-full col-span-1  col-start-3 col-end-4 row-start-1 row-end-3 ">
          <KeyPointCard3 />
        </div>
        <div className="w-full h-full col-span-2 row-start-2 row-end-4 col-start-1 col-end-3">
          <KeyPointCard5 />
        </div>
        <div className="w-full h-full col-span-1 row-start-3 row-end-4 col-start-3 col-end-4">
          <KeyPointCard4 />
        </div>
      </div>
    </div>
  );
};

export default KeyPoints;
