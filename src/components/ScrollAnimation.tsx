import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScrollAnimationProps {
  animateIn?: string;
  delay?: number;
  children: ReactNode;
  style?: React.CSSProperties;
}

const ScrollAnimation = ({ delay = 0, children, style }: ScrollAnimationProps) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      variants={variants}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
