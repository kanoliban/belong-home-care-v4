import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Check, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function AvailabilityModal({ isOpen, onClose }) {
  const availableBeds = [
    {
      home: "Aspen Grove",
      location: "1234 Maple Street, Brooklyn Park, MN 55444",
      roomType: "Private Bedroom",
      ageGroup: "18-30",
      amenities: ["Private bedroom", "Shared bathroom", "Community living spaces", "Daily activities"],
      availableFrom: "Immediately",
      image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=600&auto=format&fit=crop"
    },
    {
      home: "Willow Stream",
      location: "5678 Oak Avenue, Brooklyn Park, MN 55445",
      roomType: "Private Bedroom",
      ageGroup: "25-50",
      amenities: ["Private bedroom", "Shared bathroom", "Garden view", "Quiet environment"],
      availableFrom: "Immediately",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop"
    },
    {
      home: "Willow Stream",
      location: "5678 Oak Avenue, Brooklyn Park, MN 55445",
      roomType: "Private Bedroom with Ensuite",
      ageGroup: "25-50",
      amenities: ["Private bedroom", "Private bathroom", "Extra storage", "Corner room with natural light"],
      availableFrom: "August 1, 2023",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop"
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/90 rounded-full p-2 shadow-md hover:bg-white transition-colors duration-300 z-10"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="p-6 md:p-8 border-b">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Current Availability</span>
          <h2 className="text-3xl font-serif text-primary">Available Beds</h2>
          <p className="text-foreground/70 mt-2">
            We currently have 3 beds available across our residential homes. Contact us to schedule a tour or learn more.
          </p>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="grid gap-6">
            {availableBeds.map((bed, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md border border-slate/10 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={bed.image} 
                      alt={bed.home} 
                      className="w-full h-full object-cover md:h-64"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-medium text-primary">{bed.home}</h3>
                        <div className="flex items-center gap-1 text-foreground/60 text-sm mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>{bed.location}</span>
                        </div>
                      </div>
                      <span className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
                        Available {bed.availableFrom === "Immediately" ? "Now" : bed.availableFrom}
                      </span>
                    </div>
                    
                    <div className="mt-4 grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-primary">Room Details</h4>
                        <p className="text-foreground/70">{bed.roomType}</p>
                        <p className="text-foreground/70">Age Group: {bed.ageGroup}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary">Amenities</h4>
                        <ul className="text-foreground/70">
                          {bed.amenities.map((amenity, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-success" />
                              <span>{amenity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <Button className="btn-press btn-hover">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Schedule a Tour</span>
                      </Button>
                      <Button variant="outline" className="btn-press">
                        <span className="mr-2">View Home Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-cream rounded-xl p-6 text-center">
            <h3 className="text-xl font-medium text-primary mb-2">Need Help Finding the Right Fit?</h3>
            <p className="text-foreground/80 mb-4">
              Our team is ready to help you find the perfect home for your loved one. Contact us today to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                <span className="mr-2">Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline">
                <span className="mr-2">Download Brochure</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
