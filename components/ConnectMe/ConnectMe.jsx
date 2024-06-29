import React from 'react'
import style from "./connect.module.css"
import { useDispatch } from 'react-redux'
import { toggleConnectCard } from '@/utils/slices/uiAndUxslice'
import { motion } from 'framer-motion'
export default function ConnectMe() {

  const dispatch = useDispatch()

  const ToggleConnectCard = ()=>{
    dispatch(toggleConnectCard())
}



  return (
    <>
    <div onClick={ToggleConnectCard} className={style.blackBox}></div>
    <span onClick={ToggleConnectCard} className={style.Exit}>tap anywhere to exit</span>
        <motion.div initial={{width:"0px"}} animate={{width:"90%"}}  exit={{width:"0px"}} className={style.main}>
        <motion.div initial={{opacity:0}} animate={{opacity:1, display:"flex" ,gap:"20px"}}>
        <i class="ri-github-fill"></i>
        <i class="ri-linkedin-box-fill"></i>
        <i class="ri-instagram-fill"></i>
        <i class="ri-youtube-fill"></i>
        </motion.div>
    </motion.div>
    </>
  )
}
