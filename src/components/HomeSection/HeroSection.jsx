'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  // Text states
  const [showFirstText, setShowFirstText] = useState(true);
  const [showSecondText, setShowSecondText] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  // Text animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstText(prev => !prev);
      setShowSecondText(prev => !prev);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Generate stars and shooting stars only on client
  useEffect(() => {
    setIsMounted(true);
    
    // Generate static stars
    const generatedStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      width: Math.random() * (i % 5 === 0 ? 4 : 3),
      height: Math.random() * (i % 5 === 0 ? 4 : 3),
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.8 + 0.2,
      color: i % 5 === 0 ? 'bg-pink-300' : 'bg-white'
    }));
    setStars(generatedStars);
    
    // Generate shooting stars
    const generatedShootingStars = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      initialX: Math.random() * window.innerWidth,
      initialY: Math.random() * window.innerHeight/2,
      color: i % 2 === 0 ? 'bg-white' : 'bg-pink-300'
    }));
    setShootingStars(generatedShootingStars);
  }, []);

  // Enhanced text highlight with more glow
  const HighlightWord = ({ children }) => (
    <span className=" inline-block">
      <span 
        className="text-transparent"
        style={{
          WebkitTextStroke: '0.5px #fff',
        }}
      >
        {children}
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        <motion.span 
          className="block w-2 h-2 rounded-full bg-white"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.8, 0.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </span>
    </span>
  );

  return (  
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col md:flex-row items-center justify-center lg:justify-between container-custom pt-20 lg:pt-0 ">
      {/* Space background */}
      <div className="absolute inset-0 bg-[url('/images/space-bg.jpg')] bg-cover bg-center opacity-20"></div>

      {/* Text content - positioned first for mobile */}
<div className="relative z-10 w-full  lg:mt-0 order-1 lg:order-none ">
        <div className="xl:max-w-4xl lg:max-w-3xl mx-auto lg:mx-0  ">
          {showFirstText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-white mt-16 text-6xl xl:text-7xl sm:text-4xl md:text-4xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <motion.p
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Engage your 
              </motion.p>
              <motion.p
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <HighlightWord>audience.</HighlightWord> Ignite
              </motion.p>
              <motion.p
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5 }}
              >
               Your Brand. 
              </motion.p>
            </motion.div>
          )}
          {showSecondText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-white mt-16 text-6xl sm:text-5xl md:text-4xl lg:text-7xl xl:text-7xl font-bold mb-6 leading-tight"
            >
              <motion.p
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2 }}
              >
                We are a
              </motion.p>
              <motion.p
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <HighlightWord>Passion</HighlightWord> - driven
              </motion.p>
              <motion.p
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.4 }}
              >
                marketing agency
              </motion.p>
            </motion.div>
          )}
          <motion.button 
            className="lg:flex items-center mx-auto lg:mx-4 border border-white text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 px-4  py-2 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-medium w-fit transition-all group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 15px rgba(236, 72, 153, 0.5)'
            }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Check Profile 
            <motion.span 
              className="ml-2 text-base sm:text-lg group-hover:translate-x-1 transition-transform"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* Floating planet animation - positioned below text on mobile */}
      <motion.div
        className="relative  lg:absolute z-10 w-[600px] h-[550px] sm:w-[450px] sm:h-[450px] md:w-[750px] md:h-[750px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] 2xl:w-[800px] 2xl:h-[800px] mx-auto my-8 lg:my-0 right-50 md:right-10 lg:right-16 xl:right-20 2xl:right:0 lg:top-1/2 lg:transform lg:-translate-y-1/2 cursor-pointer order-2 lg:order-none"
        initial={{ opacity: 0, y: 100 }}
        animate={{ 
          opacity: 1,
          y: 0,
          transition: { 
            opacity: { duration: 1.5 },
            y: { 
              type: 'spring', 
              stiffness: 50,
              damping: 10,
              duration: 2 
            }
          }
        }}
        whileHover={{
          y: -20,
          scale: 1.05,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 10
          }
        }}
      >
        <motion.div
          initial={{ rotate: -10, y: -20 }}
          animate={{
            rotate: [0, 15, 0, -15, 0],
            y: [0, -20, 0, 20, 0],
          }}
          whileHover={{
            rotate: 0,
            y: 0,
            scale: 1.1,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            width: '100%',
            height: '100%',
            position: 'relative'
          }}
        >
          <Image 
            src="/images/robot.png"
            alt="Floating planet"
            fill
            className="object-contain w-full h-full custom-robot"
            priority
          />
          <motion.div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(236,72,153,0) 70%)',
              filter: 'blur(20px)'
            }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1]
            }}
            whileHover={{
              opacity: 0.7,
              scale: 1.2
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Shooting stars - only render on client */}
      {isMounted && shootingStars.map((star) => (
        <motion.div
          key={`shooting-star-${star.id}`}
          className={`absolute top-0 left-0 w-1 h-1 rounded-full ${star.color}`}
          initial={{
            x: star.initialX,
            y: star.initialY,
            opacity: 0
          }}
          animate={{
            x: window.innerWidth + 100,
            y: window.innerHeight + 100,
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 4,
            delay: Math.random() * 8,
            repeat: Infinity,
            repeatDelay: Math.random() * 15,
            ease: "linear"
          }}
        />
      ))}

      {/* Static stars */}
      {stars.map((star) => (
        <div
          key={`static-star-${star.id}`}
          className={`absolute rounded-full ${star.color}`}
          style={{
            width: `${star.width}px`,
            height: `${star.height}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default HeroSection;