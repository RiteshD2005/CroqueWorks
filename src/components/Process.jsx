import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = document.querySelectorAll(".process-step, #process .section-title");
      
      gsap.from(elements, {
        scrollTrigger: { 
            trigger: "#process", 
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="py-20 md:py-32 bg-gray-900/50">
      <div className="container mx-auto max-w-7xl px-6 text-center">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-4">Our Process</h2>
        <div className="relative grid md:grid-cols-3 gap-8 mt-16">
          
          {/* Dashed Line */}
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 w-full h-px border-t-2 border-dashed border-slate-700" style={{ marginTop: '-2.5rem' }}></div>

          {/* Step 1 */}
          <div className="process-step relative z-10 bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-700">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-purple-500 h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold text-white ring-8 ring-gray-900/50">1</div>
            <h3 className="text-2xl font-semibold text-white mb-3 mt-8">Consultation</h3>
            <p className="text-slate-400">We discuss your business needs over a call (Google Meet/Zoom) to understand your market goals.</p>
          </div>

          {/* Step 2 */}
          <div className="process-step relative z-10 bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-700">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-pink-500 h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold text-white ring-8 ring-gray-900/50">2</div>
            <h3 className="text-2xl font-semibold text-white mb-3 mt-8">Execution</h3>
            <p className="text-slate-400">Agile development with weekly updates. We integrate Indian payment gateways and SMS alerts.</p>
          </div>

          {/* Step 3 */}
          <div className="process-step relative z-10 bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-700">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-purple-500 h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold text-white ring-8 ring-gray-900/50">3</div>
            <h3 className="text-2xl font-semibold text-white mb-3 mt-8">Handover</h3>
            <p className="text-slate-400">Full source code transfer, hosting setup on AWS/DigitalOcean, and 1 month free support.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;