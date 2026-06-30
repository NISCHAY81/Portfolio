import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, tools, githubLink, liveLink }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
    >
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <FaGithub size={18} />
              Code
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
