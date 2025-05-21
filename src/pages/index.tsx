import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ChallengesSection from '../components/ChallengesSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import FloatingCTA from '../components/FloatingCTA';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ChallengesSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
      <FloatingCTA />
    </main>
  );
}