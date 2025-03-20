
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleReveal);
    // Trigger once to reveal elements that are already in view
    handleReveal();
    
    return () => window.removeEventListener("scroll", handleReveal);
  }, []);

  return (
    <section id="home" className="relative pt-20 lg:pt-0 min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[20%] left-[10%] w-40 h-40 bg-minetech-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] right-[15%] w-60 h-60 bg-minetech-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] left-[30%] w-80 h-80 bg-minetech-navy/50 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Lines - Light subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,255,218,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,255,218,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-7/12 lg:pr-12 space-y-8">
            <div className="space-y-5">
              <p className="text-minetech-cyan font-medium reveal">Welcome to Minetech.io</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white reveal">
                Empowering Digital Future with <span className="text-minetech-cyan">Security</span> & <span className="text-minetech-cyan">Innovation</span>
              </h1>
              <p className="text-minetech-gray text-lg max-w-2xl reveal">
                We deliver cutting-edge web development, robust cybersecurity, and strategic digital marketing solutions to transform your business in the digital landscape.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 reveal">
              <a 
                href="#services"
                className="btn-outline-cyan px-8 py-3 rounded-md text-center flex items-center justify-center gap-2 group"
              >
                Get Started 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="px-8 py-3 rounded-md bg-minetech-navy/80 text-white hover:bg-minetech-navy transition-colors text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="lg:w-5/12 mt-12 lg:mt-0 relative reveal">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-minetech-navy border border-minetech-cyan/20 rounded-full flex items-center justify-center animate-float">
                <div className="w-60 h-60 md:w-80 md:h-80 bg-gradient-to-br from-minetech-navy to-minetech-dark border border-minetech-cyan/30 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-minetech-dark/80 border border-minetech-cyan/40 rounded-full flex items-center justify-center animate-glow">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-minetech-cyan">
                      <path d="M40 10L15 25V55L40 70L65 55V25L40 10Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M40 10V40M40 40V70M40 40L15 25M40 40L65 25" stroke="currentColor" strokeWidth="2" />
                      <circle cx="40" cy="40" r="5" fill="currentColor" />
                      <circle cx="15" cy="25" r="3" fill="currentColor" />
                      <circle cx="65" cy="25" r="3" fill="currentColor" />
                      <circle cx="65" cy="55" r="3" fill="currentColor" />
                      <circle cx="15" cy="55" r="3" fill="currentColor" />
                      <circle cx="40" cy="10" r="3" fill="currentColor" />
                      <circle cx="40" cy="70" r="3" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 sm:bottom-0 sm:-right-8 w-20 h-20 border border-minetech-cyan/30 rounded-lg animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-16 h-16 border border-minetech-cyan/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
