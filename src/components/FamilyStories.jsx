import React, { useEffect, useRef, useState } from 'react';
import './FamilyStories.css';

const testimonials = [
  {
    name: 'Family Member',
    quote: 'Belong has been a blessing for our family. My brother is happier and more engaged than ever.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop'
  },
  {
    name: 'Family Member',
    quote: "Belong has truly transformed my sister's life. She feels included and connected.",
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=100&auto=format&fit=crop'
  },
  {
    name: 'Family Member',
    quote: 'We were nervous about the transition, but Belong made it seamless and beautiful.',
    image: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=100&auto=format&fit=crop'
  },
  {
    name: 'Family Member',
    quote: 'Knowing my mom is in a community that values her brings me so much peace.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop'
  },
  {
    name: 'Family Member',
    quote: 'I see my father laughing and participating — it means the world to us.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop'
  },
  {
    name: 'Family Member',
    quote: 'Belong has been a blessing for our family. My brother is happier and more engaged than ever.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop'
  }
];

const FamilyStories = () => {
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let scrollInterval;
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!scrollRef.current || isHovering) return;
        scrollRef.current.scrollLeft += 1;
      }, 20);
    };

    startAutoScroll();
    return () => clearInterval(scrollInterval);
  }, [isHovering]);

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="bg-[#fdfaf5] rounded-3xl shadow-lg p-6 md:p-8">
        <div className="mb-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1a3b6f] leading-tight">
            Family Stories
          </h2>
          <p className="text-lg text-[#1a3b6f]/80 mt-2">
            Hear from families who've found a home with us
          </p>
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex space-x-6 w-max">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white p-6 min-w-[280px] sm:min-w-[320px] max-w-xs rounded-xl shadow-md transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mb-4 border-2 border-[#1a3b6f]/30 object-cover"
                />
                <p className="italic text-[#1a3b6f] text-sm mb-4">"{t.quote}"</p>
                <p className="text-[#1a3b6f] font-medium text-sm">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom styles for hiding scrollbar */}
      </div>
    </section>
  );
};

export default FamilyStories;
