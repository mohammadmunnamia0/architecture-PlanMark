import image1 from "../assets/FooterTop/Rectangle 460.png";
import image2 from "../assets/FooterTop/Rectangle 461.png";


const FooterTop = () => {
  return (
    <div>
      <div className="relative">
        {/* Image 1 */}
        <img src={image1} className="w-full absolute top-0 left-0" alt="Image 1" />
        
        {/* Text and Button on top of Image 1 */}
        <div className="absolute flex justify-between lg:pt-20 gap-16 left-2/3 transform -translate-x-1/2 text-center z-10">
          <span>
            <p className="text-white text-[8px] lg:text-2xl font-semibold hidden lg:block">
              Looking For The Best
              Architecture Services
            </p>
          </span>
          <button
            type="submit"
            className="bg-amber-500 border-amber-500 hover:bg-amber-600 text-white lg:font-medium lg:py-2 lg:px-6 rounded-md transition duration-300 
            mt-2 lg:mt-4 btn"
          >
            Send Message
          </button>
        </div>
      </div>
      
      {/* Image 2 */}
      <img src={image2} className="relative h-[50px] lg:h-[192px]" alt="Image 2" />
    </div>
  );
};

export default FooterTop;
