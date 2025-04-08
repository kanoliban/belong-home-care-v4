import React, { useEffect, useRef } from 'react';

const ActivitiesSection = () => {
  const titleRef = useRef(null);
  const quote1Ref = useRef(null);
  const quote2Ref = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Animate title
      if (titleRef.current) {
        const titleBox = titleRef.current.getBoundingClientRect();
        if (titleBox.top < windowHeight * 0.85) {
          titleRef.current.style.opacity = 1;
          titleRef.current.style.transform = 'translateY(0)';
        }
      }

      // Animate quotes
      [quote1Ref, quote2Ref].forEach(ref => {
        if (!ref.current) return;
        const box = ref.current.getBoundingClientRect();
        if (box.top < windowHeight * 0.85) {
          ref.current.style.opacity = 1;
          ref.current.style.transform = 'translateY(0)';
        }
      });

      // Animate cards with staggered delay
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const box = card.getBoundingClientRect();
        if (box.top < windowHeight * 0.85) {
          setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0) scale(1)';
          }, index * 150);
        }
      });
    };

    requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="container mx-auto px-4 py-10 md:py-16">
      <div className="bg-[#fdfaf5] rounded-3xl shadow-lg p-6 md:p-8 space-y-10">
        {/* Title */}
        <div
          ref={titleRef}
          className="opacity-0 translate-y-6 transition-all duration-700 ease-out"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#1a3b6f] leading-tight">
            Activities & Community
          </h2>
          <p className="text-lg md:text-xl text-[#1a3b6f]/80 mt-2">
            Outings that bring joy, connection, and freedom.
          </p>
        </div>

        {/* Quotes - Improved layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div
            ref={quote1Ref}
            className="bg-white rounded-xl shadow-md p-6 border border-[#eee] opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            <div className="flex items-start">
              <p className="text-5xl text-[#1a3b6f] font-serif leading-snug mr-2">"</p>
              <div>
                <p className="italic text-[#1a3b6f] text-lg">
                  We provide twice a week activities. We take our residents out to eat, to restaurants, to buffets. We also do bowling, movies, and other trips.
                </p>
                <p className="text-sm text-[#555] mt-4 font-medium">– Frances, Program Coordinator</p>
              </div>
            </div>
          </div>

          <div
            ref={quote2Ref}
            className="bg-white rounded-xl shadow-md p-6 border border-[#eee] opacity-0 translate-y-6 transition-all duration-700 ease-out md:mt-12"
          >
            <div className="flex items-start">
              <p className="text-5xl text-[#1a3b6f] font-serif leading-snug mr-2">"</p>
              <div>
                <p className="italic text-[#1a3b6f] text-lg">
                  Sometimes they just tell us things they want to do and we try to do that. We're always open to suggestions from our residents.
                </p>
                <p className="text-sm text-[#555] mt-4 font-medium">– Frances, Program Coordinator</p>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Schedule - Improved Card Layout */}
        <div>
          <h3 className="text-2xl font-serif text-[#1a3b6f] mb-6">Weekly Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                day: 'Monday',
                icon: '🍽️',
                title: 'Restaurant Outing',
                description: 'Buffets, favorites, and shared meals out in the community.'
              },
              {
                day: 'Wednesday',
                icon: '🎳',
                title: 'Bowling',
                description: 'A fun, active mid-week social tradition everyone looks forward to.'
              },
              {
                day: 'Friday',
                icon: '🎬',
                title: 'Movie Trips',
                description: 'Fridays are for film and popcorn. Outings to local theaters or cozy in-house showings.'
              }
            ].map((activity, index) => (
              <div
                key={activity.day}
                ref={el => cardsRef.current[index] = el}
                className="bg-white rounded-2xl shadow-lg p-6 border border-[#e5e5e5] opacity-0 translate-y-8 scale-95 transition-all duration-500 ease-out"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">{activity.icon}</span>
                  <p className="text-sm text-[#1a3b6f] font-semibold uppercase">{activity.day}</p>
                </div>
                <h3 className="text-xl font-serif text-[#1a3b6f] mb-2">{activity.title}</h3>
                <p className="text-sm text-[#444]">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-8">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#1a3b6f] text-white rounded-full text-lg font-medium shadow-md hover:bg-[#15325d] transition-colors"
          >
            Join Our Next Activity
          </a>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
