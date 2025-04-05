
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection.tsx';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Set isLoaded to true after initial render for entrance animations
    setIsLoaded(true);

    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100; // Reduced to trigger animations earlier
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    const handleScroll = () => {
      // Handle section reveals
      handleReveal();
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section;
          break;
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once to reveal elements that are already in view
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add background particles - but fewer for a cleaner look
  const particles = [];
  for (let i = 0; i < 40; i++) {
    const size = Math.random() * 2 + 1;
    const opacity = Math.random() * 0.4 + 0.1;
    particles.push(
      <div 
        key={i}
        className="absolute bg-minetech-cyan rounded-full animate-float-slow"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: opacity,
          animationDuration: `${Math.random() * 20 + 10}s`,
          animationDelay: `${Math.random() * 10}s`
        }}
      />
    );
  }

  return (
    <div className={`min-h-screen w-full overflow-hidden bg-minetech-dark transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(10,25,47,0.2),transparent_70%)] pointer-events-none"></div>
      
      {/* Advanced Grid Lines */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(100,255,218,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,255,218,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      
      {/* Animated particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles}
      </div>
      
      {/* Glowing orbs */}
      <div className="fixed top-1/4 right-1/4 w-96 h-96 bg-minetech-navy/30 rounded-full blur-3xl animate-float-slow pointer-events-none"></div>
      <div className="fixed bottom-1/3 left-1/3 w-80 h-80 bg-minetech-cyan/10 rounded-full blur-3xl animate-float pointer-events-none" style={{animationDelay: "2s"}}></div>
      
      <Navbar activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
