import ArtikelHero from '@/components/artikel/Hero';
import ArtikelList from '@/components/artikel/List';
import Footer from '@/components/Footer';
import { getAllArticles } from '@/lib/mdx';

const ArtikelPage = async () => {
    const articles = await getAllArticles();
    const mainArticle = articles.find(article => article.slug === 'artikel-utama');
    const otherArticles = articles.filter(article => article.slug !== 'artikel-utama');

    return (
        <>
            {mainArticle && <ArtikelHero article={mainArticle} />}
            <ArtikelList articles={otherArticles} />
            <Footer className="mt-24 lg:mt-64" />
        </>
    );
};

export default ArtikelPage;