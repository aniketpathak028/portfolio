import Navigation from "@/components/Navigation";
import ArticleListItem from "@/components/ArticleListItem";
import { getCategorizedArticles } from "@/lib/articles"

export const revalidate = 3600;

export default async function Articles() {
  const articles = getCategorizedArticles()
  
  if (!articles) {
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
        <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
          {articles !== null &&
            Object.keys(articles).map((article) => (
              <ArticleListItem
                category={article}
                articles={articles[article]}
                key={article}
              />
            ))}
        </section>
      </div>
    </div>
  );
}