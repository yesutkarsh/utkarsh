"use client"
import ConnectMe from '@/components/ConnectMe/ConnectMe'
import { toggleConnectCard } from '@/utils/slices/uiAndUxslice'
import { useDispatch, useSelector } from 'react-redux'

export default function HomePage() {


    const dispatch = useDispatch()


    // Toggeling Connect Card
    const cardToggle = useSelector(store=>{return store?.toggleConnect?.toggleCard})

    const displayHelloButt = ()=>{
        dispatch(toggleConnectCard())
    }



  return (
    
    <>
    
    {cardToggle?  <ConnectMe/> : null}
        <div id="container">
        <div id="wrapper">
            {/* <img id="profileImg" src="https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small_2x/cute-boy-avatar-png.png" alt=""/> */}
            <div id="name">Hey, I&apos;m Utkarsh Verma</div>
            <p id="about"> Welcome! I&lsquo;m a seasoned web developer specializing in the MERN stack and Next.js framework. With a passion for crafting efficient, dynamic, and user-friendly web applications, I bring expertise in front-end and back-end development to the table.</p>

            <p id="about-mob">
                Expert MERN stack and Next.js developer here! Crafting dynamic and efficient web applications is my specialty. Let&lsquo;s bring your digital vision to life together!
            </p>

            <div id="label">Top Skills</div>
            <p id="skills">Mongo DB | Express JS | React JS | Node JS | Next JS | Typescript |Git & Github | Google Cloud | Docker | Kubernetes | Linux |</p>
            <button onClick={displayHelloButt} id="hellobutoon">Contact Me</button>

            <div id="hello">
                <a href="https://github.com/yesutkarsh">
                    <i class="ri-github-fill"></i>
                </a>
                <a href="https://www.linkedin.com/in/yesutkarsh/">
                    <i class="ri-linkedin-box-fill"></i>
                </a>
                <a href="https://www.instagram.com/yesutkarshverma/">
                    <i class="ri-instagram-fill"></i>
                </a>
                <i class="ri-youtube-fill"></i>
            </div>
        </div>
    </div>
    
    </>
  )
}
