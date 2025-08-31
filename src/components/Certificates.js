import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Certificates = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Helper function to dynamically import images
  const getImageSrc = (imagePath) => {
    try {
      // Remove leading slash if present and extract filename
      const cleanPath = imagePath.replace(/^\/+/, '');
      
      // If it's a full path like "/src/assets/certificates/mernstack.jpg"
      if (cleanPath.includes('src/assets/')) {
        const filename = cleanPath.split('/').pop();
        return require(`../assets/certificates/${filename}`);
      }
      
      // If it's just a filename like "mernstack.jpg"
      if (!cleanPath.includes('/')) {
        return require(`../assets/certificates/${cleanPath}`);
      }
      
      // If it's a relative path like "assets/certificates/mernstack.jpg"
      const relativePath = cleanPath.replace('assets/', '../assets/');
      return require(`../${relativePath}`);
    } catch (error) {
      console.warn(`Image not found: ${imagePath}`);
      return null;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="certificates" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow"></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow"
          style={{ animationDelay: '1s' }}
        ></div>
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
              className="text-4xl md:text-5xl font-bold text-slate-100 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Certificates & Achievements
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.p
              className="text-lg text-slate-300 mt-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Professional certifications and achievements that validate my expertise
            </motion.p>
          </div>

          {/* Certificates Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {portfolioData.certificates.map((certificate) => {
              const imageSrc = getImageSrc(certificate.image);
              
              return (
                <motion.div
                  key={certificate.id}
                  className="relative bg-slate-700/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-600/50 group flex flex-col"
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Certificate Image */}
                  {imageSrc && (
                    <div className="h-48 w-full overflow-hidden bg-gradient-to-br from-pink-500 to-slate-600">
                      <img
                        src={imageSrc}
                        alt={certificate.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Decorative Shapes */}
                  <motion.div
                    className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-pink-500/30 blur-3xl animate-pulse-slow"
                    style={{ mixBlendMode: 'overlay' }}
                  />
                  <motion.div
                    className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-pink-400/30 blur-2xl animate-pulse-slow"
                    style={{ mixBlendMode: 'overlay' }}
                  />

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between space-y-3 flex-grow relative z-10">
                    {/* Icon & Title */}
                    <div className="flex flex-col items-center text-center space-y-3">
                      {!imageSrc && <div className="text-6xl animate-bounce-slow">🏆</div>}
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-pink-400 transition-colors duration-300">
                        {certificate.title}
                      </h3>
                      <div className="flex flex-col items-center text-slate-300 text-sm space-y-1">
                        <span>{certificate.issuer}</span>
                        <div className="flex items-center space-x-1 text-slate-400">
                          <Calendar className="w-4 h-4" />
                          <span>{certificate.date}</span>
                        </div>
                      </div>
                      {certificate.description && (
                        <p className="text-sm text-slate-300 text-center mt-2">
                          {certificate.description}
                        </p>
                      )}
                    </div>

                    {/* View Button */}
                    {certificate.url && (
                      <motion.a
                        href={certificate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 mt-4"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">View Certificate</span>
                      </motion.a>
                    )}
                  </div>

                  {/* Award Icon */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white p-2 rounded-full z-10">
                    <Award className="w-5 h-5" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Other Achievements Section */}
          {portfolioData.achievements && portfolioData.achievements.length > 0 && (
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-slate-100 mb-8 text-center">
                Other Achievements
              </h3>
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {portfolioData.achievements.map((achievement) => {
                  const achievementImageSrc = getImageSrc(achievement.image);
                  
                  return (
                    <motion.div
                      key={achievement.id}
                      className="bg-slate-700/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-600/50 group flex flex-col"
                      variants={cardVariants}
                      whileHover={{ y: -10, scale: 1.02 }}
                    >
                      {/* Optional Achievement Image */}
                      {achievementImageSrc && (
                        <div className="h-48 w-full overflow-hidden bg-gradient-to-br from-pink-500 to-slate-600 flex items-center justify-center">
                          <img
                            src={achievementImageSrc}
                            alt={achievement.title}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      <div className="p-6 flex flex-col justify-between space-y-3 flex-grow">
                        <h4 className="text-lg font-bold text-slate-100 group-hover:text-pink-400 transition-colors duration-300">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-slate-300">{achievement.description}</p>
                        <div className="flex justify-between items-center text-slate-300 text-sm">
                          <span>{achievement.issuer}</span>
                          <span>{achievement.date}</span>
                        </div>
                        {achievement.url && (
                          <motion.a
                            href={achievement.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 mt-3"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm font-medium">View Details</span>
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;