export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
}

export interface Project {
    title: string;
    description: string;
    link: string;
    technologies: string[];
}

export interface Article {
  content: string;
  meta: ArticleMeta;
}

export interface ArticleMeta {
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
  formattedDate: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export interface ArticleProps {
  params: {
    slug: string;
  };
}

export interface TagProps {
  params: {
    slug: string;
  };
  searchParams?: {
    page?: string;
  };
}