import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const People = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Sample people data - replace with your actual data
  const people = [
    {
      name: "Sarah Johnson",
      role: "AI Research Lead",
      email: "sarah.j@fox.ai",
      phone: "+1 (555) 123-4567",
      image: "https://cdn.vectorstock.com/i/500p/07/35/cute-girl-face-in-cartoon-style-vector-47890735.jpg"
    },
    {
      name: "Michael Chen",
      role: "Senior Data Scientist",
      email: "michael.c@fox.ai",
      phone: "+1 (555) 234-5678",
      image: "https://img.freepik.com/free-vector/smiling-cartoon-mans-face_1308-174269.jpg"
    },
    {
      name: "Elena Rodriguez",
      role: "ML Engineer",
      email: "elena.r@fox.ai",
      phone: "+1 (555) 345-6789",
      image: "https://img.freepik.com/free-vector/male-teen-cartoon-wearing-hat_1308-157110.jpg"
    },
    {
      name: "Alex Kim",
      role: "Research Scientist",
      email: "alex.k@fox.ai",
      phone: "+1 (555) 456-7890",
      image: "https://thumbs.dreamstime.com/b/businessman-cartoon-character-people-face-profiles-avatars-icons-close-up-image-pointing-man-vector-flat-illustration-234310250.jpg"
    },
    {
        name: "Virat Kohli",
        role: "Web Developer",
        email: "virat.k@fox.ai",
        phone: "+1 (555) 456-1203",
        image: "https://cdn2.vectorstock.com/i/1000x1000/81/01/man-with-beard-only-face-vector-23318101.jpg"
      }
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      rotate: -180,
      transition: { duration: 0.5 }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const currentPerson = people[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Our Amazing Team
        </h2>
        
        <div className="flex justify-center items-center">
          {/* Circular background rings */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 animate-spin-slow" 
                 style={{ width: '400px', height: '400px' }}>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-200 to-indigo-200 animate-reverse-spin" 
                 style={{ width: '350px', height: '350px', margin: '25px' }}>
            </div>
            
            {/* Person card */}
            <AnimatePresence mode="wait">
              {isVisible && (
                <motion.div
                  key={currentIndex}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative bg-white rounded-full shadow-2xl p-8"
                  style={{ width: '300px', height: '300px', margin: '50px' }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-blue-50 opacity-50"></div>
                  <div className="relative h-full flex flex-col items-center justify-center">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-blue-100 shadow-lg">
                        <img
                          src={currentPerson.image}
                          alt={currentPerson.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-blue-300"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: 360
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-bold text-gray-800 text-center mb-1"
                    >
                      {currentPerson.name}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-blue-600 font-medium text-sm mb-3"
                    >
                      {currentPerson.role}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-600 text-sm text-center"
                    >
                      <p className="mb-1">{currentPerson.email}</p>
                      <p>{currentPerson.phone}</p>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {people.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsVisible(true);
                }, 500);
              }}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default People;