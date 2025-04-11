import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { ScheduleVisitModal } from "./components/ScheduleVisitModal";
import { MakeReferralModal } from "./components/MakeReferralModal";
import "./animations.css";
import "./spacing-fix.css";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage"));
const ForFamiliesPage = lazy(() => import("./pages/ForFamiliesPage"));
const ForProfessionalsPage = lazy(() => import("./pages/ForProfessionalsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

function App() {
  const location = useLocation();

  useEffect(() => {
    // Add scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    // Observe all elements with scroll-fade-in class
    document.querySelectorAll('.scroll-fade-in, .reveal').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.scroll-fade-in, .reveal').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background page-container">
      <Header />

      <main className="main-content">

        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="animate-pulse text-primary text-lg">Loading...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/for-families" element={<ForFamiliesPage />} />
            <Route path="/for-professionals" element={<ForProfessionalsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <BackToTop />
      <ScheduleVisitModal />
      <MakeReferralModal />
    </div>
  );
}

export default App;
