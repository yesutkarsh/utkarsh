"use client";
import ConnectMe from "@/components/ConnectMe/ConnectMe";
import { toggleConnectCard } from "@/utils/slices/uiAndUxslice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Link from "next/link";
export default function HomePage() {
  const dispatch = useDispatch();
  const cardToggle = useSelector((store) => store?.toggleConnect?.toggleCard);

  const displayHelloButt = () => {
    dispatch(toggleConnectCard());
  };

  return (
    <>
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
            A seasoned web developer specializing in the MERN
            stack and Next.js framework. With a passion for crafting efficient,
            dynamic, and user-friendly web applications, I bring expertise in
            front-end and back-end development to the table.
          </motion.p>

          <motion.p
            id="about-mob"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Expert MERN stack and Next.js developer here! Crafting dynamic and
            efficient web applications is my specialty. Let&apos;s bring your
            digital vision to life together!
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
            Mongo DB | Express JS | React JS | Node JS | Next JS | Typescript |
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
      




    </>
  );
}
