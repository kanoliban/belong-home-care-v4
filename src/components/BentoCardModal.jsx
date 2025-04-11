import React from "react";
import { motion } from "framer-motion";
import { X, ArrowRight, MapPin, Calendar, Clock, Users, Home, Car, Utensils, Coffee, Brain, Globe } from "lucide-react";
import { Button } from "./ui/button";

export function BentoCardModal({
  id,
  title,
  badge,
  image,
  onClose
}) {
  // Extract image URLs
  const imageUrl = image?.expanded?.[0]?.src || image?.collapsed?.src;
  const imageAlt = image?.expanded?.[0]?.alt || image?.collapsed?.alt || title || 'Card image';
  
  // Clean up title (remove period if present)
  const cleanTitle = title ? title.replace(/\.$/, '') : 'Untitled';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative bg-white rounded-[24px] shadow-2xl max-w-6xl w-[95vw] max-h-[90vh] overflow-y-auto"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#1a3b6f20 transparent' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-6 right-6 bg-white/90 rounded-full p-2.5 shadow-md hover:bg-white transition-colors duration-300 z-10 hover:rotate-90 transform duration-300"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Hero Section with Overlaid Title */}
        <div className="relative">
          <div className="w-full h-[500px] relative overflow-hidden">
            <img 
              src={imageUrl || "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1200&auto=format&fit=crop"}
              alt={imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-3">{cleanTitle}</h2>
                {badge && <div className="inline-block bg-[#15605f] px-4 py-1.5 rounded-full text-base font-medium">{badge}</div>}
                <p className="mt-4 text-xl text-white/90 max-w-2xl">
                  {id === "aspen-grove" && "A nurturing home for young adults with disabilities, offering personalized support in a warm environment."}
                  {id === "willow-stream" && "A peaceful retreat for adults with mental health conditions, focusing on stability and personal growth."}
                  {id === "differences" && "Our approach combines professional care with the warmth and connection of family."}
                  {id === "for-families" && "Resources and information for families considering our homes and professionals making referrals."}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="px-8 md:px-10 pb-12 md:pb-16">
          {/* Introduction Section */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-16 bg-[#15605f]"></div>
              <h3 className="text-xl font-medium text-[#15605f]">Our Approach</h3>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
              {id === "aspen-grove" && "Aspen Grove is designed to provide a supportive and enriching environment for young adults with mental health conditions. Our home combines professional care with the warmth and connection of family, creating a space where residents can thrive."}
              {id === "willow-stream" && "Willow Stream provides a tranquil and supportive environment for adults with mental health conditions. Our home is designed to promote stability, independence, and personal growth in a community-oriented setting."}
              {id === "differences" && "At Belong, we believe that exceptional care goes beyond meeting basic needs. Our approach is built on genuine relationships, personalized support, and a commitment to helping each resident live their best life."}
              {id === "for-families" && "Finding the right care for your loved one is a deeply personal decision. We're here to guide you through every step of the process, from initial inquiries to move-in day and beyond."}
            </p>
            
            <div className="mt-8 p-6 bg-[#f7f2e9] rounded-2xl border-l-4 border-[#15605f] italic text-lg text-gray-700">
              "At Belong, we believe in creating a true home environment where each resident feels valued, supported, and empowered to grow. Our approach focuses on the whole person, not just their diagnosis."
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="md:col-span-2 rounded-xl overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" 
                alt="Living Room" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=400&auto=format&fit=crop" 
                alt="Kitchen" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=400&auto=format&fit=crop" 
                alt="Bedroom" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="md:col-span-2 rounded-xl overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop" 
                alt="Exterior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          
          {/* Features Section */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-16 bg-[#15605f]"></div>
              <h3 className="text-xl font-medium text-[#15605f]">Features & Amenities</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 mt-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#1a3b6f] mb-6">Accommodations & Support</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#f7f2e9] transition-colors duration-300">
                    <MapPin className="w-8 h-8 text-[#15605f] p-1.5 bg-[#15605f]/10 rounded-full" />
                    <div>
                      <p className="font-medium text-[#1a3b6f] text-lg">Location</p>
                      <p className="text-gray-600 mt-1">Conveniently located in a peaceful residential neighborhood</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#f7f2e9] transition-colors duration-300">
                    <Users className="w-8 h-8 text-[#15605f] p-1.5 bg-[#15605f]/10 rounded-full" />
                    <div>
                      <p className="font-medium text-[#1a3b6f] text-lg">Capacity</p>
                      <p className="text-gray-600 mt-1">Small resident population ensures personalized attention</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#f7f2e9] transition-colors duration-300">
                    <Home className="w-8 h-8 text-[#15605f] p-1.5 bg-[#15605f]/10 rounded-full" />
                    <div>
                      <p className="font-medium text-[#1a3b6f] text-lg">Accommodations</p>
                      <p className="text-gray-600 mt-1">Comfortable private bedrooms with shared common spaces</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#f7f2e9] transition-colors duration-300">
                    <Clock className="w-8 h-8 text-[#15605f] p-1.5 bg-[#15605f]/10 rounded-full" />
                    <div>
                      <p className="font-medium text-[#1a3b6f] text-lg">Staffing</p>
                      <p className="text-gray-600 mt-1">24/7 professional care with experienced mental health specialists</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-[#1a3b6f] mb-6">Daily Life</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#f7f2e9] transition-colors duration-300">
                    <Utensils className="w-8 h-8 text-[#15605f] p-1.5 bg-[#15605f]/10 rounded-full" />
                    <div>
                      <p className="font-medium text-[#1a3b6f] text-lg">Meals</p>
                      <p className="text-gray-600 mt-1">Nutritious meals with fresh ingredients, accommodating dietary needs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#f7f2e9] transition-colors duration-300">
                    <Car className="w-8 h-8 text-[#15605f] p-1.5 bg-[#15605f]/10 rounded-full" />
                    <div>
                      <p className="font-medium text-[#1a3b6f] text-lg">Transportation</p>
                      <p className="text-gray-600 mt-1">Regular transportation to appointments, work, and activities</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#f7f2e9] transition-colors duration-300">
                    <Coffee className="w-8 h-8 text-[#15605f] p-1.5 bg-[#15605f]/10 rounded-full" />
                    <div>
                      <p className="font-medium text-[#1a3b6f] text-lg">Community</p>
                      <p className="text-gray-600 mt-1">Weekly group activities, outings, and social events</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#f7f2e9] transition-colors duration-300">
                    <Brain className="w-8 h-8 text-[#15605f] p-1.5 bg-[#15605f]/10 rounded-full" />
                    <div>
                      <p className="font-medium text-[#1a3b6f] text-lg">Support Services</p>
                      <p className="text-gray-600 mt-1">Medication management, life skills training, therapy coordination</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Testimonial Section */}
          <div className="mt-16 max-w-5xl mx-auto bg-[#1a3b6f] text-white p-10 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                  <pattern id="quotation-marks" patternUnits="userSpaceOnUse" width="100" height="100">
                    <text x="0" y="40" fontSize="80" fill="currentColor">"</text>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#quotation-marks)" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-6">What Families Say</h3>
              <p className="text-xl italic mb-6">
                "Finding Belong was a turning point for our family. The staff truly understands my loved one's needs and has helped them gain confidence and independence. For the first time, we feel hopeful about the future."
              </p>
              <p className="font-medium">— Family Member of Resident</p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 max-w-5xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-[#1a3b6f] mb-6">Ready to Learn More?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We invite you to visit and see firsthand how our approach can make a difference for your loved one.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="rounded-full px-6 py-3 text-white text-base font-medium flex items-center gap-3 bg-[#15605f] hover:bg-[#333] transition-colors duration-300 hover:scale-[1.02] transform duration-300">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Schedule a Tour</span>
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-6 py-3 text-[#15605f] border-[#15605f] hover:bg-[#15605f]/10 transition-colors duration-300 hover:scale-[1.02] transform duration-300"
              >
                <span className="mr-2">Download Brochure</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default BentoCardModal;
