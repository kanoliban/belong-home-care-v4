import React from "react";
import { Button } from "./ui/button";
import { useModal } from "../context/ModalContext";

export function Hero() {
  const { openScheduleVisitModal } = useModal();

  return (
    <section className="w-full py-6 md:py-10 lg:py-12 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto rounded-3xl p-6 md:p-8 lg:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10 overflow-hidden">
            {/* LEFT: Text */}
            <div className="w-full md:w-[45%] space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-primary font-serif font-normal leading-tight">
                Providing Home Care Support
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 font-sans leading-relaxed max-w-xl">
                We're here to assist and connect families to local caregivers who truly care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button className="px-6 py-3 text-base font-medium shadow-md hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto btn-press btn-hover">
                  <span className="mr-2">Learn More</span>
                  <span className="text-xs">→</span>
                </Button>
                <Button
                  variant="accent"
                  className="px-6 py-3 text-base font-medium shadow-md hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto btn-press btn-hover"
                  onClick={openScheduleVisitModal}
                >
                  <span className="mr-2">Schedule a Visit</span>
                  <span className="text-xs">→</span>
                </Button>
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="w-full md:w-[62.5%] relative rounded-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 w-full relative scale-125">
                <img
                  src="/hero_M.png"
                  alt="Caregiver and elderly woman"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div
                  className="absolute inset-0 pointer-events-none rounded-xl"
                  style={{
                    background:
                      'linear-gradient(to right, #f7f2e9 0%, rgba(247, 242, 233, 0.6) 0%, transparent 0%)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
