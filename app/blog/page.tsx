"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, ArrowRight } from "lucide-react"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    slug: "modern-frontend-development",
    title: "The Evolution of Modern Frontend Development",
    excerpt:
      "Exploring the rapid changes in frontend development over the past decade and what it means for developers today.",
    date: "April 15, 2025",
    readTime: "6 min read",
    category: "Development",
    image: "https://teleporthq.io/blog/content/images/2022/05/Rapid-Front-End-Development.png",
    featured: true,
  },
  {
    id: 2,
    slug: "designing-for-accessibility",
    title: "Designing for Accessibility: A Comprehensive Guide",
    excerpt: "How to create beautiful interfaces that work for everyone, regardless of ability or disability.",
    date: "April 8, 2025",
    readTime: "8 min read",
    category: "Design",
    image: "https://www.figma.com/community/resource/4b6e7d9f-6564-40cd-8782-5f960df6e776/thumbnail",
    featured: false,
  },
  {
    id: 3,
    slug: "react-performance-optimization",
    title: "React Performance Optimization Techniques",
    excerpt:
      "Practical strategies to improve the performance of your React applications without sacrificing developer experience.",
    date: "March 30, 2025",
    readTime: "10 min read",
    category: "Development",
    image: "https://cdn.prod.website-files.com/5de91a35bbf4da085c26f8ca/6436d50363b28952224c13e1_Threejs%20with%20React.png",
    featured: false,
  },
  {
    id: 4,
    slug: "future-of-web-development",
    title: "The Future of Web Development in 2026 and Beyond",
    excerpt: "Predictions and insights about upcoming trends, technologies, and paradigm shifts in web development.",
    date: "March 22, 2025",
    readTime: "7 min read",
    category: "Insights",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*ide8y5xbEcAaI_4E9KO9Bw.png",
    featured: false,
  },
  
]

export default function BlogPage() {
  const featuredRef = useRef<HTMLDivElement>(null)
  const blogItemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate featured post
    gsap.fromTo(
      featuredRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
    )

    // Animate blog items with stagger
    gsap.fromTo(
      blogItemsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <main className="bg-white text-black min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        <h1
          className="text-4xl md:text-6xl font-bold mb-16 tracking-tight"
          style={{
            fontFamily: "Playfair Display, serif",
            letterSpacing: "-0.02em",
          }}
        >
          Blog
        </h1>

        {/* Featured Post */}
        {featuredPost && (
          <div ref={featuredRef} className="mb-24 group">
            <Link href={`/blog/${featuredPost.slug}`} className="block">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-6">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium">
                  Featured
                </div>
              </div>

              <div className="flex items-center gap-4 mb-3">
                <span className="text-sm opacity-70" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {featuredPost.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-black opacity-30"></span>
                <span className="text-sm opacity-70" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {featuredPost.readTime}
                </span>
                <span className="w-1 h-1 rounded-full bg-black opacity-30"></span>
                <span className="text-sm font-medium" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {featuredPost.category}
                </span>
              </div>

              <h2
                className="text-2xl md:text-3xl font-bold mb-3 group-hover:opacity-80 transition-opacity"
                style={{
                  fontFamily: "Playfair Display, serif",
                  letterSpacing: "-0.02em",
                }}
              >
                {featuredPost.title}
              </h2>

              <p className="text-lg opacity-80 max-w-3xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {featuredPost.excerpt}
              </p>
            </Link>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {regularPosts.map((post, index) => (
            <div key={post.id} ref={(el) => (blogItemsRef.current[index] = el)} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-5">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs opacity-70" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {post.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-black opacity-30"></span>
                  <span className="text-xs opacity-70" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {post.readTime}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold mb-2 group-hover:opacity-80 transition-opacity line-clamp-2"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {post.title}
                </h3>

                <p className="text-sm opacity-80 line-clamp-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {post.excerpt}
                </p>

                <div className="mt-4">
                  <span
                    className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {post.category}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-20 flex justify-between items-center">
          <button
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            disabled
          >
            <ArrowLeft size={16} />
            <span>Previous</span>
          </button>

          <div className="text-sm opacity-70" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Page 1 of 1
          </div>

          <button
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            disabled
          >
            <span>Next</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
