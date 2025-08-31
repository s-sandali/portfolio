import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Sparkles, Code, Palette } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Hero = () => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const bioRef = useRef(null);
  const socialRef = useRef(null);
  const scrollRef = useRef(null);
  const decorativeRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Enhanced entrance animations
    tl.fromTo(nameRef.current,
      { opacity: 0, y: 120, rotationX: 90, scale: 0.3, filter: "blur(20px)" },
      { opacity: 1, y: 0, rotationX: 0, scale: 1, filter: "blur(0px)", duration: 1.5, ease: "elastic.out(1, 0.5)" }
    )
    .fromTo(titleRef.current,
      { opacity: 0, x: -100, rotationY: 45, scale: 0.6 },
      { opacity: 1, x: 0, rotationY: 0, scale: 1, duration: 1.2, ease: "back.out(1.5)" },
      "-=0.8"
    )
    .fromTo(bioRef.current,
      { opacity: 0, y: 50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(socialRef.current,
      { opacity: 0, y: 30, scale: 0.5, rotation: 180 },
      { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.8, ease: "back.out(2)" },
      "-=0.4"
    )
    .fromTo(decorativeRef.current,
      { opacity: 0, scale: 0, rotation: -180 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "elastic.out(1, 0.3)" },
      "-=1"
    )
    .fromTo(scrollRef.current,
      { opacity: 0, y: 20, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    // Continuous scroll animation
    gsap.to(scrollRef.current, {
      y: -15,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

    // Floating animation for decorative elements
    gsap.to(decorativeRef.current, {
      y: -20,
      rotation: 10,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: portfolioData.social.github, label: 'GitHub', color: 'from-slate-600 to-slate-700' },
    { icon: Linkedin, href: portfolioData.social.linkedin, label: 'LinkedIn', color: 'from-blue-600 to-blue-700' },
  ];

  // Create animated background particles
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main floating orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1], 
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full opacity-15 blur-2xl"
          animate={{ 
            scale: [1.2, 1, 1.2], 
            rotate: [360, 180, 0],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"
          animate={{ 
            scale: [0.8, 1.1, 0.8], 
            rotate: [0, -90, 180, -90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle}
            className="absolute w-2 h-2 bg-pink-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          
          

          {/* Name with enhanced styling */}
          <h1 
            ref={nameRef}
            className="relative text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
          >
            {/* Background text for glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-500 to-pink-400 bg-clip-text text-transparent blur-sm opacity-50">
              {portfolioData.personal.name}
            </span>
            {/* Main text */}
            <span className="relative bg-gradient-to-r from-pink-500 via-purple-400 to-pink-300 bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </span>
            
            {/* Decorative elements around name */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-60"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40"
              animate={{ scale: [1, 0.8, 1], rotate: [360, 180, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </h1>

          {/* Enhanced Title with icon */}
          <motion.div 
            ref={titleRef}
            className="flex items-center justify-center space-x-3 mb-8"
          >
            <Palette className="w-8 h-8 text-pink-400" />
            <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 bg-clip-text text-transparent">
              {portfolioData.personal.title}
            </h2>
            <Code className="w-8 h-8 text-purple-400" />
          </motion.div>

          {/* Enhanced Bio in a card */}
          <motion.div 
            ref={bioRef}
            className="relative mb-12 max-w-3xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-slate-700/50"></div>
            <p className="relative text-lg md:text-xl text-slate-300 leading-relaxed p-8">
              {portfolioData.personal.bio}
            </p>
            {/* Corner decorations */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div 
            ref={socialRef}
            className="flex justify-center items-center space-x-8 mb-16"
          >
            <div className="flex items-center space-x-1 text-slate-400 text-sm">
              <span>Connect with me</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.div>
            </div>
            
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-4 bg-gradient-to-r ${social.color} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                  whileHover={{ y: -8, scale: 1.1, rotateY: 10 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 30, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: index * 0.2 + 2 }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <social.icon className="relative w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-800 text-slate-200 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.label}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Scroll indicator */}
          <motion.button
            ref={scrollRef}
            onClick={scrollToAbout}
            className="group flex flex-col items-center space-y-3 text-slate-300 hover:text-pink-400 transition-all duration-300"
            whileHover={{ y: 8 }}
          >
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full border border-slate-600/50 group-hover:border-pink-500/50 backdrop-blur-sm transition-all duration-300">
              <span className="text-sm font-medium">Discover More</span>
              <Sparkles className="w-4 h-4 group-hover:animate-spin" />
            </div>
            
            <motion.div
              className="relative"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6" />
              <motion.div
                className="absolute inset-0 border-2 border-pink-400/50 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Custom CSS for grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;