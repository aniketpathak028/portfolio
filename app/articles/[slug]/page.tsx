import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getArticlesData } from "@/lib/articles";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

const Article = async (props: { params: Promise<ArticlePageProps["params"]> }) => {
  const params = await props.params;
  const articleData = await getArticlesData(params.slug);

  return (
    <section className="mx-auto mt-5 flex flex-col gap-5 container">
      <div className="flex justify-between">
        <Link href={"/articles"} className="flex flex-row gap-1 place-items-center">
          <ArrowLeftIcon width={20} />
          <p>back</p>
        </Link>
        <p>{articleData.date}</p>
      </div>
      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
      />
    </section>
  );
};

export default Article;