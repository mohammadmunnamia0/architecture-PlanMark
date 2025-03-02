import image1 from "../assets/experi/Rectangle 450.png"
import image2 from "../assets/experi/Rectangle 453.png"
import image3 from "../assets/experi/Rectangle 452.png"
function Experience() {
  return (
    <div className="mt-12">
      <section className=" lg:grid  justify-center">
        <div className="container  lg:flex sm:py-12 lg:py-24 lg:flex-row lg:justify-between px-6 lg:px-0 lg:gap-x-18 ">


          <div className="flex lg:flex-nowrap">
            {/* Left Side Images */}
            <div className="flex flex-col lg:gap-8">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-[#ECA76E] -z-10"></div>
                <img
                  src={image1}
                  className="w-[300px] h-[200px] object-cover shadow-lg"
                />
              </div>

              <div className="relative mt-4 lg:mt-0">
                <div className="absolute -bottom-4 left-4 w-full h-full bg-[#ECA76E] -z-10"></div>
                <img
                  src={image2}
                  className="w-[300px] h-[200px] object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Right Side Image */}
            <div className="relative ml-6">
              <div className="absolute -top-4 -right-4 w-full h-full bg-[#ECA76E] -z-10"></div>
              <img
                src={image3}
                className="w-[350px] h-[450px] object-cover"
              />
            </div>
          </div>


          <div className="flex flex-col justify-start rounded-sm lg:max-w-md xl:max-w-lg lg:text-left mt-10 lg:mt-0">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              We’re Experienced in This Field
            </h1>
            <p className="mt-6 mb-8 text-lg justify- sm:mb-12">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomi
            </p>
            <div className="flex flex-col-3 gap-8 ">
              <div>
               <span className="text-3xl font-bold text-[#ECA76E]">13+</span>  <br /> <span className="font-bold">  Year of Experience</span>
              </div>
              <div>
                <span className="text-3xl font-bold  text-[#ECA76E]">267+</span>  <br /> 
                <span className="font-bold">  Projected Completed</span>
              </div>
              <div>
              <span className="text-3xl font-bold  text-[#ECA76E]"> 40+</span>  <br />
              <span className=" font-bold">Best partners</span>
                
              </div>
            </div>
            <div className="flex space-y-4 sm:items-center  sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start ml-0 py-10">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded bg-[#ECA76E] dark:text-gray-50"
            >
              Read More
            </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
