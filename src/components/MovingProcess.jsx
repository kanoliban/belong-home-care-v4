import React, { useEffect, useRef } from 'react';
import './MovingProcess.css';

const MovingProcess = () => {
  const steps = [
    {
      title: 'Initial Contact & Conversation',
      description: "We listen and learn about your family's unique needs."
    },
    {
      title: 'Tour & Assessment',
      description: 'You visit our space and we get to know your loved one.'
    },
    {
      title: 'Paperwork & Planning',
      description: 'We handle the details with clarity and care.'
    },
    {
      title: 'Moving Day & Welcome',
      description: 'Our team helps create a warm, supported arrival.'
    },
    {
      title: 'Adjustment & Follow-Up',
      description: 'We check in frequently and remain by your side.'
    },
  ];

  const containerRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    containerRef.current.forEach(ref => ref && observer.observe(ref));
    return () => containerRef.current.forEach(ref => ref && observer.unobserve(ref));
  }, []);

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="bg-[#fdfaf5] rounded-3xl shadow-lg p-6 md:p-8">
        {/* Section Header */}
        <div className="mb-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1a3b6f] leading-tight">
            The Moving Process
          </h2>
          <p className="text-lg text-[#1a3b6f]/80 mt-2">
            Every transition deserves tenderness
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Steps - Vertical Timeline with scroll animation */}
          <div className="relative border-l-2 border-[#1a3b6f]/30 ml-6 space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => (containerRef.current[index] = el)}
                className="relative pl-10 opacity-0 transform translate-y-6 transition-all duration-700"
              >
                <div className="absolute left-[-1.15rem] top-1 w-6 h-6 rounded-full bg-[#1a3b6f] flex items-center justify-center text-white font-semibold text-sm shadow">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-[#1a3b6f] font-serif">
                  {step.title}
                </h3>
                <p className="text-foreground/80 mt-1">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image Right Side */}
          <div className="w-full h-full flex justify-center items-start">
            <img
              src="https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=600&auto=format&fit=crop"
              alt="Moving Day"
              className="rounded-xl shadow-md max-w-full h-auto"
            />
          </div>
        </div>

        {/* Supportive Message */}
        <p className="mt-8 text-[#1a3b6f] text-lg text-center md:text-left">
          Our team supports you every step of the way, making the transition smooth and reassuring for both you and your loved one.
        </p>
      </div>

      {/* Animation styles are handled with CSS classes */}
    </section>
  );
};

export default MovingProcess;
