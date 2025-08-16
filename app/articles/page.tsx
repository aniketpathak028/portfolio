import { getAllArticles } from "@/lib/articles";
import ArticleItem from "@/components/ArticleItem";
import Pagination from "@/components/Pagination";
import PageLayout from "@/components/PageLayout";
import TagSearch from "@/components/TagSearch";

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

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams?: Promise<{ tags?: string | string[]; page?: string }>;
}) {
  const allArticles = getAllArticles();
  const allAvailableTags = Array.from(new Set(allArticles.map(article => article.meta.tags).flat()));

  const awaitedSearchParams = searchParams ? await searchParams : {};

  const selectedTagsParam = awaitedSearchParams?.tags;
  const selectedTags = selectedTagsParam
    ? (typeof selectedTagsParam === 'string' ? selectedTagsParam.split(',') : [])
    : [];

  const filteredArticles = allArticles.filter(article => {
    if (selectedTags.length === 0) {
      return true;
    }
    return selectedTags.every(tag => article.meta.tags.includes(tag));
  });

  const currentPage = Number(awaitedSearchParams?.page) || 1;
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const articleMetas = paginatedArticles.map((article) => article.meta);

  const basePathForPagination = `/articles${selectedTags.length > 0 ? `?tags=${selectedTags.join(',')}` : ''}`;

  return (
    <PageLayout>
      <div className="flex flex-col">
        <div className="sm:top-20 z-40 bg-[var(--background-rgb)] pb-4">
          <TagSearch availableTags={allAvailableTags} currentTags={selectedTags} />
        </div>

        <div className="pb-12">
          {articleMetas.length === 0 ? (
            <div className="flex items-center justify-center h-[50vh]">
              <p className="text-gray-400 text-sm sm:text-base">
                No articles found for the selected tags.
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
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath={`${basePathForPagination}${basePathForPagination.includes('?') ? '&' : '?'}page=`}
            />
          )}
        </div>
      </div>
    </PageLayout>
  );
}