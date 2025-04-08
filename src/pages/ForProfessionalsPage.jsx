import React, { useContext } from "react"; // Added useContext
import { Button } from "../components/ui/button";
import { Calendar, Info, FileText, Phone } from "lucide-react";
import { useModal } from "../context/ModalContext"; // Import useModal

function ForProfessionalsPage() {
  const { openReferralModal } = useModal(); // Get modal function

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-cream py-16 md:py-24 lg:py-32 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">For Healthcare Professionals</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-primary leading-tight">
              Streamlined referrals and personalized care
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              We partner with healthcare providers to ensure seamless transitions and exceptional mental health care for every client.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="px-6 py-3 text-base font-medium shadow-md hover:scale-[1.02] transition-all duration-300 btn-press btn-hover"
                onClick={openReferralModal} // Trigger modal
              >
                <span className="mr-2">Refer a Client</span>
                <span className="text-xs">→</span>
              </Button>
              <Button variant="outline" className="px-6 py-3 text-base font-medium shadow-md hover:scale-[1.02] transition-all duration-300 btn-press btn-hover">
                <span className="mr-2">Download Referral Form</span>
                <span className="text-xs">→</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Dashboard */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-cream p-8 md:p-12 rounded-2xl shadow-lg border border-slate/10">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Current Availability</span>
                <h2 className="text-3xl md:text-4xl font-serif text-primary lowercase mb-4">current availability.</h2>
                <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                  Real-time bed availability across our residential care homes.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {[{
                  name: "Aspen Grove",
                  address: "1234 Maple Street, Brooklyn Park, MN",
                  ageGroup: "18-30",
                  availability: "1 Bed Available",
                  statusColor: "text-success",
                  amenities: ["Private rooms", "Daily transportation", "Home-cooked meals"],
                  image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=200&auto=format&fit=crop",
                  updated: "Today"
                },
                {
                  name: "Willow Stream",
                  address: "5678 Oak Avenue, Brooklyn Park, MN",
                  ageGroup: "25-50",
                  availability: "2 Beds Available",
                  statusColor: "text-success",
                  amenities: ["Private rooms", "Mental health support", "Cultural meals"],
                  image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=200&auto=format&fit=crop",
                  updated: "Today"
                }].map((home, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-md space-y-4 border border-slate/20 hover:shadow-lg transition-all duration-300 card-hover">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-primary">{home.name}</h3>
                      <span className={`font-bold ${home.statusColor} bg-success/10 px-3 py-1 rounded-full text-sm`}>{home.availability}</span>
                    </div>
                    <p className="text-sm text-foreground/70">{home.address}</p>
                    <p className="text-sm text-foreground/70">Ages: {home.ageGroup}</p>
                    <ul className="list-disc list-inside text-sm text-foreground/70">
                      {home.amenities.map((a, i) => <li key={i}>{a}</li>)}
                    </ul>
                    <img src={home.image} alt={home.name} className="rounded-lg shadow-md w-full h-48 object-cover hover:opacity-90 transition-opacity duration-300" />
                    <p className="text-xs text-foreground/50">Last updated: {home.updated}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button className="px-6 py-3 text-base font-medium shadow-md hover:scale-[1.02] transition-all duration-300 btn-press btn-hover">
                  <span className="mr-2">Check Latest Availability</span>
                  <span className="text-xs">→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Approach */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-cream p-8 md:p-12 rounded-2xl shadow-lg border border-slate/10">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Mental Health Services</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-primary lowercase mb-4">our clinical approach.</h2>
                  <p className="text-lg text-foreground/80">
                    Frances, a psychiatric nurse with over a decade of experience, leads our clinical care. We focus on:
                  </p>
                  <ul className="space-y-3">
                    {["Medication management", "Mental health monitoring", "Crisis prevention and de-escalation",
                      "Wellness programming", "Coordination with external providers"].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-foreground/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <blockquote className="italic text-primary border-l-4 border-primary pl-4 py-2 bg-white/50 rounded-r-lg">
                    "One of our residents came to us after multiple hospitalizations. With consistent support, they've stabilized and regained independence."
                  </blockquote>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop"
                    alt="Clinical Services"
                    className="rounded-xl shadow-md w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Process */}
      <section className="py-16 md:py-24 bg-slate/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Make a Referral</span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary lowercase mb-4">referral process.</h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Our streamlined process ensures quick placement decisions for your clients.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "Initial Contact", desc: "Phone or online form", icon: <Phone className="w-8 h-8 text-primary" /> },
                { step: "Client Assessment", desc: "Basic information needed", icon: <Info className="w-8 h-8 text-primary" /> },
                { step: "Placement Decision", desc: "Typically within 24-48 hours", icon: <Calendar className="w-8 h-8 text-primary" /> }
              ].map((s, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-md space-y-4 border border-slate/20 hover:shadow-lg transition-all duration-300 card-hover text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {s.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-primary">{s.step}</h4>
                  <p className="text-foreground/70">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-foreground/80 mb-4">Contact us at <span className="text-primary font-medium">(612) 555-1234</span> or <span className="text-primary font-medium">referrals@belonghealthcare.com</span></p>
              <Button className="px-6 py-3 text-base font-medium shadow-md hover:scale-[1.02] transition-all duration-300 btn-press btn-hover">
                <span className="mr-2">Download Referral Form (PDF)</span>
                <span className="text-xs">→</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Online Referral Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-cream p-8 md:p-12 rounded-2xl shadow-lg border border-slate/10">
              <div className="text-center mb-8">
                <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Quick Referral</span>
                <h2 className="text-3xl md:text-4xl font-serif text-primary lowercase mb-4">online referral form.</h2>
                <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                  Complete this secure form for a quick response from our team.
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-foreground/80">Your Name & Organization</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-foreground/80">Your Contact Information</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-foreground/80">Client Initials</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-foreground/80">Age Group</label>
                    <select className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus" required>
                      <option value="">Select</option>
                      <option>18-30</option>
                      <option>31-50</option>
                      <option>51+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground/80">Primary Needs/Diagnosis</label>
                  <textarea className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus" rows="3" required></textarea>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-foreground/80">Urgency of Placement</label>
                    <select className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus" required>
                      <option value="">Select</option>
                      <option>Immediate</option>
                      <option>Within 1 week</option>
                      <option>Within 1 month</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-foreground/80">Preferred Location</label>
                    <select className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus">
                      <option value="">Select</option>
                      <option>Aspen Grove</option>
                      <option>Willow Stream</option>
                      <option>No preference</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground/80">Additional Comments/Questions</label>
                  <textarea className="w-full px-4 py-2 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none input-focus" rows="3"></textarea>
                </div>
                <p className="text-xs text-foreground/50">* All information is kept confidential and HIPAA compliant.</p>
                <Button type="submit" className="w-full bg-primary hover:bg-primary-hover btn-press btn-hover">
                  <span className="mr-2">Submit Referral</span>
                  <span className="text-xs">→</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Resources */}
      <section className="py-16 md:py-24 bg-slate/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Resources</span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary lowercase mb-4">resources for professionals.</h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Download these resources to help with your referral process.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md border border-slate/20 overflow-hidden">
              <ul className="divide-y divide-slate/10">
                {[
                  { title: "Bed Availability Update", desc: "Updated weekly", icon: <FileText className="w-5 h-5 text-primary" /> },
                  { title: "Services Overview", desc: "Our clinical and support services", icon: <FileText className="w-5 h-5 text-primary" /> },
                  { title: "Fee Structure and Insurance", desc: "Payment options and coverage", icon: <FileText className="w-5 h-5 text-primary" /> },
                  { title: "Admission Criteria", desc: "Who we can serve", icon: <FileText className="w-5 h-5 text-primary" /> },
                  { title: "Testimonials from Other Professionals", desc: "Feedback from your colleagues", icon: <FileText className="w-5 h-5 text-primary" /> }
                ].map((res, idx) => (
                  <li key={idx} className="flex items-center gap-4 p-6 hover:bg-slate/5 transition-colors duration-300">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                      {res.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{res.title}</p>
                      <p className="text-sm text-foreground/70">{res.desc}</p>
                    </div>
                    <Button variant="outline" className="ml-auto btn-press btn-hover">
                      <span className="mr-2">Download</span>
                      <span className="text-xs">→</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">From Your Colleagues</span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary lowercase mb-4">professional testimonials.</h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Hear what other healthcare professionals say about working with us.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=100&auto=format&fit=crop", quote: "Belong made the referral process easy and my client is thriving.", role: "Clinical Social Worker" },
                { image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=100&auto=format&fit=crop", quote: "The staff is responsive and truly cares about the well-being of residents.", role: "Psychiatrist" },
                { image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=100&auto=format&fit=crop", quote: "I've referred multiple clients and all have had positive experiences.", role: "Case Manager" }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-md space-y-4 border border-slate/20 hover:shadow-lg transition-all duration-300 card-hover text-center">
                  <img src={testimonial.image} alt="Professional" className="rounded-full mx-auto w-20 h-20 object-cover border-2 border-primary/20" />
                  <blockquote className="italic text-primary">"{testimonial.quote}"</blockquote>
                  <p className="text-sm text-foreground/70">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Get in Touch</span>
                <h2 className="text-3xl md:text-4xl font-serif text-primary lowercase mb-4">contact our referral team.</h2>
                <p className="text-lg text-foreground/80">
                  Our dedicated referral team is ready to assist you with any questions or concerns.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <p className="text-lg font-medium">Direct line: (612) 555-1234</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <p className="text-lg">Email: referrals@belonghealthcare.com</p>
                  </div>
                </div>
                <p className="text-foreground/70">We respond within 24 hours.</p>
                <Button className="px-6 py-3 text-base font-medium shadow-md hover:scale-[1.02] transition-all duration-300 btn-press btn-hover">
                  <span className="mr-2">Contact Now</span>
                  <span className="text-xs">→</span>
                </Button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop"
                  alt="Referral Coordinator"
                  className="rounded-xl shadow-lg w-full h-auto"
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
            <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium">Current availability: 3 beds in our 55+ residence</span>
            <h2 className="text-3xl md:text-4xl font-serif lowercase">have a client who needs placement?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Our team is ready to help you find the right placement for your client.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                className="px-6 py-3 bg-white text-primary hover:bg-white/90 btn-press btn-hover"
                onClick={openReferralModal} // Trigger modal
              >
                <span className="mr-2">Make a Referral Now</span>
                <span className="text-xs">→</span>
              </Button>
              <Button variant="outline" className="px-6 py-3 border-white text-white hover:bg-white/10 btn-press btn-hover">
                <span className="mr-2">Download Referral Packet</span>
                <span className="text-xs">→</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ForProfessionalsPage;
