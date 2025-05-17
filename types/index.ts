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
  title: string;
  excerpt: string;
  date: string;
  url: string;
  platform: 'medium' | 'dev.to' | 'other';
  tags?: string[];
  readTime?: string;
}