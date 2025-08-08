import { getAllArticles } from "@/lib/articles";
import ArticleItem from "@/components/ArticleItem";
import Link from "next/link";

const ARTICLES_PER_PAGE = 3;

interface Props {
  params: {
    slug: string;
  };
  searchParams?: {
    page?: string;
  };
}

export async function generateMetadata(props: { params: Promise<Props["params"]> }) {
  const params = await props.params;
  const { slug } = params;

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

export default async function TagPage(props: {
  params: Promise<Props["params"]>;
  searchParams?: Promise<Props["searchParams"]>;
}) {
  const params = await props.params;
  const searchParams = props.searchParams ? await props.searchParams : {};
  const { slug } = params;
  const currentPage = Number(searchParams?.page) || 1;

  const filteredArticles = getAllArticles().filter((article) =>
    article.meta.tags.includes(slug)
  );

  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);

  const articleMetas = paginatedArticles.map((article) => article.meta);

  return (
    <div className="flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--background-rgb)] border-b border-gray-800/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-2 justify-center py-4">
            tag: 
            <span
            className="text-xs px-2 py-1 text-gray-400 bg-gray-800 rounded"
          >
            { slug}
          </span>
          </div>
           
        </div>
      </div>
      <div className="mt-24 sm:mt-32 pb-12">
        {articleMetas.length === 0 ? (
          <div className="flex items-center justify-center h-[50vh]">
            <p className="text-gray-400 text-sm sm:text-base">
              No articles found for this tag.
            </p>
          </div>
        ) : (
          <section className="flex flex-col gap-10">
            {articleMetas.map((article) => (
              <ArticleItem key={article.slug} item={article} />
            ))}
          </section>
        )}

        {articleMetas.length > 0 && (
          <div className="mt-8 flex justify-center items-center gap-2 sm:gap-3 md:gap-4">
            {currentPage > 1 && (
              <Link
                href={`/tags/${slug}?page=${currentPage - 1}`}
                className="px-3 py-2 sm:px-4 sm:py-2 rounded-md text-blue-500 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                >
                  <path d="M13 16L7 10L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xs sm:text-sm md:text-base">prev</span>
              </Link>
            )}
            {currentPage < totalPages && (
              <Link
                href={`/tags/${slug}?page=${currentPage + 1}`}
                className="px-3 py-2 sm:px-4 sm:py-2 rounded-md text-blue-500 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base"
              >
                <span className="text-xs sm:text-sm md:text-base">next</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                >
                  <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}