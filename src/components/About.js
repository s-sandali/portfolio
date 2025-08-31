import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Download, Github, Linkedin } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const photoRef = useRef(null);
  const contentRef = useRef(null);

  // Helper function to dynamically import profile photo
  const getProfileImage = () => {
    try {
      const photoPath = portfolioData.personal.photo;
      const cleanPath = photoPath.replace(/^\/+/, '');
      
      if (cleanPath.includes('assets/')) {
        const relativePath = cleanPath.replace('assets/', '../assets/');
        return require(`../${relativePath}`);
      }
      
      if (!cleanPath.includes('/')) {
        return require(`../assets/${cleanPath}`);
      }
      
      return require(`../assets/${cleanPath}`);
    } catch (error) {
      console.warn(`Profile image not found: ${portfolioData.personal.photo}`);
      return null;
    }
  };

  useEffect(() => {
    if (inView) {
      if (photoRef.current) {
        photoRef.current.style.transform = 'scale(1) rotate(0deg)';
        photoRef.current.style.opacity = '1';
      }
      if (contentRef.current) {
        contentRef.current.style.transform = 'translateX(0)';
        contentRef.current.style.opacity = '1';
      }
    }
  }, [inView]);

  const contactInfo = [
    { icon: Mail, text: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
    { icon: Phone, text: portfolioData.personal.phone, href: `tel:${portfolioData.personal.phone}` },
    { icon: MapPin, text: portfolioData.personal.location, href: null }
  ];

  const profileImage = getProfileImage();

  return (
    <section id="about" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-slate-100 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-pink-500 to-slate-400 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.p 
              className="text-xl text-slate-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
             Driven by curiosity and powered by code
            </motion.p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Photo Section */}
            <motion.div 
              className="lg:col-span-2 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Decorative background card */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-slate-700/40 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-slate-600/30 to-pink-400/20 rounded-3xl transform -rotate-2 scale-102"></div>
                
                {profileImage && (
                  <div 
                    ref={photoRef}
                    className="relative w-full aspect-[4/5] mx-auto rounded-3xl overflow-hidden shadow-2xl transform scale-0 rotate-6 opacity-0 transition-all duration-1000 ease-out border-4 border-slate-700/50 backdrop-blur-sm"
                  >
                    <img 
                      src={profileImage} 
                      alt={portfolioData.personal.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Image overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
                    
                    {/* Decorative floating elements */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full opacity-90 animate-bounce-slow shadow-lg"></div>
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full opacity-80 animate-pulse shadow-md"></div>
                    <div className="absolute top-8 -left-6 w-6 h-6 bg-slate-400 rounded-full opacity-60 animate-ping"></div>
                  </div>
                )}

                {!profileImage && (
                  <div className="w-full aspect-[4/5] bg-gradient-to-br from-pink-500/20 to-slate-700/40 rounded-3xl flex items-center justify-center">
                    <div className="text-6xl opacity-50">👤</div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div 
              ref={contentRef}
              className="lg:col-span-3 space-y-8 transform translate-x-10 opacity-0 transition-all duration-1000 ease-out"
              style={{ transform: 'translateX(10px)', opacity: 0 }}
            >
              {/* Name and Title */}
              <div className="space-y-4">
                <motion.h3 
                  className="text-4xl lg:text-5xl font-bold text-slate-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {portfolioData.personal.name}
                </motion.h3>
                
                <motion.div
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <span className="px-6 py-2 bg-gradient-to-r from-pink-500/20 to-slate-600/20 backdrop-blur-sm border border-pink-500/30 rounded-full text-pink-300 font-medium text-lg">
                    {portfolioData.personal.title}
                  </span>
                </motion.div>
              </div>

              {/* Bio */}
              <motion.div
                className="prose prose-lg prose-invert max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <p className="text-lg text-slate-300 leading-relaxed">
                  {portfolioData.personal.bio}
                </p>
              </motion.div>

              {/* Contact Info Grid */}
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 hover:border-pink-500/50 transition-all duration-300 group"
                    whileHover={{ y: -2, scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-grow">
                      {contact.href ? (
                        <a href={contact.href} className="text-slate-300 hover:text-pink-400 transition-colors duration-300 group-hover:underline">
                          {contact.text}
                        </a>
                      ) : (
                        <span className="text-slate-300">{contact.text}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links */}
              {portfolioData.social && (
                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <span className="text-slate-400 text-sm font-medium">Follow me:</span>
                  <div className="flex space-x-3">
                    {portfolioData.social.github && (
                      <motion.a
                        href={portfolioData.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-slate-700 hover:bg-gradient-to-br hover:from-pink-500 hover:to-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                        whileHover={{ y: -2, scale: 1.1 }}
                      >
                        <Github className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                      </motion.a>
                    )}
                    {portfolioData.social.linkedin && (
                      <motion.a
                        href={portfolioData.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-slate-700 hover:bg-gradient-to-br hover:from-pink-500 hover:to-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                        whileHover={{ y: -2, scale: 1.1 }}
                      >
                        <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              )}

              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;