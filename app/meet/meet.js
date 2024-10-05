import Link from "next/link"
import style from "./style.module.css"
export default function Meet() {
  return (
    <>
    <div className={style.wrapper}>
        <h1><i class="ri-slideshow-4-line"></i>Upcoming Meet</h1>

        <div className={style.meet}>
            <span></span>
            <div className={style.info}>
                <h1>Saturday, 5 October @02:00</h1>
                <Link href={"https://meet.google.com/xoc-epdw-nvm"}>Meet Link: <span style={{backgroundColor:"transparent", color:"#34a853"}}>utkarshverma/linkToMeetAPI </span></Link>
            </div>
        </div>
    </div>
    </>
  )
}
