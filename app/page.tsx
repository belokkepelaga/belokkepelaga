import React from 'react';
import Hero from '@/components/Hero';
// import MisiAksi from '@/components/MisiAksi';
import ProgramKerja from '@/components/ProgramKerja';
import PotretPengabdian from '@/components/PotretPengabdian';
import MengenalDesa from '@/components/MengenalDesa';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            {/* <MisiAksi /> */}
            <ProgramKerja />
            <PotretPengabdian />
            <MengenalDesa />
            <Footer className="mt-24 lg:mt-64" />
        </div>
    );
};

export default HomePage;
