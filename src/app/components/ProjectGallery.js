"use client";
import { projects } from "../assets/assets";
import Container from "./Container";
import { motion } from "framer-motion";

export default function ProjectGallery() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
    hover: { scale: 1.05, filter: "grayscale(0%)", transition: { duration: 0.4 } },
  };

  console.log(projects);
  return (
    <Container className="mt-10 max-w-[600px] mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="columns-2 gap-4"
      >
        {projects.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover="hover"
            className="mb-4 break-inside-avoid cursor-pointer rounded-2xl overflow-hidden"
            onClick={() => window.open(item.youtube, "_blank")}
          >
            <img
              src={item?.thumbnail?.src}
              alt={item.title}
              className="w-full rounded-2xl border border-gray-800 filter grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="mt-2 px-1 hidden">
              <h3 className="text-sm font-medium text-gray-200">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}
