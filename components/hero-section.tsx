"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)
  const roleRef = useRef<HTMLParagraphElement>(null)

  // Text to display
  const nameText = "UTKARSH VERMA"
  const roleText = "Frontend Developer"

  // Split name into individual characters for animation
  const nameChars = nameText.split("")

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Initial state - hide elements
    gsap.set(roleRef.current, {
      opacity: 0,
      y: 20,
    })

    // Get all character spans
    const chars = nameRef.current?.querySelectorAll(".char") || []

    // Create timeline for entrance animations
    const tl = gsap.timeline({
      delay: 0.5,
      defaults: { ease: "power3.out" },
    })

    // Animate name characters
    tl.fromTo(
      chars,
      {
        opacity: 0,
        y: 20,
        rotationY: 45,
      },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        stagger: 0.03,
        duration: 0.8,
      },
    )

    // Animate role with a subtle fade in
    tl.to(
      roleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      "-=0.4",
    )

    // Create scroll animation
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    })

    // Subtle parallax effect on scroll
    scrollTl.to(
      nameRef.current,
      {
        y: 100,
        opacity: 0.3,
        scale: 0.9,
        duration: 1,
      },
      0,
    )

    scrollTl.to(
      roleRef.current,
      {
        y: 50,
        opacity: 0.5,
        duration: 1,
      },
      0,
    )

    return () => {
      if (scrollTl.scrollTrigger) {
        scrollTl.scrollTrigger.kill()
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="h-screen flex flex-col justify-center items-center relative">
      <div className="container mx-auto px-4 text-center">
        <h1
          className="text-[8vw] md:text-[6vw] font-bold tracking-tighter mb-4 leading-none"
          style={{ fontFamily: "SF Pro Display, system-ui, sans-serif" }}
        >
          <div ref={nameRef} className="inline-block">
            {nameChars.map((char, index) => (
              <span key={index} className="char inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </h1>
        <p
          ref={roleRef}
          className="text-xl md:text-2xl font-light tracking-wide opacity-80 max-w-xl mx-auto"
          style={{ fontFamily: "SF Pro Text, system-ui, sans-serif" }}
        >
          {roleText}
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
        <p className="text-base font-medium mb-3 opacity-90">SCROLL DOWN</p>
        <div className="w-8 h-14 border-2 border-black rounded-full flex justify-center pt-2 relative">
          <div className="w-2 h-3 bg-black rounded-full animate-bounce"></div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L10 9L19 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
