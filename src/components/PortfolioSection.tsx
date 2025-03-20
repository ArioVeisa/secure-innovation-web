
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'marketing', name: 'Digital Marketing' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A fully responsive e-commerce solution with secure payment integration.',
      imageColor: 'bg-gradient-to-br from-blue-600/20 to-minetech-navy/50',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Security Audit & Implementation',
      category: 'security',
      description: 'Complete security infrastructure overhaul for a financial services firm.',
      imageColor: 'bg-gradient-to-br from-red-600/20 to-minetech-navy/50',
      tags: ['Penetration Testing', 'Security Protocols', 'Data Encryption']
    },
    {
      id: 3,
      title: 'Digital Marketing Campaign',
      category: 'marketing',
      description: 'Comprehensive marketing strategy that increased client conversion by 150%.',
      imageColor: 'bg-gradient-to-br from-green-600/20 to-minetech-navy/50',
      tags: ['SEO', 'Content Strategy', 'Social Media']
    },
    {
      id: 4,
      title: 'CRM System Development',
      category: 'web',
      description: 'Custom CRM solution tailored for a healthcare provider.',
      imageColor: 'bg-gradient-to-br from-purple-600/20 to-minetech-navy/50',
      tags: ['Angular', 'Express', 'PostgreSQL']
    },
    {
      id: 5,
      title: 'Cybersecurity Training Program',
      category: 'security',
      description: 'Interactive security awareness training portal for enterprise clients.',
      imageColor: 'bg-gradient-to-br from-yellow-600/20 to-minetech-navy/50',
      tags: ['Training Modules', 'Phishing Simulation', 'Security Assessment']
    },
    {
      id: 6,
      title: 'Brand Identity & SEO',
      category: 'marketing',
      description: 'Complete brand overhaul with integrated SEO strategy for an emerging startup.',
      imageColor: 'bg-gradient-to-br from-teal-600/20 to-minetech-navy/50',
      tags: ['Brand Strategy', 'SEO', 'Content Marketing']
    }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[50%] left-[20%] w-96 h-96 bg-minetech-navy/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[30%] w-80 h-80 bg-minetech-cyan/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className="text-minetech-cyan font-medium mb-3 reveal">Our Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">Featured Projects</h2>
          <p className="text-minetech-gray max-w-3xl mx-auto reveal">
            Explore our diverse range of successful projects delivered with precision and excellence.
          </p>
        </div>
        
        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-minetech-cyan text-minetech-dark font-medium'
                  : 'bg-minetech-navy/50 text-minetech-light hover:bg-minetech-navy'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-b from-minetech-navy to-minetech-dark border border-minetech-cyan/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-minetech-cyan/30 hover:translate-y-[-5px] group h-full flex flex-col">
                {/* Project Image Placeholder */}
                <div className={`h-48 ${project.imageColor} flex items-center justify-center p-8`}>
                  <div className="w-20 h-20 rounded-lg border border-white/20 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 16L12 20L20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 12L12 16L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-minetech-gray mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-minetech-navy text-sm rounded-full text-minetech-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center text-minetech-cyan hover:underline gap-1 font-medium"
                  >
                    View Case Study <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
