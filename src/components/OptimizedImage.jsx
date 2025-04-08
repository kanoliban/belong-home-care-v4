import React, { useState, useEffect, useRef } from 'react';

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  aspectRatio = '16/9',
  objectFit = 'cover',
  loading = 'lazy',
  placeholder = 'blur',
  blurDataURL,
  onClick,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);
  
  // Calculate aspect ratio for padding
  const getPaddingTop = () => {
    if (aspectRatio) {
      const [width, height] = aspectRatio.split('/');
      return `${(Number(height) / Number(width)) * 100}%`;
    }
    return '56.25%'; // Default 16:9
  };
  
  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!imgRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );
    
    observer.observe(imgRef.current);
    
    return () => {
      if (imgRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
  };
  
  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ paddingTop: getPaddingTop() }}
      onClick={onClick}
    >
      {/* Placeholder */}
      {placeholder === 'blur' && !isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ 
            backgroundImage: blurDataURL ? `url(${blurDataURL})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)',
            transform: 'scale(1.1)'
          }}
        />
      )}
      
      {/* Actual image */}
      {(isInView || loading !== 'lazy') && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          onLoad={handleLoad}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectFit }}
          {...props}
        />
      )}
    </div>
  );
}
