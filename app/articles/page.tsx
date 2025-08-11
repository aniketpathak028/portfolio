import Navigation from "@/components/Navigation";
import ArticleItem from "@/components/ArticleItem";
import Pagination from "@/components/Pagination";
import PageLayout from "@/components/PageLayout";
import { getTotalPages, getPaginatedArticles } from "@/lib/articles"

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
      <PageLayout>
        <div className="flex items-center justify-center h-[50vh]">
          <p className="text-gray-400 text-sm sm:text-base">No articles present</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
        <section className="flex flex-col gap-10">
          {articles.map((article) => (
            <ArticleItem key={article.slug} item={article} />
          ))}
        </section>
        <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/articles" />
    </PageLayout>
  );
}