import { FaLocationArrow } from "react-icons/fa";
import { TfiHandPointDown } from "react-icons/tfi";
import { RiMentalHealthFill } from "react-icons/ri";
import Shuffle from "./Shuffle";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full xl:h-screen bg-white "
    >
      <section className=" grid grid-cols-1 lg:grid-cols-2 items-center  xl:gap-20 xxl:gap-6 md:max-w-screen-xl lg:max-w-screen-xxl xxl:max-w-screen-2xl mx-auto max-[640px]:-mt-6 ">
        <div className="textstructure mt-[25vw] sm:mt-[18vw] md:mt-[12vw] lg:mt-[12vw] xl:mt-[4vw] xxl:mt-[5vw] ml-[5vw]  md:px-1 xl:ml-[6vw] xxl:ml-0">
          {["Laugh More", "Stress Less ", "Welcome Aboard!"].map(
            (item, index) => {
              return (
                <div key={index} className="masker">
                  <div className="w-fit flex items-center justify-center">
                    {index === 1 && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "7vw" }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.1 }}
                        className="w-[70px] md:w-[6.5vw] lg:w-[10vw]  h-[8vw] sm:h-[7.5vw] lg:h-[6vw]  xl:h-[4.6vw] mr-[1vw] rounded-md relative top-[.5vw] bg-green-500  "
                      >
                        <RiMentalHealthFill
                          size={48}
                          color="#00246B"
                          className="hidden xl:block"
                        />
                      </motion.div>
                    )}
                    <div className="w-full">
                      <h1 className="uppercase text-black text-[60px] sm:text-[11vw]  lg:text-[100px]  2xl:text-[120px]   leading-none  sm:leading-[80px] md:leading-[80px] lg:leading-[80px] xl:leading-[100px] 2xl:leading-[100px] font-['Test_Founders_Grotesk_X'] font-semibold ">
                        {item}
                      </h1>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <div className="hidden xl:block mt-[5vw] sm:mt-[10vw] lg:mt-[14vw] xl:mt-[8vw]  max-w-lg mx-[8vw] sm:mx-[13vw] lg:mx-10 md:my-10 lg:mr-16 ">
          <Shuffle />
        </div>
      </section>

      <div className="landing_subcontent ">
        <div className="flex-row lg:flex  border-t-[1px] mt-[35vw] sm:mt-[16vw] lg:mt-[10vw] xl:mt-0  xxl:mt-[5vw] border-zinc-800  justify-between items-center py-5 px-[5vw] xl:px-[6.5vw] capitalize">
          <p className="font-medium tracking-tight leading-none text-md ">
            Your Mental Health Companion
          </p>
          <p className="flex font-medium tracking-tight leading-none capitalize text-md mt-[6vw] md:mt-[5vw] lg:mt-0 ">
            Community | Chatbot | Mood Insights
          </p>
          <div className="flex items-center gap-5 mt-[6vw] md:mt-[5vw]  lg:mt-0  ">
            <div className="font-medium px-5 py-2 border-[1px] rounded-full border-zinc-800 uppercase text-lg cursor-pointer">
              Explore Now
            </div>
            <div className="flex items-center justify-center w-10 h-10 border-[1px] border-zinc-800  rounded-full scale-150 cursor-pointer">
              <FaLocationArrow />
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center  animate-pulse font-normal  md:mt-[5vw] lg:mt-[8vw] xl:mt-[5vw]">
          Scroll Down{" "}
          <span className="animate-bounce justify-center ml-[.2vw] mt-[.4vw] sm:mt-[1.3vw] lg:mt-[.9vw] xl:mt-[.6vw]">
            <TfiHandPointDown />
          </span>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
