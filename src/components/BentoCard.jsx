import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ExpandedCardModal } from "./ExpandedCardModal";

export function BentoCard({
  id,
  title,
  preview,
  icon,
  className,
  category,
  badge,
  image,
  expanded,
  onExpand,
  onCollapse
}) {
  const renderCollapsedImage = () => {
    if (!image?.collapsed) return null;

    // For Aspen Grove and Willow Stream, show large image with text underneath
    if (["aspen-grove", "willow-stream"].includes(id) && image.collapsed?.src) {
      return (
        <div className="mt-4 space-y-4">
          <img
            src={image.collapsed.src}
            alt={image.collapsed.alt}
            className="w-full h-48 object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      );
    }

    if (Array.isArray(image.collapsed)) {
      return (
        <div className="flex gap-2 mt-4">
          {image.collapsed.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className="w-[100px] h-[75px] object-cover rounded-lg"
              loading="lazy"
            />
          ))}
        </div>
      );
    }

    return (
      <div className="flex justify-end mt-4">
        <img
          src={image.collapsed.src}
          alt={image.collapsed.alt}
          className="w-[100px] h-[100px] object-cover rounded-lg"
          loading="lazy"
        />
      </div>
    );
  };

  const renderExpandedImages = () => {
    if (!image?.expanded) return null;

    if (Array.isArray(image.expanded)) {
      return (
        <div className="grid grid-cols-2 gap-4">
          {image.expanded.map((img, index) => (
            <motion.img
              key={index}
              src={img.src}
              alt={img.alt}
              className="w-full h-[300px] object-cover rounded-lg"
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          ))}
        </div>
      );
    }

    return (
      <motion.img
        src={image.expanded.src}
        alt={image.expanded.alt}
        className="w-full h-[400px] object-cover rounded-lg"
        loading="lazy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    );
  };

  return (
    <AnimatePresence>
      {expanded ? (
        <ExpandedCardModal
          id={id}
          title={title}
          badge={badge}
          onCollapse={onCollapse}
          renderExpandedImages={renderExpandedImages}
        />
      ) : (
        <motion.div
          layout
          className={`cursor-pointer relative group border border-slate/20 rounded-xl p-6 bg-white transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.01] ${className} card-hover`}
          onClick={onExpand}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          {id !== "why-belong" && (
            <span className="bento-card-label hover:text-primary transition-colors duration-300">{category}</span>
          )}
          <ArrowRight className="absolute right-4 top-4 h-5 w-5 text-primary/60 group-hover:text-primary transition-colors duration-300" />

          {id === "why-belong" ? (
            <div className="flex flex-col md:flex-row gap-4 mt-8 min-h-[350px]">
              <div className="md:w-2/3 space-y-4">
                {icon}
                <h3 className="text-xl font-semibold georgia leading-snug text-primary hover:text-[#0f2a5c] transition-colors duration-300">{title}</h3>
                {badge && (
                  <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-medium hover-lift">
                    {badge}
                  </span>
                )}
                <p className="text-foreground/70">{preview}</p>
              </div>
              <div className="md:w-1/3 flex justify-center items-center">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
                  alt="Frances"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          ) : (
            <div className="mt-8 space-y-4">
              {icon}
              <h3 className="text-xl font-semibold georgia leading-snug text-primary hover:text-[#0f2a5c] transition-colors duration-300">{title}</h3>
              {badge && (
                <span className="inline-block bg-success text-white px-3 py-1 rounded-full text-sm font-medium">
                  {badge}
                </span>
              )}
              <p className="text-foreground/70">{preview}</p>
              {renderCollapsedImage()}
            </div>
          )}

          <span className="absolute bottom-4 right-4 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-[-4px]">
            Learn More →
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
