// Hero.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import RobotModel from './RobotModel';
import TechBackground from './TechBackground';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden bg-gradient-to-b from-white to-blue-50"
    >
      {/* TECH BACKGROUND — ADJUSTED FOR LIGHT THEME */}
      <TechBackground />

      {/* MAIN CONTENT */}
      <div className="relative z-10 container mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Text */}
        <div className="text-center md:text-left">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            🚀 Make Your Imagination Real 
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Digitizing India's
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Future Brands.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Premium web development & design for Indian Startups & SMEs. 
            Fast, scalable, and UPI-payment ready solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a 
              href="#portfolio" 
              className="px-8 py-3 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <span>View Projects</span>
              <span>→</span>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 flex items-center justify-center gap-2"
            >
              <span>Book Consultation</span>
              <span>📅</span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 justify-center md:justify-start">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">25+</div>
              <div className="text-gray-500 text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-gray-500 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Robot Model Container */}
        <div className="relative h-[400px] md:h-[600px] w-full">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl shadow-2xl transform rotate-3"></div>
          <div className="absolute inset-0 bg-white rounded-3xl shadow-xl -rotate-1"></div>
          <div className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-white shadow-inner">
            <Canvas camera={{ position: [0, 0, 2.5], fov: 75 }}>
              <ambientLight intensity={1} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <pointLight position={[-3, -2, 2]} color="#4f46e5" intensity={2} />
              <RobotModel />
              <Environment preset="city" />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;