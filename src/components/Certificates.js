import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Certificates = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
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
              Certificates & Achievements
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-gray-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.p 
              className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Professional certifications and achievements that validate my expertise
            </motion.p>
          </div>

          {/* Certificates Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {portfolioData.certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 group"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Certificate Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-400 to-gray-500 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">🏆</div>
                      <p className="text-lg font-medium">{certificate.title}</p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.a
                      href={certificate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.a>
                  </div>

                  {/* Award Icon */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white p-2 rounded-full">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {certificate.title}
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="font-medium">{certificate.issuer}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{certificate.date}</span>
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  <motion.a
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 w-full justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">View Certificate</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Achievements */}
          <motion.div
            className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Additional Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Projects Completed", value: "50+", icon: "🚀" },
                { title: "Happy Clients", value: "25+", icon: "😊" },
                { title: "Years Experience", value: "3+", icon: "⏰" }
              ].map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{achievement.value}</div>
                  <p className="text-gray-600 font-medium">{achievement.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
