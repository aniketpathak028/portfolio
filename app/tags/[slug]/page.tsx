import { getAllArticles } from "@/lib/articles";
import ArticleItem from "@/components/ArticleItem";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
 
  return {
    title: `Aniket Pathak - Tag: ${slug}`,
    description: `Articles tagged with ${slug}`,
  };
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  const tags = new Set(articles.map((article) => article.meta.tags).flat());
 
  return Array.from(tags).map((tag) => ({
    slug: tag,
  }));
}

export default async function TagPage({ params }: Props) {
  const { slug } = await params;
  const articles = getAllArticles().filter((article) =>
    article.meta.tags.includes(slug)
  );
 
  const articleMetas = articles.map((article) => article.meta);
  
  return (
    <div className="flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--background-rgb)] border-b border-gray-800/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center py-4">
            tag: {slug}
          </div>
        </div>
      </div>
      <div className="mt-24 sm:mt-32 pb-12">
        <section className="flex flex-col gap-10">
          {articleMetas.map((article) => (
            <ArticleItem key={article.slug} item={article} />
          ))}
        </section>
      </div>
    </div>
  );
}