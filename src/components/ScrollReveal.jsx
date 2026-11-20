import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable wrapper for smooth scroll-triggered reveals.
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  yOffset = 24,
  duration = 0.55
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
