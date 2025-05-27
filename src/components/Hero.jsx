import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import herobg from "../assets/herobg.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[100vh] sm:h-screen mx-auto"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Text - Adjusted positioning */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="max-w-lg sm:max-w-2xl">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Aaditya Mahajan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A passionate and adaptive tech enthusiast turning
            <br className="sm:block hidden" />
            bold visions into reality.
          </p>
        </div>
      </div>

      {/* Show 3D Model on Desktop - Adjusted positioning */}
      <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full">
        <ComputersCanvas />
      </div>

      {/* Professional PC Image Animation for Mobile */}
      <div className="block sm:hidden absolute bottom-16 w-full flex justify-center items-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src="/desktop_pc/pc.png"
            alt="3D PC Model"
            className="w-72 h-auto xs:w-80 drop-shadow-2xl"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
                  
          {/* Subtle Glow Effect */}
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"
            animate={{
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-2 bottom-4 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
