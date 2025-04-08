import React, { useState } from "react";
import { Hero } from "../components/Hero";
import { BentoCard } from "../components/BentoCard";
import { Contact } from "../components/Contact";
import { RetractableCard } from "../components/RetractableCard";
import { Home, Car, Utensils } from "lucide-react";

function HomePage() {
  const [expandedCard, setExpandedCard] = useState(null);

  const cards = [
    {
      id: "aspen-grove",
      title: "Aspen Grove.",
      preview: "A nurturing home for young adults with disabilities, offering personalized support in a warm environment.",
      icon: <Home className="w-6 h-6 text-secondary" />,
      className: "gradient-glass",
      category: "Our Homes →",
      badge: "1 BED AVAILABLE",
      image: {
        collapsed: {
          src: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=400&auto=format&fit=crop",
          alt: "Aspen Grove Home"
        },
        expanded: [
          {
            src: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=600&auto=format&fit=crop",
            alt: "Aspen Grove Home Exterior"
          },
          {
            src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop",
            alt: "Welcoming Common Area"
          },
          {
            src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&auto=format&fit=crop",
            alt: "Comfortable Bedroom"
          }
        ]
      }
    },
    {
      id: "willow-stream",
      title: "Willow Stream.",
      preview: "A supportive residence for adults with mental health needs, fostering independence and community.",
      icon: <Home className="w-6 h-6 text-secondary" />,
      className: "gradient-glass",
      category: "Our Homes →",
      badge: "2 BEDS AVAILABLE",
      image: {
        collapsed: {
          src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=400&auto=format&fit=crop",
          alt: "Willow Stream Home"
        },
        expanded: [
          {
            src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop",
            alt: "Willow Stream Home Exterior"
          },
          {
            src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=600&auto=format&fit=crop",
            alt: "Peaceful Garden Area"
          },
          {
            src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop",
            alt: "Comfortable Bedroom"
          }
        ]
      }
    },
    {
      id: "differences",
      title: "what makes us different.",
      preview: "Daily transportation, home-cooked cultural meals, and a genuine sense of belonging.",
      icon: <Car className="w-6 h-6 text-primary" />,
      className: "gradient-lavender",
      category: "Our Approach →",
      image: {
        expanded: [
          {
            src: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600&auto=format&fit=crop",
            alt: "Delicious Cultural Meals"
          },
          {
            src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=600&auto=format&fit=crop",
            alt: "Reliable Transportation Service"
          },
          {
            src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop",
            alt: "Engaging Resident Activities"
          }
        ]
      }
    },
    {
      id: "for-families",
      title: "for families & professionals.",
      preview: "Whether you're looking for care for a loved one or referring a client, we're here to help.",
      icon: <Utensils className="w-6 h-6 text-secondary" />,
      className: "gradient-professional",
      category: "Get Started →",
      image: {
        collapsed: [
          {
            src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=100&auto=format&fit=crop",
            alt: "Family Visiting Resident"
          },
          {
            src: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=100&auto=format&fit=crop",
            alt: "Professional Meeting with Staff"
          }
        ],
        expanded: {
          src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
          alt: "Family Visiting Resident"
        }
      }
    }
  ];

  return (
    <main>
      <Hero />
      <div className="container px-4 py-10 md:py-16 mx-auto">
        {/* Introductory Text */}
        <div className="max-w-3xl mx-auto text-center my-8 md:my-12">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-sans">
            Belong Home Care provides residential homes where adults with mental health conditions can live with dignity, receive personalized care, and experience a true sense of community. Our approach combines professional support with the warmth and connection of family.
          </p>
        </div>

        {/* Why I Started Belong - Retractable Card */}
        <div className="mb-6"> {/* Adjusted margin-bottom */}
          <RetractableCard />
        </div>

        <section className="grid gap-5 md:grid-cols-2 mb-16"> {/* Adjusted gap */}
          {cards.map((card) => (
            <BentoCard
              key={card.id}
              {...card}
              expanded={expandedCard === card.id}
              onExpand={() => setExpandedCard(card.id)}
              onCollapse={() => setExpandedCard(null)}
            />
          ))}
        </section>
        <Contact />
      </div>
    </main>
  );
}

export default HomePage;
