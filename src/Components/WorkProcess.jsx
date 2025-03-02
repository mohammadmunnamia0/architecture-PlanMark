import { FaArrowRight } from "react-icons/fa";
import Card1Icon from "../assets/Workprogress/strategy.png"
import Card2Icon from "../assets/Workprogress/market reserch.png"
import Card3Icon from "../assets/Workprogress/perfect planning.png"

function WorkProcess() {
  // const workProcess =
  //   "w-[426px] h-[355.63px] rounded-md flex items-center justify-center p-6 shadow-xl bg-white";

  return (
    <div className="mt-16 container mx-auto">
      <section className=" lg:p-14 space-y-8 ">
        <div>
          <h1 className="text-[40px] font-bold ml-5 lg:ml-0">Our Work Process</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 p-8 lg:p-0 lg:px-6">
          {/* Card 1 */}
          <div className=" mt-20 p-4 shadow-xl rounded-xl" >
            <div className="text-center">
              <div className="flex justify-center">
                <img
                  className="mx-auto w-18 h-18"
                  src={Card1Icon}
                  alt="Strategy Icon"
                />
              </div>
              <h2 className="text-xl font-semibold mt-4">
                Strategy and Planning
              </h2>
              <p className="text-gray-600 mt-4">
                The lower-numbered purposes are better understood and practiced.
              </p>
              <a
                className="flex items-center justify-center gap-2 mt-3  text-[#ECA76E]"
                href="#"
              >
                Load more <FaArrowRight />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className=" mt-20 p-4 shadow-xl rounded-xl">
            <div className="text-center">
            <img
                  className="mx-auto w-18 h-18"
                  src={Card2Icon}
                  alt="Strategy Icon"
                />
              <h2 className="text-xl font-semibold mt-4">Market Research</h2>
              <p className="text-gray-600 mt-4">
                Creating user-friendly experiences with innovative designs.
              </p>
              <a
                className="flex items-center justify-center gap-2 mt-3  text-[#ECA76E]"
                href="#"
              >
                Load more <FaArrowRight />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className=" mt-20 p-4 shadow-xl rounded-xl">
            <div className="text-center">
            <img
                  className="mx-auto w-18 h-18"
                  src={Card3Icon}
                  alt="Strategy Icon"
                />
              <h2 className="text-xl font-semibold mt-4">Perfect Planning</h2>
              <p className="text-gray-600 mt-4">
                Ensuring quality and smooth launches for every project.
              </p>
              <a
                className="flex items-center justify-center gap-2 mt-3  text-[#ECA76E]"
                href="#"
              >
                Load more <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkProcess;
