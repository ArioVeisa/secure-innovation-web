
import React from 'react';
import ServiceCard from './ServiceCard';
import { Computer, Shield, Megaphone } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "We build modern, responsive, and user-friendly websites and web applications tailored to your business needs.",
      icon: Computer,
      features: [
        "Custom Website Development",
        "Progressive Web Applications",
        "E-commerce Solutions",
        "CMS Implementation",
        "API Development & Integration"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with our comprehensive cybersecurity solutions designed to safeguard your digital assets.",
      icon: Shield,
      features: [
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Audits",
        "Data Protection Services",
        "Incident Response Planning"
      ]
    },
    {
      title: "Digital Marketing",
      description: "Boost your online presence and reach your target audience with our strategic digital marketing services.",
      icon: Megaphone,
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Content Strategy & Creation",
        "Email Marketing Campaigns",
        "Analytics & Performance Tracking"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-minetech-dark/80">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute bottom-0 left-[10%] w-80 h-80 bg-minetech-navy/50 rounded-full blur-3xl"></div>
        <div className="absolute top-[20%] right-[5%] w-72 h-72 bg-minetech-cyan/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid Lines - Light subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,255,218,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,255,218,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className="text-minetech-cyan font-medium mb-3 reveal">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">What We Offer</h2>
          <p className="text-minetech-gray max-w-3xl mx-auto reveal">
            We provide comprehensive digital solutions designed to help your business thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
