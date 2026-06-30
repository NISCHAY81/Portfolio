import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Trident Academy of Technology, Bhubaneswar',
      period: '2021 – 2025',
      score: 'CGPA: 7.6'
    },
    {
      degree: 'Intermediate (12th)',
      institution: 'Pitts Modern School, Gomia, Jharkhand',
      period: '2021',
      score: 'Percentage: 71.60%'
    },
    {
      degree: 'Matriculate (10th)',
      institution: 'DAV Public School, Gomia, Jharkhand',
      period: '2019',
      score: 'Percentage: 70.00%'
    }
  ];

  return (
    <Section id="education" title="Education">
      <div className="space-y-6 mt-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card border border-border p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
              <p className="text-lg text-muted-foreground">{edu.institution}</p>
            </div>
            <div className="md:text-right shrink-0">
              <div className="text-primary font-semibold">{edu.period}</div>
              <div className="text-sm font-medium text-muted-foreground">{edu.score}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
