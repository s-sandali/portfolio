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
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: portfolioData.skills.backend,
      color: "from-gray-600 to-gray-700"
    },
    {
      title: "Tools & Technologies",
      icon: Settings,
      skills: portfolioData.skills.tools,
      color: "from-purple-600 to-purple-700"
    },
    {
      title: "Design & Other",
      icon: Palette,
      skills: portfolioData.skills.other,
      color: "from-gray-500 to-gray-600"
    }
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
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-100 to-purple-100 relative overflow-hidden">
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
              Skills & Expertise
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
              A comprehensive set of technical skills and tools that I use to bring creative ideas to life
            </motion.p>
          </div>

          {/* Skills Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
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
                      <span className="text-gray-700 font-medium">{skill}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
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

          {/* Additional Skills Section */}
          <motion.div
            className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Technical Proficiency</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "React", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "Node.js", level: 80 },
                { name: "UI/UX Design", level: 75 }
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-gray-200"
                        strokeWidth="3"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <motion.path
                        className="text-purple-600"
                        strokeWidth="3"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        strokeDasharray={`${skill.level}, 100`}
                        initial={{ strokeDasharray: "0, 100" }}
                        animate={inView ? { strokeDasharray: `${skill.level}, 100` } : {}}
                        transition={{ duration: 1.5, delay: 1.2 + index * 0.1 }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-800">{skill.level}%</span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
