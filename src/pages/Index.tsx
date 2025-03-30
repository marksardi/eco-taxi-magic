
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ServiceArea from '../components/ServiceArea';
import VehicleShowcase from '../components/VehicleShowcase';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <ServiceArea />
        <VehicleShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
