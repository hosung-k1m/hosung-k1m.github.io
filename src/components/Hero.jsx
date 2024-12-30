import { SpacemanCanvas } from ".";
import Position from "./Position";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="relative">
      <div className='absolute top-[24%] sm:top-[29%] lg:top-[34%] left-[5%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start z-10'>
        <div className="flex-1 lg:mb-0">
          <h1 className='font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[180px] leading-[110px] 2xl:leading-[160px]'>
             Hosung Kim
          </h1>
          <Position />
        </div>
        {/* <div className="flex-1 flex justify-start lg:justify-end mt-4 sm:mt-14 ml-8 xs:ml-[-4vh] sm:ml-[-17vh] md:ml-[-26vh] lg:mt-10 2xl:mt-0">
          <div className='font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left'>
          something here
          </div>
        </div> */}
      </div>

      <img className="h-auto w-auto" src="./parallax/room.jpeg" alt="" />

      <div className="absolute top-64 left-60 w-full h-full z-20 mt-10">
        <SpacemanCanvas scrollContainer={scrollContainer} />
      </div>
    </section>
  );
};

export default Hero;
