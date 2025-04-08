import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-10 bg-slate/5 rounded-2xl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl georgia mb-8 text-center text-primary">let's talk.</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-medium georgia text-primary">Get in Touch</h3>
              <p className="text-lg text-foreground/70">
                We're here to answer your questions and help you make the best decision for your loved one.
              </p>
              <div className="space-y-3">
                <p className="text-xl font-medium text-primary">(612) 555-1234</p>
                <p className="text-lg text-foreground/70">info@belonghealthcare.com</p>
              </div>

              <form className="space-y-4 mt-8">
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground/80">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground/80">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground/80">Message</label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus"
                    rows="4"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <Button size="lg" className="w-full bg-primary hover:bg-primary-hover btn-press btn-hover">
                  <span className="mr-2">Send Message</span>
                  <span className="text-xs">→</span>
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-medium georgia text-primary">Our Locations</h3>
              <div className="space-y-6">
                <div className="p-6 rounded-xl border-2 shadow-md">
                  <p className="font-medium text-xl mb-2 text-primary">Brooklyn Park Home 1</p>
                  <p className="text-foreground/70">1234 Maple Street</p>
                  <p className="text-foreground/70">Brooklyn Park, MN 55444</p>
                </div>
                <div className="p-6 rounded-xl border-2 shadow-md">
                  <p className="font-medium text-xl mb-2 text-primary">Brooklyn Park Home 2</p>
                  <p className="text-foreground/70">5678 Oak Avenue</p>
                  <p className="text-foreground/70">Brooklyn Park, MN 55445</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  className="w-full h-[300px] object-cover"
                  alt="Map showing both Belong Health Care locations in Brooklyn Park"
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=800&auto=format&fit=crop"
                />
              </div>

              <div className="bg-cream p-6 rounded-xl border-2 border-slate/20 shadow-sm">
                <blockquote className="text-lg italic text-primary">
                  "The care and attention at Belong is exceptional. Frances and her team truly understand what it means to create a home."
                </blockquote>
                <p className="mt-4 font-medium text-foreground/70">- Sarah M., Family Member</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
