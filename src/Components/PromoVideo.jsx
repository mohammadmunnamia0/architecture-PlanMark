import { IoPlayOutline } from "react-icons/io5";
import bgImgae from "../assets/Promo/promo_bg.png"

function PromoVideo() {
  return (
    <>
      <section className="mt-10 relative w-full h-[688px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImgae})` }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative container h-full flex flex-col lg:mt-0 mt-20 lg:mx-auto sm:py-12 lg:flex-row lg:justify-evenly gap-[128px]">
          <div className="flex flex-col justify-center p-6 rounded-sm lg:max-w-md xl:max-w-lg lg:text-left text-white  bg-opacity-70 ">
            <p className="text-2xl font-bold text-[#B68053]">Promo Video</p>
            <h1 className="text-5xl font-bold leading-none sm:text-6xl ">
              Ensuring a safe experience <br /> from design to installation
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Nurani Interior possesses vast experience in the Interior Design
              industry having a large technical resource of Interior Designers,
              Architects, Electrical & Civil Engineers. We are also privileged
              to develop some significant interior projects since 2010.
            </p>
            <div className="flex flex-col w-[180px] sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-4 py-3 text-lg font-semibold text-black bg-amber-200 rounded-lg flex gap-4"
              >
                <div className="mt-1.5">
                  <IoPlayOutline />
                </div>
                <div> More videos</div>
              </a>
            </div>
          </div>

          {/* Banner with Dark Shadow */}
          <div className="h-[379px] w-[531.37px] sm:h-80 my-auto hidden lg:block">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dWu6Wht6DV4?si=ENKQjwH2B99l7Fh5&amp;controls=0" ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default PromoVideo;
