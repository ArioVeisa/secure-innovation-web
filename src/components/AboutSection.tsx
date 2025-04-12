
import React from 'react';
import { Shield, Rocket, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[30%] right-[10%] w-96 h-96 bg-minetech-navy/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col">
          <div className="text-center mb-16">
            <p className="text-minetech-cyan font-medium mb-3 reveal">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">Who We Are & What We Do</h2>
            <p className="text-minetech-gray max-w-3xl mx-auto reveal">
              Vint.io is a forward-thinking digital solutions provider, focused on creating secure, innovative, and efficient digital experiences that solve complex business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <div className="reveal">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-minetech-gray">
                  To be at the forefront of digital transformation, empowering businesses with cutting-edge technologies and solutions that secure their future in an ever-evolving digital landscape.
                </p>
              </div>

              <div className="reveal">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-minetech-gray">
                  We are committed to delivering innovative digital solutions that are secure, scalable, and tailored to each client's unique needs, enabling them to thrive in today's competitive market.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 reveal">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-minetech-cyan/10 flex items-center justify-center">
                    <Shield size={20} className="text-minetech-cyan" />
                  </div>
                  <span className="text-minetech-light">Security First</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-minetech-cyan/10 flex items-center justify-center">
                    <Rocket size={20} className="text-minetech-cyan" />
                  </div>
                  <span className="text-minetech-light">Innovative Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-minetech-cyan/10 flex items-center justify-center">
                    <Globe size={20} className="text-minetech-cyan" />
                  </div>
                  <span className="text-minetech-light">Global Reach</span>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 relative reveal">
              <div className="relative p-1.5 rounded-lg border border-minetech-cyan/30 bg-gradient-to-br from-minetech-navy to-minetech-dark overflow-hidden">
                <div className="rounded-lg overflow-hidden relative z-10">
                  <div className="aspect-[4/3] w-full bg-minetech-navy/50 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="h-40 w-40 rounded-full bg-minetech-navy/80 border border-minetech-cyan/20 mx-auto mb-4 flex items-center justify-center">
                        <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-minetech-cyan">
                          <path d="M40 10L15 25V55L40 70L65 55V25L40 10Z" stroke="currentColor" strokeWidth="2" />
                          <path d="M40 10V40M40 40V70M40 40L15 25M40 40L65 25" stroke="currentColor" strokeWidth="2" />
                          <circle cx="40" cy="40" r="5" fill="currentColor" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-minetech-light">Founded in 2022</h3>
                      <p className="text-sm text-minetech-gray">
                        We've helped over 100+ companies across various industries establish and enhance their digital presence.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-5 left-5 w-20 h-20 border border-minetech-cyan/10 rounded-lg"></div>
                <div className="absolute bottom-3 right-5 w-16 h-16 border border-minetech-cyan/10 rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-minetech-cyan/5 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
