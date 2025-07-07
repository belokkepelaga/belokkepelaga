'use client';
import AnimatedContainer from './AnimatedContainer';
// import Navbar from '@/components/Navbar';
import Image from 'next/image';

const Hero = () => {
    return (
        <AnimatedContainer className="overflow-hidden">
            <div className="h-[52rem] absolute top-0 left-0 w-full overflow-hidden">
                <Image fill sizes="auto" className="object-cover min-w-96" src="/hero_pict.png" alt="Hero Background" />
                <div className="absolute inset-0 z-1 opacity-75 bg-[linear-gradient(180deg,rgba(0,0,0,0.50)_49.65%,rgba(0,0,0,0.00)_100%)]"></div>
                <div className="absolute lg:opacity-100 opacity-50 z-10 bottom-0 inset-x-0 h-[22rem] lg:backdrop-blur-[0.75px]"></div>
            </div>
            <div className="container">
                <div className="relative rounded-b-md rounded-t-3xl lg:rounded-t-4xl h-[52rem]">
                    <div className="absolute inset-0 overflow-y-clip">
                        <div className="absolute left-1/2 -translate-x-1/2 top-64 z-10 flex flex-col items-center text-center">
                        </div>

                    </div>
                    {/* <Navbar /> */}
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default Hero;
