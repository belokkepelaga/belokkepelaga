'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import CirclePattern from '@/components/CirclePattern';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

const ArtikelHero = ({ article }: { article: { slug: string, frontmatter: any } }) => {
    return (
        <AnimatedContainer visibleClass="!slide-in-from-top-0">
            <div className="container relative">
                <div className="h-[45rem] lg:h-[51.5rem] absolute top-0 bg-main-gradient w-screen left-1/2 -translate-x-1/2">
                    <div className="absolute inset-0 overflow-hidden lg:block hidden">
                        <CirclePattern className="absolute w-[82rem] -bottom-full -translate-y-24" />
                    </div>
                </div>
                <div className="relative z-20 pt-20">
                    <h1 className="max-w-[calc(100%-3rem)] lg:max-w-5xl mx-auto title lg:text-6xl text-4xl text-center mt-18">Artikel</h1>
                    <p className="mt-6 max-w-[calc(100%-3rem)] lg:max-w-3xl text-lg lg:text-xl text-black text-center mx-auto">
                        Cerita kami, tim KKN-PPM UGM Belok ke Pelaga 2025
                    </p>
                </div>
                <div className="relative z-10 h-[35rem] max-w-[calc(100%-3rem)] lg:max-w-[calc(100%-12rem)] mt-20 lg:mt-40 mx-auto rounded-4xl shadow-black-card overflow-hidden">
                    <Image fill sizes="auto" className="object-cover -z-2" src={article.frontmatter.image} alt="Blog Hero Image" />
                    <div className="-z-1 inset-0 absolute bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.48)_64.82%)]" />
                    <div className="bottom-0 absolute z-1 left-0 right-0 p-8 bg-surface-0 dark:bg-surface-950 rounded-t-3xl">
                        <Link href={`/artikel/${article.slug}`} className="flex items-center justify-between gap-4">
                            <span className="flex-1 text-xl font-semibold text-surface-950 dark:text-surface-0">{article.frontmatter.title}</span>
                            <i className="pi pi-arrow-right"></i>
                        </Link>
                        <p className="mt-3 text-surface-500 dark:text-white/64">
                            {article.frontmatter.description}
                        </p>
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default ArtikelHero;
