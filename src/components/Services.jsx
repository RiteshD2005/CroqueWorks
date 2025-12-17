// Services.jsx
import React, { useEffect } from 'react';
import { 
  Code, 
  Palette, 
  Smartphone, 
  BarChart3, 
  Zap, 
  Shield 
} from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom Web Development",
    description: "Scalable web applications with modern tech stack",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "User-centered design for optimal experience",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "E-commerce Solutions",
    description: "Online stores with UPI & payment gateway",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Fast loading & SEO optimized websites",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Maintenance & Support",
    description: "24/7 monitoring & regular updates",
    color: "from-indigo-500 to-blue-500"
  }
];

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.service-card').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Full-Stack Digital Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital services tailored for Indian businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card opacity-0 translate-y-4 service-card bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                  Custom development
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                  Responsive design
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>
                  Ongoing support
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .service-card:nth-child(1) { animation-delay: 0.1s; }
        .service-card:nth-child(2) { animation-delay: 0.2s; }
        .service-card:nth-child(3) { animation-delay: 0.3s; }
        .service-card:nth-child(4) { animation-delay: 0.4s; }
        .service-card:nth-child(5) { animation-delay: 0.5s; }
        .service-card:nth-child(6) { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
};

export default Services;