import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="py-20 bg-white text-black relative">
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 tracking-tight"
              style={{
                fontFamily: "Playfair Display, serif",
                letterSpacing: "-0.02em",
              }}
            >
              Let's Connect
            </h2>
            <p className="text-lg max-w-md opacity-80 mb-8" style={{ fontFamily: "Montserrat, sans-serif" }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="mailto:contactutkarshverma@gmail.com"
              className="text-lg group relative inline-flex items-center overflow-hidden"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
            >
              <span className="relative z-10 pr-2">contactutkarshverma@gmail.com</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              <svg
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3
                  className="text-sm font-medium mb-6 uppercase tracking-wider"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                >
                  Social
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="https://github.com/yesutkarsh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center overflow-hidden"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      <span className="relative z-10 pr-2">GitHub</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      <svg
                        className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group relative inline-flex items-center overflow-hidden"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      <span className="relative z-10 pr-2">LinkedIn</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      <svg
                        className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group relative inline-flex items-center overflow-hidden"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      <span className="relative z-10 pr-2">Twitter</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      <svg
                        className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3
                  className="text-sm font-medium mb-6 uppercase tracking-wider"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                >
                  Links
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#about"
                      className="group relative inline-flex items-center overflow-hidden"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      <span className="relative z-10 pr-2">About</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      <svg
                        className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="group relative inline-flex items-center overflow-hidden"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      <span className="relative z-10 pr-2">Projects</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      <svg
                        className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="group relative inline-flex items-center overflow-hidden"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      <span className="relative z-10 pr-2">Blog</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      <svg
                        className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group relative inline-flex items-center overflow-hidden"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      <span className="relative z-10 pr-2">Resume</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      <svg
                        className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 md:mt-0">
              <p className="text-sm opacity-50" style={{ fontFamily: "Montserrat, sans-serif" }}>
                © {new Date().getFullYear()} Utkarsh Verma. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="black"
            d="M39.9,-65.7C51.5,-58.4,60.8,-47.8,67.2,-35.4C73.6,-23,77.1,-8.7,75.8,5.2C74.5,19.1,68.5,32.6,59.3,43.1C50.1,53.6,37.8,61.1,24.4,66.6C11,72.1,-3.5,75.6,-17.7,73.5C-31.9,71.4,-45.9,63.7,-56.4,52.4C-66.9,41.1,-74,26.2,-77.1,10.2C-80.2,-5.8,-79.3,-22.9,-72.2,-36.2C-65.1,-49.5,-51.8,-59,-38,-65.8C-24.2,-72.6,-10,-76.7,2.3,-80.4C14.6,-84.1,28.3,-73,39.9,-65.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </footer>
  )
}
