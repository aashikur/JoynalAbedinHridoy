"use client";

import { gallery } from "../assets/assets";
import Container from "./Container";
import { motion } from "framer-motion";

export default function Gallery() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95, filter: "grayscale(100%)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 30px rgba(0,0,0,0.4)",
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="mt-10 max-w-[600px] mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="columns-2 gap-4"
      >
        {gallery.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover="hover"
            className="mb-4 break-inside-avoid cursor-pointer rounded-2xl overflow-hidden "
            style={{ transformOrigin: index % 2 === 0 ? "left" : "right" }}
          >
            <motion.img
              src={item.src.src}
              alt={item.title}
              className="w-full object-cover rounded-2xl border border-gray-800 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
