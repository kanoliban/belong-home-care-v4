import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnClickOutside = true,
  showCloseButton = true,
  className = ''
}) {
  const modalRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);
  
  // Size classes
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4'
  };
  
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      
      // Handle tab key for focus trap
      if (e.key === 'Tab' && isOpen) {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableRef.current) {
            e.preventDefault();
            lastFocusableRef.current?.focus();
          }
        } else {
          if (document.activeElement === lastFocusableRef.current) {
            e.preventDefault();
            firstFocusableRef.current?.focus();
          }
        }
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);
  
  // Set focus trap when modal opens
  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Get all focusable elements
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        firstFocusableRef.current = focusableElements[0];
        lastFocusableRef.current = focusableElements[focusableElements.length - 1];
        
        // Focus the first element
        firstFocusableRef.current.focus();
      }
      
      // Prevent body scrolling
      document.body.classList.add('overflow-hidden');
    } else {
      // Re-enable body scrolling
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeOnClickOutside ? onClose : undefined}
          />
          
          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative bg-white rounded-lg shadow-xl w-full ${sizeClasses[size]} max-h-[90vh] overflow-auto ${className}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            {showCloseButton && (
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-gray-500 hover:text-gray-700 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={onClose}
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            )}
            
            {/* Header */}
            {title && (
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 id="modal-title" className="text-xl font-semibold text-gray-900">
                  {title}
                </h3>
              </div>
            )}
            
            {/* Body */}
            <div className={`px-6 py-4 ${!title ? 'pt-6' : ''} ${!footer ? 'pb-6' : ''}`}>
              {children}
            </div>
            
            {/* Footer */}
            {footer && (
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                {footer}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
