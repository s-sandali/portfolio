import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Database, Settings } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: portfolioData.skills.frontend,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: portfolioData.skills.backend,
      color: "from-slate-600 to-slate-700"
    },
    {
      title: "Tools & Technologies",
      icon: Settings,
      skills: portfolioData.skills.tools,
      color: "from-pink-600 to-pink-700"
    },
    {
      title: "Design & Other",
      icon: Palette,
      skills: portfolioData.skills.other,
      color: "from-slate-500 to-slate-600"
    }
  ];

  // Combine all skills into one array for marquee
  const allSkills = [
    ...portfolioData.skills.frontend,
    ...portfolioData.skills.backend,
    ...portfolioData.skills.tools,
    ...portfolioData.skills.other
  ];

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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
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
              Skills & Expertise
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-pink-500 to-slate-400 mx-auto rounded-full"
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
              A comprehensive set of technical skills and tools that I use to bring creative ideas to life
            </motion.p>
          </div>

          {/* Skills Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-slate-700/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600/50"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center justify-between"
                      variants={skillVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    >
                      <span className="text-slate-200 font-medium">{skill}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-slate-600 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${Math.random() * 40 + 60}%` } : {}}
                            transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Marquee Skills Section */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-800 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-800 to-transparent z-10"></div>
              
              {/* Marquee container */}
              <div className="flex space-x-6 animate-marquee">
                {/* First set of skills */}
                {allSkills.map((skill, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-slate-600/20 backdrop-blur-sm border border-pink-500/30 rounded-full text-slate-200 font-medium whitespace-nowrap hover:from-pink-500/30 hover:to-slate-600/30 transition-all duration-300 hover:scale-105 hover:border-pink-400/50"
                  >
                    {skill}
                  </div>
                ))}
                
                {/* Duplicate set for infinite loop */}
                {allSkills.map((skill, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-slate-600/20 backdrop-blur-sm border border-pink-500/30 rounded-full text-slate-200 font-medium whitespace-nowrap hover:from-pink-500/30 hover:to-slate-600/30 transition-all duration-300 hover:scale-105 hover:border-pink-400/50"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Skills;