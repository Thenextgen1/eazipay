"use client";
import cardData from "@/app/data/Card.json";
import styles from "@/app/styles/Home.module.css";
import { container, item } from "@/app/utilities/animation";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      whileInView="visible"
      viewport={{ once: true }}
      className={`my-8 lg:my-12 flex flex-col xl:flex-row justify-center items-center ${styles.home_card_container}`}
    >
      {cardData.map((details, i) => (
        <motion.div
          variants={item}
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          key={details.title + i}
          className={`${styles.home_card} cursor-pointer text-white flex-1 flex justify-center flex-col  px-6 pt-12 pb-10 md:p-12 xl:py-20 xl:px-16 lg:min-h-[370px] my-3 lg:p-12  bg-eaziGreen`}
        >
          <p className="text-xl text-[28px] font-bold mb-6">{details.title}</p>
          {details.description.map((details, i) => (
            <p
              className="text-lg my-2 leading-[24px]"
              key={i}
            >
              {details}
            </p>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Card;
