import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star, Eye } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' }
  ];

  const filteredProjects = portfolioData.projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Helper function to dynamically import project images
  const getProjectImage = (imagePath) => {
    try {
      const cleanPath = imagePath.replace(/^\/+/, '');
      if (cleanPath.includes('assets/')) {
        const relativePath = cleanPath.replace('assets/', '../assets/');
        return require(`../${relativePath}`);
      }
      if (!cleanPath.includes('/')) return require(`../assets/${cleanPath}`);
      return require(`../assets/${cleanPath}`);
    } catch (error) {
      console.warn(`Project image not found: ${imagePath}`);
      return null;
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
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
              My Projects
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
              A showcase of my latest work and creative projects
            </motion.p>
          </div>

          {/* Filter Button */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {filters.map((filterOption) => (
              <motion.button
                key={filterOption.id}
                onClick={() => setFilter(filterOption.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === filterOption.id
                    ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg'
                    : 'bg-slate-700/80 text-slate-200 hover:bg-pink-500/20 hover:text-pink-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filterOption.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-slate-700/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-600/50 group"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-pink-500 to-slate-600 overflow-hidden">
                  {getProjectImage(project.image) ? (
                    <img
                      src={getProjectImage(project.image)}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white text-lg font-medium">
                      {project.title}
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-6 h-6" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.a>
                    )}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-pink-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-slate-600 text-slate-300 rounded-full text-sm font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 bg-slate-600 text-slate-200 py-2 px-4 rounded-lg hover:bg-pink-500/20 hover:text-pink-400 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Eye className="w-4 h-4" />
                        <span className="text-sm font-medium">Live</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
