import Link from "next/link"
import style from "./projectCard.module.css"
export default function ProjectCard({title, description,deployedLink}) {
  return (
    <>
    
    <div className={style.ProjectCard}>
        <div className={style.title}>{title}</div>
        <div className={style.description}>{description}</div>
        <div className={style.navagations}>
          <div>
            <Link href={deployedLink}>
            See Project
            </Link>
            <i class="ri-arrow-right-up-line"></i>
            </div>
        </div>
    </div>
    
    </>
  )
}
