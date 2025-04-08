import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ChevronDown, ChevronUp } from "lucide-react";

export function RetractableCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      layout
      className={`relative border border-slate/20 rounded-xl p-6 bg-gradient-to-br from-[#FFF5EB] to-[#FFE8D9] shadow-md hover:shadow-lg transition-all duration-300 card-hover`}
      initial={{ borderRadius: 12 }}
      animate={{ borderRadius: 12 }}
    >
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider hover:text-primary transition-colors duration-300 font-sans letter-spacing-wide">My Story</span>
          <button
            onClick={toggleExpand}
            className="bg-white/80 rounded-full p-2 shadow-sm hover:bg-white transition-colors duration-300 text-primary"
            aria-label={isExpanded ? "Show less" : "Show more"}
          >
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary leading-tight hover:text-[#0f2a5c] transition-colors duration-300 georgia">
          why i started belong.
        </h3>

        <div className="flex flex-col md:flex-row gap-6">
          <div className={`${isExpanded ? 'md:w-2/3' : 'w-full'} space-y-4`}>
            <p className="text-lg md:text-xl text-foreground/80 font-sans leading-relaxed">
              My cousin has schizophrenia, and seeing him treated as just a number in the healthcare system broke my heart.
              {isExpanded && " After working as a registered nurse for over ten years, primarily with mental health patients, I decided to create something different."}
            </p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 overflow-hidden"
                >
                  <p className="text-lg text-foreground/80 font-sans leading-relaxed">
                    I wanted to build a place where people with mental health conditions truly felt like family—where they would be treated with dignity, respect, and genuine care. A place where they <span className="italic font-medium text-primary">belong</span>.
                  </p>
                  <blockquote className="text-primary border-l-4 border-primary pl-4 py-3 italic text-lg bg-primary/5 rounded-r-md font-serif georgia">
                    "Every person deserves to feel seen, heard, and valued - not just as a patient, but as a human being with dreams, preferences, and dignity."
                  </blockquote>
                  <p className="text-lg text-foreground/80 font-sans leading-relaxed">
                    Today, our homes provide not just shelter, but community, support, and the personalized care that everyone deserves. We see the whole person, not just their diagnosis.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {!isExpanded && (
              <p className="text-lg text-foreground/80 font-sans leading-relaxed">
                I wanted to build a place where people with mental health conditions truly felt like family...
                <button
                  onClick={toggleExpand}
                  className="text-primary font-medium hover:text-[#0f2a5c] ml-1 inline-flex items-center transition-colors duration-300"
                >
                  Read more
                </button>
              </p>
            )}

            <div className="flex items-center gap-2 text-primary mt-2">
              <Heart className="w-5 h-5 text-primary animate-pulse" />
              <span className="font-medium font-serif georgia">— Frances, Founder</span>
            </div>
          </div>

          <AnimatePresence>
            {isExpanded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="md:w-1/3"
              >
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                  alt="Frances, founder of Belong Health Care"
                  className="w-full h-auto rounded-xl shadow-md hover:opacity-95 transition-opacity duration-300"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="md:w-1/4 hidden md:block"
              >
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
                  alt="Frances, founder of Belong Health Care"
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
