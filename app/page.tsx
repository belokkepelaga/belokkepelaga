import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PotretPengabdian from '@/components/PotretPengabdian';
import MengenalDesa from '@/components/MengenalDesa';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <PotretPengabdian />
            <MengenalDesa />
            <Footer />
        </div>
    );
};

export default HomePage;
