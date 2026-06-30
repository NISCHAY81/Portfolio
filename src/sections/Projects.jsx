import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const featuredProjects = [
    {
      title: 'AI Quiz Generator – Microservices Architecture',
      description: 'Distributed AI-powered quiz platform with API Gateway, Eureka Service Registry, Config Server, Category/Quiz/Question Generator services. Integrated Grok AI to auto-generate quiz questions. Implemented Circuit Breaker, Retry, Rate Limiter (Resilience4j). Used Kafka and RabbitMQ for async messaging. Containerized with Docker, deployed on Kubernetes.',
      tools: ['Java 21', 'Spring Boot', 'Spring Cloud', 'Grok AI', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'Kafka', 'RabbitMQ'],
      githubLink: 'https://github.com/NISCHAY81/AI-Quiz-Generator', // Placeholder to update later
      liveLink: ''
    },
    {
      title: 'IRCTC Backend – Train Booking REST API',
      description: 'Scalable train booking backend with search, seat availability, booking, and user management APIs. JWT-based auth with role-based access control. MySQL schema via JPA/Hibernate. Dockerized (Spring Boot + MySQL), deployed on Kubernetes.',
      tools: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'Kubernetes', 'JWT', 'REST API', 'Maven'],
      githubLink: 'https://github.com/NISCHAY81/IRCTC-Backend', // Placeholder
      liveLink: ''
    },
    {
      title: 'Smart Result – Student Result Management System',
      description: 'Full-stack system to record, calculate, and display student academic performance (SGPA/CGPA). RESTful backend with Thymeleaf frontend, MySQL storage, automated GPA calculations.',
      tools: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL', 'HTML', 'CSS', 'Maven'],
      githubLink: 'https://github.com/NISCHAY81/Smart-Result', // Placeholder
      liveLink: ''
    },
    {
      title: 'Job Portal – Recruitment & Application Management System',
      description: 'Full-stack job portal with Recruiter and Applicant roles. JWT auth with password reset. Recruiter modules for job posting and interview workflow. Applicant features for profile creation and job search. React + Mantine UI frontend, Spring Boot + MongoDB backend.',
      tools: ['React', 'Mantine UI', 'Spring Boot', 'MongoDB', 'REST API', 'JWT'],
      githubLink: 'https://github.com/NISCHAY81/Job-Portal', // Placeholder
      liveLink: ''
    }
  ];

  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
}
