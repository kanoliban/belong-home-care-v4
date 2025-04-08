import React from "react";
import { motion } from "framer-motion";
import { X, ArrowRight, MapPin, Calendar, Clock, Users, Car, Utensils, Coffee, Brain, Globe } from "lucide-react";
import { Button } from "./ui/button";

export function ExpandedCardModal({
  id,
  title,
  badge,
  onCollapse,
  renderExpandedImages
}) {
  // Common styles for all cards
  const cardStyles = {
    container: "fixed inset-0 z-50 flex items-center justify-center p-4",
    overlay: "fixed inset-0 bg-black/60 backdrop-blur-sm",
    modal: "relative bg-white rounded-xl shadow-2xl max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto",
    closeButton: "absolute top-4 right-4 bg-white/90 rounded-full p-2 shadow-md hover:bg-white transition-colors duration-300 z-10",
    header: "p-6 md:p-8 border-b",
    body: "p-6 md:p-8",
    title: "text-3xl font-serif text-primary",
    badge: "inline-block bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium mt-2",
    section: "space-y-6",
    sectionTitle: "text-xl font-medium text-primary",
    paragraph: "text-foreground/80 text-lg leading-relaxed",
    quote: "text-primary border-l-4 border-primary pl-4 py-2 italic text-lg bg-primary/5 rounded-r-md my-6",
    button: "mt-6 px-6 py-3 text-base font-medium shadow-md hover:scale-[1.02] transition-all duration-300 btn-press btn-hover",
    grid: "grid md:grid-cols-2 gap-8 mt-8",
    card: "bg-slate/5 p-6 rounded-xl border border-slate/10 hover:shadow-md transition-all duration-300",
    featureIcon: "w-10 h-10 text-primary mb-4",
    featureTitle: "text-lg font-medium text-primary mb-2",
    featureText: "text-foreground/70",
  };

  // Render different content based on card ID
  const renderContent = () => {
    // Why I Started Belong Card
    if (id === "why-belong") {
      return (
        <>
          <div className={cardStyles.header}>
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">My Story</span>
            <h2 className={cardStyles.title}>{title}</h2>
          </div>
          <div className={cardStyles.body}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className={cardStyles.section}>
                <p className={cardStyles.paragraph}>
                  When my cousin was diagnosed with schizophrenia, I saw firsthand how the healthcare system often reduces people to their diagnosis. As a registered nurse with over ten years of experience, I knew there had to be a better way.
                </p>
                <blockquote className={cardStyles.quote}>
                  "Every person deserves to feel seen, heard, and valued - not just as a patient, but as a human being with dreams, preferences, and dignity."
                </blockquote>
                <p className={cardStyles.paragraph}>
                  That's why at Belong, we do things differently. We create genuine homes where each resident's individuality is celebrated and their voice matters. Our approach combines professional care with the warmth and connection of family.
                </p>
                <p className={cardStyles.paragraph}>
                  Today, I'm proud to say that our residents don't just receive care—they experience belonging. They have a place where their unique needs are met, their preferences are honored, and their lives have meaning and purpose.
                </p>
                <div className="flex items-center gap-3 text-primary mt-8 pt-4 border-t border-primary/20">
                  <span className="font-medium text-lg">— Frances, Founder</span>
                </div>
                <Button className={cardStyles.button}>
                  <span className="mr-2">Learn more about our approach</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div>
                {renderExpandedImages()}
                <div className="mt-8 bg-cream rounded-xl p-6">
                  <h3 className={cardStyles.sectionTitle}>Our Mission</h3>
                  <p className="text-foreground/80 mt-2">
                    To provide a safe, stable and supportive home for individuals with disabilities. We are dedicated to fostering a sense of belonging by offering compassionate care, personalized support, and a nurturing environment where residents can thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }

    // Aspen Grove or Willow Stream Homes
    if (id === "aspen-grove" || id === "willow-stream") {
      return (
        <>
          <div className={cardStyles.header}>
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Our Homes</span>
            <h2 className={cardStyles.title}>{title}</h2>
            {badge && <div className={cardStyles.badge}>{badge}</div>}
          </div>
          <div className={cardStyles.body}>
            <div className="relative mb-8 rounded-xl overflow-hidden">
              {renderExpandedImages()}
            </div>
            <div className={cardStyles.section}>
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-primary">Location</h3>
                  <p className="text-foreground/70">
                    {id === "aspen-grove"
                      ? "1234 Maple Street, Brooklyn Park, MN 55444"
                      : "5678 Oak Avenue, Brooklyn Park, MN 55445"}
                  </p>
                </div>
              </div>

              <h3 className={cardStyles.sectionTitle}>About This Home</h3>
              <p className={cardStyles.paragraph}>
                Welcome to {title}, a warm and supportive home dedicated to personalized care and community.
                {id === "aspen-grove"
                  ? " Our Aspen Grove residence offers a peaceful environment with 5 private bedrooms, spacious common areas, and beautiful garden views."
                  : " Our Willow Stream home is our newest residence with 5 private bedrooms in a quiet neighborhood with modern amenities and a focus on community integration."}
              </p>

              <div className={cardStyles.grid}>
                <div className={cardStyles.card}>
                  <Users className={cardStyles.featureIcon} />
                  <h4 className={cardStyles.featureTitle}>Resident Profile</h4>
                  <p className={cardStyles.featureText}>
                    {id === "aspen-grove"
                      ? "Adults ages 18-30 with mental health conditions seeking a supportive community."
                      : "Adults ages 25-50 with mental health conditions who benefit from structure and support."}
                  </p>
                </div>
                <div className={cardStyles.card}>
                  <Clock className={cardStyles.featureIcon} />
                  <h4 className={cardStyles.featureTitle}>Staff Support</h4>
                  <p className={cardStyles.featureText}>
                    24/7 professional care with specialized mental health training and personalized support plans.
                  </p>
                </div>
              </div>

              <h3 className={cardStyles.sectionTitle + " mt-8"}>Amenities & Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Private bedrooms",
                  "Shared bathrooms",
                  "Common living areas",
                  "Medication management",
                  "Nutritious meals",
                  "Transportation",
                  "Community activities",
                  "Mental health support",
                  "Life skills training"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className={cardStyles.button}>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Schedule a Tour</span>
                </Button>
                <Button variant="outline" className={cardStyles.button}>
                  <span className="mr-2">View Floor Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </>
      );
    }

    // Our Homes Card (showing both homes)
    if (id === "our-homes") {
      return (
        <>
          <div className={cardStyles.header}>
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Our Locations</span>
            <h2 className={cardStyles.title}>Our Residential Homes</h2>
          </div>
          <div className={cardStyles.body}>
            <div className="relative mb-8 rounded-xl overflow-hidden">
              {renderExpandedImages()}
            </div>

            <div className={cardStyles.grid}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate/10 hover:shadow-lg transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=600&auto=format&fit=crop"
                  alt="Aspen Grove Home"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium text-primary mb-2">Aspen Grove Home</h3>
                  <p className="text-foreground/70 mb-4">A peaceful 5-bedroom residence with garden views, designed for adults ages 18-30 seeking a supportive community environment.</p>
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>Brooklyn Park, MN</span>
                  </div>
                  <div className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                    1 Bed Available
                  </div>
                  <Button className="w-full">
                    <span className="mr-2">View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate/10 hover:shadow-lg transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop"
                  alt="Willow Stream Home"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium text-primary mb-2">Willow Stream Home</h3>
                  <p className="text-foreground/70 mb-4">Our newest 5-bedroom home in a quiet neighborhood, ideal for adults ages 25-50 who benefit from structure and support.</p>
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>Brooklyn Park, MN</span>
                  </div>
                  <div className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                    2 Beds Available
                  </div>
                  <Button className="w-full">
                    <span className="mr-2">View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-cream rounded-xl p-6">
              <h3 className={cardStyles.sectionTitle}>Why Choose Our Homes?</h3>
              <p className="text-foreground/80 mt-2 mb-4">
                Our residential homes offer more than just a place to live—they provide a supportive community where residents can thrive. With 24/7 professional care, personalized support plans, and a focus on independence, we create an environment that fosters growth and well-being.
              </p>
              <Button>
                <Calendar className="w-4 h-4 mr-2" />
                <span>Schedule a Tour</span>
              </Button>
            </div>
          </div>
        </>
      );
    }

    // For Families & Professionals Card
    if (id === "for-families") {
      return (
        <>
          <div className={cardStyles.header}>
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Get Started</span>
            <h2 className={cardStyles.title}>For Families & Professionals</h2>
          </div>
          <div className={cardStyles.body}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className={cardStyles.section}>
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop"
                  alt="Family Visiting Resident"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className={cardStyles.sectionTitle}>For Families</h3>
                <p className={cardStyles.paragraph}>
                  Finding the right care for your loved one is a deeply personal decision. We're here to guide you through every step of the process, from initial inquiries to move-in day and beyond.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Schedule a Visit</h4>
                      <p className="text-foreground/70">Tour our homes and meet our team to experience our approach firsthand.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Assessment</h4>
                      <p className="text-foreground/70">We'll work with you to understand your loved one's unique needs and preferences.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="font-medium">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Personalized Care Plan</h4>
                      <p className="text-foreground/70">Together, we'll create a care plan tailored to your loved one's specific needs.</p>
                    </div>
                  </div>
                </div>
                <Button className={cardStyles.button}>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Schedule a Visit</span>
                </Button>
              </div>

              <div className={cardStyles.section}>
                <img
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=600&auto=format&fit=crop"
                  alt="Professional Meeting with Staff"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className={cardStyles.sectionTitle}>For Professionals</h3>
                <p className={cardStyles.paragraph}>
                  We partner with healthcare providers to ensure seamless transitions and exceptional care for referred clients. Our streamlined referral process makes it easy to connect your clients with the support they need.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Make a Referral</h4>
                      <p className="text-foreground/70">Submit a referral through our simple online form or contact us directly.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Client Assessment</h4>
                      <p className="text-foreground/70">We'll review the referral and determine if our homes are a good fit.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="font-medium">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Placement Decision</h4>
                      <p className="text-foreground/70">We'll provide a placement decision within 24-48 hours in most cases.</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className={cardStyles.button}>
                  <span className="mr-2">Make a Referral</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </>
      );
    }

    // What Makes Us Different Card
    if (id === "differences") {
      return (
        <>
          <div className={cardStyles.header}>
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Our Approach</span>
            <h2 className={cardStyles.title}>What Makes Us Different</h2>
          </div>
          <div className={cardStyles.body}>
            <div className="relative mb-8 rounded-xl overflow-hidden">
              {renderExpandedImages()}
            </div>

            <p className={cardStyles.paragraph}>
              At Belong, we believe that exceptional care goes beyond meeting basic needs. Our approach is built on creating a genuine home environment where residents feel valued, respected, and truly part of a community.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "Daily Transportation",
                  description: "Regular trips to stores, appointments, and activities that support independence and community integration.",
                  icon: <Car className="w-10 h-10 text-primary" />
                },
                {
                  title: "Cultural Meals",
                  description: "Fresh, home-cooked meals that respect cultural preferences and dietary needs, enjoyed together as a community.",
                  icon: <Utensils className="w-10 h-10 text-primary" />
                },
                {
                  title: "Engaging Activities",
                  description: "Diverse daily activities chosen by residents that promote social connection, learning, and personal growth.",
                  icon: <Coffee className="w-10 h-10 text-primary" />
                },
                {
                  title: "Mental Health Support",
                  description: "Specialized care from staff trained in mental health conditions, with individualized support plans.",
                  icon: <Brain className="w-10 h-10 text-primary" />
                },
                {
                  title: "Family Involvement",
                  description: "Regular communication and opportunities for families to participate in their loved one's care journey.",
                  icon: <Users className="w-10 h-10 text-primary" />
                },
                {
                  title: "Community Integration",
                  description: "Connections to the wider community through outings, events, and partnerships with local organizations.",
                  icon: <Globe className="w-10 h-10 text-primary" />
                }
              ].map((feature, index) => (
                <div key={index} className={cardStyles.card}>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className={cardStyles.featureTitle}>{feature.title}</h3>
                  <p className={cardStyles.featureText}>{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-cream rounded-xl p-6">
              <h3 className={cardStyles.sectionTitle}>Our Philosophy</h3>
              <p className="text-foreground/80 mt-2">
                We believe that everyone deserves to live in a place where they feel they truly belong. Our approach combines professional care with the warmth and connection of family, creating an environment where residents can thrive.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className={cardStyles.button}>
                <span className="mr-2">Learn More About Our Approach</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className={cardStyles.button}>
                <Calendar className="w-4 h-4 mr-2" />
                <span>Schedule a Visit</span>
              </Button>
            </div>
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <div className={cardStyles.container}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={cardStyles.overlay}
        onClick={onCollapse}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cardStyles.modal}
      >
        <button
          onClick={onCollapse}
          className={cardStyles.closeButton}
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {renderContent()}
      </motion.div>
    </div>
  );
}
