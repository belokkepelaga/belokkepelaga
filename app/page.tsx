import React from 'react';
// import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
// import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* <Navbar /> */}
            <Hero />
            {/* <CTA /> */}
            <Footer />
        </div>
    );
};

export default HomePage;
