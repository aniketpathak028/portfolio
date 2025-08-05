import path from "path";
import fs from "fs";
import { sync } from "glob";
import moment from "moment"
import matter from "gray-matter";
import {Article} from "@/types/index"

const ARTICLES_PATH = path.join(process.cwd(), "/data/articles");

export const getSlugs = (): string[] => {
  const paths = sync(`${ARTICLES_PATH}/*.mdx`);

  return paths.map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split(".");
    return slug;
  });
};

export const getArticlesFromSlug = (slug: string): Article => {
  const articlePath = path.join(ARTICLES_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(articlePath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? "",
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: data.date, 
      formattedDate: moment(data.date, "DD-MM-YYYY").format("MMMM Do YYYY"),
    },
  };
};

export const getAllArticles = (): Article[] => {
  const articles = getSlugs()
    .map((slug) => getArticlesFromSlug(slug))
    .sort((a, b) => {
      const dateA = moment(a.meta.date, "DD-MM-YYYY");
      const dateB = moment(b.meta.date, "DD-MM-YYYY");
      return dateB.diff(dateA); 
    });
  return articles;
};