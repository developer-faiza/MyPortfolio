import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0
      }
    );

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent">
            Developer Faiza
          </h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a
              href="#home"
              className={`pb-1 border-b-2 transition ${
                activeSection === 'home'
                  ? 'border-pink-500 text-pink-400'
                  : 'border-transparent hover:text-pink-400'
              }`}
            >
              Home
            </a>

            <a
              href="#about"
              className={`pb-1 border-b-2 transition ${
                activeSection === 'about'
                  ? 'border-pink-500 text-pink-400'
                  : 'border-transparent hover:text-pink-400'
              }`}
            >
              About
            </a>

            <a
              href="#skills"
              className={`pb-1 border-b-2 transition ${
                activeSection === 'skills'
                  ? 'border-pink-500 text-pink-400'
                  : 'border-transparent hover:text-pink-400'
              }`}
            >
              Skills
            </a>

            <a
              href="#projects"
              className={`pb-1 border-b-2 transition ${
                activeSection === 'projects'
                  ? 'border-pink-500 text-pink-400'
                  : 'border-transparent hover:text-pink-400'
              }`}
            >
              Projects
            </a>

            <a
              href="#contact"
              className={`pb-1 border-b-2 transition ${
                activeSection === 'contact'
                  ? 'border-pink-500 text-pink-400'
                  : 'border-transparent hover:text-pink-400'
              }`}
            >
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition duration-300"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 z-40">
          <div className="flex flex-col items-center gap-6 py-8 text-lg">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-400 transition"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-400 transition"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-400 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-400 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      )}
      ;
    </>
  );
};

export default Navbar;
