import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { faqData } from "../constants";

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <motion.div
    className='bg-tertiary rounded-[20px] overflow-hidden'
    variants={fadeIn("up", "spring", 0.1, 0.5)}
  >
    <button
      onClick={onClick}
      className='w-full flex items-center justify-between p-6 text-left'
    >
      <span className='text-white font-medium text-[16px] pr-4'>
        {question}
      </span>
      <motion.span
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.2 }}
        className='text-[#915EFF] text-xl flex-shrink-0'
      >
        +
      </motion.span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className='px-6 pb-6 text-secondary text-[15px] leading-relaxed'>
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Got questions?</p>
        <h2 className={styles.sectionHeadText}>FAQ.</h2>
      </motion.div>

      <div className='mt-12 flex flex-col gap-4 max-w-3xl mx-auto'>
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(FAQ, "faq");
