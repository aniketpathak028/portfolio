import Navigation from "@/components/Navigation";
import ArticleItem from "@/components/ArticleItem";
import { getTotalPages, getPaginatedArticles } from "@/lib/articles"
import Link from "next/link";

export const metadata = {
  title: 'Articles - Aniket Pathak',
  description: 'Articles by Aniket Pathak.',
  openGraph: {
    title: 'Articles - Aniket Pathak',
    description: 'Articles by Aniket Pathak.',
    url: 'https://aniketpathak.me/articles',
    type: 'website',
    images: [
      {
        url: 'https://aniketpathak.me/api/og?title=articles&description=articles%20by%20aniket',
        width: 1200,
        height: 630,
        alt: 'Articles',
      },
    ],
    siteName: 'Aniket Pathak',
  }
};

const ARTICLES_PER_PAGE = 3;


export default async function Articles(props: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const searchParams = props.searchParams ? await props.searchParams : {};
  const currentPage = Number(searchParams.page) || 1;
  const articles = getPaginatedArticles(currentPage, ARTICLES_PER_PAGE).map(
    (article) => article.meta
  );
  const totalPages = getTotalPages(ARTICLES_PER_PAGE);

  if (!articles || articles.length === 0) {
    return (
      <div className="flex flex-col">
        <Navigation />
        <div className="flex items-center justify-center h-[50vh]">
          <p className="text-gray-400 text-sm sm:text-base">No articles present</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Navigation />
      <div className="mt-24 sm:mt-32 pb-12">
        <section className="flex flex-col gap-10">
          {articles.map((article) => (
            <ArticleItem key={article.slug} item={article} />
          ))}
        </section>
        <div className="mt-8 flex justify-center items-center gap-2 sm:gap-3 md:gap-4">
          {currentPage > 1 && (
            <Link
              href={`/articles?page=${currentPage - 1}`}
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
              href={`/articles?page=${currentPage + 1}`}
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
      </div>
    </div>
  );
}