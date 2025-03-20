
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 glass' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <span className="text-2xl font-bold text-white tracking-tight">
            Mine<span className="text-minetech-cyan">tech</span><span className="text-minetech-cyan">.</span>io
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-minetech-light hover:text-minetech-cyan transition-colors link-underline"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button className="hidden md:block btn-outline-cyan px-6 py-2 rounded-md text-sm font-medium">
          Get In Touch
        </button>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-minetech-light hover:text-minetech-cyan"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden glass absolute w-full transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 max-h-[400px]' : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-minetech-light hover:text-minetech-cyan transition-colors block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="btn-outline-cyan px-6 py-2 rounded-md text-sm font-medium self-start">
            Get In Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
