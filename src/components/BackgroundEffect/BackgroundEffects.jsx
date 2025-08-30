'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

export default function BackgroundEffects() {
  const [isMounted, setIsMounted] = useState(false);
  const bigX = useMotionValue(0);
  const bigY = useMotionValue(0);
  const medium1X = useMotionValue(0);
  const medium1Y = useMotionValue(0);
  const medium2X = useMotionValue(0);
  const medium2Y = useMotionValue(0);

  const bigSize = useMotionValue(700);
  const medium1Size = useMotionValue(600);
  const medium2Size = useMotionValue(600);

  // Generate stars on client-side only
  const [stars, setStars] = useState([]);

  const animateCircle = (x, y, size, index) => {
    const duration = 4 + Math.random() * 3;
    const targetX = Math.random() * (window.innerWidth - size.get());
    const targetY = Math.random() * (window.innerHeight - size.get());

    animate(x, targetX, {
      duration,
      ease: "easeInOut",
      onComplete: () => animateCircle(x, y, size, index)
    });
    
    animate(y, targetY, { 
      duration, 
      ease: "easeInOut" 
    });

    animate(size, 400 + Math.random() * 100, {
      duration: 15,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    });
  };

  useEffect(() => {
    setIsMounted(true);
    
    // Generate stars only on client
    const generatedStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      width: Math.random() * 4,
      height: Math.random() * 4,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.8 + 0.2,
      color: i % 5 === 0 ? 'bg-pink-300' : 'bg-white'
    }));
    setStars(generatedStars);

    // Initialize circle positions
    bigX.set(window.innerWidth * 0.2);
    bigY.set(window.innerHeight / 2);
    medium1X.set(window.innerWidth * 0.7);
    medium1Y.set(window.innerHeight / 4);
    medium2X.set(window.innerWidth * 0.1);
    medium2Y.set(window.innerHeight * 0.7);

    animateCircle(bigX, bigY, bigSize, 0);
    animateCircle(medium1X, medium1Y, medium1Size, 1);
    animateCircle(medium2X, medium2Y, medium2Size, 2);

    const handleResize = () => {
      [bigX, medium1X, medium2X].forEach(x => {
        if (x.get() > window.innerWidth - bigSize.get()) {
          x.set(window.innerWidth - bigSize.get());
        }
      });
      [bigY, medium1Y, medium2Y].forEach(y => {
        if (y.get() > window.innerHeight - bigSize.get()) {
          y.set(window.innerHeight - bigSize.get());
        }
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Don't render anything during SSR
  if (!isMounted) {
    return (
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/images/space-bg.jpg')] bg-cover bg-center opacity-20" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-[url('/images/space-bg.jpg')] bg-cover bg-center opacity-20" />
      
      <div className="absolute inset-0 mix-blend-screen">
        <motion.div
          className="absolute rounded-full"
          style={{
            backgroundColor: 'rgba(157, 78, 221, 0.8)',
            width: bigSize,
            height: bigSize,
            x: bigX,
            y: bigY,
            filter: 'blur(120px)',
          }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            backgroundColor: 'rgba(236, 72, 153, 0.6)',
            width: medium1Size,
            height: medium1Size,
            x: medium1X,
            y: medium1Y,
            filter: 'blur(100px)',
          }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            backgroundColor: 'rgba(129, 140, 248, 0.5)',
            width: medium2Size,
            height: medium2Size,
            x: medium2X,
            y: medium2Y,
            filter: 'blur(100px)',
          }}
        />
      </div>

      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
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
}