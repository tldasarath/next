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

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 2, -2, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const pulsingAnimation = {
    animate: {
      scale: [1, 1.08, 1],
      opacity: [0.7, 0.9, 0.7],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section className="relative py-20   overflow-hidden container-custom">

      {/* Heading */}
      <motion.div 
        className="relative mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  z-10">Our Values</h2>
      </motion.div>

      {/* Values Grid */}
      <div className="w-full mx-auto flex flex-col   gap-12 relative z-10">

        {/* Top 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3  gap-16 justify-items-center">
          {values.slice(0,3).map((value,index) => (
            <motion.div
              key={index}
              className="bg-gray-800/80 backdrop-blur-md text-white rounded-xl p-6 md:p-8 w-full max-w-sm aspect-[4/5] max-h-80 shadow-lg border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative w-20 h-20 mb-6 mx-auto">
                <Image src={value.icon} alt={value.title} fill className="object-contain" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-center">{value.title}</h3>
              <p className="text-gray-300 text-base text-center">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center md:mt-12 relative z-20">
          {values.slice(3,5).map((value,index) => (
            <motion.div
              key={index}
              className="bg-gray-800/80 backdrop-blur-md text-white rounded-xl p-6 md:p-8 w-full max-w-sm aspect-[4/5] max-h-80 shadow-lg border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300 lg:mx-auto"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative w-20 h-20 mb-6 mx-auto">
                <Image src={value.icon} alt={value.title} fill className="object-contain" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-center">{value.title}</h3>
              <p className="text-gray-300 text-base text-center">{value.description}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full-width animated background */}
      <div className="absolute bottom-0 left-0 w-full h-[400px] overflow-hidden z-0 hidden lg:block">
        <motion.div className="absolute w-full h-full opacity-80" variants={floatingAnimation} animate="animate">
          <Image src="/images/our-values/2.png" alt="decor" fill className="object-cover" />
        </motion.div>
        <motion.div className="absolute w-full h-full opacity-80" variants={pulsingAnimation} animate="animate">
          <Image src="/images/our-values/3.png" alt="decor" fill className="object-cover" />
        </motion.div>
      </div>

    </section>
  );
};

export default ValuesSection;
