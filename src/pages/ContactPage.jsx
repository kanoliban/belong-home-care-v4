import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Calendar, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import { useToast } from "../components/ui/use-toast";
import { useModal } from "../context/ModalContext"; // Import useModal

function ContactPage() {
  const { toast } = useToast();
  const { openScheduleVisitModal } = useModal(); // Get modal function

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
      duration: 5000,
    });
  };

  const locations = [
    {
      name: "Brooklyn Park Home 1",
      address: "1234 Maple Street",
      city: "Brooklyn Park, MN 55444",
      image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Brooklyn Park Home 2",
      address: "5678 Oak Avenue",
      city: "Brooklyn Park, MN 55445",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=400&auto=format&fit=crop"
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "(612) 555-1234",
      action: "Call us",
      link: "tel:6125551234"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@belonghealthcare.com",
      action: "Email us",
      link: "mailto:info@belonghealthcare.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: "1234 Maple Street, Brooklyn Park, MN 55444",
      action: "Get directions",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: "Monday-Friday: 9am-5pm",
      action: "Learn more",
      link: "#"
    }
  ];

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-cream py-16 md:py-24 lg:py-32 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-primary leading-tight">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto mt-4">
                We're here to answer your questions and help you find the right care solution for your loved one.
              </p>
              <div className="mt-8">
                <span className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                  3 Beds Currently Available
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Reach Out</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-primary lowercase mb-4">get in touch.</h2>
                  <p className="text-lg text-foreground/80">
                    We're always here to help. Reach out through any of these channels and we'll respond promptly.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-md border border-slate/20 hover:shadow-lg transition-all duration-300 card-hover"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-medium text-primary">{item.title}</h3>
                      </div>
                      <p className="text-foreground/70 mb-4">{item.details}</p>
                      <a
                        href={item.link}
                        className="text-primary font-medium hover:text-primary-hover transition-colors duration-300 inline-flex items-center group"
                      >
                        <span>{item.action}</span>
                        <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-slate/5 rounded-xl p-8 shadow-md border border-slate/20">
                  <h3 className="text-xl font-medium mb-4 text-primary">Schedule a Visit</h3>
                  <p className="text-foreground/80 mb-6">
                    We encourage you to visit our homes and meet our team. It's the best way to experience the warm, supportive environment we've created.
                  </p>
                  <div className="flex items-center gap-3">
                  <Button
                    className="px-6 py-3 text-base font-medium shadow-md hover:scale-[1.02] transition-all duration-300 btn-press btn-hover"
                    onClick={openScheduleVisitModal} // Trigger modal
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Book a Tour</span>
                  </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Contact Form</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-primary lowercase mb-4">send a message.</h2>
                  <p className="text-lg text-foreground/80">
                    Fill out this form and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg border border-slate/20">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="tour">Schedule a Tour</option>
                        <option value="referral">Professional Referral</option>
                        <option value="employment">Employment Opportunities</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        rows="5"
                        className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus"
                        required
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-hover text-lg py-3 btn-press btn-hover"
                    >
                      <span className="mr-2">Send Message</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations Section */}
      <section className="py-16 md:py-24 bg-slate/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Visit Us</span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary lowercase mb-4">our locations.</h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                We have two beautiful homes in Brooklyn Park, each offering a warm and supportive environment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {locations.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate/20 hover:shadow-xl transition-all duration-300 card-hover"
                >
                  <div className="relative">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-[250px] object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
                      Beds Available
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-2 mb-4">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-primary">{location.name}</h3>
                        <p className="text-foreground/70 mb-1">{location.address}</p>
                        <p className="text-foreground/70">{location.city}</p>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 btn-press"
                      >
                        <MapPin className="w-4 h-4" />
                        Get Directions
                      </Button>
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary-hover flex items-center gap-2 btn-press btn-hover"
                        onClick={openScheduleVisitModal} // Trigger modal
                      >
                        <Calendar className="w-4 h-4" />
                        Schedule Tour
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate/20">
                <img
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1200&auto=format&fit=crop"
                  alt="Map showing both Belong Health Care locations"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-primary text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium">3 Beds Currently Available</span>
            <h2 className="text-3xl md:text-4xl font-serif lowercase">we're here to help</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Whether you're looking for care for a loved one or making a professional referral, we're ready to answer your questions and provide the support you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button className="px-6 py-3 bg-white text-primary hover:bg-white/90 btn-press btn-hover">
                <Phone className="w-4 h-4 mr-2" />
                <span>Call Us Today</span>
              </Button>
              <Button variant="outline" className="px-6 py-3 border-white text-white hover:bg-white/10 btn-press btn-hover">
                <Mail className="w-4 h-4 mr-2" />
                <span>Email Us</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;