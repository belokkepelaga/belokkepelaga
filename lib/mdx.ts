import fs from 'fs';
import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getArticle(slug: string) {
    const mdxPath = path.join(contentDirectory, 'artikel', `${slug}.mdx`);
    const source = fs.readFileSync(mdxPath, 'utf-8');

    const { code, frontmatter } = await bundleMDX({
        source,
        cwd: path.join(contentDirectory, 'artikel'),
    });

    return {
        slug,
        frontmatter,
        code,
    };
}

export function getAllArticles() {
    const articlesDirectory = path.join(contentDirectory, 'artikel');
    const filenames = fs.readdirSync(articlesDirectory);

    return filenames.map((filename) => {
        const filePath = path.join(articlesDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug: filename.replace(/\.mdx$/, ''),
            frontmatter: data,
        };
    });
}