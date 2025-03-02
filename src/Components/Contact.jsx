import { FaEnvelope, FaFax, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-white rounded-lg py-6">
        <div className="grid lg:grid-cols-2 justify-between">
          <div className="mr-6">
            <div className="col-span-2 text-center lg:text-left">
              <h2 className="text-5xl font-semibold">
                Get in <span className="text-#ECA76E">Touch</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 ml-6 lg:ml-0 gap-4 py-20 ">
              <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <FaMapMarkerAlt className="w-8 h-8 text-blue-600" />
                <h4 className="text-gray-800 text-sm font-bold mt-4">
                  Visit office
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  {" "}
                  123 Main Street, City, Country
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <FaPhoneAlt className="w-8 h-8 text-blue-600" />
                <h4 className="text-gray-800 text-sm font-bold mt-4">
                  Call us
                </h4>
                <p className="text-xs text-gray-600 mt-1">+158 996 888</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <FaEnvelope className="w-8 h-8 text-blue-600" />
                <h4 className="text-gray-800 text-sm font-bold mt-4">
                  Chat to us
                </h4>
                <p className="text-xs text-gray-600 mt-1">info@example.com</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <FaFax className="w-8 h-8 text-blue-600" />
                <h4 className="text-gray-800 text-sm font-bold mt-4">Fax</h4>
                <p className="text-xs text-gray-600 mt-1">+1-548-2588</p>
              </div>
            </div>
          </div>
          <div className=" bg-black rounded-xl p-6 lg:p-4 mx-4 lg:mx-0  max-lg:-order-1 max-lg:mb-8 grid items-center justify-center">
            <h2 className="text-2xl sm:text-3xl text-white font-bold">
              Got Ideas/We’ve got The Skills Let’s Work Together.
            </h2>
            <p className="text-white mt-4 lg:mt-0">
              Tell Us More About Yourself
            </p>
            <form className="mt-2 lg:mt-0">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full rounded-md py-3 px-4 text-sm outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email Id"
                  className="w-full  rounded-md py-3 px-4 text-sm outline-none"
                />
                <input
                  type="text"
                  placeholder="Tell Us About You"
                  className="w-full rounded-md py-3 px-4 text-sm outline-none"
                />

                <button
                  type="button"
                  className="text-white w-full relative 
                  bg-[#ECA76E] hover:bg-[#111] rounded-md text-sm px-6 py-3 !mt-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="currentColor"
                    className="mr-2 inline"
                    viewBox="0 0 548.244 548.244"
                  >
                    <path
                      d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                      data-original="#000000"
                    />
                  </svg>
                  Lets Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
