import React, { useState } from 'react';

const faqs = [
  {
    q: 'How often can we visit?',
    a: 'You can visit your loved one at any time. We have an open-door policy for family members and encourage regular visits to maintain strong connections.'
  },
  {
    q: "What's included in the monthly fee?",
    a: 'Our monthly fee includes accommodation, all meals and snacks, 24/7 care staff, medication management, transportation to appointments, activities, and utilities. There are no hidden costs.'
  },
  {
    q: 'How do you handle medications?',
    a: 'Our trained staff manages all medications, ensuring they are taken at the right time and in the correct dosage. We maintain detailed medication records and coordinate with healthcare providers.'
  },
  {
    q: 'What if my loved one has dietary restrictions?',
    a: 'We accommodate all dietary needs and restrictions. Our kitchen staff prepares fresh, nutritious meals that meet individual requirements, whether medical, cultural, or preference-based.'
  },
  {
    q: 'How do you handle medical appointments?',
    a: 'We provide transportation to medical appointments and can have a staff member accompany residents if needed. We maintain communication with healthcare providers and keep families informed.'
  },
  {
    q: 'What activities are available?',
    a: "We offer a variety of activities including restaurant outings, bowling, movies, games, arts and crafts, music, and cultural events. Activities are tailored to residents' interests and abilities."
  },
  {
    q: 'How do you ensure safety and security?',
    a: 'Our homes have 24/7 staff presence, secure entry systems, emergency call systems, and regular safety checks. All staff are trained in emergency procedures and first aid.'
  },
  {
    q: "What happens if there's an emergency?",
    a: 'In case of emergency, our staff follows established protocols, contacts emergency services if needed, and notifies family members immediately. We have backup systems for power and essential services.'
  },
  {
    q: 'Can residents personalize their rooms?',
    a: 'Yes, we encourage residents to bring personal items, photos, and small furniture pieces to make their space feel like home. We help with room arrangement to ensure comfort and safety.'
  },
  {
    q: 'How do you handle special occasions and holidays?',
    a: 'We celebrate birthdays, holidays, and special occasions with decorations, special meals, and activities. Families are welcome to join celebrations or plan private gatherings in our common areas.'
  },
];

const AccordionItem = ({ question, answer, index, activeIndex, setActiveIndex }) => {
  const isOpen = index === activeIndex;

  return (
    <div className="mb-4">
      <button
        onClick={() => setActiveIndex(isOpen ? null : index)}
        className="w-full text-left text-lg font-medium flex justify-between items-center p-4 bg-white rounded-md shadow hover:bg-gray-50 transition-all duration-300"
      >
        <span className="text-[#1a3b6f]">{question}</span>
        <span className={`transform transition-transform duration-300 text-[#1a3b6f] ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out px-4 ${isOpen ? 'max-h-40 py-4' : 'max-h-0'} text-foreground/80`}
      >
        {answer}
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const leftColumn = faqs.filter((_, i) => i % 2 === 0);
  const rightColumn = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="bg-[#fdfaf5] rounded-3xl shadow-lg p-6 md:p-8">
        <div className="mb-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1a3b6f] leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#1a3b6f]/80 mt-2">
            Common questions about care at Belong
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            {leftColumn.map((item, index) => (
              <AccordionItem
                key={index * 2}
                question={item.q}
                answer={item.a}
                index={index * 2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
          <div>
            {rightColumn.map((item, index) => (
              <AccordionItem
                key={index * 2 + 1}
                question={item.q}
                answer={item.a}
                index={index * 2 + 1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
