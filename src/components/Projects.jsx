import React, { useState } from 'react';
import { projects, categories } from '../data/projects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(project => project.category === activeCategory);

  return (
    <>
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
                    : 'bg-white/10 hover:bg-white/50'
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
                className="group rounded-3xl overflow-hidden bg-white/10 border border-white/10 hover:border-pink-500 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <div className="inline-block px-3 py-1 mb-4 rounded-full bg-pink-500/15 border border-white-500/30 text-pink-300 text-sm">
                    {project.tech}
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">{project.desc}</p>

                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-red-500 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 rounded-xl border border-white/20 hover:bg-white/10 hover:border-pink-500 transition-all duration-300"
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
    </>
  );
};

export default Projects;
