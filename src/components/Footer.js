import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Heart, 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,  
  Globe,
  Code,
  Coffee,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for background elements
  const y1 = useTransform(scrollYProgress, [0.8, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0.8, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [0.2, 0.6]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  // Social media icon mapping
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    
  };

  // navigation links with icons
  const navigationLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills'},
    { name: 'Projects', href: '#projects'},
    { name: 'Certificates', href: '#certificates'},
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/*  Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full filter blur-3xl"
          style={{ y: y1, opacity }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full filter blur-3xl"
          style={{ y: y2, opacity }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/*  Header Section */}
         

          {/* Main Footer Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/*  Brand Section */}
            <motion.div
              className="md:col-span-2 text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {portfolioData.personal.name}
              </motion.h3>
              
              
              {/*Social Links */}
              <div className="flex justify-center md:justify-start space-x-4 mb-6">
                {Object.entries(portfolioData.social).map(([platform, url], index) => {
                  const IconComponent = socialIcons[platform] || Globe;
                  return (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <IconComponent className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors duration-300 relative z-10" />
                    </motion.a>
                  );
                })}
              </div>             
              
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6 text-pink-300 flex items-center justify-center md:justify-start">
                <Code className="w-5 h-5 mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      className="group flex items-center text-slate-300 hover:text-pink-300 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="mr-3 text-lg group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </span>
                      <span className="group-hover:underline">{link.name}</span>
                      <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/*  Contact Info */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6 text-pink-300 flex items-center justify-center md:justify-start">
                <Coffee className="w-5 h-5 mr-2" />
                Get In Touch
              </h4>
              <div className="space-y-4 text-slate-300">
                <motion.div
                  className="group flex items-center justify-center md:justify-start hover:text-white transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 mr-3 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                  <span>{portfolioData.personal.email}</span>
                </motion.div>
                <motion.div
                  className="group flex items-center justify-center md:justify-start hover:text-white transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-5 h-5 mr-3 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  <span>{portfolioData.personal.phone}</span>
                </motion.div>
                <motion.div
                  className="group flex items-center justify-center md:justify-start hover:text-white transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 mr-3 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <span>{portfolioData.personal.location}</span>
                </motion.div>
              </div>

              
              
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 flex items-center">
              <motion.div
                className="w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-purple-500 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="relative flex justify-center">
              <div className="bg-slate-900 px-4">
                <motion.div
                  className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>

          {/*  Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-slate-300 text-sm flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span>© {currentYear}</span>
              <span className="font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                {portfolioData.personal.name}
              </span>
              <span>• All rights reserved</span>
            </motion.p>

            <motion.div
              className="flex items-center space-x-2 text-slate-300 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <span>Crafted with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-400" />
              </motion.div>
              <span>using React & Tailwind CSS</span>
              <Code className="w-4 h-4 text-blue-400" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 z-50 group ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        whileHover={{ y: -8, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: showScrollTop ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <ArrowUp className="w-6 h-6 relative z-10 group-hover:animate-bounce" />
      </motion.button>
    </footer>
  );
};

export default Footer;