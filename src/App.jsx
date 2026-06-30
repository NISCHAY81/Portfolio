import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
