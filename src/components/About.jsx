import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, items }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full h-full'
  >
    <div className='bg-tertiary rounded-2xl px-5 py-5 h-full border border-[#0f3460]/20 flex flex-col'>
      {/* Header */}
      <div className='flex items-center gap-3 mb-4'>
        <div className='w-10 h-10 rounded-lg bg-[#915EFF]/15 flex items-center justify-center flex-shrink-0'>
          <img src={icon} alt={title} className='w-5 h-5 object-contain' />
        </div>
        <h3 className='text-white text-[15px] font-semibold leading-tight'>{title}</h3>
      </div>

      {/* Items */}
      <div className='flex flex-col gap-1.5 flex-1'>
        {items.map((item, i) => (
          <div key={i} className='flex items-center gap-2 text-gray-400 text-[13px]'>
            <span className='w-1 h-1 rounded-full bg-[#915EFF] flex-shrink-0' />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const About = () => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <>
      <motion.div variants={textVariant()} className='-mt-20 sm:mt-0'>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Who I Am.</h2>
      </motion.div>

      <div className='mt-12 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16'>
        {/* Profile Photo */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className='flex-shrink-0'
        >
          <div className='relative w-52 h-52 sm:w-60 sm:h-60'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-br from-[#915EFF] to-[#0f3460] p-[3px]'>
              <div className='w-full h-full rounded-full bg-tertiary overflow-hidden flex items-center justify-center'>
                {imgError ? (
                  <div className='text-[#915EFF] text-6xl font-bold bg-[#1a1a2e] w-full h-full flex items-center justify-center'>
                    A
                  </div>
                ) : (
                  <img
                    src="/IMG_0063.jpeg"
                    alt="Aaditya Mahajan"
                    className='w-full h-full object-cover'
                    onError={() => setImgError(true)}
                  />
                )}
              </div>
            </div>
            <div className='absolute -inset-4 rounded-full bg-[#915EFF]/10 blur-2xl -z-10' />
          </div>
        </motion.div>

        {/* Bio & Links */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          className='flex-1 text-center lg:text-left'
        >
          <h3 className='text-white text-3xl sm:text-4xl font-bold mb-3'>
            Aaditya <span className='text-[#915EFF]'>Mahajan</span>
          </h3>
          <p className='text-[#915EFF] font-medium text-lg mb-5'>
            Full Stack & Android Developer
          </p>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='text-secondary text-[17px] leading-[30px] mb-6'
          >
            I'm a Full Stack & Android Developer specializing in creating responsive websites, custom web applications, and native Android apps. From idea to deployment, I build complete digital solutions with clean code, modern technologies, and a focus on user experience.
          </motion.p>

          <div className='flex gap-4 justify-center lg:justify-start flex-wrap'>
            <motion.a
              href="https://github.com/AadityaMahajan03"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-tertiary border border-[#0f3460]/50 rounded-[10px] py-3 px-6 text-center shadow-md hover:shadow-lg hover:border-[#915EFF]/50 transition'
            >
              <span className='text-white font-medium'>GitHub</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/aaditya-mahajan0/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-tertiary border border-[#0f3460]/50 rounded-[10px] py-3 px-6 text-center shadow-md hover:shadow-lg hover:border-[#915EFF]/50 transition'
            >
              <span className='text-white font-medium'>LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Service Cards */}
      <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
