import BlogHero from '@/components/artikel/Hero';
import BlogList from '@/components/artikel/List';
import Footer from '@/components/Footer';

const ArtikelPage = () => {
    return (
        <>
            <BlogHero />
            <BlogList />
            <Footer className="mt-24 lg:mt-64" />
        </>
    );
};

export default ArtikelPage;
