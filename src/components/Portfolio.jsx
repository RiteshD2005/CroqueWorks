// Portfolio.jsx
import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/projects';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#portfolio .section-title", {
        scrollTrigger: { 
          trigger: "#portfolio", 
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out"
      });
      
      gsap.from(".portfolio-card", {
        scrollTrigger: { 
          trigger: "#portfolio", 
          start: "top 85%",
          stagger: 0.1
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out"
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Our Work
          </span>
          <h2 className="section-title text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Made in India, for the World
          </h2>
          <p className="section-title text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative solutions crafted for modern Indian businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedProject(project)}
              className="portfolio-card cursor-pointer group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML += '<div class="flex items-center justify-center h-full text-gray-400">Image Coming Soon</div>';
                    }} 
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📱</div>
                      <div className="text-sm">Preview Image</div>
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-blue-700">
                    {project.category || "Web App"}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className={`transform transition-transform duration-300 ${hoveredCard === project.id ? 'translate-x-0' : 'translate-x-2'}`}>
                    →
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.shortDescription || "Click to view project details"}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags && project.tags.slice(0, 3).map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup - Light Theme */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setSelectedProject(null)}></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-4xl border border-gray-200">
                
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="absolute top-4 right-4 z-20 bg-white hover:bg-gray-100 text-gray-500 hover:text-gray-700 rounded-full p-2 transition-colors shadow-md"
                >
                  ✕
                </button>

                {/* Image Gallery */}
                <div className="relative h-80 md:h-96 bg-gradient-to-br from-blue-50 to-purple-50">
                  {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                    <div className="flex overflow-x-auto snap-x snap-mandatory w-full h-full scrollbar-hide">
                      {selectedProject.gallery.map((img, index) => (
                        <img 
                          key={index} 
                          src={img} 
                          alt={`${selectedProject.title} - ${index + 1}`}
                          className="w-full h-full object-cover flex-shrink-0 snap-center"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center text-gray-400">
                        <div className="text-6xl mb-4">🎨</div>
                        <p>No gallery images available</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {selectedProject.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-600">
                        <span className="text-sm">{selectedProject.date || "2024"}</span>
                        <span className="text-sm">•</span>
                        <span className="text-sm">{selectedProject.type || "Web Development"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags && selectedProject.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-sm font-medium bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="flex gap-4 border-t border-gray-200 pt-6">
                    {selectedProject.github && (
                      <a 
                        href={selectedProject.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-xl font-medium transition-colors"
                      >
                        <span>View Code</span>
                        <span>👨‍💻</span>
                      </a>
                    )}
                    {selectedProject.live && (
                      <a 
                        href={selectedProject.live} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-blue-200"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;