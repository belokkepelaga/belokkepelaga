import React from 'react';
import Hero from '@/components/Hero';
import ProgramKerja from '@/components/ProgramKerja';
import FotoPengabdian from '@/components/FotoPengabdian';
import MengenalDesa from '@/components/MengenalDesa';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <ProgramKerja />
            <FotoPengabdian />
            <MengenalDesa />
            <Footer className="mt-24 lg:mt-64" />
        </div>
    );
};

export default HomePage;
