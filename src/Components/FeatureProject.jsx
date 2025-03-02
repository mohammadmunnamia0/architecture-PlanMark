import image1 from "../assets/FeatureProject/1.png"
import image2 from "../assets/FeatureProject/Rectangle 248.png"
import image3 from "../assets/FeatureProject/Rectangle 249.png"
import image4 from "../assets/FeatureProject/Rectangle 188.png"
import image5 from "../assets/FeatureProject/4057650.png"

function FeatureProject() {
  return (
    <div>
      <div className=" h-full py-6 sm:py-8 lg:py-12 mt-18 lg:mt-0">
        <div className="mx-auto px-4 md:px-8">
          <div className="text-center">
            <p className="text-[44px] font-bold">Our Featured Project</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mt-8 lg:mx-[50px]">
            <a
              href="#"
              className="group relative flex h-full items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:col-span-2 lg:row-span-2 md:h-80"
            >
              <img
                src={image1}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            </a>
            <a
              href="#"
              className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src={image2}
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            </a>
            <a
              href="#"
              className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src={image3}
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            </a>
            <a
              href="#"
              className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src={image4}
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            </a>
            <a
              href="#"
              className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src={image5}
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 flex"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProject;
