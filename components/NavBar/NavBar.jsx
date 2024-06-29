import React from 'react'
import style from "./nav.module.css"
import Link from 'next/link'
export default function NavBar() {
  return (
    <>
    
    <nav className={style.nav}>
        <div id={style.title}>FRONTEND <br /> BACKEND</div>
        <div id={style.navs}>
        <Link href="/">
            <li>Home</li>
            </Link>
                <li>About</li>
            <Link href="/project">
            <li>Projects</li>
            </Link>
        </div>
    </nav>

    
    
    </>
  )
}
