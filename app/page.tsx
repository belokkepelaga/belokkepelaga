import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <CTA />
            <MapSection />
            <Footer />
        </div>
    );
};

export default HomePage;
