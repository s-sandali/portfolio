import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`
    },
    {
      icon: Phone,
      title: "Phone",
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone}`
    },
    {
      icon: MapPin,
      title: "Location",
      value: portfolioData.personal.location,
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
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
              Get In Touch
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
              Let's work together! Feel free to reach out for collaborations or just a friendly hello
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-6">Let's Connect</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.title}
                    className="flex items-center space-x-4 p-4 bg-slate-700/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg">
                      <contact.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-100">{contact.title}</h4>
                      {contact.href ? (
                        <a 
                          href={contact.href} 
                          className="text-slate-300 hover:text-pink-400 transition-colors duration-300"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-slate-300">{contact.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-slate-700/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-600/50"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Send Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-slate-100 mb-2">Message Sent!</h4>
                  <p className="text-slate-300">Thank you for reaching out. I'll get back to you soon!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 bg-slate-600/50 backdrop-blur-sm text-slate-100 placeholder-slate-400"
                        placeholder="Your name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 bg-slate-600/50 backdrop-blur-sm text-slate-100 placeholder-slate-400"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-200 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 bg-slate-600/50 backdrop-blur-sm text-slate-100 placeholder-slate-400"
                      placeholder="What's this about?"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 bg-slate-600/50 backdrop-blur-sm text-slate-100 placeholder-slate-400 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    whileHover={!isSubmitting ? { y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
