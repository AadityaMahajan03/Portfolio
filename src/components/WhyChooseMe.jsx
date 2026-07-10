import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { whyChooseMe } from "../constants";

const icons = [
  "🏗️", "📱", "🎨", "⚡", "💬", "⏱️", "🔧"
];

const WhyChooseMe = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Why work with me</p>
        <h2 className={styles.sectionHeadText}>Why Choose Me.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here's what you can expect when you work with me.
        </motion.p>
      </div>

      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {whyChooseMe.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.1, 0.5)}
            className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-[#0f3460]/30 rounded-xl p-6 overflow-hidden transition-all duration-300 hover:border-[#915EFF]/50 hover:shadow-lg hover:shadow-[#915EFF]/10"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#915EFF]/5 rounded-bl-full transition-all duration-300 group-hover:bg-[#915EFF]/10" />
            <div className="flex items-start gap-4 relative z-10">
              <span className="text-2xl flex-shrink-0">{icons[index % icons.length]}</span>
              <h3 className="text-white font-medium text-[16px] leading-relaxed">{item}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(WhyChooseMe, "whychooseme");
