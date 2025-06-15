import React, { useState, useEffect } from 'react';
import { Award, ArrowRight, Play, Sparkles, Code, Zap, Rocket } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Animated text rotations
  const rotatingTexts = [
    "Sistem Manajemen Modern",
    "Kecerdasan Buatan Terdepan", 
    "Solusi Teknologi Inovatif",
    "Platform Digital Terintegrasi"
  ];

  // Floating particles data
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10
  }));

  useEffect(() => {
    // Trigger fade-in animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Text rotation animation
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  useEffect(() => {
    // Mouse movement tracking for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-purple-400/20 animate-float"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}

        {/* Gradient Overlays with Mouse Parallax */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 transition-all duration-1000"
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)`
          }}
        />
        
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge with Fade Animation */}
        <div 
          className={`inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-purple-200 text-sm mb-8 border border-white/20 shadow-lg transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <Sparkles className="w-5 h-5 mr-3 animate-pulse" />
          <span className="font-medium">Inovasi Teknologi Terdepan Indonesia</span>
          <Award className="w-5 h-5 ml-3 text-yellow-400" />
        </div>
        
        {/* Main Title with Staggered Animation */}
        <div className="mb-8">
          <h1 
            className={`text-6xl md:text-8xl font-bold mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              LINTARA
            </span>
          </h1>
          
          <div 
            className={`text-2xl md:text-3xl font-semibold text-purple-200 mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <span className="inline-block">Lembaga Inovasi dan Teknologi</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Nusantara
            </span>
          </div>
        </div>

        {/* Rotating Text with Fade Animation */}
        <div 
          className={`h-16 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <p className="text-xl md:text-2xl text-slate-300 font-medium ">
            Mengembangkan{' '}
            <span className="relative inline-block min-w-[320px] pl-4">
              <span 
                key={currentText}
                className="absolute -inset-6.5 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-white animate-fade-in"
              >
                {rotatingTexts[currentText]}
              </span>
            </span>
          </p>
        </div>
        
        {/* Description with Fade */}
        <p 
          className={`text-lg md:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          Berkomitmen memajukan Indonesia melalui inovasi teknologi berkelanjutan. 
          Kami menghadirkan solusi cerdas berbasis AI, sistem manajemen terintegrasi, 
          dan platform digital yang mengubah cara kerja industri modern.
        </p>
        
        {/* Action Buttons with Staggered Animation */}
        <div 
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <button 
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            <span className="relative flex items-center cursor-pointer">
              <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Jelajahi Proyek
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={scrollToContact}
            className="group px-8 py-4 border-2 border-purple-400/50 backdrop-blur-sm rounded-full font-semibold text-purple-200 hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative flex items-center cursor-pointer">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform " />
              Hubungi Kami
            </span>
          </button>
        </div>

        {/* Feature Icons with Animation */}
        <div 
          className={`flex justify-center items-center space-x-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '1400ms' }}
        >
          {[
            { icon: <Code className="w-6 h-6" />, label: "Development" },
            { icon: <Zap className="w-6 h-6" />, label: "Performance" },
            { icon: <Sparkles className="w-6 h-6" />, label: "Innovation" }
          ].map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center space-y-2 text-slate-400 hover:text-purple-300 transition-colors duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-full border border-slate-600/50 flex items-center justify-center group-hover:border-purple-400/50 group-hover:bg-purple-400/10 transition-all duration-300">
                {item.icon}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '1600ms' }}
      >
        <div className="flex flex-col items-center text-slate-400 animate-bounce">
          <span className="text-sm mb-2">Scroll untuk menjelajah</span>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

   
    </section>
  );
};

export default HeroSection;