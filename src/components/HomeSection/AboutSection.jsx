"use client";

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const mainControls = useAnimation();
  const cardControls = useAnimation();
  const contentControls = useAnimation();
  const bgControls = useAnimation();
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
  const CustomColor = ({ children }) => (
    <span style={{ color: "#29ABE2" }}>
      {children}
    </span>
  );


  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      cardControls.start("visible");
      contentControls.start("visible");
      bgControls.start("visible");
    } else {
      mainControls.start("hidden");
      cardControls.start("hidden");
      contentControls.start("hidden");
      bgControls.start("hidden");
    }
  }, [isInView, mainControls, cardControls, contentControls, bgControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.8 // Increased stagger time
      }
    }
  };

  const slideInVariants = {
    hidden: {
      opacity: 0,
      x: -150, // Increased starting distance
      transition: {
        type: "spring",
        stiffness: 30, // Softer spring
        damping: 20,
        duration: 3.0 // Longer duration
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 20,
        duration: 3.0,
        ease: [0.16, 0.77, 0.47, 0.97] // Custom easing for smoother movement
      }
    }
  };

  const slideInRightVariants = {
    hidden: {
      opacity: 0,
      x: 150, // Increased starting distance
      transition: {
        type: "spring",
        stiffness: 30, // Softer spring
        damping: 20,
        duration: 3.0 // Longer duration
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 20,
        duration: 3.0,
        ease: [0.16, 0.77, 0.47, 0.97] // Custom easing for smoother movement
      }
    }
  };

  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 40, // Increased starting distance
      transition: {
        duration: 2.0,
        ease: "easeOut"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3.0, // Longer duration
        ease: [0.6, 0.01, 0.05, 0.95] // Custom easing
      }
    }
  };

  const bgVariants = {
    hidden: {
      x: 200, // Increased starting distance
      opacity: 0,
      transition: {
        duration: 2.5,
        ease: "easeInOut"
      }
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 3.5, // Longer duration
        ease: [0.16, 0.77, 0.47, 0.97] // Custom easing
      }
    }
  };

  return (
    <section
  ref={ref}
  className="relative py-28 container-custom w-full text-white overflow-hidden xl:mt-20"
>

      {/* Right Side Background Image */}
      <motion.div
        variants={bgVariants}
        initial="hidden"
        animate={bgControls}
        exit="hidden"
        className="absolute right-0 top-0 bottom-0 w-1/2 -z-10 overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.2 }} // Increased initial scale
          animate={isInView ? { scale: 1 } : { scale: 1.2 }}
          transition={{
            duration: 4.0, // Longer duration
            ease: [0.6, 0.01, 0.05, 0.95] // Custom easing
          }}
          className="w-full h-full"
        >
          <img
            src="/images/lines.png"
            alt="Background"
            className="w-full h-full object-cover brightness-125 hidden xl:block"
            style={{
              filter: 'hue-rotate(15deg) saturate(1.5)',
              transform: 'scale(1.1)'
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={slideInVariants}
        initial="hidden"
        animate={mainControls}
        exit="hidden"
        className="relative "
      >
        <motion.h2
          variants={slideInVariants}
          transition={{ delay: 0.2 }}
          className="text-2xl flex  custom-text2 md:text-6xl font-bold mb-16 absolute md:left-0  xl:left-0 2xl:left-0"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          Welcome To <HighlightWord>Next</HighlightWord> Digital
        </motion.h2>
      </motion.div>

      <div className="relative   w-full mx-auto flex flex-col pt-24">
        <motion.div
          variants={slideInRightVariants}
          initial="hidden"
          animate={contentControls}
          exit="hidden"
          className="mb-16 w-full max-w-5xl lg:pr-32 ml-auto"
        >
          <motion.div variants={fadeInVariants}>
            <div className="space-y-8 text-lg  xl:pr- xl:pl-0 lg:pt-16 ">
              <motion.p
                variants={fadeInVariants}
                initial="hidden"
                animate={contentControls}
                exit="hidden"
                transition={{ delay: 0.4 }} // Adjusted delays
              >
                At Next Digital Marketing, our passion lies in helping
                businesses unlock their full potential. We believe that with
                the right strategy and creativity, every brand can make a
                significant impact in its industry.
                Our goal is to empower businesses with innovative marketing
                solutions that drive results and create lasting impressions.
                Join us on this journey to redefine success.
              </motion.p>
              {/* <motion.p 
                variants={fadeInVariants} 
                initial="hidden"
                animate={contentControls}
                exit="hidden"
                transition={{ delay: 0.8 }} // Adjusted delays
              >
                
              </motion.p> */}
              <motion.p
                variants={fadeInVariants}
                initial="hidden"
                animate={contentControls}
                exit="hidden"
                transition={{ delay: 1.4 }} // Adjusted delays
                className="text-xl  font-medium italic"
              >
                — Team <CustomColor>Next Digital</CustomColor>
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Increased gap between cards from gap-8 to gap-16 */}
        <div className="w-full   mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-10 2xl:gap-48">
          <motion.div
            variants={slideInVariants}
            initial="hidden"
            animate={cardControls}
            exit="hidden"
            transition={{ delay: 1.8 }} // Adjusted delay
            className="md:p-10 xl:p-7 p-5 rounded-2xl bg-gray-900/80 border-b-4 border-purple-500 shadow-2xl h-full backdrop-blur-md min-h-[450px] w-full"
            style={{
              boxShadow: '0 20px 40px -10px rgba(126, 34, 206, 0.3)'
            }}
          >
            <h3 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              About Us
            </h3>
            <div className="space-y-6 text-base md:text-lg">
              <p>
                At Next Digital, we believe in the power of creativity and strategy to
                transform brands and elevate businesses. We are a dynamic digital
                solutions agency that specializes in delivering innovative branding,
                stunning design, and impactful digital marketing.
              </p>
              <p>
                Founded with a vision to empower brands in the digital age, Next
                Digital blends creativity with technology to craft experiences that
                connect, engage, and inspire.
              </p>
              <p>
                Whether you're a startup ready to make your mark or an established
                business seeking to evolve, we are your creative partner every
                step of the way.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRightVariants}
            initial="hidden"
            animate={cardControls}
            exit="hidden"
            transition={{ delay: 2.4 }} // Adjusted delay
            className="md:p-10 p-5 rounded-2xl bg-gray-900/80 border-b-4 border-blue-500 shadow-2xl h-full backdrop-blur-md min-h-[450px] w-full"
            style={{
              boxShadow: '0 20px 40px -10px rgba(59, 130, 246, 0.3)'
            }}
          >

            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Our Mission
              </h3>
              <p className="text-base md:text-lg leading-relaxed">
                To deliver innovative, data-driven
                marketing solutions that empower
                businesses to grow, engage their
                audience, and achieve measurable
                success.
              </p>
            </div>

            <div >
              <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
                Our Vision
              </h3>
              <p className=" text-base md:text-lg leading-relaxed">
                To become a leading global
                marketing agency recognized for
                transforming brands through
                creativity, strategy, and technology.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;