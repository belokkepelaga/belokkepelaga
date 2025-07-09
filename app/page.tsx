import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MisiAksi from '@/components/MisiAksi';
import PotretPengabdian from '@/components/PotretPengabdian';
import MengenalDesa from '@/components/MengenalDesa';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <MisiAksi />
            <PotretPengabdian />
            <MengenalDesa />
            <Footer className="mt-24 lg:mt-64" />
        </div>
    );
};

export default HomePage;
