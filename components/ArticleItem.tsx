import { ArticleMeta } from "@/types/index";
import Link from "next/link"

export default function ArticleItem({
  item,
}: Readonly<{ item: ArticleMeta }>) {
  return (
    <div className="border border-gray-800 rounded-md p-4 sm:p-6 hover:border-[var(--link-color)] w-full max-w-lg transition-all duration-300">
      <div className="flex flex-col-reverse gap-2 sm:flex sm:flex-row sm:justify-between mb-2">
        <Link href={`/articles/${item.slug}`}>
          <h2 className="text-base sm:text-md md:text-lg font-medium text-[var(--link-color)]">
            {item.title}
          </h2>
        </Link>
      </div>
      <p className="text-sm sm:text-md text-gray-300 mb-4">{item.excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <Link
              href={`/tags/${tag}`}
              key={tag} 
              >
          <span
            className="text-xs px-2 py-1 text-gray-400 bg-gray-800 rounded"
          >
            {tag}
          </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

