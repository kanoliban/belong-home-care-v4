import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function BentoCard({
  id,
  title,
  badge,
  image,
  onExpand
}) {
  const [isHovered, setIsHovered] = useState(false);
  const imageUrl = image?.collapsed?.src;
  const imageAlt = image?.collapsed?.alt || title || 'Card image';

  // Clean up title (remove period if present)
  const cleanTitle = title ? title.replace(/\.$/, '') : 'Untitled';

  return (
    <div
      className="w-full sm:w-full md:w-[450px] lg:w-[540px] h-[350px] sm:h-[400px] md:h-[450px] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] border-2 sm:border-3 md:border-4 border-[#f7f2e9] bg-[#f7f2e9] overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: 'all 300ms ease-in-out',
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        boxShadow: isHovered ? '0 8px 20px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)'
      }}
    >
      {/* Image Container */}
      <div
        className="w-full relative overflow-hidden transition-all duration-300 rounded-[16px] sm:rounded-[20px] md:rounded-[24px]"
        style={{
          height: isHovered ? '100%' : '75%',
          position: isHovered ? 'absolute' : 'relative',
          inset: isHovered ? '0' : 'auto'
        }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-gray-400">No image</span>
          </div>
        )}

        {/* Hover Overlay - Only visible on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.7))'
          }}
          aria-hidden="true"
        ></div>
      </div>

      {/* Content Container */}
      <div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-end p-4 sm:p-5 md:p-7 transition-all duration-300"
        style={{
          height: isHovered ? 'auto' : '25%',
          position: isHovered ? 'absolute' : 'relative',
          bottom: isHovered ? '0' : 'auto',
          left: isHovered ? '0' : 'auto',
          right: isHovered ? '0' : 'auto',
          zIndex: isHovered ? '10' : 'auto'
        }}
      >
        {/* Title and Subtitle */}
        <div>
          <h3
            className="font-bold text-[20px] sm:text-[24px] md:text-[30px] leading-tight transition-colors duration-300"
            style={{ color: isHovered ? '#ffffff' : '#1a3b6f' }}
          >
            {cleanTitle}
          </h3>

          {/* Optional badge as subtitle */}
          {badge && (
            <p
              className="mt-1 sm:mt-2 text-[16px] sm:text-[18px] md:text-[20px] transition-colors duration-300"
              style={{ color: isHovered ? '#ffffff' : 'rgba(26, 59, 111, 0.7)' }}
            >
              {badge}
            </p>
          )}
        </div>

        {/* CTA Button */}
        {onExpand && (
          <button
            className="rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-white text-sm sm:text-base font-medium flex items-center gap-2 sm:gap-3 transition-colors duration-300 mt-4 sm:mt-0"
            style={{ backgroundColor: isHovered ? '#333333' : '#15605f' }}
            onClick={onExpand}
            aria-label={`View details for ${cleanTitle}`}
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>View Detail</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default BentoCard;
