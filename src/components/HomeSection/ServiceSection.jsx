"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "WEB DESIGN & DEVELOPMENT",
    services: [
      "Custom Website Design",
      "E-Commerce Solutions",
      "UX/UI Design",
      "Website Maintenance & Support"
    ],
    logo: "/logos/services/web-design.png",
  },
  {
    id: 2,
    title: "VIDEOGRAPHY SERVICES",
    services: [
      "Promotional Videos",
      "Product Videos",
      "Event/Wedding Coverage",
      "Social Media Reels",
      "Podcast Shoot"
    ],
    logo: "/logos/services/video.png",
  },
  {
    id: 3,
    title: "BRANDING & IDENTITY",
    services: [
      "Brand Strategy & Positioning",
      "Logo Design & Visual Identity",
      "Brand Guidelines & Messaging"
    ],
    logo: "/logos/services/branding.png",
  },
  {
    id: 4,
    title: "PHOTOGRAPHY SERVICES",
    services: [
      "Product Photography",
      "Event Photography",
      "Personal Photoshoot",
      "Wedding Photography"
    ],
    logo: "/logos/services/photo-camera.png",
  },
  {
    id: 5,
    title: "SOCIAL MEDIA MARKETING",
    services: [
      "Content Planning & Creation",
      "Account Management",
      "Community Engagement",
      "Social Media Advertising"
    ],
    logo: "/logos/services/social-media.png",
  },
  {
    id: 6,
    title: "CONTENT MARKETING",
    services: [
      "Blog & Article Writing",
      "Graphic Design & Visual Content",
      "Video Production & Editing"
    ],
    logo: "/logos/services/content-marketing.png",
  },
];

const ServiceSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isLgScreen, setIsLgScreen] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const intervalRef = useRef();

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 1024); // lg breakpoint
      setIsLgScreen(width >= 1280); // xl breakpoint for extra large spacing
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Auto-rotate cards - different behavior for mobile/desktop
  useEffect(() => {
    if (isMobile) {
      // For mobile: simple auto-advance
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev % services.length) + 1);
      }, 4000);
    } else {
      // For desktop: 3-card carousel
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev % services.length) + 1);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isMobile]);

  // Handle manual selection
  const selectCard = (id) => {
    setActiveIndex(id);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev % services.length) + 1);
    }, 4000);
  };

  // Determine card positions - updated for better 3-card layout
  const getCardPosition = (index) => {
    if (isMobile) {
      // Mobile: only show the active card
      return index === activeIndex ? 'center' : 'hidden';
    }

    // Desktop: show exactly 3 cards (left, center, right)
    const activeServiceIndex = services.findIndex(s => s.id === activeIndex);
    const serviceIndex = services.findIndex(s => s.id === index);

    // Calculate the relative position in a circular manner
    let relativePos = serviceIndex - activeServiceIndex;

    // Handle circular wrapping
    if (relativePos < -services.length / 2) relativePos += services.length;
    if (relativePos > services.length / 2) relativePos -= services.length;

    // Only show the center card and its immediate neighbors
    if (relativePos === 0) return 'center';
    if (relativePos === -1 || relativePos === services.length - 1) return 'left';
    if (relativePos === 1 || relativePos === -services.length + 1) return 'right';

    return 'hidden';
  };

  // Dynamic card variants based on screen size
  const getCardVariants = () => {
    // For XL screens and above, use larger spacing
    if (isLgScreen) {
      return {
        left: {
          x: '-120%',
          y: 0,
          scale: 0.85,
          opacity: 0.8,
          zIndex: 2,
          transition: { type: 'spring', stiffness: 300, damping: 20, duration: 0.5 }
        },
        center: {
          x: '0%',
          y: 0,
          scale: 1,
          opacity: 1,
          zIndex: 3,
          transition: { type: 'spring', stiffness: 300, damping: 20, duration: 0.5 }
        },
        right: {
          x: '120%',
          y: 0,
          scale: 0.85,
          opacity: 0.8,
          zIndex: 2,
          transition: { type: 'spring', stiffness: 300, damping: 20, duration: 0.5 }
        },
        hidden: {
          x: '0%',
          y: 0,
          scale: 0.7,
          opacity: 0,
          zIndex: 1,
          transition: { duration: 0.3 }
        }
      };
    }

    // For regular desktop screens (1024px to 1279px), use smaller spacing
    return {
      left: {
        x: '-105%',
        y: 0,
        scale: 0.85,
        opacity: 0.8,
        zIndex: 2,
        transition: { type: 'spring', stiffness: 300, damping: 20, duration: 0.5 }
      },
      center: {
        x: '0%',
        y: 0,
        scale: 1,
        opacity: 1,
        zIndex: 3,
        transition: { type: 'spring', stiffness: 300, damping: 20, duration: 0.5 }
      },
      right: {
        x: '105%',
        y: 0,
        scale: 0.85,
        opacity: 0.8,
        zIndex: 2,
        transition: { type: 'spring', stiffness: 300, damping: 20, duration: 0.5 }
      },
      hidden: {
        x: '0%',
        y: 0,
        scale: 0.7,
        opacity: 0,
        zIndex: 1,
        transition: { duration: 0.3 }
      }
    };
  };

  return (
    <section className="py-16 container-custom">
  <div className="w-full ">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        {/* Responsive container with different widths */}
        <div className={`relative ${isMobile ? 'h-[32rem]' : 'h-[40rem]'} w-full ${isMobile ? 'max-w-md' : isLgScreen ? 'max-w-6xl' : 'max-w-4xl'} mx-auto flex justify-center items-center overflow-visible`} ref={containerRef}>
          <AnimatePresence>
            {services.map((service) => {
              const position = getCardPosition(service.id);
              if (position === 'hidden') return null;

              return (
                <motion.div
                  key={service.id}
                  className={`absolute ${isMobile ? 'w-72' : isLgScreen ? 'w-96' : 'w-96'} h-[26rem] md:h-[28rem] p-6 md:p-8 rounded-3xl shadow-2xl cursor-pointer ${position === 'center'
                      ? 'bg-black/60'
                      : 'bg-gray-800/90 backdrop-blur-sm'
                    } [@media(min-width:1440px)_and_(max-width:1535px)]:w-72 [@media(min-width:1024px)_and_(max-width:1200px)]:w-72`}

                  style={{
                    originX: 0.5,
                    originY: 0.5,
                  }}
                  variants={getCardVariants()}
                  animate={position}
                  initial="hidden"
                  exit="hidden"
                  onClick={() => selectCard(service.id)}
                  whileHover={!isMobile ? { scale: position === 'center' ? 1.05 : 1.02 } : {}}
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className={`w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6 flex items-center justify-center ${position === 'center' ? 'text-white' : 'text-gray-400'}`}>
                      <img
                        src={service.logo}
                        alt={service.title}
                        className="w-full h-full object-contain mb-11"
                      />
                    </div>
                    <h3 className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center ${position === 'center' ? 'text-white' : 'text-gray-300'
                      }`}>
                      {service.title}
                    </h3>

                    <ul className="w-full space-y-2 md:space-y-3 px-2 md:px-4">
                      {service.services.map((item, i) => (
                        <li
                          key={i}
                          className={`text-sm md:text-md ${position === 'center' ? 'text-white' : 'text-gray-400'}`}
                        >
                          <div className="flex items-start">
                            <span className="inline-block mr-2 mt-1">•</span>
                            <span className="inline-block">{item}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dots indicator with reduced margin */}
        <div className="flex justify-center mt-6 space-x-2 md:space-x-3">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => selectCard(service.id)}
              className={`rounded-full transition-all ${service.id === activeIndex
                  ? 'bg-pink-500 w-6 h-3'
                  : 'bg-gray-600 w-3 h-3 hover:bg-gray-500'
                }`}
              aria-label={`Go to ${service.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;