import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What clients say</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </motion.div>

      <div className='mt-12 flex flex-wrap gap-7 justify-center'>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className='bg-tertiary p-6 rounded-2xl sm:w-[350px] w-full border border-[#0f3460]/20 flex flex-col'
          >
            <div className='mb-5 flex gap-1'>
              {[...Array(5)].map((_, i) => (
                <span key={i} className='text-[#915EFF] text-sm'>★</span>
              ))}
            </div>
            <p className='text-secondary text-[15px] italic leading-relaxed flex-1 mb-6'>
              "{testimonial.feedback}"
            </p>
            <div className='flex items-center gap-4 mt-auto pt-4 border-t border-[#0f3460]/20'>
              <div className='w-10 h-10 rounded-full bg-[#915EFF]/20 flex items-center justify-center text-[#915EFF] font-bold text-sm flex-shrink-0'>
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className='text-white font-semibold text-[15px]'>
                  {testimonial.name}
                </h4>
                <p className='text-secondary text-[12px]'>
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Testimonials, "testimonials");
