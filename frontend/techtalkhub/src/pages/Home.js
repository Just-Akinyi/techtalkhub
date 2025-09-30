import React from "react";
import HeroBackground from "../components/HeroBackground";
import SliderWidget from "../components/Slider";
// import AboutPage from "./About";
// import ProgramsPage from "./Programs";
import FacultyDirectoryPage from "./FacultyDirectory";
import AdmissionsPage from "./Admissions";
import TestimonialsPage from "./Testimonials";
import ContactPage from "./Contact";
import AppFooter from "../components/Footer";
// import Pricing from "./Pricing";
import WaveDivider from "../components/WaveDivider";
import HeroContent from "../components/HeroContent"; // Add this at the top

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative">
        <HeroBackground>
          <div className="px-6 md:px-24 py-24 flex flex-col md:flex-row items-center md:justify-between h-full space-y-8 md:space-y-0">
            <HeroContent />
            <img
              src="../hero.png"
              alt="Hero"
              className="w-72 md:w-96 rounded-xl shadow-card"
            />
          </div>
        </HeroBackground>
      </section>

      <WaveDivider color="#FFFFFF" />

      {/* Slider Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SliderWidget />
        </div>
      </section>

      <WaveDivider color="#F5F5F5" flip />

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* <Pricing /> */}
        </div>
      </section>

      <WaveDivider color="#FFFFFF" />

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* <AboutPage /> */}
        </div>
      </section>

      <WaveDivider color="#F5F5F5" flip />

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* <ProgramsPage /> */}
        </div>
      </section>

      <WaveDivider color="#FFFFFF" />

      {/* Faculty Section */}
      <section id="faculty" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FacultyDirectoryPage />
        </div>
      </section>

      <WaveDivider color="#F5F5F5" flip />

      {/* Admissions Section */}
      <section id="admissions" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <AdmissionsPage />
        </div>
      </section>

      <WaveDivider color="#FFFFFF" />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <TestimonialsPage />
        </div>
      </section>

      <WaveDivider color="#F5F5F5" flip />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <ContactPage />
        </div>
      </section>

      <AppFooter />
    </div>
  );
}
