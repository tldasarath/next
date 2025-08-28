"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ValuesSection = () => {
  const values = [
    { title: "Innovation", description: "We continuously explore new ideas and creative solutions.", icon: "/images/our-values/innovation.png"},
    { title: "Results-Driven", description: "We focus on delivering measurable outcomes and impactful results.", icon: "/images/our-values/results driven.png"},
    { title: "Collaboration", description: "We believe in the power of teamwork and shared success.", icon: "/images/our-values/collaboration.png" },
    { title: "Continuous Learning", description: "We embrace growth and stay ahead of industry trends.", icon: "/images/our-values/continuous-learning.png"  },
    { title: "Integrity", description: "We build trust through honesty and transparency.", icon:"/images/our-values/integrity.png" },
  ];

  // Enhanced animation variants
  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulsingAnimation = {
    animate: {
      scale: [1, 1.08, 1],
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const swirlingAnimation = {
    animate: {
      rotate: [0, 10, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Animation for value cards
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden" 
      >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading with animation */}
        <motion.div 
          className="relative mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-bold text-white z-10">Our Values</h2>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {values.slice(0, 3).map((value, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/80 backdrop-blur-md text-white rounded-xl p-10 w-full max-w-md shadow-lg border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="relative w-20 h-20 mb-6"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image 
                  src={value.icon} 
                  alt={value.title} 
                  fill
                  className="object-contain"
                />
              </motion.div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-400"> {value.title}:</h3>
              <p className="text-gray-300 text-base">{value.description}</p>
            </motion.div>
          ))}

          <div className="md:col-span-2 lg:col-span-3 flex justify-center relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 max-w-4xl">
              {values.slice(3, 5).map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/80 backdrop-blur-md text-white rounded-xl p-10 w-full max-w-md shadow-lg border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300 z-10"
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="relative w-20 h-20 mb-6"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image 
                      src={value.icon} 
                      alt={value.title} 
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-3 text-blue-400">{value.title}:</h3>
                  <p className="text-gray-300 text-base">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background images below cards - Only keeping bottom animation */}
      <div className="absolute bottom-0 -left-2 w-[120%] h-[20%] flex   items-center hidden xl:block z-0">
        <motion.div
          className="absolute w-[100%] h-full opacity-50 "
          variants={swirlingAnimation}
          animate="animate"
        >
          <Image 
            src="/images/our-values/lines1.png" 
            alt="decor" 
            fill
            className="object-cover "
          />
        </motion.div>
        <motion.div
          className="absolute w-[100%] h-full opacity-50"
          variants={floatingAnimation}
          animate="animate"
        >
          <Image 
            src="/images/our-values/lines2.png" 
            alt="decor" 
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div
          className="absolute w-[100%] h-full opacity-50"
          variants={pulsingAnimation}
          animate="animate"
        >
          <Image 
            src="/images/our-values/lines3.png" 
            alt="decor" 
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;