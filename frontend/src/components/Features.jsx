import emotion from "../assets/emotion.jpeg";
import community from "../assets/community.jpg";
import dashboard from "../assets/dashboard.jpg";
import chatbot from "../assets/chatbot.jpg";
import { motion, useAnimation } from "framer-motion";

function Features() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".11"
      className="w-full  "
      id="features"
    >
      <div className="w-full px-10 sm:px-20 border-b-[1px] border-zinc-500 pb-16 sm:pb-10 md:pb-16 ">
        <h1 className="text-[50px] sm:text-[70px] font-['Neue_Montreal'] tracking-tight">
          Features:
        </h1>
      </div>
      <div className="sm:px-20 max-[640px]:p-6">
        <div className="cards w-full flex-col sm:flex lg:flex-row sm:gap-10 mt-[5vw]">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card-container relative lg:w-1/2 lg:h-[50vh] xl:h-[75vh] "
          >
            <h1 className="absolute overflow-hidden hidden xl:flex uppercase z-[9] left-full leading-none -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl font-['Test_Founders_Grotesk_X'] text-[#CDEA68]">
              {"community".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block "
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" flex items-center mb-6">
              <div className="w-3 h-3 bg-black rounded-full mr-2"></div>
              <h2 className="uppercase text-lg">Community</h2>
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden bg-[#896790]">
              <div className="card bg-cover w-full h-full  rounded-xl overflow-hidden">
                <img src={community} alt="" className="p-12 my-14" />
              </div>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="card-container relative lg:w-1/2 lg:h-[50vh] xl:h-[75vh]"
          >
            <h1 className="absolute overflow-hidden hidden xl:flex z-[9] uppercase right-full leading-none translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl font-['Test_Founders_Grotesk_X'] text-[#CDEA68]">
              {"emotion detection".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block "
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" flex items-center max-[640px]:my-6 mb-6">
              <div className="w-3 h-3 bg-black rounded-full mr-2"></div>
              <h2 className="uppercase text-lg">Emotion Detection</h2>
            </div>
            <div className="card w-full h-full  rounded-xl overflow-hidden bg-[#19181E]">
              <img src={emotion} alt="" className="p-12 my-14" />
            </div>
          </motion.div>
        </div>

        <div className="cards w-full flex-col lg:flex-row sm:flex gap-10 mt-[5vw]">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card-container relative lg:w-1/2 lg:h-[50vh] xl:h-[75vh]"
          >
            <h1 className="absolute overflow-hidden hidden xl:flex uppercase z-[9] left-full leading-none -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl font-['Test_Founders_Grotesk_X'] text-[#CDEA68]">
              {"dashboard".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block "
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" flex items-center mt-10 mb-6">
              <div className="w-3 h-3 bg-black rounded-full mr-2"></div>
              <h2 className="uppercase text-lg">Dashboard</h2>
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden bg-[#19181E]">
              <div className="card bg-cover w-full h-full  rounded-xl overflow-hidden">
                <img src={dashboard} alt="" className="p-12 my-14" />
              </div>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="card-container relative lg:w-1/2 lg:h-[50vh] xl:h-[75vh] sm:mb-10"
          >
            <h1 className="absolute overflow-hidden hidden xl:flex z-[9] uppercase right-full leading-none translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl font-['Test_Founders_Grotesk_X'] text-[#CDEA68]">
              {"chatbot".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block "
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" flex items-center mt-10 mb-6">
              <div className="w-3 h-3 bg-black rounded-full mr-2"></div>
              <h2 className="uppercase text-lg">Chatbot</h2>
            </div>
            <div className="card w-full h-full  rounded-xl overflow-hidden bg-[#CFCFD0]">
              <img src={chatbot} alt="" className="p-[8vw] -my-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Features;
