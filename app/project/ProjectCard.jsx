"use client";
import Link from "next/link";
import style from "./projectCard.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ image, title, description, deployedLink, github }) {
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }} // Starting state
        animate={{ opacity: 1, scale: 1 }}   // Ending state
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth animation
        whileHover={{ scale: 1.05 }} // Slight scale on hover
        className={style.wrapper}
      >
        {/* Image with hover effect */}
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
          <Image
            width={300}
            height={300}
            src={image}
            alt={title}
            className="project-image"
          />
        </motion.div>

        {/* Title and description with staggered animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className={style.title}
        >
          {title}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          className={style.description}
        >
          {description}
        </motion.div>

        {/* Buttons with hover effect */}
        <motion.div
          className={style.nav}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
        >
          <Link href={deployedLink}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-[#eaeaea] text-black"
            >
              <i className="ri-eye-line"></i>
              View Live
            </motion.button>
          </Link>
          <Link href={github}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-black text-white"
            >
              <i className="ri-github-line"></i>
              View Code
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}
