import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-6 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            I am a B.Tech CSE graduate (2025) from Trident Academy of Technology, Bhubaneswar (CGPA 7.6). 
            Passionate about backend architecture and full-stack development, I specialize in building 
            scalable, high-performance applications.
          </p>
          <p>
            My expertise lies in <strong>Spring Boot Microservices</strong>, RESTful APIs, and distributed systems using 
            <strong> Spring Cloud, Docker, Kafka, RabbitMQ</strong>, and microservice resilience patterns.
          </p>
          <p>
            On the frontend, I am skilled in full-stack development with <strong>React.js</strong> and work extensively 
            with databases like MongoDB, MySQL, and PostgreSQL. I have also built AI-powered applications 
            integrating Grok AI to dynamically generate content.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-1 w-full bg-card border border-border p-8 rounded-2xl shadow-sm"
        >
          <h3 className="text-xl font-bold mb-6 text-foreground">Quick Facts</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-primary font-bold">▹</span>
              <span><strong>Degree:</strong> B.Tech in Computer Science and Engineering</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">▹</span>
              <span><strong>Graduation:</strong> 2025</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">▹</span>
              <span><strong>Location:</strong> India</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">▹</span>
              <span><strong>Focus:</strong> Backend Architecture & Full Stack Web Development</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
