
const HeroSection = ({data}) => {
  return (
    <div className="flex justify-center items-center m-auto w-full bg-cover bg-center bg-[url('/Services/ServicesHeroMobileBg.png')] tablet:bg-[url('/Services/ServiceHeroBg.png')] px-6 tablet:px-14 laptop:px-[70px] py-20 bg-[var(--primary-color)]">
      <div className="w-full max-w-[800px] flex flex-col justify-center items-center gap-2 ">
        <div>
          <h1 className="text-center">
            <span className="text-[var(--accent-color)] ">
             {data.spanPart}
            </span>
            {data.title}
          </h1>
        </div>
        <p className="text-center">{data.description}</p>
      </div>
    </div>
  );
};

export default HeroSection;
