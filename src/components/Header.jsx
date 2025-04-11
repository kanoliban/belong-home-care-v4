import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AvailabilityModal } from "./AvailabilityModal";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAvailabilityModalOpen, setIsAvailabilityModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "For Families", path: "/for-families" },
    { label: "For Professionals", path: "/for-professionals" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link to="/" className="text-3xl georgia text-primary hover:text-[#0f2a5c] transition-colors duration-300">belong.</Link>
            </div>

            <div className="flex items-center justify-end flex-1 space-x-8">
              <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`text-base font-medium relative group ${location.pathname === item.path ? 'text-primary' : 'text-foreground/70 hover:text-primary'} transition-colors duration-300`}
                  >
                    {item.label}
                    {location.pathname === item.path && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                    )}
                    {location.pathname !== item.path && (
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300"></span>
                    )}
                  </Link>
                ))}
              </nav>

              <div className="hidden md:block">
                <button
                  className="bg-accent text-white px-4 py-1.5 rounded-full text-base font-medium hover:bg-accent/90 transition-colors duration-300 cursor-pointer btn-press"
                  onClick={() => setIsAvailabilityModalOpen(true)}
                >
                  3 Beds Available
                </button>
              </div>
            </div>

            <button
              className="md:hidden ml-4 flex-shrink-0"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center mb-8">
                <Link to="/" className="text-3xl georgia text-primary">belong.</Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-base font-medium ${location.pathname === item.path ? 'text-primary' : 'text-foreground/70 hover:text-primary'} transition-colors duration-300`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <div
                    className="bg-accent text-white px-4 py-1.5 rounded-full text-base font-medium inline-block hover:bg-accent/90 transition-colors duration-300 cursor-pointer btn-press"
                    onClick={() => {
                      setIsAvailabilityModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                  >
                    3 Beds Available
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* Availability Modal */}
      <AvailabilityModal
        isOpen={isAvailabilityModalOpen}
        onClose={() => setIsAvailabilityModalOpen(false)}
      />
    </>
  );
}
