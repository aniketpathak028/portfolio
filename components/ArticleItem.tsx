import { Article } from "@/types/index";
import { FaDev, FaMedium } from "react-icons/fa";

export default function ArticleItem({
  index,
  item,
}: Readonly<{ index: number; item: Article }>) {
  return (
    <a 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="border border-gray-800 rounded-md p-4 sm:p-6 hover:border-[var(--link-color)] transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-base sm:text-md md:text-lg font-medium">{item.title}</h2>
        {item.platform === "medium" ? (
          <FaMedium className="text-gray-400 sm:text-md md:text-lg" />
        ) : item.platform === "dev.to" ? (
          <FaDev className="text-gray-400 sm:text-md md:text-lg" />
        ) : null}
      </div>
      
      <p className="text-xs sm:text-sm text-gray-400 mb-3">
        {item.date} · {item.readTime}
      </p>
      
      <p className="text-sm sm:text-md text-gray-300 mb-4">{item.excerpt}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags?.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 text-gray-400 bg-gray-800 rounded">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="text-xs sm:text-sm text-[var(--link-color)]">
        Read on {item.platform === "medium" ? "Medium" : item.platform === "dev.to" ? "Dev.to" : "External Site"} →
      </div>
    </a>
  );
}
