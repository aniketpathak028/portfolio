import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getArticlesFromSlug, getSlugs } from "@/lib/articles";
import { ArticleProps } from "@/types";
import "highlight.js/styles/atom-one-dark.css";
import readingTime from "reading-time";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleMeta from "@/components/ArticleMeta";

export async function generateMetadata(props: { params: Promise<ArticleProps["params"]> }) {
  const params = await props.params;
  const { meta } = getArticlesFromSlug(params.slug);

  const url = `https://aniketpathak.me/articles/${params.slug}`;

  return {
    title: meta.title,
    description: meta.excerpt || meta.title,
    openGraph: {
      title: meta.title,
      description: meta.excerpt || meta.title,
      url: url,
      type: "article",
      images: [
        {
          url: `https://aniketpathak.me/api/og?title=${encodeURIComponent(meta.title)}&slug=${params.slug}`,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
      siteName: 'Aniket Pathak',
    }
  };
}

export async function generateStaticParams() {
  const slugs = getSlugs();
  
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function ArticlePage(props: {
  params: Promise<ArticleProps["params"]>;
}) {
  const params = await props.params;
  const { content, meta } = getArticlesFromSlug(params.slug);

  const stats = readingTime(content);
  const readingTimeText = stats.text;

  return (
      <section className="mx-auto w-full max-w-2xl px-4 sm:px-8 mt-5 mb-24 flex flex-col gap-6">
        <div className="mb-6">
          <Link
            href="/articles"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
          >
            <ArrowLeftIcon width={18} />
            <span>Back</span>
          </Link>
        </div>
        <ArticleHeader title={meta.title} excerpt={meta.excerpt} />
        <ArticleMeta date={meta.formattedDate} readingTime={readingTimeText} articleSlug={meta.slug}/>
        <article className="article">
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: "wrap" }],
                  rehypeHighlight,
                ],
              },
            }}
            components={{ Image }}
          />
        </article>
      </section>
  );
}