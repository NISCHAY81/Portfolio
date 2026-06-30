import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Moon, Sun, Menu, X, FileText } from 'lucide-react';
import { cn } from '../utils';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        scrolled ? 'bg-background/80 backdrop-blur-md border-border shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="text-xl font-bold tracking-tight text-primary">
            Nischay<span className="text-foreground">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="/resume.pdf" 
              download 
              className="flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <FileText size={16} />
              Resume
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted text-foreground transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted text-foreground transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              download 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-3 py-2 rounded-md text-sm font-medium"
            >
              <FileText size={16} />
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
