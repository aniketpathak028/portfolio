import { getArticles } from "@/lib/notion";
import Navigation from "@/components/Navigation";
import ArticleItem from "@/components/ArticleItem";

export const revalidate = 3600; // Revalidate every hour

export default async function Articles() {
  const articles = await getArticles();
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
      <div className="flex flex-col gap-8 mt-24 sm:mt-32 pb-12">
        <div className="grid gap-8">
          {articles.map((article, index) => (
            <ArticleItem key={index} index={index} item={article} />
          ))}
        </div>
      </div>
    </div>
  );
}