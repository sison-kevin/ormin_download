import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Explore from "./components/Explore";
import CTA from "./components/CTA";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main >
      <Navbar />

      <Hero />

      <LogoStrip />

      <Features />

      <HowItWorks />

      <Explore />

      <CTA />

      <Footer />
    </main>
  );
}