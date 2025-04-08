import React, { useEffect, useRef } from 'react';

const PhilosophySection = () => {
  const quoteRef = useRef(null);
  const detailsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const quoteBox = quoteRef.current?.getBoundingClientRect();
      const detailsBox = detailsRef.current?.getBoundingClientRect();
      const imageBox = imageRef.current?.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (quoteBox?.top < windowHeight * 0.8) {
        quoteRef.current.style.opacity = 1;
        quoteRef.current.style.transform = 'translateY(0px)';
      }

      if (detailsBox?.top < windowHeight * 0.8) {
        detailsRef.current.style.opacity = 1;
        detailsRef.current.style.transform = 'translateY(0px)';
      }

      if (imageBox?.top < windowHeight * 0.8) {
        imageRef.current.style.opacity = 1;
        imageRef.current.style.transform = 'scale(1)';
      }
    };

    requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="container mx-auto px-4 py-10 md:py-16">
      <div className="bg-[#fdfaf5] rounded-3xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-6 md:p-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a3b6f] font-semibold leading-tight tracking-tight">
              Our Philosophy
              <span className="text-lg font-normal text-[#1a3b6f]/80 block mt-2">
                The heart behind everything we do.
              </span>
            </h2>

            <div
              ref={quoteRef}
              className="opacity-0 translate-y-6 transition-all duration-700 ease-out"
            >
              <p className="text-5xl text-[#1a3b6f] leading-snug mb-4 font-serif">"</p>
              <blockquote className="text-lg md:text-xl italic text-[#1a3b6f] font-serif">
                I wanted them to be cared for like I would want my own family member, like my cousin, to be cared for. I wanted somewhere clean, decent, and for them to be given high quality of care.
              </blockquote>
              <p className="text-md text-[#555] mt-4">— Family Member, Belong Community</p>
            </div>

            <div
              ref={detailsRef}
              className="opacity-0 translate-y-6 transition-all duration-700 delay-100 ease-out"
            >
              <p className="text-base text-[#333] leading-relaxed">
                At Belong, we believe in creating a true home environment where every resident feels valued,
                respected, and understood. We prioritize human connection and dignity over systems and checklists.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#1a3b6f] mr-2">•</span>
                  <span>Person-centered care that respects individual needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1a3b6f] mr-2">•</span>
                  <span>Cultural sensitivity and inclusive community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1a3b6f] mr-2">•</span>
                  <span>Dignity and independence in daily living</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            ref={imageRef}
            className="w-full md:w-1/2 opacity-0 scale-95 transition-all duration-700 ease-out"
          >
            <div className="h-full relative">
              <img
                src="https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=800&auto=format&fit=crop"
                alt="Home-like Environment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xl font-medium">Home-like Environment</p>
                <p className="text-sm opacity-90">Where comfort meets care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
