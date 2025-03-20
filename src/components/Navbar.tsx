
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 glass' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center group">
          <span className="text-2xl font-bold text-white tracking-tight relative">
            Mine<span className="text-minetech-cyan">tech</span>
            <span className="text-minetech-cyan relative overflow-hidden inline-block">
              .
              <span className="absolute inset-0 w-full h-full bg-minetech-cyan animate-pulse-glow opacity-50 blur-sm -z-10 group-hover:opacity-100 transition-opacity duration-300"></span>
            </span>
            io
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-minetech-light hover:text-minetech-cyan transition-colors link-underline relative ${
                activeSection === link.href.substring(1) ? 'text-minetech-cyan' : ''
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-minetech-cyan/50 rounded-full"></span>
              )}
            </a>
          ))}
        </nav>

        <button className="hidden md:block btn-outline-cyan px-6 py-2 rounded-md text-sm font-medium relative overflow-hidden group">
          <span className="relative z-10">Get In Touch</span>
          <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(100,255,218,0.2),transparent)] -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
        </button>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-minetech-light hover:text-minetech-cyan relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden glass fixed inset-0 z-40 flex items-center justify-center transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container px-6 py-8 flex flex-col space-y-8 items-center">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-2xl text-minetech-light hover:text-minetech-cyan transition-colors block py-2 ${
                activeSection === link.href.substring(1) ? 'text-minetech-cyan' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
          <button className="btn-outline-cyan px-8 py-3 rounded-md text-base font-medium mt-6">
            Get In Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
