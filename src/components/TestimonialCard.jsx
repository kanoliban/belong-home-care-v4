import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function TestimonialCard({
  quote,
  author,
  role,
  image,
  rating,
  className = '',
  animate = true
}) {
  // Animation variants
  const cardVariants = {
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
        viewport: { once: true, margin: "-50px" },
        variants: cardVariants
      }
    : {};
  
  // Render stars for rating
  const renderRating = () => {
    if (!rating) return null;
    
    return (
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };
  
  return (
    <Component
      className={`testimonial bg-white rounded-xl shadow-lg p-6 md:p-8 relative overflow-hidden ${className}`}
      {...componentProps}
    >
      {/* Quote icon */}
      <div className="absolute top-4 right-4 text-primary/10">
        <Quote className="w-12 h-12" />
      </div>
      
      {/* Rating */}
      {renderRating()}
      
      {/* Quote */}
      <blockquote className="testimonial-content text-lg md:text-xl text-foreground/80 italic mb-6">
        "{quote}"
      </blockquote>
      
      {/* Author */}
      <div className="testimonial-author flex items-center">
        {image && (
          <img
            src={image}
            alt={author}
            className="testimonial-avatar w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary/20"
          />
        )}
        <div>
          <div className="testimonial-name text-lg font-medium text-primary">{author}</div>
          {role && <div className="testimonial-role text-sm text-foreground/60">{role}</div>}
        </div>
      </div>
    </Component>
  );
}
