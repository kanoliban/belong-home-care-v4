import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
// Accordion is now handled in the FAQSection component
import { Home, Users, Car, Utensils, Coffee, Globe } from "lucide-react";
import LifeComparisonTimeline from "../components/LifeComparisonTimeline";
import PhilosophySection from "../components/PhilosophySection";
import ActivitiesSection from "../components/ActivitiesSection";
import MovingProcess from "../components/MovingProcess";
import FamilyStories from "../components/FamilyStories";
import FAQSection from "../components/FAQSection";
import { useModal } from "../context/ModalContext"; // Import useModal

function ForFamiliesPage() {
  const { openScheduleVisitModal } = useModal(); // Get modal function

  // Data from old OurApproachPage (reconstructed)
  const differentiators = [
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      title: "Daily Transportation",
      text: "We offer daily rides to stores so our residents can go out to buy personal items every day—not just 2-3 times a week like other homes.",
      image: "https://placehold.co/200x150/png?text=Transportation"
    },
    {
      icon: <Utensils className="w-8 h-8 text-primary" />,
      title: "Fresh, Home-Cooked Meals",
      text: "We don't do leftover foods and we don't do microwavable food. We cook our meals from scratch every day.",
      image: "https://placehold.co/200x150/png?text=Fresh+Meals"
    },
    {
      icon: <Coffee className="w-8 h-8 text-primary" />,
      title: "Personalized Breakfast",
      text: "For breakfast, everybody has a choice of what they want to eat—we don't just make one breakfast for everybody.",
      image: "https://placehold.co/200x150/png?text=Breakfast+Options"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Cultural Food Options",
      text: "We incorporate cultural foods that residents love and miss from home.",
      image: "https://placehold.co/200x150/png?text=Cultural+Foods"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "On-Site Management",
      text: "Apart from direct care staff, we have an office manager and house manager available on-site every day.",
      image: "https://placehold.co/200x150/png?text=On-Site+Staff"
    },
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "Clean Environment",
      text: "We try to make sure we keep the environment very clean and pay attention to resident needs.",
      image: "https://placehold.co/200x150/png?text=Clean+Home"
    }
  ];

  // Activities are now handled in the ActivitiesSection component

  return (
    <main className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="bg-cream py-10 md:py-16 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">For Families</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-primary leading-tight">
              Finding a place where your loved one truly belongs
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              We create homes with care, connection, and dignity for people with mental health conditions.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-6 py-3 text-base font-medium shadow-md hover:scale-[1.02] transition-all duration-300 btn-press btn-hover">
                <span className="mr-2">Explore Care Options</span>
                <span className="text-xs">→</span>
              </Button>
              <Button
                variant="outline"
                className="px-6 py-3 text-base font-medium shadow-md hover:scale-[1.02] transition-all duration-300 btn-press btn-hover"
                onClick={openScheduleVisitModal} // Trigger modal
              >
                <span className="mr-2">Schedule a Visit</span>
                <span className="text-xs">→</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* 2. Life Comparison Timeline */}
      <LifeComparisonTimeline />

      {/* 3. Our Philosophy Section */}
      <PhilosophySection />

      {/* 4. What Makes Us Different Section */}
      <section className="py-10 md:py-16 bg-slate/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10 scroll-fade-in">
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4 lowercase">what makes us different.</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              We go beyond standard care to create a true home environment with personalized attention.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-slate/20 hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className="mb-4 text-primary">{item.icon}</div>
                <h3 className="text-xl font-medium mb-3 text-primary">{item.title}</h3>
                <p className="text-foreground/70 mb-6">{item.text}</p>
                <img
                  src={`https://images.unsplash.com/photo-${1550000000000 + index * 10000}?q=80&w=300&auto=format&fit=crop`}
                  alt={item.title}
                  className="w-full h-[180px] object-cover rounded-lg shadow-sm hover:opacity-90 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Activities & Community Section */}
      <ActivitiesSection />

      {/* 6. Transition Process */}
      <MovingProcess />

      {/* 7. Family Stories */}
      <FamilyStories />

      {/* 8. FAQ */}
      <FAQSection />

      {/* 9. Visiting Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-cream p-8 md:p-12 rounded-2xl shadow-lg border border-slate/10">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Plan Your Visit</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-primary lowercase">plan your visit.</h2>
                  <p className="text-lg text-foreground/80">
                    We welcome you to tour our homes and meet our team. Schedule a visit or reach out with any questions.
                  </p>

                  <div className="bg-white/50 p-6 rounded-xl shadow-sm border border-slate/10">
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <span className="text-primary"><strong>Visiting Hours:</strong></span>
                        <span className="text-foreground/70">Monday - Friday, 9am - 5pm</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-primary"><strong>Contact:</strong></span>
                        <span className="text-foreground/70">(612) 555-1234 | info@belonghealthcare.com</span>
                      </li>
                    </ul>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=600&auto=format&fit=crop"
                    alt="Map of Both Locations"
                    className="rounded-xl shadow-md w-full h-[200px] object-cover"
                  />
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border border-slate/10">
                  <h3 className="text-xl font-medium mb-6 text-primary">Schedule Your Visit</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-foreground/80">Your Name</label>
                      <input type="text" className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-foreground/80">Email Address</label>
                      <input type="email" className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus" placeholder="Your email" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1 text-foreground/80">Preferred Date</label>
                        <input type="date" className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1 text-foreground/80">Preferred Time</label>
                        <input type="time" className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus" />
                      </div>
                    </div>
                    <Button
                      type="button" // Change to type="button" if not submitting a real form here
                      className="w-full bg-primary hover:bg-primary-hover btn-press btn-hover"
                      onClick={openScheduleVisitModal} // Trigger modal
                    >
                      <span className="mr-2">Schedule Visit</span>
                      <span className="text-xs">→</span>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-primary text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium">3 Beds Currently Available</span>
            <h2 className="text-3xl md:text-4xl font-serif lowercase">help your loved one find a place where they belong.</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Our team is ready to answer your questions and guide you through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                className="px-6 py-3 bg-white text-primary hover:bg-white/90 btn-press btn-hover"
                onClick={openScheduleVisitModal} // Trigger modal
              >
                <span className="mr-2">Schedule a Visit Today</span>
                <span className="text-xs">→</span>
              </Button>
              <Button variant="outline" className="px-6 py-3 border-white text-white hover:bg-white/10 btn-press btn-hover">
                <span className="mr-2">Contact Us With Questions</span>
                <span className="text-xs">→</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ForFamiliesPage;
