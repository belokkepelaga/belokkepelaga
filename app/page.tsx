import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MisiAksi from '@/components/MisiAksi';
import PotretPengabdian from '@/components/PotretPengabdian';
import MengenalDesa from '@/components/MengenalDesa';
import Footer from '@/components/Footer';
import Mision from '@/components/MisiAksi';
import PotretPengabdian from '@/components/PotretPengabdian';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
<<<<<<< Updated upstream
            <MisiAksi />
            <PotretPengabdian />
            <MengenalDesa />
            <Footer className="mt-24 lg:mt-64" />
=======
              <Mision />
                   <PotretPengabdian />
            <MapSection />
            <Footer />
       
>>>>>>> Stashed changes
        </div>
    );
};

export default HomePage;
