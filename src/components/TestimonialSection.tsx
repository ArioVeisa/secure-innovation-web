
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Minetech.io transformed our online presence with their web development expertise. Their attention to detail and commitment to security gave us complete confidence throughout the project.',
      avatar: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO, SecureFinance',
      content: 'The cybersecurity audit and implementation provided by Minetech.io was comprehensive and thorough. They identified vulnerabilities we weren\'t aware of and provided clear solutions.',
      avatar: 'bg-gradient-to-br from-blue-500/20 to-teal-500/20'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Marketing Director, GrowthBrand',
      content: 'Our digital marketing campaigns have seen a 200% increase in conversion since partnering with Minetech.io. Their strategic approach and data-driven insights have been invaluable.',
      avatar: 'bg-gradient-to-br from-amber-500/20 to-red-500/20'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Founder, InnovateApp',
      content: 'From concept to launch, Minetech.io guided our web application development with expertise and professionalism. The result exceeded our expectations in both functionality and design.',
      avatar: 'bg-gradient-to-br from-green-500/20 to-cyan-500/20'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    }
    if (touchEndX - touchStartX > 50) {
      prevSlide();
    }
  };

  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    };

    const stopAutoPlay = () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };

    startAutoPlay();

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('mouseenter', stopAutoPlay);
      slider.addEventListener('mouseleave', startAutoPlay);
    }

    return () => {
      stopAutoPlay();
      if (slider) {
        slider.removeEventListener('mouseenter', stopAutoPlay);
        slider.removeEventListener('mouseleave', startAutoPlay);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 relative bg-minetech-dark/80 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[30%] right-[10%] w-96 h-96 bg-minetech-navy/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[5%] w-72 h-72 bg-minetech-cyan/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid Lines - Light subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,255,218,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,255,218,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className="text-minetech-cyan font-medium mb-3 reveal">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">What Our Clients Say</h2>
          <p className="text-minetech-gray max-w-3xl mx-auto reveal">
            Don't just take our word for it - hear what our clients have to say about their experience working with Minetech.io.
          </p>
        </div>

        <div 
          ref={sliderRef} 
          className="relative max-w-4xl mx-auto reveal"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-b from-minetech-navy to-minetech-dark p-6 md:p-8 rounded-lg border border-minetech-cyan/10 relative">
                    <Quote size={32} className="absolute top-6 left-6 text-minetech-cyan/10" />
                    
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                      <div className={`w-20 h-20 rounded-full ${testimonial.avatar} flex items-center justify-center`}>
                        <span className="text-2xl font-bold text-white">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                        <p className="text-minetech-gray">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-minetech-light text-lg leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-minetech-navy border border-minetech-cyan/20 flex items-center justify-center text-minetech-cyan hover:bg-minetech-navy/80 focus:outline-none focus:ring-2 focus:ring-minetech-cyan/50 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-minetech-navy border border-minetech-cyan/20 flex items-center justify-center text-minetech-cyan hover:bg-minetech-navy/80 focus:outline-none focus:ring-2 focus:ring-minetech-cyan/50 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-minetech-cyan w-6' 
                    : 'bg-minetech-navy hover:bg-minetech-gray'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
