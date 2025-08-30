import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const photoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (inView) {
      // Photo animation
      const photo = photoRef.current;
      if (photo) {
        photo.style.transform = 'scale(1) rotate(0deg)';
        photo.style.opacity = '1';
      }

      // Content animation
      const content = contentRef.current;
      if (content) {
        content.style.transform = 'translateX(0)';
        content.style.opacity = '1';
      }
    }
  }, [inView]);

  const contactInfo = [
    { icon: Mail, text: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
    { icon: Phone, text: portfolioData.personal.phone, href: `tel:${portfolioData.personal.phone}` },
    { icon: MapPin, text: portfolioData.personal.location, href: null }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-slow"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-gray-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Section */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Main photo */}
                <div 
                  ref={photoRef}
                  className="relative w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl transform scale-0 rotate-12 opacity-0 transition-all duration-1000 ease-out"
                  style={{
                    background: `linear-gradient(135deg, #8b5cf6, #6b7280)`,
                    transform: 'scale(0) rotate(12deg)',
                    opacity: 0
                  }}
                >
                  {/* Placeholder for photo - you can replace this with an actual image */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-400 to-gray-500">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">👩‍💻</div>
                      <p className="text-lg font-medium">Sandali</p>
                      <p className="text-sm opacity-90">Creative Developer</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-400 rounded-full opacity-80"></div>
                </div>

                {/* Floating elements around photo */}
                <motion.div
                  className="absolute -top-6 -left-6 w-12 h-12 bg-purple-200 rounded-full opacity-60"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-6 -right-6 w-8 h-8 bg-gray-300 rounded-full opacity-60"
                  animate={{
                    y: [0, 10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div 
              ref={contentRef}
              className="space-y-6 transform translate-x-10 opacity-0 transition-all duration-1000 ease-out"
              style={{ transform: 'translateX(10px)', opacity: 0 }}
            >
              <motion.h3 
                className="text-3xl font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {portfolioData.personal.name}
              </motion.h3>

              <motion.p 
                className="text-lg text-gray-600 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {portfolioData.personal.bio}
              </motion.p>

              <motion.p 
                className="text-gray-600 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                I specialize in creating beautiful, functional, and user-centered digital experiences. 
                With a passion for clean code and innovative design, I bring ideas to life through 
                modern web technologies and creative problem-solving.
              </motion.p>

              {/* Contact Information */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  >
                    <contact.icon className="w-5 h-5 text-purple-500" />
                    {contact.href ? (
                      <a href={contact.href} className="hover:underline">
                        {contact.text}
                      </a>
                    ) : (
                      <span>{contact.text}</span>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Download CV Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.button
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
