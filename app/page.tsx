"use client";

import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Explore from "./components/Explore";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    /*
     * ==========================================
     * ALWAYS START AT THE HERO AFTER REFRESH
     * ==========================================
     *
     * Prevent the browser from restoring the
     * previous scroll position.
     */

    window.history.scrollRestoration = "manual";

    // Force the page to the very top
    window.scrollTo(0, 0);

    return () => {
      // Restore normal browser behavior when leaving
      window.history.scrollRestoration = "auto";
    };
  }, []);

  return (
    <main>
      {/* ==========================================
          NAVBAR
      ========================================== */}

      <Navbar />

      {/* ==========================================
          HERO
      ========================================== */}

      <Hero />

      {/* ==========================================
          LOGO STRIP
      ========================================== */}

      <LogoStrip />

      {/* ==========================================
          FEATURES
      ========================================== */}

      <Features />

      {/* ==========================================
          HOW IT WORKS
      ========================================== */}

      <HowItWorks />

      {/* ==========================================
          EXPLORE
      ========================================== */}

      <Explore />

      {/* ==========================================
          DOWNLOAD CTA
      ========================================== */}

      <CTA />

      {/* ==========================================
          FOOTER
      ========================================== */}

      <Footer />
    </main>
  );
}