"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Briefcase, GraduationCap } from "lucide-react"

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([])
  const skillsRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)

  const skills = [
    "React",
    "Javascript",
    "HTML",
    "CSS",
    "Next.js",
    "Node.js",
    "Git & Github",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Linux",
  ]

  const experiences = [
    {
      title: "Software Engineer",
      company: "Inspiron Labs",
      period: "April 2025 - Present",
      current: true,
    },
    {
      title: "Tech Lead",
      company: "Vastrakashi",
      period: "September 2024",
      current: false,
    },
    {
      title: "Founder",
      company: "Printeasy",
      period: "2023",
      current: false,
    },
  ]

  const education = [
    {
      degree: "10+2",
      institution: "Narayana Public School",
      period: "2021-2024",
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      },
    )

    // Animate paragraphs with stagger
    textRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          },
        },
      )
    })

    // Animate skills
    const skillItems = skillsRef.current?.querySelectorAll(".skill-item") || []
    gsap.fromTo(
      skillItems,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.5,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 85%",
          end: "top 60%",
          scrub: 1,
        },
      },
    )

    // Animate experience items
    const experienceItems = experienceRef.current?.querySelectorAll(".experience-item") || []
    gsap.fromTo(
      experienceItems,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 85%",
          end: "top 60%",
          scrub: 1,
        },
      },
    )

    // Animate education items
    const educationItems = educationRef.current?.querySelectorAll(".education-item") || []
    gsap.fromTo(
      educationItems,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 85%",
          end: "top 60%",
          scrub: 1,
        },
      },
    )

    const aboutSection = sectionRef.current

    if (aboutSection) {
      const indicator = document.createElement("div")
      indicator.className = "absolute bottom-8 right-8 flex items-center text-white opacity-70"
      indicator.innerHTML = `
        <span class="mr-2 text-sm">Scroll for Projects</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 10H19M19 10L10 1M19 10L10 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      `

      aboutSection.style.position = "relative"
      aboutSection.appendChild(indicator)

      return () => {
        aboutSection.removeChild(indicator)
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="min-h-screen flex items-center py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-12 max-w-5xl">
        <h2
          ref={headingRef}
          className="text-4xl md:text-6xl font-bold mb-16 tracking-tight"
          style={{
            fontFamily: "Playfair Display, serif",
            letterSpacing: "-0.02em",
          }}
        >
          About
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <p
              ref={(el) => (textRefs.current[0] = el)}
              className="text-lg md:text-xl font-light leading-relaxed mb-8"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              I am a frontend developer with expertise in HTML, CSS, JavaScript, and React, passionate about creating
              clean, responsive, and user-friendly interfaces.
            </p>

            <p
              ref={(el) => (textRefs.current[1] = el)}
              className="text-lg md:text-xl font-light leading-relaxed mb-8"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Beyond frontend, I have basic backend knowledge, allowing me to effectively communicate and collaborate
              with backend teams.
            </p>

            <div ref={experienceRef} className="mb-10">
              <div className="flex items-center mb-4">
                <Briefcase size={20} className="mr-2" />
                <h3 className="text-xl font-medium" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                  Experience
                </h3>
              </div>
              <div className="space-y-4 pl-7">
                {experiences.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                        {exp.title}
                      </h4>
                      <span className="text-sm opacity-70" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm opacity-80" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {exp.company}
                    </p>
                    {exp.current && (
                      <span className="inline-block px-2 py-0.5 bg-white bg-opacity-20 rounded-full text-xs mt-1">
                        Current
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div ref={educationRef}>
              <div className="flex items-center mb-4">
                <GraduationCap size={20} className="mr-2" />
                <h3 className="text-xl font-medium" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                  Education
                </h3>
              </div>
              <div className="space-y-4 pl-7">
                {education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                        {edu.degree}
                      </h4>
                      <span className="text-sm opacity-70" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm opacity-80" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-1"></div>

          <div className="md:col-span-6">
            <p
              ref={(el) => (textRefs.current[2] = el)}
              className="text-lg md:text-xl font-light leading-relaxed mb-8"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              I'm familiar with Node.js, Next.js, Google Cloud, Linux, and Docker, which helps me integrate APIs,
              optimize deployments, and troubleshoot efficiently.
            </p>

            <div ref={skillsRef} className="mt-8 mb-12">
              <h3
                className="text-xl font-medium mb-4"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
              >
                Top Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="skill-item px-3 py-1 bg-white bg-opacity-10 rounded-full text-sm"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div ref={(el) => (textRefs.current[3] = el)} className="mt-12 inline-block">
              <a
                href="#contact"
                className="text-white border-b border-white pb-1 text-lg hover:opacity-70 transition-opacity"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
              >
                Let's work together →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
