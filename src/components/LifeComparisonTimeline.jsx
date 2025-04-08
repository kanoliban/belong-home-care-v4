import React, { useEffect, useRef, useState } from 'react';
import './LifeComparisonTimeline.css';
import { Sunrise, Coffee, Utensils, Car, ChefHat, Users } from 'lucide-react';

const lifeData = [
  {
    time: '7:00 AM',
    alone: 'Wake up alone in an empty house. Microwave breakfast if you remember to eat.',
    belong: 'Wake up to the smell of fresh coffee and a home-cooked breakfast with others.',
    icon: 'sunrise'
  },
  {
    time: '9:00 AM',
    alone: 'Not much to do at home, watching TV or staring out the window.',
    belong: 'Join group activities or relax in the common area. Coffee available all morning.',
    icon: 'coffee'
  },
  {
    time: '12:00 PM',
    alone: 'Frozen meal or sandwich, If you remember to eat.',
    belong: 'Family-style lunch prepared from scratch daily - no microwaved or leftover food.',
    icon: 'utensils'
  },
  {
    time: '2:00 PM',
    alone: 'Do something productive or go out. Might be stuck at home due to transportation.',
    belong: 'Daily transportation available to stores, shops, or appointments. Get out when you want to go out.',
    icon: 'car'
  },
  {
    time: '5:00 PM',
    alone: 'Another frozen meal or takeout if you can afford it.',
    belong: 'Diverse dinner menu with cultural food options. Family-style dining with others.',
    icon: 'chef-hat'
  },
  {
    time: '7:00 PM',
    alone: 'More TV. Limited social interaction. Increased feelings of isolation.',
    belong: 'Group activities, games, or quiet time in the common area. Staff available for support or conversation.',
    icon: 'users'
  },
];

const LifeComparisonTimeline = () => {
  const lineRef = useRef(null);
  const [fillHeight, setFillHeight] = useState(0);
  const blocksRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;
      const rect = lineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const scrollTop = scrollY + rect.top;
      const maxScroll = rect.height;
      const currentScroll = scrollY + windowHeight - scrollTop;
      const percentage = Math.min(Math.max(currentScroll / maxScroll, 0), 1);
      setFillHeight(percentage * 100);

      blocksRef.current.forEach((el) => {
        if (!el) return;
        const box = el.getBoundingClientRect();
        const inView = box.top < windowHeight * 0.9;
        el.style.opacity = inView ? '1' : '0';
        el.style.transform = inView ? 'translateY(0)' : 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
      });
    };

    requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 space-y-8 py-16">
      <h2 className="text-3xl font-serif lowercase">life at belong vs. living alone.</h2>
      <p className="text-center text-[#1a3b6f] text-lg italic max-w-xl mx-auto">
        "It's not just about care. It's about connection."
      </p>
      <div className="overflow-x-auto">
        <div className="relative rounded-xl shadow-xl overflow-hidden border-2 border-[#e1dacc]">
          <div
            ref={lineRef}
            className="absolute top-0 bottom-0 left-1/2 w-1 bg-[#ddd] transform -translate-x-1/2"
          >
            <div
              className="bg-[#1a3b6f] transition-all duration-300 ease-linear w-full rounded-full timeline-fill"
              style={{ height: `${fillHeight}%` }}
            ></div>
          </div>
          <div className="divide-y divide-[#eae4da]">
            {lifeData.map((entry, idx) => (
              <div
                key={idx}
                ref={el => blocksRef.current[idx] = el}
                className="grid grid-cols-3 gap-4 items-center py-10 px-6 transition-all duration-700 opacity-0"
                style={{
                  transform: 'translateY(30px)',
                  background: idx % 2 === 0
                    ? 'linear-gradient(to right, #f0f0f0 0%, #f0f0f0 50%, #1A3B6F 50%, #1A3B6F 100%)'
                    : 'linear-gradient(to right, #e8e8e8 0%, #e8e8e8 50%, #1A3B6F 50%, #1A3B6F 100%)'
                }}
              >
                <div className="text-left px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-300">
                  <p className="text-sm font-bold text-[#1a3b6f]">{entry.time}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#555]">{entry.alone}</p>
                </div>
                <div className="flex items-center justify-center text-3xl relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#ffffff] border-2 border-[#1a3b6f] flex items-center justify-center shadow-md timeline-icon">
                    {entry.icon === 'sunrise' && <Sunrise className="w-6 h-6 text-[#1a3b6f]" />}
                    {entry.icon === 'coffee' && <Coffee className="w-6 h-6 text-[#1a3b6f]" />}
                    {entry.icon === 'utensils' && <Utensils className="w-6 h-6 text-[#1a3b6f]" />}
                    {entry.icon === 'car' && <Car className="w-6 h-6 text-[#1a3b6f]" />}
                    {entry.icon === 'chef-hat' && <ChefHat className="w-6 h-6 text-[#1a3b6f]" />}
                    {entry.icon === 'users' && <Users className="w-6 h-6 text-[#1a3b6f]" />}
                  </div>
                </div>
                <div className="text-left px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <p className="text-sm font-semibold text-white">&nbsp;</p>
                  <p className="mt-2 text-sm leading-relaxed text-white font-medium">{entry.belong}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-[#1a3b6f] text-white rounded-full text-sm font-semibold shadow-md hover:bg-[#15325d] transition"
          >
            Ready to belong? Talk to us.
          </a>
        </div>
      </div>
    </section>
  );
};

export default LifeComparisonTimeline;
