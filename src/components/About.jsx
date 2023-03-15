import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLang } from "../Global/state";
import getData from "../constants/GetData";
const ServiceCard = ({ index, title, icon }) => (
  
  <Tilt className='xs:w-[250px] w-full'>

      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    
  </Tilt>
);

const About = () => {
  const { language, setLanguage } = useLang();
  const services = getData(language).services;
  const about =  getData(language).about;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{about.tag}</p>
        <h2 className={styles.sectionHeadText}>{about.title}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {about.detail}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");


