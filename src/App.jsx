import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Header shadow on scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          setIsMenuOpen(false);
        }
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="antialiased font-['Inter'] bg-white text-gray-800">
      
      {/* Header */}
      <header 
        id="header" 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          <a 
            href="#" 
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2"
          >
            <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm">
              CW
            </span>
            CroqueWorks
            <span className="text-gray-400">.in</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#services" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium group flex items-center gap-1"
            >
              <span>Services</span>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="#portfolio" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium group flex items-center gap-1"
            >
              <span>Portfolio</span>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="#process" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium group flex items-center gap-1"
            >
              <span>Process</span>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium group flex items-center gap-1"
            >
              <span>Contact</span>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="#contact" 
              className="ml-4 px-6 py-3 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5"
            >
              Get Quote (INR)
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto max-w-7xl px-6 py-4 space-y-4">
              <a 
                href="#services" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100"
              >
                Services
              </a>
              <a 
                href="#portfolio" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100"
              >
                Portfolio
              </a>
              <a 
                href="#process" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100"
              >
                Process
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100"
              >
                Contact
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-4 rounded-lg text-white font-semibold text-center bg-gradient-to-r from-blue-600 to-purple-600 mt-4"
              >
                Get Quote (INR)
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-b from-white to-blue-50 border-t border-gray-200">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <a href="#" className="inline-flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                <span className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                  CW
                </span>
                CroqueWorks.in
              </a>
              <p className="text-gray-600 text-sm leading-relaxed">
                Premium web development and design services for Indian startups and SMEs. Fast, scalable, and UPI-ready solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors">
                  📱
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors">
                  💼
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors">
                  📧
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">Portfolio</a>
                </li>
                <li>
                  <a href="#process" className="text-gray-600 hover:text-blue-600 transition-colors">Process</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6 text-lg">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Web Development</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">UI/UX Design</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">E-commerce</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Mobile Apps</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6 text-lg">Contact Us</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span>📍</span>
                  <span>Bengaluru, Karnataka, India</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📧</span>
                  <span>hello@croqueworks.in</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📱</span>
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>⏰</span>
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} CroqueWorks.in. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Refund Policy</a>
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-4">
              Registered in Bengaluru, Karnataka, India • GSTIN: 29AAACC4175L1Z5
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      >
        <span className="text-xl">💬</span>
        <span className="hidden group-hover:inline ml-2 text-sm font-medium">Chat Now</span>
      </a>
    </div>
  );
}

export default App;