import { motion } from "framer-motion";
import { styles } from "../styles";
import herobg from "../assets/herobg.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-auto sm:h-screen mx-auto"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ======= Desktop Layout ======= */}
      <div className="hidden sm:flex absolute inset-0 top-[140px] max-w-7xl mx-auto px-6 flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-[3px] h-6 bg-gradient-to-b from-[#915EFF] to-[#6C63FF] rounded-full" />
            <span className="text-[#aaa] text-sm font-medium tracking-wide">
              10× National Level Hackathon Winner
            </span>
          </motion.div>

          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-[#915EFF]">Website</span> & App Developer
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build modern websites, web applications, and Android apps
            <br className="sm:block hidden" />
            for businesses and startups.
          </p>

          <div className="mt-8 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-[#915EFF] to-[#6C63FF] text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-[#915EFF]/40 hover:shadow-[#915EFF]/60 transition"
            >
              Let's Talk
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-white/30 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition"
            >
              My Work
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#915EFF]/40 to-transparent" />
              <span className="text-[10px] text-gray-600 font-semibold uppercase tracking-[3px]">milestones</span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#915EFF]/40 to-transparent" />
            </div>
            <div className="flex gap-3">
              {[
                { value: "10×", label: "Hackathons Won" },
                { value: "10+", label: "Projects Delivered" },
                { value: "10+", label: "Happy Clients" },
                { value: "100%", label: "Dedication" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="flex-1 bg-white/[0.06] backdrop-blur-sm rounded-xl border border-white/10 p-5 text-center cursor-default group hover:border-[#915EFF]/30 hover:shadow-lg hover:shadow-[#915EFF]/10 transition-all duration-300"
                >
                  <div className="w-2.5 h-2.5 bg-gradient-to-br from-[#915EFF] to-[#6C63FF] rotate-45 mx-auto mb-3 group-hover:scale-125 transition-transform duration-200" />
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#6C63FF] text-2xl font-black leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-[11px] mt-1 font-medium uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-6 flex items-center gap-6 text-sm text-gray-400"
          >
            <a href='mailto:mahajanaaditya50@gmail.com' className='flex items-center gap-2 hover:text-white transition'>
              <div className='w-1.5 h-1.5 bg-gradient-to-br from-[#915EFF] to-[#6C63FF] rotate-45 flex-shrink-0' />
              mahajanaaditya50@gmail.com
            </a>
            <a href='tel:+919307227251' className='flex items-center gap-2 hover:text-white transition'>
              <div className='w-1.5 h-1.5 bg-gradient-to-br from-[#915EFF] to-[#6C63FF] rotate-45 flex-shrink-0' />
              +91 9307227251
            </a>
          </motion.div>
        </div>
      </div>

      {/* ======= Mobile Layout ======= */}
      <div className="sm:hidden flex flex-col items-center justify-center px-6 pt-24 pb-10 text-center space-y-6">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4 justify-center"
          >
            <div className="w-[3px] h-4 bg-gradient-to-b from-[#915EFF] to-[#6C63FF] rounded-full" />
            <span className="text-gray-400 text-[11px] font-medium tracking-wide">
              10× National Level Hackathon Winner
            </span>
          </motion.div>

          <h1 className="text-4xl font-bold text-white">
            <span className="text-[#915EFF]">Website</span> & App Developer
          </h1>
          <p className="mt-2 text-white-100 text-base leading-relaxed text-left text-justify">
            I'm a Full Stack & Android Developer specializing in creating responsive websites, custom web applications, and native Android apps. From idea to deployment, I build complete digital solutions with clean code, modern technologies, and a focus on user experience.
          </p>

          <div className="flex gap-4 justify-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-[#915EFF] to-[#6C63FF] text-white font-semibold py-3 px-6 rounded-lg shadow-lg shadow-[#915EFF]/40"
            >
              Let's Talk
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-white/30 text-white font-semibold py-3 px-6 rounded-lg"
            >
              My Work
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#915EFF]/30 to-transparent" />
              <span className="text-[9px] text-gray-600 font-semibold uppercase tracking-[2px]">milestones</span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#915EFF]/30 to-transparent" />
            </div>
            <div className="flex justify-center gap-2">
              {[
                { value: "10×", label: "Won" },
                { value: "10", label: "Projects" },
                { value: "10+", label: "Clients" },
                { value: "100%", label: "Dedication" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex-1 bg-white/[0.06] backdrop-blur-sm rounded-xl border border-white/10 p-3 text-center cursor-default group hover:border-[#915EFF]/30 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-br from-[#915EFF] to-[#6C63FF] rotate-45 mx-auto mb-2 group-hover:scale-125 transition-transform duration-200" />
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#6C63FF] text-lg font-black leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-[10px] mt-0.5 font-medium uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-5 flex flex-col items-center gap-2 text-sm text-gray-400"
          >
            <a href='mailto:mahajanaaditya50@gmail.com' className='flex items-center gap-2 hover:text-white transition'>
              <div className='w-1.5 h-1.5 bg-gradient-to-br from-[#915EFF] to-[#6C63FF] rotate-45 flex-shrink-0' />
              mahajanaaditya50@gmail.com
            </a>
            <a href='tel:+919307227251' className='flex items-center gap-2 hover:text-white transition'>
              <div className='w-1.5 h-1.5 bg-gradient-to-br from-[#915EFF] to-[#6C63FF] rotate-45 flex-shrink-0' />
              +91 9307227251
            </a>
          </motion.div>
        </div>

        {/* ======= Mobile PC Image (Enlarged) ======= */}
        <motion.div
          className="relative w-full flex justify-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src="/desktop_pc/pc.png"
            alt="3D PC Model"
            className="w-80 sm:w-96 h-auto drop-shadow-2xl"
            animate={{ y: [0, -8, 0] }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />

          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

     {/* ======= Scroll Indicator - Mobile View ======= */}
<div className="flex sm:hidden absolute bottom-6 w-full justify-center items-center">
  <a href="#about">
    <div className="w-[28px] h-[48px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop" }}
        className="w-2 h-2 rounded-full bg-secondary mb-1"
      />
    </div>
  </a>
</div>

{/* ======= Scroll Indicator - Desktop View ======= */}
<div className="hidden sm:flex absolute bottom-10 w-full justify-center items-center">
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
