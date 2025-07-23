import ArtikelHero from '@/components/artikel/Hero';
import ArtikelList from '@/components/artikel/List';
import Footer from '@/components/Footer';
import { getAllArticles } from '@/lib/mdx';

const ArtikelPage = () => {
    const articles = getAllArticles();
    return (
        <>
            <ArtikelHero />
            <ArtikelList articles={articles} />
            <Footer className="mt-24 lg:mt-64" />
        </>
    );
};

export default ArtikelPage;
