import { getMDXComponent } from 'mdx-bundler/client';
import BlogDetailHero from '@/components/artikel/detail/Hero';
import Footer from '@/components/Footer';
import { getAllArticles, getArticle } from '@/lib/mdx';

export async function generateStaticParams() {
    const articles = getAllArticles();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

async function getPageContent(slug: string) {
    const { code, frontmatter } = await getArticle(slug);
    return { code, frontmatter };
}

const ArtikelDetailPage = async ({ params }: { params: { slug: string } }) => {
    const { code, frontmatter } = await getPageContent(params.slug);
    const Component = getMDXComponent(code);

    return (
        <>
            <BlogDetailHero frontmatter={frontmatter} />
            <div className="prose lg:prose-xl mx-auto py-12 max-w-4xl px-4 text-justify">
                <Component />
            </div>
            <Footer />
        </>
    );
};

export default ArtikelDetailPage;