import React from 'react';

const About = () => {
  return (
    <>
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
                <h3 className="text-3xl font-bold text-pink-400">45+</h3>
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
    </>
  );
};

export default About;
