import styles from "./styles.module.css"
import React from 'react';

export default function About() {
    return (
      <div className="absolute inset-0 z-[999] mx-auto my-auto h-[90%] w-[90%] max-w-[900px] grid place-items-center p-2.5 rounded-xl border border-white/10 bg-black">
        <div className="w-full h-full overflow-y-auto space-y-8 p-4">
          {/* About Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">About Me</h2>
            <p className="text-gray-300 font-light leading-relaxed">
            I am a frontend developer with expertise in HTML, CSS, JavaScript, and React, passionate about creating clean, responsive, and user-friendly interfaces. I have a strong understanding of modern web development principles, ensuring performance and accessibility in every project.
            <br />
            <br />
            Beyond frontend, I have basic backend knowledge, allowing me to effectively communicate and collaborate with backend teams. I am familiar with Node.js, Next.js, Google Cloud, Linux, and Docker, which helps me integrate APIs, optimize deployments, and troubleshoot efficiently.
            </p>
          </section>
  
          {/* Qualifications Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Qualifications</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-white/10 pl-4">
                <h3 className="text-gray-100 font-medium">Certified Web Developer</h3>
                <p className="text-gray-400 text-sm">MASAI  · 2024-2025</p>
              </div>

              <div className="border-l-2 border-white/10 pl-4">
                <h3 className="text-gray-100 font-medium">Certified React Js Developer</h3>
                <p className="text-gray-400 text-sm">Namaste Dev · 2024</p>
              </div>

              <div className="border-l-2 border-white/10 pl-4">
                <h3 className="text-gray-100 font-medium">Certified Frontend Developer</h3>
                <p className="text-gray-400 text-sm">Sheryians Coding School · 2024</p>
              </div>

              <div className="border-l-2 border-white/10 pl-4">
                <h3 className="text-gray-100 font-medium">10+2</h3>
                <p className="text-gray-400 text-sm">Narayana Public School · 2021-2024</p>
              </div>
            </div>
          </section>
  
          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Technical Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['Html, Css', 'JavaScript','React','Next Js' ,'Tailwind CSS', 'Node.js', 'Git','GitHub', 'REST APIs','Google Cloud'].map((skill) => ( 
                <span key={skill} className="bg-gray-800 rounded-full px-4 py-2 text-sm text-gray-100">
                  {skill}
                </span>
              ))}
            </div>
          </section>
  
          {/* Experience Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Experience</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-white/10 pl-4">
                <h3 className="text-gray-100 font-medium">Technical Lead</h3>
                <p className="text-gray-400 text-sm">Vastrakashi · Internship</p>
                <p className="text-gray-300 mt-2 font-light">
                Handling Technology Department. Responsible for developing and maintaining Ecommerce website and developing Internal ERP and company Management Tools.
                </p>
              </div>
            </div>
          </section>
  
          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
            <div className="flex flex-col space-y-2">
              <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white transition-colors">
                contactutkarshverma@gmail.com
              </a>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/yesutkarsh/" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
                <a href="https://github.com/yesutkarsh" className="text-gray-300 hover:text-white transition-colors">GitHub</a>
           
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }