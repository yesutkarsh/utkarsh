"use client";
import ConnectMe from "@/components/ConnectMe/ConnectMe";
import { toggleConnectCard } from "@/utils/slices/uiAndUxslice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import About from "@/components/About.jsx/About";
export default function HomePage() {
  const dispatch = useDispatch();
  const cardToggle = useSelector((store) => store?.toggleConnect?.toggleCard);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [about, setAbout] = useState(false);


  const displayHelloButt = () => {
    dispatch(toggleConnectCard());
  };

  useEffect(() => {
    const video = document.createElement('video');
    video.src = 'https://cdn.pixabay.com/video/2019/04/20/22908-331768732_large.mp4';
    video.preload = 'auto';
    video.muted = true;

    video.oncanplaythrough = () => {
      setVideoLoaded(true);
    };
  }, []);


  return (
    <>
    {about?<About/>:null}

    <button className={"aboutBtn"} onClick={()=>setAbout(!about)}>{about? <>
      <div className="flex items-center justify-center gap-2">
      <i class="ri-close-line"></i> 
     Close About
      </div>
    </>:
    <>
    <div className="flex items-center justify-center gap-2">
    <i class="ri-user-smile-fill"></i>
    About
    </div>
    </>
    
    }</button>
<div className="relative w-full h-screen overflow-hidden">
      {/* Black background during loading */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          videoLoaded ? 'opacity-0' : 'opacity-100'
        }`} 
      />


{videoLoaded && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source 
            src="https://cdn.pixabay.com/video/2022/07/12/123885-729425509_large.mp4" 
            type="video/mp4" 
          />
        </video>
      )}

      {/* Dark shade overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {cardToggle ? <ConnectMe /> : null}
      <motion.div
        id="container"
        initial={{ opacity: 0 }} // Fade-in effect
        animate={{ opacity: 1 }} // Fully visible after animation
        transition={{ duration: 0.8 }}
      >
        <motion.div
          id="wrapper"
          initial={{ x: "-100vw" }} // Slide-in effect from left
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 60, duration: 0.8 }}
        >
          <motion.div

            id="name"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hey, I&apos;m Utkarsh Verma
          </motion.div>

          <motion.p
            id="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I am a frontend developer with expertise in HTML, CSS, JavaScript, and React, passionate about creating clean, responsive, and user-friendly interfaces.
            <br />
            Beyond frontend, I have basic backend knowledge, allowing me to effectively communicate and collaborate with backend teams. I’m familiar with Node.js, Next.js, Google Cloud, Linux, and Docker, which helps me integrate APIs, optimize deployments, and troubleshoot efficiently.
          </motion.p>

          <motion.p
            id="about-mob"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I am a frontend developer skilled in HTML, CSS, JavaScript, and React, focused on building clean, responsive, and user-friendly interfaces. I also have basic backend knowledge (Node.js, Next.js, Google Cloud, Linux, Docker), enabling smooth collaboration with backend teams.
          </motion.p>

          <motion.div
            id="label"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Top Skills
          </motion.div>

          <motion.p
            id="skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            React | Javascript | Html | Css | Next JS | Node Js | 
            Git & Github | Google Cloud | Docker | Kubernetes | Linux |
          </motion.p>




          <div className="buttons-control">
            <Link href="/project">
              <motion.button
                id="hellobutoon"
                whileHover={{ scale: 1.1 }} // Hover effect
                transition={{ duration: 0.3 }}
              >
                View My Projects
              </motion.button>
            </Link>


            <motion.button
              id="hellobutoon"
              onClick={displayHelloButt}
              whileHover={{ scale: 1.1 }} // Hover effect
              transition={{ duration: 0.3 }}
            >
              Hire Me
            </motion.button>


            <a href="/resume.pdf" download="resume.pdf" >
            <motion.button
              id="hellobutoon"
              whileHover={{ scale: 1.1 }} // Hover effect
              transition={{ duration: 0.3 }}
            >
              Download Resume
            </motion.button>
            </a>

          </div>


        </motion.div>



      </motion.div>
      
      </div>




    </>
  );
}
