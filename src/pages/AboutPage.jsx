import React from "react";
import { Link } from "react-router-dom";
import { Heart, Home, Users, HelpingHand, Brain, User, ArrowRight, Calendar, Award, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";

const AboutPage = () => {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-cream py-16 md:py-24 lg:py-32 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-primary leading-tight">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Creating a place where everyone truly belongs.
            </p>
            <p className="text-sm text-foreground/60 bg-white/50 px-4 py-1 rounded-full inline-block">Founded in 2019</p>
          </div>
        </div>
      </section>

      {/* Frances's Journey */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate/10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Our Founder</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-primary lowercase mb-4">frances's story.</h2>
                  <blockquote className="border-l-4 border-primary pl-4 py-2 italic text-lg text-primary bg-cream/50 rounded-r-lg">
                    "After working as a registered nurse for over ten years, primarily with mental health patients, I decided to open a group home dedicated to providing stable housing and services."
                  </blockquote>
                  <div className="space-y-4 text-foreground/80">
                    <p>
                      Frances was inspired by her cousin's struggle with schizophrenia, which deeply influenced her vision for Belong Health Care.{" "}
                      <span className="text-primary font-medium">She wanted to create a place that felt like home, not an institution.</span>
                    </p>
                    <p>
                      Over the years, Frances witnessed the gaps in mental health support and housing.{" "}
                      <span className="text-primary font-medium">Her dedication grew stronger</span> as she saw the positive impact of compassionate care.
                    </p>
                    <p>
                      Today, Frances leads Belong Health Care with a mission to provide stability, dignity, and a true sense of belonging for every resident.
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1594839688256-077c321f55cd?q=80&w=600&auto=format&fit=crop"
                    alt="Frances caring for residents"
                    className="w-full h-auto rounded-xl shadow-md hover:opacity-95 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Heart className="w-12 h-12 text-white/80 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-serif lowercase">our mission.</h2>
            <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed">
              At Belong Health Care our mission is to provide a safe, stable and supportive home for individuals with disabilities. We are dedicated to fostering a sense of belonging by offering compassionate care, personalized support, and a nurturing environment where residents can thrive.
            </p>
            <Button className="mt-8 px-6 py-3 bg-white text-primary hover:bg-white/90 btn-press btn-hover">
              <span className="mr-2">Learn How We Help</span>
              <span className="text-xs">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">What We Believe</span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary lowercase mb-4">our values.</h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                These core principles guide everything we do at Belong Health Care.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Heart className="w-10 h-10" />, title: "Genuine Care", desc: "We approach each resident as family, providing care that respects individual needs, preferences, and life stories." },
                { icon: <Home className="w-10 h-10" />, title: "Dignity", desc: "Our residences are genuine homes, not facilities—warm, inviting spaces filled with laughter, comfort, and personal touches." },
                { icon: <Users className="w-10 h-10" />, title: "Connected Community", desc: "We foster meaningful connections between residents, families, caregivers, and the wider community." },
                { icon: <HelpingHand className="w-10 h-10" />, title: "Compassion", desc: "We understand the emotional journey of mental health challenges and approach each person with heartfelt empathy." },
                { icon: <Brain className="w-10 h-10" />, title: "Mental Wellness", desc: "Our specialized approach to mental health support combines clinical expertise with a nurturing environment." },
                { icon: <User className="w-10 h-10" />, title: "Personalized Care", desc: "We recognize each person's unique needs and adapt our care approach to support their individual journey." }
              ].map((value, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-md border border-slate/20 hover:shadow-lg transition-all duration-300 card-hover text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                  <p className="text-foreground/70">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-slate/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Our People</span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary lowercase mb-4">meet our team.</h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                The dedicated professionals who make Belong Health Care a special place.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Frances Johnson", role: "Founder & Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop", bio: "Registered psychiatric nurse with over a decade of experience in mental health care." },
                { name: "Michael Chen", role: "Care Coordinator", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop", bio: "Dedicated to ensuring seamless care and support for all residents." },
                { name: "Sarah Williams", role: "Mental Health Specialist", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop", bio: "Specializes in creating personalized mental wellness plans." },
                { name: "David Rodriguez", role: "Community Liaison", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop", bio: "Builds connections between our homes and the wider community." }
              ].map((member, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-slate/20 hover:shadow-lg transition-all duration-300 card-hover text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-primary/10"
                  />
                  <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                  <p className="text-accent font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-foreground/70 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-cream p-8 md:p-12 rounded-2xl shadow-lg border border-slate/10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Our Expertise</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-primary lowercase mb-4">frances's background.</h2>
                  <p className="text-lg text-foreground/80 mb-4">
                    Frances is a registered psychiatric nurse with over a decade of experience in mental health care. She is passionate about providing compassionate, personalized support.
                  </p>
                  <p className="text-foreground/80">
                    Her ongoing professional development ensures the highest quality of care for residents.
                  </p>
                  <div className="pt-4">
                    <Button className="px-6 py-3 text-base font-medium shadow-md hover:scale-[1.02] transition-all duration-300 btn-press btn-hover">
                      <span className="mr-2">Learn More About Our Approach</span>
                      <span className="text-xs">→</span>
                    </Button>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-6 text-primary">Professional Qualifications</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: <Award className="w-5 h-5" />, text: "Certified Psychiatric Nurse" },
                      { icon: <Calendar className="w-5 h-5" />, text: "10+ Years Mental Health Experience" },
                      { icon: <Brain className="w-5 h-5" />, text: "Continuing Education in Behavioral Health" },
                      { icon: <Users className="w-5 h-5" />, text: "Team Leadership & Management" },
                      { icon: <Heart className="w-5 h-5" />, text: "Compassionate Care Specialist" }
                    ].map((credential, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-primary">
                          {credential.icon}
                        </div>
                        <span className="text-foreground/80">{credential.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Homes */}
      <section className="py-16 md:py-24 bg-slate/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Our Locations</span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary lowercase mb-4">our homes.</h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Welcoming residences designed to foster community and well-being.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Aspen Grove",
                  desc: "A nurturing home for young adults with disabilities.",
                  ages: "Ages 18-30",
                  availability: "1 bed available",
                  image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=600&auto=format&fit=crop"
                },
                {
                  name: "Willow Stream",
                  desc: "A supportive residence for adults with mental health needs.",
                  ages: "Ages 25-50",
                  availability: "2 beds available",
                  image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop"
                }
              ].map((home, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden border border-slate/20 hover:shadow-lg transition-all duration-300 card-hover">
                  <div className="relative">
                    <img src={home.image} alt={home.name} className="w-full h-64 object-cover" />
                    <div className="absolute top-4 right-4 bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
                      {home.availability}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-2 mb-4">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-primary">{home.name}</h3>
                        <p className="text-sm text-foreground/70">{home.ages}</p>
                      </div>
                    </div>
                    <p className="text-foreground/80 mb-6">{home.desc}</p>
                    <Link to="/homes">
                      <Button className="w-full btn-press btn-hover">
                        <span className="mr-2">Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate/10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">In The Community</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-primary lowercase mb-4">giving back.</h2>
                  <p className="text-lg text-foreground/80 mb-4">
                    Belong Health Care actively partners with local organizations to support mental health awareness and community integration.
                  </p>
                  <p className="text-foreground/80">
                    We host events, participate in outreach, and continuously seek ways to give back to the community that supports us.
                  </p>
                  <ul className="space-y-3 pt-4">
                    {["Mental Health Awareness Events", "Community Education Workshops", "Local Partnerships", "Volunteer Opportunities"].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-foreground/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600&auto=format&fit=crop"
                    alt="Community Involvement"
                    className="rounded-xl shadow-md w-full h-auto hover:opacity-95 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-slate/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-2">Our Journey</span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary lowercase mb-4">our timeline.</h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                The story of Belong Health Care from our founding to today.
              </p>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate/10">
              <div className="relative h-2 bg-slate/20 mb-16 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-5/6 bg-primary rounded-full"></div>
                {["2019", "2020", "2021", "2022", "2023", "2025"].map((year, idx) => (
                  <div
                    key={year}
                    className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-2 border-primary shadow-md"
                    style={{ left: `${(idx / 5) * 100}%`, transform: "translate(-50%, -50%)" }}
                  >
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="font-semibold text-primary">{year}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-6 gap-4 text-center">
                <div className="space-y-2">
                  <div className="text-foreground/80 text-sm">Founding of Belong Health Care</div>
                </div>
                <div className="space-y-2">
                  <div className="text-foreground/80 text-sm">Opening of Aspen Grove House</div>
                </div>
                <div className="space-y-2">
                  <div className="text-foreground/80 text-sm">First full year of operation</div>
                </div>
                <div className="space-y-2">
                  <div className="text-foreground/80 text-sm">Opening of Willow Stream Residence</div>
                </div>
                <div className="space-y-2">
                  <div className="text-foreground/80 text-sm">Program expansion</div>
                </div>
                <div className="space-y-2">
                  <div className="text-foreground/80 text-sm">Current operations & future plans</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-primary text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium">3 Beds Currently Available</span>
            <h2 className="text-3xl md:text-4xl font-serif lowercase">we'd love to show you our homes</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Schedule a visit to see our homes and meet our team. We're happy to answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/contact">
                <Button className="px-6 py-3 bg-white text-primary hover:bg-white/90 btn-press btn-hover">
                  <span className="mr-2">Schedule a Visit</span>
                  <span className="text-xs">→</span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="px-6 py-3 border-white text-white hover:bg-white/10 btn-press btn-hover">
                  <span className="mr-2">Contact Us</span>
                  <span className="text-xs">→</span>
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-lg font-serif italic text-white/80">- Frances</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
