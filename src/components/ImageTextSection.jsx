"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const ImageTextSection = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col justify-self-center w-7/8 lg:flex-row items-center gap-8 lg:gap-32"> {/* Reduced gap at 1024px */}
          {/* Left side - Bigger Image at 1024px */}
          <motion.div 
            className="w-full lg:w-3/5 xl:w-2/5 -ml-0 flex justify-center" // Increased width at lg, normal at xl
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative w-full max-w-md md:max-w-lg lg:max-w-none xl:max-w-full h-80 sm:h-96 md:h-[450px] lg:h-[500px] xl:h-[500px] rounded-3xl overflow-hidden cursor-pointer"
              animate={{
                x: isHovering ? 60 : 0,
                y: isHovering ? 30 : 0,
                rotate: isHovering ? 6 : 0,
              }}
              transition={{ 
                type: "tween",
                ease: "easeInOut",
                duration: 0.5,
              }}
              whileHover={{ 
                scale: 1.03,
              }}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
            >
              <Image
                src="/images/gaming.png"
                alt="Description of your image"
                fill
                className="object-contain md:object-contain lg:object-contain xl:object-cover"
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
            className="w-full lg:w-2/5 xl:w-3/5 lg:mr-8 xl:mr-16" // Reduced width at lg, normal at xl
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 lg:space-y-12 xl:space-y-96 flex justify-end lg:pl-8 xl:pl-20"> {/* Reduced spacing at lg */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white leading-tight text-center lg:text-left">
                <span className="block">your strategic</span>
                <span className="block">partner in driving</span>
                <span className="block">brand growth &</span>
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