import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: 'Web Development Intern (MERN Stack)',
      company: 'Tetra Trion Technologies Pvt. Ltd.',
      period: 'Jan 2025 – Mar 2025',
      location: 'Remote, India',
      description: [
        'Successfully completed a 3-month internship in Web Development focusing on the MERN stack.',
        'Gained hands-on experience in building responsive full-stack web applications using MongoDB, Express.js, React.js, and Node.js.',
        'Collaborated on live projects under the mentorship of senior developers to enhance dynamic web functionality.',
        'Applied front-end and back-end integration techniques, improving API efficiency and UI performance.'
      ]
    }
  ];

  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8 mt-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-0"
          >
            <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
              <div className="mb-4 md:mb-0 md:col-span-1 pt-1 md:text-right">
                <span className="text-sm font-semibold text-primary">{exp.period}</span>
                <div className="text-sm text-muted-foreground mt-1">{exp.location}</div>
              </div>
              
              <div className="md:col-span-3 relative pb-8 md:border-l border-border md:pl-8">
                {/* Timeline dot */}
                <div className="hidden md:block absolute w-4 h-4 rounded-full bg-primary -left-[9px] top-1.5 border-4 border-background"></div>
                
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <h4 className="text-lg font-medium text-muted-foreground mb-4">{exp.company}</h4>
                
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1 text-xs">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
