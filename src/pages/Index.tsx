
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

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
        } else {
          // Optional: remove active if you want animations to replay when scrolling back up
          // element.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleReveal);
    // Trigger once to reveal elements that are already in view
    handleReveal();
    
    return () => window.removeEventListener("scroll", handleReveal);
  }, []);

  return (
    <div className={`min-h-screen w-full overflow-hidden bg-minetech-dark transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(10,25,47,0.15),transparent_70%)] pointer-events-none"></div>
      <Navbar />
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
