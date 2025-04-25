"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, Share2 } from "lucide-react"

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
    content: `
      <p>The landscape of frontend development has undergone a remarkable transformation over the past decade. What was once a relatively straightforward discipline focused on HTML, CSS, and basic JavaScript has evolved into a complex ecosystem of frameworks, tools, and methodologies.</p>
      
      <h2>The Rise of JavaScript Frameworks</h2>
      <p>Perhaps the most significant shift in frontend development has been the rise of JavaScript frameworks. From jQuery to Angular, React, and Vue, these tools have fundamentally changed how developers approach building user interfaces.</p>
      <p>React, in particular, introduced a component-based architecture that has become the standard approach for building modern web applications. This paradigm shift has made it easier to build complex, interactive UIs while maintaining code organization and reusability.</p>
      
      <h2>The Tooling Revolution</h2>
      <p>Another major evolution has been in the tooling ecosystem. Build tools like Webpack, Vite, and Parcel have made it possible to leverage modern JavaScript features while ensuring compatibility across browsers. Package managers like npm and yarn have simplified dependency management, while tools like ESLint and Prettier have standardized code quality and formatting.</p>
      
      <h2>CSS Evolution</h2>
      <p>CSS has also seen significant advancements. The introduction of preprocessors like Sass and Less brought variables and functions to CSS, while methodologies like BEM and CSS Modules improved organization and scoping. More recently, utility-first frameworks like Tailwind CSS have gained popularity for their ability to streamline the development process.</p>
      
      <h2>The Impact of Mobile</h2>
      <p>The rise of mobile devices has had a profound impact on frontend development. Responsive design has become a standard requirement, and performance optimization has taken center stage. Techniques like lazy loading, code splitting, and image optimization are now essential skills for frontend developers.</p>
      
      <h2>Looking Forward</h2>
      <p>As we look to the future, several trends are emerging that will likely shape the next evolution of frontend development:</p>
      <ul>
        <li>Server Components and hybrid rendering approaches</li>
        <li>AI-assisted development</li>
        <li>WebAssembly for high-performance web applications</li>
        <li>Increased focus on accessibility and inclusive design</li>
      </ul>
      
      <p>The pace of change in frontend development shows no signs of slowing down. For developers, this means a continuous learning journey, but also an exciting opportunity to shape the future of the web.</p>
    `,
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
    content: `
      <p>Accessibility in web design isn't just a nice-to-have feature—it's a necessity. Creating interfaces that work for everyone, regardless of ability or disability, is not only the right thing to do ethically, but it's also increasingly becoming a legal requirement in many jurisdictions.</p>
      
      <h2>Understanding Web Accessibility</h2>
      <p>At its core, web accessibility is about ensuring that people with disabilities can perceive, understand, navigate, and interact with websites and tools. This includes individuals with visual, auditory, motor, or cognitive disabilities.</p>
      
      <h2>Key Principles of Accessible Design</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) provide a framework for making web content more accessible. These guidelines are organized around four principles:</p>
      
      <h3>1. Perceivable</h3>
      <p>Information and user interface components must be presentable to users in ways they can perceive. This means providing text alternatives for non-text content, creating content that can be presented in different ways, and making it easier for users to see and hear content.</p>
      
      <h3>2. Operable</h3>
      <p>User interface components and navigation must be operable. This means making all functionality available from a keyboard, giving users enough time to read and use content, and not designing content in a way that is known to cause seizures.</p>
      
      <h3>3. Understandable</h3>
      <p>Information and the operation of the user interface must be understandable. This means making text readable and understandable, making web pages appear and operate in predictable ways, and helping users avoid and correct mistakes.</p>
      
      <h3>4. Robust</h3>
      <p>Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies. This means maximizing compatibility with current and future user tools.</p>
      
      <h2>Practical Implementation Tips</h2>
      <p>Here are some practical ways to implement accessibility in your designs:</p>
      <ul>
        <li>Use semantic HTML elements that accurately describe their content</li>
        <li>Provide alternative text for images</li>
        <li>Ensure sufficient color contrast</li>
        <li>Design forms with clear labels and error messages</li>
        <li>Make sure all interactive elements are keyboard accessible</li>
        <li>Use ARIA attributes when necessary to enhance accessibility</li>
        <li>Test your designs with assistive technologies</li>
      </ul>
      
      <h2>The Business Case for Accessibility</h2>
      <p>Beyond the ethical imperative, there's a strong business case for accessibility. Accessible websites often have better SEO, reach a wider audience, and provide a better user experience for everyone, not just those with disabilities.</p>
      
      <p>By incorporating accessibility from the beginning of your design process, you can create beautiful interfaces that truly work for everyone.</p>
    `,
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
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>As React applications grow in complexity, performance optimization becomes increasingly important. Fortunately, React provides several built-in features and patterns that can help you improve performance without sacrificing developer experience.</p>
      
      <h2>Understanding React's Rendering Process</h2>
      <p>Before diving into optimization techniques, it's important to understand how React's rendering process works. React uses a virtual DOM to minimize direct manipulation of the actual DOM, which is a costly operation. When a component's state or props change, React creates a new virtual DOM tree, compares it with the previous one (a process called "diffing"), and then updates only the parts of the actual DOM that have changed.</p>
      
      <h2>Key Optimization Techniques</h2>
      
      <h3>1. Memoization with React.memo</h3>
      <p>React.memo is a higher-order component that memoizes the result of a component render. If a component renders the same result given the same props, wrapping it in React.memo can result in a performance boost by skipping unnecessary re-renders.</p>
      
      <pre><code>
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
      </code></pre>
      
      <h3>2. Using useCallback and useMemo Hooks</h3>
      <p>The useCallback hook returns a memoized version of a callback function that only changes if one of its dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</p>
      
      <pre><code>
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
      </code></pre>
      
      <p>Similarly, the useMemo hook memoizes the result of a computation and only recomputes it when one of its dependencies changes.</p>
      
      <pre><code>
