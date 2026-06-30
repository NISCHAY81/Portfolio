import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Java', 'C', 'Python']
    },
    {
      title: 'Web Technologies',
      skills: ['React.js', 'Mantine UI', 'Thymeleaf', 'Spring Boot', 'REST APIs', 'JSON', 'Tailwind CSS']
    },
    {
      title: 'Microservices & Cloud',
      skills: ['Spring Cloud', 'Eureka', 'API Gateway', 'Config Server', 'Resilience4j', 'Docker']
    },
    {
      title: 'Messaging & Streaming',
      skills: ['Apache Kafka', 'RabbitMQ']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'Tools & VCS',
      skills: ['Git', 'GitHub']
    }
  ];

  return (
    <Section id="skills" title="Skills & Technologies">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
          >
            <h3 className="text-lg font-bold text-foreground mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
