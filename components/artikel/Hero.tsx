'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import CirclePattern from '@/components/CirclePattern';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

const ArtikelHero = () => {
    return (
        <AnimatedContainer visibleClass="!slide-in-from-top-0" className="pt-6">
            <div className="container relative">
                <div className="h-[45rem] lg:h-[51.5rem] absolute top-0 bg-main-gradient w-screen left-1/2 -translate-x-1/2">
                    <div className="absolute inset-0 overflow-hidden lg:block hidden">
                        <CirclePattern className="absolute w-[82rem] -bottom-full -translate-y-24" />
                    </div>
                </div>
                <div className="relative z-20">
                    <Navbar />
                    <h1 className="max-w-[calc(100%-3rem)] lg:max-w-5xl mx-auto title lg:text-6xl text-4xl text-center mt-18">Artikel</h1>
                    <p className="mt-6 max-w-[calc(100%-3rem)] lg:max-w-3xl text-lg lg:text-xl text-black text-center mx-auto">
                        Cerita kami, tim KKN-PPM UGM Belok ke Pelaga 2025
                    </p>
                </div>
                <div className="relative z-10 h-[35rem] max-w-[calc(100%-3rem)] lg:max-w-[calc(100%-12rem) mt-20 lg:mt-40 mx-auto rounded-4xl shadow-black-card overflow-hidden">
                    <Image fill sizes="auto" className="object-cover" src={'/tim-kkn-penerjunan.png'} alt="Blog Hero Image" />
                </div>
                <div className="max-w-[calc(100%-3rem)] lg:max-w-[62rem] mx-auto mt-10">
                    <Link href={''} className="flex items-center justify-between gap-4">
                        <span className="flex-1 text-xl font-semibold text-surface-950 dark:text-surface-0">SaaS Solutions for Small Businesses: What to Expect in 2024</span>
                        <i className="pi pi-arrow-right"></i>
                    </Link>
                    <p className="mt-3 text-surface-500 dark:text-white/64">
                        Discover SaaS solutions that help small businesses automate processes, reduce costs, and improve customer relationships. Learn about the top SaaS trends for small businesses in 2024.
                    </p>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default ArtikelHero;
