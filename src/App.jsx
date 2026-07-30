import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import { FiFolder, FiFileText, FiMail } from 'react-icons/fi';
import about from './assets/about.png';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import About from './components/About';
import emailjs from '@emailjs/browser';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function PortfolioTemplate() {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Hi, I'm Faiza", 'Full Stack Web Developer', 'MERN Stack Learner'],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      startDelay: 300,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-[#490019] text-white min-h-screen font-sans scroll-smooth">
      <Navbar />

      <section
        id="home"
        className="relative flex items-center justify-center min-h-screen pt-28 md:pt-0 px-6 overflow-hidden"
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-black-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 text-center md:text-left">
          <div>
            <p className="text-pink-400 mb-4">Full Stack Web Developer</p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 min-h-90px">
              <span className="bg-gradient-to-r from-pink-500 via-white-200 to-gray-300 bg-clip-text text-transparent">
                <span ref={textRef}></span>
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              I build modern, responsive, and user-friendly web applications using React, Tailwind
              CSS, and the MERN stack. Passionate about creating clean UI and delivering great user
              experiences.
            </p>

            <div className="flex gap-4 flex-wrap mx-9">
              <a href="#projects">
                <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition duration-300 flex items-center gap-2">
                  <FiFolder size={20} />
                  <span>View Projects</span>
                </button>
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300 inline-flex items-center gap-2"
              >
                <FiFileText size={20} />
                <span>View CV</span>
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative py-8">
              <div className="absolute inset-0 bg-gradient-to-r from-white to-pink-500 blur-2xl opacity-30 rounded-full"></div>

              <img
                src={about}
                alt="Developer"
                className="relative w-240px sm:w-300px md:w-[320px] h-auto object-cover rounded-3xl border-2 border-rose-400"
              />
            </div>
          </div>
        </div>
      </section>

      <About />

      <Skills />

      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}
