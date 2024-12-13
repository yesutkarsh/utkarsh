"use"
import React from 'react'
import style from "../style.module.css"
export default function SideNav() {
  return (
<>
    <div className={style.topNav}>
        <div className={style.search}>
            <input type="text" placeholder='Search Lecture / Topic' />
            <i class="ri-search-line"></i>
        </div>
    </div>
    <nav className={style.nav}>

    </nav>
    <nav className={style.mobileNav}>
        <div>
    <i class="ri-video-line"></i> 
    <span>Lectures</span>
        </div>
        <div>
    <i class="ri-add-circle-line"></i>
    <span>Book Session</span>
        </div>
        <div>
    <i class="ri-user-smile-line"></i>
    <span>Profile</span>
        </div>
    </nav>
</>
  )
}
