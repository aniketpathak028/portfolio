import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getArticlesFromSlug, getSlugs } from "@/lib/articles";
import "highlight.js/styles/atom-one-dark.css";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(props: { params: Promise<Props["params"]> }) {
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
  params: Promise<Props["params"]>;
}) {
  const params = await props.params;
  const { content, meta } = getArticlesFromSlug(params.slug);

  return (
    <section className="mt-5 flex flex-col gap-5 px-4">
      <div className="flex justify-between max-w-3xl mx-auto w-full">
        <Link
          href={"/articles"}
          className="flex flex-row gap-1 place-items-center"
        >
          <ArrowLeftIcon width={20} />
          <p>back</p>
        </Link>
        <p>{meta.formattedDate}</p>
      </div>
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