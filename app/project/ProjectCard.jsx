import Link from "next/link"
import style from "./projectCard.module.css"
export default function ProjectCard({image,title, description,deployedLink}) {
  return (
    <>
    <div className={style.ProjectCard}>
        <div className={style.title}>{title}</div>
        <div className={style.description}>{description}</div>
        <div className={style.navagations}>
          <div>
            <Link className={style.deployedLink} href={deployedLink}>
            <i class="ri-user-smile-fill"></i>
            See Project
            <i class="ri-arrow-right-up-line"></i>
            </Link>
            </div>
        </div>
    </div>
    
    </>
  )
}
