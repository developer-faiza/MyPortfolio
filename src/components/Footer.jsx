import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiFolder, FiFileText, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <>
      <footer className="border-t border-white/10 py-10 px-6 text-center text-gray-300 bg-black/20">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent">
          Developer Faiza
        </h2>

        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Passionate web developer focused on building clean, modern, and responsive web
          applications.
        </p>

        <p className="text-sm text-gray-300 mt-6">
          © 2026 Developer Faiza Memon.Crafting modern and responsive web experiences!
        </p>

        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a
            href="https://github.com/developer-faiza"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl p-3 rounded-full bg-white/10 hover:bg-pink-500 hover:scale-110 transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/developer-faiza-memon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl p-3 rounded-full bg-white/10 hover:bg-pink-500 hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:developerfaizamemon@gmail.com"
            className="text-2xl p-3 rounded-full bg-white/10 hover:bg-pink-500 hover:scale-110 transition-all duration-300"
          >
            <FiMail />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
