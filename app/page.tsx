"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "@studio-freight/lenis"
import ProjectGallery from "@/components/project-gallery"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutSection from "@/components/about-section"
import HeroSection from "@/components/hero-section"
import { ArrowDownIcon } from "lucide-react"

export default function Home() {
  const horizontalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger)

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Initialize horizontal scroll for projects section
    if (horizontalRef.current) {
      const horizontalSection = horizontalRef.current

      // Get the width of the horizontal content
      const getScrollWidth = () => {
        return horizontalSection.scrollWidth - window.innerWidth
      }

      // Create the horizontal scroll animation
      const createHorizontalScroll = () => {
        const trigger = {
          trigger: horizontalSection,
          start: "top top",
          end: () => `+=${getScrollWidth()}`,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          scrub: 1,
        }

        gsap.to(horizontalSection.querySelector(".project-container"), {
          x: () => -getScrollWidth(),
          ease: "none",
          scrollTrigger: trigger,
        })
      }

      createHorizontalScroll()

      // Update on resize
      window.addEventListener("resize", () => {
        ScrollTrigger.refresh()
      })

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill())
        lenis.destroy()
      }
    }
  }, [])

  return (
    <main className="bg-white text-black min-h-screen">
      <Header />
      <div className="fixed bottom-8 right-8 z-40 hidden md:block">
        <div className="flex flex-col items-center bg-white bg-opacity-80 backdrop-blur-sm p-3 rounded-full shadow-lg">
          <span className="text-xs font-medium mb-1">Scroll</span>
          <ArrowDownIcon className="w-4 h-4 animate-bounce" />
        </div>
      </div>

      {/* Vertical Scroll Sections */}
      <HeroSection />
      <AboutSection />

      {/* Horizontal Scroll Section */}
      <div ref={horizontalRef} className="relative overflow-hidden h-screen">
        <ProjectGallery />
      </div>

      <Footer />
    </main>
  )
}
