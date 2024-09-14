import Link from "next/link"
import style from "./projectCard.module.css"
import Image from "next/image"
import { motion } from "framer-motion"
export default function ProjectCard({image,title, description,deployedLink, github}) {
  return (
    <>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className={style.wrapper}>
      <Image width={300} height={300} src={image}></Image>
    <div className={style.title}>{title}</div>
    <div className={style.description}>{description}</div>
    <div className={style.nav}>
    <Link href={deployedLink}>
      <button className="bg-[#eaeaea] text-black">
      <i class="ri-eye-line"></i>
        View Live
        </button>
    </Link>
        <Link href={github}>
      <button className="bg-black">
      <i class="ri-github-line"></i>
        View Code
        </button>
        </Link>
    </div>
    </motion.div>
    </>
  )
}
