import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] mt-[10vw] xl:mt-0">
      <div className="text border-t-2 border-b-2 border-zinc-500 flex whitespace-nowrap overflow-hidden pr-20">
        <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration:5}} className='text-[22vw] leading-none font-["Test_Founders_Grotesk_X"] uppercase font-semibold text-white'>
          healthmate
        </motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration:5}} className='text-[22vw] leading-none font-["Test_Founders_Grotesk_X"] uppercase font-semibold text-white'>
          healthmate
        </motion.h1>
      </div>


      
    </div>
  );
}

export default Marquee;

