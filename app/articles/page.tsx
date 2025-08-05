import Navigation from "@/components/Navigation";
import ArticleItem from "@/components/ArticleItem";
import { getAllArticles } from "@/lib/articles"

export default async function Articles() {  
  const articles = getAllArticles()
    .slice(0, 9)
    .map((article) => article.meta);

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
      </div>
    </div>
  );
}