
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set isLoaded to true after initial render
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Create interactive particle effect
  const particles = [];
  for (let i = 0; i < 30; i++) {
    const size = Math.random() * 3 + 1;
    particles.push(
      <div 
        key={i}
        className="absolute w-1 h-1 rounded-full bg-minetech-cyan/30"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.5 + 0.3,
          animation: `float ${Math.random() * 10 + 15}s linear infinite`,
          animationDelay: `${Math.random() * 10}s`
        }}
      ></div>
    );
  }

  return (
    <section ref={heroRef} id="home" className="relative pt-28 lg:pt-32 min-h-screen flex items-center overflow-hidden">
      {/* Background Elements - More advanced with animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[20%] left-[10%] w-60 h-60 bg-minetech-cyan/5 rounded-full blur-[80px] animate-float-slow"></div>
        <div className="absolute bottom-[30%] right-[15%] w-80 h-80 bg-minetech-cyan/5 rounded-full blur-[100px] animate-float" style={{animationDelay: "2s"}}></div>
        <div className="absolute top-[60%] left-[30%] w-96 h-96 bg-minetech-navy/40 rounded-full blur-[120px] animate-float-slow" style={{animationDelay: "1s"}}></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 z-0">
          {particles}
        </div>

        {/* Mouse-following glow effect */}
        <div 
          className="absolute w-96 h-96 rounded-full blur-[150px] bg-minetech-cyan/5 pointer-events-none transition-all duration-1000 ease-out"
          style={{ 
            left: `${mousePosition.x - 200}px`, 
            top: `${mousePosition.y - 200}px`,
            opacity: isLoaded ? 0.6 : 0 
          }}
        ></div>
      </div>

      {/* Grid Lines - Enhanced subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,255,218,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,255,218,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-7/12 lg:pr-12 space-y-8 reveal-stagger">
            {/* Added header/subtitle tag above the main title */}
            <div className="space-y-5">
              <p className={`text-minetech-cyan font-medium transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: "0.2s"}}>
                Welcome to Vint.io
              </p>
              
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: "0.4s"}}>
                Empowering Digital Future with <span className="text-gradient">Security</span> & <span className="text-gradient">Innovation</span>
              </h1>
              <p className={`text-minetech-gray text-lg max-w-2xl transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: "0.6s"}}>
                We deliver cutting-edge web development, robust cybersecurity, and strategic digital marketing solutions to transform your business in the digital landscape.
              </p>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: "0.8s"}}>
              <a 
                href="#services"
                className="btn-outline-cyan px-8 py-3 rounded-md text-center flex items-center justify-center gap-2 group relative"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-minetech-cyan/10 via-minetech-cyan/20 to-transparent rounded-md"></div>
              </a>
              <a
                href="#about"
                className="px-8 py-3 rounded-md bg-minetech-navy/80 text-white hover:bg-minetech-navy transition-all duration-300 text-center relative overflow-hidden group"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent bg-[length:50%_100%] bg-no-repeat bg-[position:100%_0] group-hover:bg-[position:-50%_0]"></div>
              </a>
            </div>
          </div>
          
          <div className={`lg:w-5/12 mt-12 lg:mt-0 relative transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: "1s"}}>
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-minetech-navy border border-minetech-cyan/20 rounded-full flex items-center justify-center animate-float">
                <div className="w-60 h-60 md:w-80 md:h-80 bg-gradient-to-br from-minetech-navy to-minetech-dark border border-minetech-cyan/30 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-minetech-dark/80 border border-minetech-cyan/40 rounded-full flex items-center justify-center animate-glow relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(100,255,218,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-minetech-cyan relative z-10">
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
              
              {/* Floating decorative elements */}
              <div className="absolute -bottom-2 -right-2 sm:bottom-0 sm:-right-8 w-20 h-20 border border-minetech-cyan/30 rounded-lg animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-16 h-16 border border-minetech-cyan/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Added light trails effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="absolute top-0 left-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-minetech-cyan/20 to-transparent"></div>
                <div className="absolute top-1/2 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-minetech-cyan/20 to-transparent"></div>
                
                {/* Added circular light trail */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-minetech-cyan/10 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] border border-minetech-cyan/5 rounded-full"></div>
              </div>

              {/* Moving light dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-[300px] h-[300px]">
                  <div 
                    className="absolute w-2 h-2 bg-minetech-cyan rounded-full"
                    style={{
                      animation: "orbit 10s linear infinite"
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
        }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
