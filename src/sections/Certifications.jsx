import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Web Development MERN Stack',
      issuer: 'Tetra Trion Technologies'
    },
    {
      title: 'Wipro TalentNext Java J2EE',
      issuer: 'Wipro'
    },
    {
      title: 'Programming in Java',
      issuer: 'NPTEL'
    },
    {
      title: 'Spring Boot and Microservices',
      issuer: 'Substring Technologies'
    }
  ];

  return (
    <Section id="certifications" title="Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl"
          >
            <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
              <Award size={24} />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg">{cert.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
