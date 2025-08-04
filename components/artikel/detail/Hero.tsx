// 'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
// import CirclePattern from '@/components/CirclePattern';
import Image from 'next/image';

const ArtikelDetailHero = ({ frontmatter }: { frontmatter: any }) => {
    return (
        <AnimatedContainer visibleClass="!slide-in-from-top-0">
            <div className="container relative">
                {/* <div className="h-[45rem] lg:h-[51.5rem] absolute top-0 bg-main-gradient w-screen left-1/2 -translate-x-1/2">
                    <div className="absolute inset-0 overflow-hidden lg:block hidden">
                        <CirclePattern className="absolute w-[82rem] -bottom-full -translate-y-24" />
                    </div>
                </div> */}
                <div className="relative z-20 pt-20">
                    {/* <h1 className="max-w-[calc(100%-3rem)] lg:max-w-5xl mx-auto title lg:text-6xl text-4xl text-center mt-18">{frontmatter.title}</h1> */}
                    <h1 className="pt-12 text-3xl lg:text-5xl font-semibold text-surface-950 dark:text-surface-0">{frontmatter.title}</h1>
                    <p className="mt-6 max-w-full text-lg lg:text-xl text-surface-950 dark:text-surface-0 mx-auto">
                        {frontmatter.description}
                    </p>
                </div>
                <div className="relative z-10 h-[35rem] max-w-[calc(100%-3rem)] lg:max-w-[calc(100%-12rem)] mt-16 lg:mt-20 mx-auto rounded-4xl shadow-black-card overflow-hidden">
                    <Image fill sizes="auto" className="object-cover" src={frontmatter.image} alt="Gambar Artikel" />
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default ArtikelDetailHero;
