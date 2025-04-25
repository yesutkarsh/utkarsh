"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle menu animations
  useEffect(() => {
    if (!menuRef.current) return

    const menuItems = menuRef.current.querySelectorAll(".menu-item")

    if (isMenuOpen) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden"

      // Animate menu opening
      gsap.to(menuRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      })

      // Animate menu items
      gsap.fromTo(
        menuItems,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
          delay: 0.1,
        },
      )
    } else {
      // Allow body scroll when menu is closed
      document.body.style.overflow = "auto"

      // Animate menu closing
      gsap.to(menuRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      })

      // Reset menu items position
      gsap.to(menuItems, {
        y: 20,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      })
    }
  }, [isMenuOpen])

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (isMenuOpen && event.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscKey)
    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isMenuOpen])

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute("href")

        if (targetId && targetId !== "#") {
          const targetElement = document.querySelector(targetId)

          if (targetElement) {
            // Close mobile menu if open
            if (isMenuOpen) {
              setIsMenuOpen(false)
            }

            // Smooth scroll to target
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 md:py-6 md:px-12 flex justify-between items-center transition-all duration-300 ${
          isScrolled ? "bg-white bg-opacity-90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="text-lg font-medium tracking-tight">
          <Link
            href="/"
            className="hover:opacity-70 transition-opacity"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
          >
            UV
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="text-sm relative group overflow-hidden"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className="relative z-10">About</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a
            href="#projects"
            className="text-sm relative group overflow-hidden"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className="relative z-10">Projects</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <Link
            href="/blog"
            className="text-sm relative group overflow-hidden"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className="relative z-10">Blog</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <a
            href="#contact"
            className="text-sm relative group overflow-hidden"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className="relative z-10">Contact</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </nav>

        <button
          ref={menuButtonRef}
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
        </button>
      </header>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center ${
          isMenuOpen ? "block" : "hidden"
        } opacity-0`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="flex flex-col space-y-8 text-center">
          <a
            href="#about"
            className="menu-item text-3xl font-medium relative inline-block overflow-hidden group"
            onClick={() => setIsMenuOpen(false)}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className="relative z-10">About</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a
            href="#projects"
            className="menu-item text-3xl font-medium relative inline-block overflow-hidden group"
            onClick={() => setIsMenuOpen(false)}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className="relative z-10">Projects</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <Link
            href="/blog"
            className="menu-item text-3xl font-medium relative inline-block overflow-hidden group"
            onClick={() => setIsMenuOpen(false)}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className="relative z-10">Blog</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <a
            href="#contact"
            className="menu-item text-3xl font-medium relative inline-block overflow-hidden group"
            onClick={() => setIsMenuOpen(false)}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className="relative z-10">Contact</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </nav>
      </div>
    </>
  )
}
