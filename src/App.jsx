import { useState } from 'react';
import { projects, skills, categories } from './data/projects';
import fullstack from './assets/fullstack.png';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function PortfolioTemplate() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(project => project.category === activeCategory);

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm('service_7d4w0ph', 'template_fdnatpb', form.current, 'e-iX2aHyMa-KB14Eu')
      .then(() => {
        alert('Message sent successfully!');
        form.current.reset();
      })
      .catch(error => {
        console.error(error);
        alert('Failed to send message.');
      });
  };

  return (
    <div className="bg-[#490019] text-white min-h-screen font-sans scroll-smooth">
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-linear-to-r from-white to-pink-500 bg-clip-text text-transparent">
            Developer Faiza
          </h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#home" className="hover:text-pink-400 transition">
              Home
            </a>

            <a href="#about" className="hover:text-pink-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-pink-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-pink-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-pink-400 transition">
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

      <section
        id="home"
        className="relative flex items-center justify-center min-h-screen pt-28 md:pt-0 px-6 overflow-hidden"
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-black-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 text-center md:text-left">
          <div>
            <p className="text-pink-400 mb-4">Full Stack Web Developer</p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hi, I'm{' '}
              <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Faiza
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              I'm a passionate web developer currently learning MERN stack and building modern
              responsive websites with new technologies.
            </p>

            <div className="flex gap-4 flex-wrap mx-9">
              <a href="#projects">
                <button className="px-6 py-3 rounded-2xl bg-linear-to-r from-red-500 to-pink-500 hover:scale-105 transition duration-300">
                  View Projects
                </button>
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300 inline-block"
              >
                View CV
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative py-8">
              <div className="absolute inset-0 bg-linear-to-r from-white to-pink-500 blur-2xl opacity-30 rounded-full"></div>

              <img
                src={fullstack}
                alt="Developer"
                className="relative w-240px sm:w-300px md:w-[320px] h-auto object-cover rounded-3xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
              <p className="text-gray-300 leading-relaxed text-lg">
                I am a beginner web developer passionate about creating modern websites and
                improving my frontend and backend development skills. I enjoy building responsive
                interfaces and learning new technologies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
                <h3 className="text-3xl font-bold text-pink-400">40+</h3>
                <p className="text-gray-300 mt-2">Projects</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
                <h3 className="text-3xl font-bold text-red-300">MERN</h3>
                <p className="text-gray-300 mt-2">Learning Stack</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
                <h3 className="text-3xl font-bold text-red-300">100%</h3>
                <p className="text-gray-300 mt-2">Responsive</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
                <h3 className="text-3xl font-bold text-pink-400">Open</h3>
                <p className="text-gray-300 mt-2">Freelance Work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center hover:scale-105 hover:border-red-500 transition duration-300"
              >
                <p className="font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full transition ${
                  activeCategory === category
                    ? 'bg-pink-500 text-white'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:translate-y-8px transition duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

                  <p className="text-pink-400 mb-4">{project.tech}</p>

                  <p className="text-gray-300 leading-relaxed mb-6">{project.desc}</p>

                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-4 py-2 rounded-xl bg-linear-to-r from-red-500 to-pink-500 text-sm hover:scale-105 transition duration-300"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-4 py-2 rounded-xl border border-white/20 text-sm hover:bg-white/10 transition duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">My Journey</h2>

          <div className="space-y-8 border-l border-white/10 pl-8">
            <div>
              <h3 className="text-xl font-semibold text-pink-400">
                2025 - Started Web Development
              </h3>
              <p className="text-gray-300 mt-2">Started learning HTML, CSS, and JavaScript.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-300">2025 - Learned React</h3>
              <p className="text-gray-300 mt-2">
                Built modern UI projects using React and Tailwind CSS.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-pink-400">2026 - Learning Backend</h3>
              <p className="text-gray-300 mt-2">
                Currently learning Node.js, Express.js, and MongoDB.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

          <p className="text-gray-300 mb-12 text-lg">
            Have a project idea or freelance opportunity? Let's work together.
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none
                focus:border-purple-500
                "
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
              />
            </div>

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 mb-6"
            ></textarea>

            <button className="px-8 py-4 rounded-2xl bg-linear-to-r from-red-400 to-pink-500 hover:scale-105 transition duration-300">
              Send Message
            </button>
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-6 text-center text-gray-300 bg-black/20">
        <h2 className="text-2xl font-bold bg-linear-to-r from-white to-pink-500 bg-clip-text text-transparent">
          Developer Faiza
        </h2>

        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Passionate web developer focused on building clean, modern, and responsive web
          applications.
        </p>

        <p className="text-sm text-gray-300 mt-6">
          © 2026 Developer Faiza Memon.Crafting modern and responsive web experiences!
        </p>
      </footer>
    </div>
  );
}
