'use client';
import AnimatedContainer from './AnimatedContainer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const Hero = () => {
    return (
        <AnimatedContainer className="overflow-hidden">
            <div className="h-[52rem] absolute top-0 left-0 w-full overflow-hidden">
                <Image fill sizes="auto" className="object-cover min-w-96" src="/hero.png" alt="Travel Hero Background Image" />
                <div className="absolute inset-0 z-1 opacity-75 bg-[linear-gradient(180deg,rgba(0,0,0,0.50)_49.65%,rgba(0,0,0,0.00)_100%)]"></div>
                <div className="absolute lg:opacity-100 opacity-50 z-10 bottom-0 inset-x-0 h-[22rem] lg:backdrop-blur-[0.75px]"></div>
            </div>
            <div className="container">
                <div className="relative rounded-b-md rounded-t-3xl lg:rounded-t-4xl h-[52rem]">
                    <div className="absolute inset-0 overflow-y-clip">
                        <div className="absolute left-1/2 -translate-x-1/2 top-64 z-10 flex flex-col items-center text-center">
                            <div className="title text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-snug">
                                Temukan perjalanan dan cerita menarik kami
                            </div>
                            <div className="title text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mt-4">
                                Desa Belok Sidan dan Desa Pelaga
                            </div>
                        </div>

                    </div>
                    <Navbar />
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default Hero;
