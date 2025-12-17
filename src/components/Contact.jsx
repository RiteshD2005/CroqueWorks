import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    message: '' 
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors({});
    setStatus('sending');
    
    // Simulate API call (replace with your actual API endpoint)
    try {
      // For demo purposes - replace with actual fetch
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful submission
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
      
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "hello@croqueworks.in",
      description: "We respond within 24 hours",
      color: "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      info: "Remote First",
      description: "Serving clients across India",
      color: "bg-gradient-to-r from-green-50 to-green-100 border-green-200",
      iconColor: "text-green-600"
    }
  ];

  const workingHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Emergency Support Only" }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-semibold mb-4 border border-blue-100">
            📞 Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="group p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-xl ${item.color} border ${item.iconColor.replace('text-', 'border-')}`}>
                    <div className={item.iconColor}>
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">{item.title}</h4>
                    <p className="text-gray-800 font-medium mb-1">{item.info}</p>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Working Hours */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white rounded-lg">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Working Hours</h4>
              </div>
              
              <div className="space-y-4">
                {workingHours.map((item, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-blue-100 last:border-0"
                  >
                    <span className="text-gray-700 font-medium">{item.day}</span>
                    <span className="text-gray-900 font-semibold bg-white px-3 py-1 rounded-lg text-sm">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-white/80 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <span className="font-semibold text-blue-600">Quick Response:</span> We will reach you as soon as possible
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Send us a message
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Your Name *
                      </label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className={`w-full bg-gray-50 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400`}
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({...formData, name: e.target.value});
                          if (errors.name) setErrors({...errors, name: ''});
                        }}
                      />
                      {errors.name && (
                        <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.name}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className={`w-full bg-gray-50 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400`}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({...formData, email: e.target.value});
                          if (errors.email) setErrors({...errors, email: ''});
                        }}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+91 98765 43210"
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    <p className="text-gray-500 text-xs">
                      Optional - We'll use this only if we need to call you
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Your Message *
                    </label>
                    <textarea 
                      placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                      rows="6"
                      className={`w-full bg-gray-50 border ${errors.message ? 'border-red-300' : 'border-gray-300'} rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400 resize-none`}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({...formData, message: e.target.value});
                        if (errors.message) setErrors({...errors, message: ''});
                      }}
                    />
                    {errors.message && (
                      <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm">💡</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Tip:</span> The more details you provide about your project, the better we can tailor our response to your needs.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={status === 'sending'}
                      className="w-full py-4 rounded-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:shadow-blue-200/50 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      
                      {status === 'sending' ? (
                        <>
                          <div className="relative z-10 flex items-center gap-3">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Sending your message...</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                          <span className="relative z-10">Send Message</span>
                          <span className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity">🚀</span>
                        </>
                      )}
                    </button>

                    {status === 'success' && (
                      <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl animate-fade-in">
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-green-800">Message sent successfully!</p>
                            <p className="text-green-700 text-sm mt-1">
                              Thank you for reaching out. We'll get back to you within 24 hours.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {status === 'error' && (
                      <div className="mt-4 p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl animate-fade-in">
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0">
                            <AlertCircle className="w-6 h-6 text-red-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-red-800">Something went wrong</p>
                            <p className="text-red-700 text-sm mt-1">
                              Please try again or contact us directly via email/phone.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <p className="text-center text-gray-500 text-sm mt-4">
                      By submitting, you agree to our{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                        Privacy Policy
                      </a>
                      {' '}and{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                        Terms of Service
                      </a>
                    </p>
                  </div>
                </form>
              </div>
              
              {/* Form Footer */}
              <div className="border-t border-gray-200 bg-gray-50 px-8 py-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">No spam, guaranteed</p>
                      <p className="text-gray-600 text-sm">Your information is secure with us</p>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700">Response time:</span> Usually within 2-4 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;