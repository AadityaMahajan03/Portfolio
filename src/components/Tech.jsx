import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const categoryEmojis = {
  Frontend: "🌐",
  Backend: "⚙️",
  Mobile: "📱",
  "AI/ML": "🤖",
  Database: "🗄️",
  "Cloud & Deployment": "☁️",
  Tools: "🛠️",
  "Payments & Integrations": "💳",
};

const TechCard = ({ technology, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.05, 0.5)}
    className="group relative bg-[#1a1a2e]/80 backdrop-blur-sm border border-[#16213e]/50
               rounded-xl p-4 h-24 w-24 sm:h-28 sm:w-28
               transition-all duration-300 ease-out
               hover:border-[#0f3460]/80 hover:bg-[#16213e]/90
               hover:scale-105 hover:-translate-y-1
               hover:shadow-lg hover:shadow-[#0f3460]/20"
  >
    <div className="flex flex-col items-center justify-center h-full">
      {technology.icon ? (
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-9 h-9 sm:w-11 sm:h-11 object-contain mb-1.5
                     transition-all duration-300 ease-out
                     group-hover:scale-110"
        />
      ) : (
        <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[#915EFF]/20 text-[#915EFF] font-bold text-xs sm:text-sm mb-1.5">
          {technology.name.charAt(0)}
        </div>
      )}
      <span className="text-[10px] sm:text-xs text-gray-400 group-hover:text-white
                       font-medium text-center leading-tight
                       transition-all duration-300">
        {technology.name}
      </span>
    </div>
  </motion.div>
);

const Tech = () => {
  const categories = [...new Set(technologies.map((t) => t.category))];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My tech arsenal</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Tech Stack.</h2>
      </motion.div>

      {categories.map((category) => (
        <div key={category} className='mt-12'>
          <h3 className='text-white text-[22px] font-semibold mb-6 flex items-center gap-3 justify-center sm:justify-start'>
            <span>{categoryEmojis[category]}</span> {category}
          </h3>
          <div className='flex flex-row flex-wrap justify-center sm:justify-start gap-4 sm:gap-5'>
            {technologies
              .filter((t) => t.category === category)
              .map((technology, index) => (
                <TechCard key={technology.name} technology={technology} index={index} />
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SectionWrapper(Tech, "tech");
