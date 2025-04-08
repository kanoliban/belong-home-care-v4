import React from 'react';
import { motion } from 'framer-motion';

export function ContentSection({
  title,
  subtitle,
  eyebrow,
  children,
  align = 'left',
  className = '',
  animate = true,
  id
}) {
  // Text alignment classes
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  const Component = animate ? motion.div : 'div';
  const componentProps = animate
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        variants: containerVariants
      }
    : {};
  
  return (
    <Component
      id={id}
      className={`max-w-4xl ${alignClasses[align]} ${className}`}
      {...componentProps}
    >
      {eyebrow && (
        <motion.span
          className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2"
          variants={animate ? itemVariants : undefined}
        >
          {eyebrow}
        </motion.span>
      )}
      
      {title && (
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary leading-tight mb-4"
          variants={animate ? itemVariants : undefined}
        >
          {title}
        </motion.h2>
      )}
      
      {subtitle && (
        <motion.p
          className="text-lg md:text-xl text-foreground/80 mb-6 max-w-3xl"
          variants={animate ? itemVariants : undefined}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div variants={animate ? itemVariants : undefined}>
        {children}
      </motion.div>
    </Component>
  );
}
