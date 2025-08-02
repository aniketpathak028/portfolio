import Link from "next/link"
import type { ArticleItem } from "@/types"

interface Props {
  category: string
  articles: ArticleItem[]
}

const ArticleListItem = ({ category, articles }: Props) => {
  return (
    <div className="border border-gray-800 rounded-md p-4 sm:p-6 flex flex-col gap-5">
      <div className="text-xs px-2 py-1 text-gray-400 bg-gray-800 rounded w-fit">
        {category}
      </div>
      <div className="flex flex-col gap-2.5 text-lg">
        {articles.map((article, id) => (
          <Link
            href={`/articles/${article.id}`}
            key={id}
            className="text-neutral-900 hover:text-amber-700 transition duration-150"
          >
            {article.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ArticleListItem