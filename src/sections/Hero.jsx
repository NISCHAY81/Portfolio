import React from 'react';
import { Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Section from '../components/Section';

export default function Hero() {
  return (
    <Section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/20 p-1 overflow-hidden mx-auto">
            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
        >
          Hi, I'm <span className="text-primary">Nischay Kumar Swarnkar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          Java Full Stack Developer | Building scalable Spring Boot Microservices & Full Stack Apps
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full font-medium transition-colors"
          >
            <FileText size={20} />
            Download Resume
          </a>
          
          <div className="flex items-center gap-3 ml-2">
            <a
              href="https://github.com/NISCHAY81"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/nischay-kumar-763188239/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:nischaykumar81@gmail.com"
              className="p-3 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
