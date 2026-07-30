import React from 'react';
import  {skills} from '../data/projects';

const Skills = () => {
  return (
    <>
      <section id="skills" className="py-24 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center hover:scale-105 hover:border-red-500 transition duration-300"
                >
                  <div className="text-4xl text-pink-400 mb-3 flex justify-center">
                    <Icon />
                  </div>

                  <p className="font-semibold">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
