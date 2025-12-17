import React, { useEffect, useRef } from 'react';
import { 
  Code, 
  Palette, 
  Smartphone, 
  BarChart3, 
  Zap, 
  Shield,
  Cloud,
  Server,
  Database,
  Cpu,
  Globe,
  Lock
} from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom Web Development",
    description: "Scalable web applications with modern React, Node.js, and Next.js stack.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "User-centered design systems and interfaces for optimal user experience.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Applications",
    description: "Cross-platform mobile apps using React Native and Flutter.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "E-commerce Solutions",
    description: "Full-featured online stores with UPI, Razorpay, and payment gateway integration.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Backend Development",
    description: "Robust APIs and server-side solutions with Node.js, Python, and Go.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database Design",
    description: "Efficient database architecture with PostgreSQL, MongoDB, and Redis.",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Fast loading, SEO optimized, and high-performance web solutions.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security & Maintenance",
    description: "24/7 monitoring, regular updates, and security hardening.",
    color: "from-teal-500 to-cyan-500"
  }
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when in view
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          } else {
            // Keep visible when out of view
            // Don't remove classes when out of view
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe each card
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-100">
            🔧 Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Full-Stack <span className="gradient-text">Digital Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital services tailored for modern Indian businesses. 
            From concept to deployment, we handle everything.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={(el) => cardRefs.current[index] = el}
              className="service-card opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-300 hover:-translate-y-2"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 shadow-lg`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Custom solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Responsive design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Ongoing support</span>
                </div>
              </div>
              
              <button className="mt-8 w-full py-3 text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl border border-blue-100">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Need a custom solution?
              </h3>
              <p className="text-gray-600">
                We specialize in building custom software for unique business needs.
              </p>
            </div>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-200 transition-all"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Ensure service cards stay visible after animation */
        .service-card {
          will-change: transform, opacity;
        }
        
        .service-card:hover {
          transform: translateY(-8px) !important;
        }
      `}</style>
    </section>
  );
};

export default Services;
