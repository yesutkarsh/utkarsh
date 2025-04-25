"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Online IDE Code Editor",
    category: "Web Development",
    description:
      "A cloud-based IDE inspired by Replit. Features include file system management, Monaco Editor integration, real-time linux terminal interaction, and Docker container support. Built with Next.js and Node.js.",
    image:
      "https://www.yesutkarsh.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpcvcblbt%2Fimage%2Fupload%2Fv1725178230%2Fportfolio%2Fyvybairewmavb5elp7u2.png&w=384&q=75",
    year: "2023",
    github: "https://github.com/yesutkarsh/cloudIDE",
    deployed: "https://vscodeweb.vercel.app/",
  },
  {
    id: 2,
    title: "NOTEBOOK ML",
    category: "AI & Machine Learning",
    description:
      "An open-source project that dynamically generates AI-driven podcast-style conversations using Google Cloud Text-to-Speech (SSML), saves audio files, and combines them into a final podcast episode.",
    image:
      "https://www.yesutkarsh.in/_next/image?url=https%3A%2F%2Fcdn.analyticsvidhya.com%2Fwp-content%2Fuploads%2F2024%2F06%2Fnotebookml.png&w=384&q=75",
    year: "2023",
    github: "https://github.com/yesutkarsh/NOTEBOOK-ML-OPEN-SOURCE",
    deployed: "",
  },
]

export default function ProjectGallery() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Animate project cards on hover
    projectRefs.current.forEach((card) => {
      if (!card) return

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -20,
          scale: 1.02,
          duration: 0.4,
          ease: "power2.out",
        })

        // Dim other cards
        projectRefs.current.forEach((otherCard) => {
          if (otherCard && otherCard !== card) {
            gsap.to(otherCard, {
              opacity: 0.5,
              duration: 0.4,
            })
          }
        })
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        })

        // Restore opacity of other cards
        projectRefs.current.forEach((otherCard) => {
          if (otherCard) {
            gsap.to(otherCard, {
              opacity: 1,
              duration: 0.4,
            })
          }
        })
      })
    })

    return () => {
      projectRefs.current.forEach((card) => {
        if (!card) return
        card.removeEventListener("mouseenter", () => {})
        card.removeEventListener("mouseleave", () => {})
      })
    }
  }, [])

  useEffect(() => {
    // Add keyframe animation for the scroll indicator
    const style = document.createElement("style")
    style.textContent = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(80px); }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div
      id="projects"
      ref={galleryRef}
      className="project-container flex h-screen items-center pl-[5vw]"
      style={{ width: `${projects.length * 100}vw` }}
    >
      <div className="flex-shrink-0 mr-[5vw]">
        <h2
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
          style={{
            fontFamily: "Playfair Display, serif",
            letterSpacing: "-0.02em",
          }}
        >
          Projects
        </h2>
        <p className="text-lg opacity-70 max-w-xs mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Scroll horizontally to explore my selected works
        </p>

        {/* Add this clear visual indicator for horizontal scrolling */}
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 10H19M19 10L10 1M19 10L10 19"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="ml-3 w-20 h-2 bg-black rounded-full relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-4 bg-white rounded-full animate-[scroll_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>

      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => (projectRefs.current[index] = el)}
          className="project-card flex-shrink-0 w-[80vw] md:w-[55vw] lg:w-[45vw] h-[75vh] mx-[2.5vw] bg-white rounded-lg overflow-hidden shadow-lg"
        >
          <div className="relative w-full h-[50%] overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>

          <div className="p-6 flex flex-col justify-between h-[50%]">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3
                  className="text-xl md:text-2xl font-medium"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {project.title}
                </h3>
                <span className="text-sm opacity-50 mt-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {project.year}
                </span>
              </div>
              <p className="text-sm opacity-70 mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {project.category}
              </p>
              <p className="text-sm opacity-80 line-clamp-4 mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {project.description}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <Github size={16} className="mr-1" />
                  GitHub
                </a>
                {project.deployed && (
                  <a
                    href={project.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                )}
              </div>
              <button
                className="text-sm font-medium border-b border-black pb-0.5 hover:opacity-70 transition-opacity"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