const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b),
  [a, b],
);
      </code></pre>
      
      <h3>3. Code Splitting with React.lazy and Suspense</h3>
      <p>Code splitting is a technique that allows you to split your code into smaller chunks which can then be loaded on demand. React.lazy and Suspense make this process straightforward:</p>
      
      <pre><code>
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </React.Suspense>
  );
}
      </code></pre>
      
      <h3>4. Virtualization for Long Lists</h3>
      <p>When rendering long lists of data, consider using virtualization libraries like react-window or react-virtualized. These libraries render only the items that are currently visible to the user, which can significantly improve performance.</p>
      
      <h3>5. Optimizing Context API Usage</h3>
      <p>While the Context API is a powerful tool for state management, it can cause performance issues if not used carefully. Consider splitting your context into smaller, more focused contexts to minimize unnecessary re-renders.</p>
      
      <h2>Measuring Performance</h2>
      <p>Before and after implementing optimizations, it's important to measure performance to ensure your changes are having the desired effect. Tools like React DevTools Profiler, Lighthouse, and Chrome DevTools Performance tab can help you identify performance bottlenecks and measure improvements.</p>
      
      <h2>Conclusion</h2>
      <p>Performance optimization in React is a balance between code complexity and user experience. By understanding React's rendering process and applying these optimization techniques judiciously, you can create React applications that are both performant and maintainable.</p>
    `,
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
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>The web development landscape is constantly evolving, with new technologies, methodologies, and paradigms emerging at a rapid pace. As we look ahead to 2026 and beyond, several trends are poised to reshape how we build and experience the web.</p>
      
      <h2>AI-Driven Development</h2>
      <p>Artificial intelligence is already making inroads into web development, from code completion tools to design assistants. In the coming years, we can expect AI to take on an even more significant role:</p>
      <ul>
        <li>AI-powered code generation that can create entire components or applications based on natural language descriptions</li>
        <li>Automated testing and bug detection that can identify issues before they reach production</li>
        <li>Design systems that can adapt and evolve based on user interactions and preferences</li>
        <li>Personalized user experiences that dynamically adjust to individual users' needs and behaviors</li>
      </ul>
      
      <h2>WebAssembly and the Rise of High-Performance Web Applications</h2>
      <p>WebAssembly (Wasm) is enabling a new generation of high-performance web applications that rival native apps in speed and capabilities. As Wasm continues to mature, we can expect:</p>
      <ul>
        <li>More desktop-class applications moving to the web</li>
        <li>Complex computational tasks running directly in the browser</li>
        <li>Increased use of languages like Rust, C++, and Go for performance-critical web components</li>
        <li>New frameworks and tools designed specifically for WebAssembly development</li>
      </ul>
      
      <h2>The Evolution of JavaScript and Web Standards</h2>
      <p>JavaScript continues to evolve at a rapid pace, with new features and capabilities being added regularly. Looking ahead:</p>
      <ul>
        <li>JavaScript will continue to adopt features from other languages, making it more powerful and expressive</li>
        <li>Web standards will evolve to support new use cases and technologies</li>
        <li>The line between client and server will continue to blur with isomorphic JavaScript applications</li>
        <li>TypeScript or a similar type system may become a standard part of the JavaScript ecosystem</li>
      </ul>
      
      <h2>Edge Computing and Distributed Web Applications</h2>
      <p>The rise of edge computing is changing how web applications are deployed and run:</p>
      <ul>
        <li>More application logic will run at the edge, closer to users</li>
        <li>Serverless functions will become more powerful and versatile</li>
        <li>Global state management will evolve to handle distributed applications</li>
        <li>New frameworks and tools will emerge to simplify edge development</li>
      </ul>
      
      <h2>Immersive Web Experiences</h2>
      <p>As technologies like WebXR mature, the web will become more immersive and interactive:</p>
      <ul>
        <li>Virtual and augmented reality experiences will become more common on the web</li>
        <li>3D and spatial interfaces will open up new possibilities for user interaction</li>
        <li>The line between physical and digital experiences will continue to blur</li>
        <li>New design paradigms will emerge to address these immersive experiences</li>
      </ul>
      
      <h2>Sustainability and Ethical Development</h2>
      <p>As awareness of the environmental and social impact of technology grows, web development will increasingly focus on sustainability and ethics:</p>
      <ul>
        <li>Energy-efficient coding practices will become more important</li>
        <li>Accessibility and inclusive design will be prioritized from the start</li>
        <li>Privacy-preserving technologies will become standard</li>
        <li>The carbon footprint of web applications will be measured and optimized</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The future of web development is exciting and full of possibilities. By staying informed about emerging trends and technologies, developers can position themselves to create the next generation of web experiences that are faster, more capable, more accessible, and more sustainable than ever before.</p>
    `,
    featured: false,
  },
  {
    id: 5,
    slug: "minimalist-design-principles",
    title: "Minimalist Design Principles for Modern Websites",
    excerpt: "How to apply minimalist design principles to create elegant, functional, and user-friendly websites.",
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "Design",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>Minimalist design has become increasingly popular in web design, and for good reason. By stripping away unnecessary elements and focusing on essentials, minimalist websites can achieve a clean, elegant aesthetic while improving usability and performance.</p>
      
      <h2>Core Principles of Minimalist Web Design</h2>
      
      <h3>1. Simplicity and Clarity</h3>
      <p>At its heart, minimalist design is about simplicity. This means:</p>
      <ul>
        <li>Using clean, uncluttered layouts</li>
        <li>Focusing on essential content and functionality</li>
        <li>Eliminating decorative elements that don't serve a purpose</li>
        <li>Creating clear visual hierarchies to guide users</li>
      </ul>
      
      <h3>2. Negative Space</h3>
      <p>Also known as white space, negative space is a crucial element in minimalist design. Proper use of negative space:</p>
      <ul>
        <li>Creates breathing room around elements</li>
        <li>Improves readability and comprehension</li>
        <li>Directs attention to important content</li>
        <li>Creates a sense of elegance and sophistication</li>
      </ul>
      
      <h3>3. Limited Color Palette</h3>
      <p>Minimalist designs typically use a restrained color palette:</p>
      <ul>
        <li>Often monochromatic or with just 2-3 colors</li>
        <li>Strategic use of color to highlight important elements</li>
        <li>High contrast for readability and accessibility</li>
        <li>Consistent application throughout the interface</li>
      </ul>
      
      <h3>4. Typography as a Design Element</h3>
      <p>In minimalist design, typography often takes center stage:</p>
      <ul>
        <li>Clean, readable fonts</li>
        <li>Limited number of typefaces (usually 1-2)</li>
        <li>Thoughtful use of font weights and sizes to create hierarchy</li>
        <li>Typography as a visual element in its own right</li>
      </ul>
      
      <h3>5. Functional Aesthetics</h3>
      <p>Every element should serve a purpose:</p>
      <ul>
        <li>Form follows function</li>
        <li>No purely decorative elements</li>
        <li>Visual elements that enhance usability and understanding</li>
        <li>Intentional design decisions that support user goals</li>
      </ul>
      
      <h2>Implementing Minimalist Design</h2>
      
      <h3>Start with Content Strategy</h3>
      <p>Minimalist design begins with content. Before designing, determine what content is truly essential and organize it in a logical hierarchy. This might mean:</p>
      <ul>
        <li>Conducting a content audit</li>
        <li>Prioritizing content based on user needs</li>
        <li>Simplifying messaging to its core essence</li>
        <li>Creating a clear information architecture</li>
      </ul>
      
      <h3>Focus on User Experience</h3>
      <p>Minimalism isn't just about aesthetics—it's about creating a better user experience:</p>
      <ul>
        <li>Streamline user flows</li>
        <li>Reduce cognitive load</li>
        <li>Make navigation intuitive and straightforward</li>
        <li>Ensure accessibility for all users</li>
      </ul>
      
      <h3>Iterate and Refine</h3>
      <p>Achieving effective minimalism often requires multiple iterations:</p>
      <ul>
        <li>Start with more elements than you need, then gradually remove</li>
        <li>Test with users to ensure clarity and usability</li>
        <li>Refine based on feedback</li>
        <li>Continuously ask: "Is this element necessary?"</li>
      </ul>
      
      <h2>Common Pitfalls to Avoid</h2>
      
      <h3>Sacrificing Clarity for Aesthetics</h3>
      <p>Don't remove elements that are necessary for understanding or navigation just to achieve a cleaner look.</p>
      
      <h3>Lack of Visual Interest</h3>
      
      <p>Minimalism doesn't mean boring. Use subtle design elements like texture, micro-interactions, or carefully chosen imagery to create visual interest without clutter.</p>
      
      <h3>Poor Contrast and Readability</h3>
      <p>Ensure that text has sufficient contrast against backgrounds and that font sizes are readable across devices.</p>
      
      <h3>Ignoring Mobile Users</h3>
      <p>Minimalist design should work across all devices. What looks clean on desktop might be too sparse on mobile, or vice versa.</p>
      
      <h2>Conclusion</h2>
      <p>Minimalist design, when done well, creates websites that are not only visually appealing but also highly functional and user-friendly. By focusing on simplicity, negative space, limited color palettes, thoughtful typography, and functional aesthetics, you can create modern websites that stand the test of time.</p>
      
      <p>Remember that minimalism is not about removing elements until there's nothing left—it's about distilling your design to its most essential and meaningful components.</p>
    `,
    featured: false,
  },
]

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const { slug } = params

  const contentRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  // Find the current post
  const currentPost = blogPosts.find((post) => post.slug === slug)

  // If post not found, redirect to blog page
  useEffect(() => {
    if (!currentPost) {
      router.push("/blog")
    }
  }, [currentPost, router])

  // Find next and previous posts
  const currentIndex = blogPosts.findIndex((post) => post.slug === slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate header
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
    )

    // Animate content
    gsap.fromTo(
      contentRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [slug])

  if (!currentPost) {
    return null // Will redirect in useEffect
  }

  return (
    <main className="bg-white text-black min-h-screen">
      <Header />

      <article className="pt-32 pb-20">
        {/* Header */}
        <div ref={headerRef} className="px-4 md:px-12 max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/blog"
              className="text-sm flex items-center gap-1 hover:opacity-70 transition-opacity"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <ArrowLeft size={14} />
              <span>Back to Blog</span>
            </Link>
          </div>

          <h1
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
            style={{
              fontFamily: "Playfair Display, serif",
              letterSpacing: "-0.02em",
            }}
          >
            {currentPost.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-1">
              <Calendar size={16} className="opacity-70" />
              <span className="text-sm opacity-70" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {currentPost.date}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <Clock size={16} className="opacity-70" />
              <span className="text-sm opacity-70" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {currentPost.readTime}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <Tag size={16} className="opacity-70" />
              <span className="text-sm font-medium" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {currentPost.category}
              </span>
            </div>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-10">
            <Image
              src={currentPost.image || "/placeholder.svg"}
              alt={currentPost.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="px-4 md:px-12 max-w-3xl mx-auto prose prose-lg"
          style={{ fontFamily: "Montserrat, sans-serif" }}
          dangerouslySetInnerHTML={{ __html: currentPost.content }}
        />

        {/* Share */}
        <div className="px-4 md:px-12 max-w-3xl mx-auto mt-16 flex justify-end">
          <button
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <Share2 size={16} />
            <span>Share this article</span>
          </button>
        </div>

        {/* Next/Prev Navigation */}
        <div className="px-4 md:px-12 max-w-4xl mx-auto mt-16 border-t border-gray-100 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} className="group">
                <div className="flex flex-col h-full">
                  <span
                    className="text-sm flex items-center gap-1 mb-2 opacity-70"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <ArrowLeft size={14} />
                    <span>Previous Article</span>
                  </span>

                  <h3
                    className="text-lg font-medium group-hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: "Playfair Display, serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {prevPost.title}
                  </h3>
                </div>
              </Link>
            )}

            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} className="group md:ml-auto md:text-right">
                <div className="flex flex-col h-full">
                  <span
                    className="text-sm flex items-center gap-1 mb-2 opacity-70 md:justify-end"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <span>Next Article</span>
                    <ArrowRight size={14} />
                  </span>

                  <h3
                    className="text-lg font-medium group-hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: "Playfair Display, serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {nextPost.title}
                  </h3>
                </div>
              </Link>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
