"use client"; // <-- ADD THIS AT THE TOP

import { img, user } from "../assets/assets";
import Container from "./Container";
import { motion } from "framer-motion";

export default function LinkSection({ href, title, description }) {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)", transition: { duration: 0.3 } },
  };

  const firstItemBounce = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 10, delay: 0.2 },
    },
    hover: itemVariants.hover,
  };

  return (
    <Container className="mt-10 w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-4"
      >
        {user.social.map((social, index) => (
          <motion.div
            key={social.platform}
            variants={index === 0 ? firstItemBounce : itemVariants}
            whileHover="hover"
            className={` 
                ${index === 0 ? "animate-bounce" : ""}
                w-full border text-gray-600 cursor-pointer p-2 px-4 text-lg bg-[#FFFFFE] rounded-2xl flex gap-4 `}
          >
            <div className="text-[3rem] font-bold text-gray-800">
              {social.icon}
            </div>
            <div className="text-right flex-1">
              <h2 className="text-lg text-gray-800">{social.platform}</h2>
              <p className="text-sm text-gray-400">{social.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}
