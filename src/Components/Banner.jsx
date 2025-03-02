import { IoPlayOutline } from "react-icons/io5";
import image2 from "../assets/Rectangle 367.png"

function Banner() {
  return (
    <section
      className="relative w-full h-[688px] bg-[url('https://images.adsttc.com/media/images/61e8/13e7/c4b6/b501/6400/a8c6/large_jpg/bloco-arquitetos-06.jpg?1642599414')] bg-cover bg-center"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative container h-full flex flex-col justify-center p-6  lg:mt-0  lg:mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly gap-[128px]">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:mt-0 lg:max-w-md xl:max-w-lg lg:text-left text-white  bg-opacity-70 ">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl ">
            Architecture Design <br /> Dream Buildings
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded bg-[#ECA76E] dark:text-gray-50"
            >
              Explore Now
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold dark:border-gray-800 flex gap-4"
            >
              <div className="mt-1.5">
                <IoPlayOutline />
              </div>
              <div> Watch Video</div>
            </a>
          </div>
        </div>

        {/* Banner Image with Dark Shadow */}
        <div className="relative h-[379px] w-[531.37px] sm:h-80 hidden lg:block">
          <img
            src={image2}
            alt=""
            className="absolute object-contain h-[379px] w-[531px] sm:h-80 mt-[140px] shadow-lg"
          />
          <div className="h-[461px] w-[263px] bg-[#ECA76E] ml-[284px] mt-[75px]"></div>
        </div>
        
     
      </div>

      {/* Banner Carousel (Buttons Stay on Top)
      <div className=" flex items-center justify-center gap-4 pt-12">
        <button className="px-6 py-3 bg-gray-800 text-white rounded-md">Left</button>
        <button className="px-6 py-3 bg-gray-800 text-white rounded-md">Right</button>
      </div> */}
    </section>
  );
}

export default Banner;
