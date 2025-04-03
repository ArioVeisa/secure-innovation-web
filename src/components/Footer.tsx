
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative z-10 bg-minetech-dark/90 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute bottom-0 left-[10%] w-64 h-64 bg-minetech-navy/30 rounded-full blur-3xl"></div>
        <div className="absolute top-[10%] right-[20%] w-48 h-48 bg-minetech-cyan/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid Lines - Light subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,255,218,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,255,218,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="border-t border-minetech-cyan/10 relative z-10">
        <div className="container mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <a href="#home" className="flex items-center mb-6">
                <span className="text-2xl font-bold text-white tracking-tight">
                  Vint<span className="text-minetech-cyan">.</span>io
                </span>
              </a>
              <p className="text-minetech-gray mb-6">
                Empowering businesses with cutting-edge web development, cybersecurity, and digital marketing solutions.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-minetech-light hover:text-minetech-cyan transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-minetech-light hover:text-minetech-cyan transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-minetech-light hover:text-minetech-cyan transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-minetech-light hover:text-minetech-cyan transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6 text-minetech-light">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-minetech-gray hover:text-minetech-cyan transition-colors">Web Development</a>
                </li>
                <li>
                  <a href="#services" className="text-minetech-gray hover:text-minetech-cyan transition-colors">Cybersecurity</a>
                </li>
                <li>
                  <a href="#services" className="text-minetech-gray hover:text-minetech-cyan transition-colors">Digital Marketing</a>
                </li>
                <li>
                  <a href="#services" className="text-minetech-gray hover:text-minetech-cyan transition-colors">UI/UX Design</a>
                </li>
                <li>
                  <a href="#services" className="text-minetech-gray hover:text-minetech-cyan transition-colors">E-commerce Solutions</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6 text-minetech-light">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-minetech-gray hover:text-minetech-cyan transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#portfolio" className="text-minetech-gray hover:text-minetech-cyan transition-colors">Our Work</a>
                </li>
                <li>
                  <a href="#" className="text-minetech-gray hover:text-minetech-cyan transition-colors">Careers</a>
                </li>
                <li>
                  <a href="#testimonials" className="text-minetech-gray hover:text-minetech-cyan transition-colors">Testimonials</a>
                </li>
                <li>
                  <a href="#" className="text-minetech-gray hover:text-minetech-cyan transition-colors">Blog</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6 text-minetech-light">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-minetech-cyan mt-1">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <a href="mailto:info@vint.io" className="text-minetech-gray hover:text-minetech-cyan transition-colors">info@vint.io</a>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-minetech-cyan mt-1">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="tel:+11234567890" className="text-minetech-gray hover:text-minetech-cyan transition-colors">+1 (123) 456-7890</a>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-minetech-cyan mt-1">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-minetech-gray">Silicon Valley, CA, USA</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-minetech-cyan/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-minetech-gray text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} PT. Veisa Digital Nusantara. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-minetech-gray text-sm hover:text-minetech-cyan transition-colors">Privacy Policy</a>
              <a href="#" className="text-minetech-gray text-sm hover:text-minetech-cyan transition-colors">Terms of Service</a>
              <a href="#" className="text-minetech-gray text-sm hover:text-minetech-cyan transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-minetech-navy border border-minetech-cyan/20 text-minetech-cyan hover:bg-minetech-navy/80 focus:outline-none focus:ring-2 focus:ring-minetech-cyan/50 transition-all z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
