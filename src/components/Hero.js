import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Hero = () => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const bioRef = useRef(null);
  const socialRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(nameRef.current,
      { opacity: 0, y: 100, rotationX: 90, scale: 0.5 },
      { opacity: 1, y: 0, rotationX: 0, scale: 1, duration: 1.2, ease: "back.out(1.7)" }
    )
    .fromTo(titleRef.current,
      { opacity: 0, x: -50, scale: 0.8 },
      { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo(bioRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(socialRef.current,
      { opacity: 0, y: 20, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(scrollRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.2"
    );

    gsap.to(scrollRef.current, {
      y: -10,
      duration: 1.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: portfolioData.social.github, label: 'GitHub' },
    { icon: Linkedin, href: portfolioData.social.linkedin, label: 'LinkedIn' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-800">
      {/* Floating pink glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-pink-500 rounded-full opacity-20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-pink-400 rounded-full opacity-20 blur-2xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-300 rounded-full opacity-30 blur-xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Name */}
          <h1 
            ref={nameRef}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-pink-400 to-slate-300 bg-clip-text text-transparent mb-6"
          >
            {portfolioData.personal.name}
          </h1>

          {/* Title */}
          <h2 
            ref={titleRef}
            className="text-2xl md:text-3xl font-semibold text-slate-200 mb-6"
          >
            {portfolioData.personal.title}
          </h2>

          {/* Bio */}
          <p 
            ref={bioRef}
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {portfolioData.personal.bio}
          </p>

          {/* Social Links */}
          <div 
            ref={socialRef}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-700/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-pink-500/20"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 1.5 }}
              >
                <social.icon className="w-6 h-6 text-slate-200 hover:text-pink-400 transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Scroll indicator */}
          <motion.button
            ref={scrollRef}
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-2 text-slate-300 hover:text-pink-400 transition-colors duration-300"
            whileHover={{ y: 5 }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
