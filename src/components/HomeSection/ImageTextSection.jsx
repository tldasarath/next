"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const ImageTextSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const HighlightWord = ({ children }) => (
    <span className="relative inline-block">
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
    <section className="py-16  container-custom ">
      <div className="w-full mx-auto">
        <div className="flex flex-col justify-self-center w-full lg:flex-row items-center gap-0 lg:gap-32">
          {/* Left side - Bigger Image at 1024px */}
          <motion.div 
            className="w-full lg:w-3/5 xl:w-2/5 -ml-0 flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative w-full   xl:right-0 max-w-md md:max-w-lg lg:max-w-none xl:max-w-full h-80 sm:h-96 md:h-[450px] lg:h-[500px] xl:h-[500px] rounded-3xl overflow-hidden cursor-pointer"
              animate={{
                x: isHovering ? 60 : 0,
                y: isHovering ? 30 : 0,
                rotate: isHovering ? 6 : 0,
              }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.5,
              }}
              whileHover={{ 
                scale: 1.03,
              }}
              whileTap={{
                scale: 1.03,
              }}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              onTouchStart={() => setIsHovering(true)}
              onTouchEnd={() => setIsHovering(false)}
            >
              <Image
                src="/images/gaming.png"
                alt="Description of your image"
                fill
                className="object-contain  md:object-contain lg:mt-8 lg:object-contain xl:object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, (max-width: 1280px) 50vw, 40vw"
              />
              
              {/* Subtle shadow effect */}
              <motion.div 
                className="absolute inset-0 "
                animate={{
                  opacity: isHovering ? 0.1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Right side - Smaller Content at 1024px */}
          <motion.div 
            className="w-full lg:w-2/5 xl:w-3/5 lg:mr-8 xl:mr-16"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 lg:space-y-12 xl:space-y-96 flex  sm:justify-center lg:justify-end lg:pl-0 xl:pl-20">
              <h2 className="text-3xl md:text-6xl lg:text-4xl xl:text-7xl [@media(min-width:1440px)_and_(max-width:1535px)]:text-5xl font-bold text-white leading-tight text-center lg:text-left">
                <span className="block">your strategic</span>
                <span className="block">partner in driving</span>
                <span className="block"><HighlightWord>brand growth</HighlightWord> &</span>
                <span className="block">market success.</span>
              </h2> 
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;