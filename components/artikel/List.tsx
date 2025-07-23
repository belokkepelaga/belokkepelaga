import AnimatedContainer from '@/components/AnimatedContainer';
import Image from 'next/image';
import Link from 'next/link';

const ArtikelList = ({ articles }: { articles: { slug: string, frontmatter: any }[] }) => {
    return (
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:mt-32">
            {articles.map((item, index) => (
                <AnimatedContainer key={index} delay={index * 100} className="group relative h-[34rem] rounded-3xl overflow-hidden shadow-blue-card dark:shadow-none border-0 dark:border border-white/12">
                    <Image fill sizes="auto" className="object-cover -z-2" src={item.frontmatter.image} alt="Blog List Image" />
                    <div className="-z-1 inset-0 absolute bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.48)_64.82%)]" />
                    <div className="bottom-0 absolute z-1 left-0 right-0 p-8 bg-surface-0 dark:bg-surface-950 rounded-t-3xl transition-all duration-300">
                        <Link href={`/artikel/${item.slug}`} className="flex items-center justify-between gap-2">
                            <h5 className="text-lg font-semibold text-surface-950 dark:text-surface-0">{item.frontmatter.title}</h5>
                            <i className="pi pi-arrow-right text-sm"></i>
                        </Link>
                        <p className="mt-3 text-surface-500 dark:text-white/64">{item.frontmatter.description}</p>
                    </div>
                </AnimatedContainer>
            ))}
        </div>
    );
};

export default ArtikelList;
