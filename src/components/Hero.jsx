import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import herobg from "../assets/herobg.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-auto sm:h-screen mx-auto pt-20 pb-20"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Text */}
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
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

      {/* Show 3D Model on Desktop */}
      <div className="hidden sm:block absolute top-0 right-0 w-full h-full pointer-events-none">
        <ComputersCanvas />
      </div>

      {/* Mobile PC Image — Below Text */}
      <div className="block sm:hidden mt-20 w-full flex justify-center items-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src="/desktop_pc/pc.png"
            alt="3D PC Model"
            className="w-80 h-auto drop-shadow-2xl"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />

          {/* Subtle Glow */}
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-16 flex justify-center items-center">
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
