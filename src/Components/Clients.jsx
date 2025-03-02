import { CgPrinter } from "react-icons/cg";
import { TiHomeOutline } from "react-icons/ti";

function Clients() {
  return (
    <div className="mt-[129px] px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">
          We Work With Top <span className="text-[#ECA76E]">Clients</span>
        </h1>
        <h3 className="text-lg sm:text-xl">Partners</h3>
      </div>
      <div className="mt-10">
        <section>
          <div>
            <div>
              <div className="px-4 sm:px-10">
                <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
                  <div className="flex items-center gap-4">
                    <CgPrinter className="text-4xl sm:text-5xl" /> 
                    <p className="text-2xl sm:text-4xl font-bold">EBOX</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <TiHomeOutline className="text-4xl sm:text-5xl" /> 
                    <p className="text-2xl sm:text-4xl font-bold">House Green</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img 
                      src="https://s3-alpha-sig.figma.com/img/176e/27b2/9908e59ae00d4b36deb8410a94b24d56?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TciuuDL6e83um2eBqsg1Hs7zaegYfhS9N41ibDYILSCXFn8IuKnmsTW8Y951DGH8PPRa23zhzn~JZQ5axPcUlmg3gU8k0Nn~Wge42sppOF0G5lfPOrySq1LPvnfC7usqdbAazHUbBB6B6YKGSpOrZTUeiK7-SktMgKIZTjFkeA0zeuyxLY3q6HktyzIznDb5oe4KTOrHqD6zHwhQUw-8q6J347B6t8b9dXOEdYTUYNh56zF2Bf-uHMbLjFReQpVtG6d1i~XJXH2S4eoSydsTVkvaWeznKscfLPy~Zv2846YodSDGmP9nKedCwtiblIEfVUH4hQ2TfikakTWbgf-6xQ__"
                      alt="Partner Logo" 
                      className="w-[120px] sm:w-[150px] 2xl:w-[180px] py-2"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <TiHomeOutline className="text-4xl sm:text-5xl" /> 
                    <p className="text-2xl sm:text-4xl font-bold">House Logo</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <TiHomeOutline className="text-4xl sm:text-5xl" /> 
                    <p className="text-2xl sm:text-4xl font-bold">Room Decor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Clients;