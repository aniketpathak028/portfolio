// app/articles/[slug]/page.tsx

import Link from "next/link"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { getArticlesData } from "@/lib/articles"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

const Article = async ({ params }: ArticlePageProps) => {
  const articleData = await getArticlesData(params.slug)

  return (
    <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
      <div className="flex justify-between">
        <Link href={"/"} className="flex flex-row gap-1 place-items-center">
          <ArrowLeftIcon width={20} />
          <p>back</p>
        </Link>
        <p>{articleData.date.toString()}</p>
      </div>
      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
      />
    </section>
  )
}

export default Article