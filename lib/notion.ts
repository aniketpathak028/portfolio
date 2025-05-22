import { Client } from '@notionhq/client';
import { Experience, Project, Article } from '@/types';

const notion = new Client({
  auth: process.env.NOTION_API_KEY
});

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_PROJECTS_DB_ID!,
      sorts: [{ property: 'id', direction: 'ascending' }]
    });

    return response.results.map((page: any): Project => ({
      title: page.properties.title.title[0].plain_text,
      description: page.properties.description.rich_text[0].plain_text,
      link: page.properties.link.url,
      technologies: page.properties.technologies.multi_select.map((tech: any) => tech.name)
    }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getExperience(): Promise<Experience[]> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_EXPERIENCE_DB_ID!,
      sorts: [{ property: 'date', direction: 'descending' }]
    });

    return response.results.map((page: any): Experience => ({
      title: page.properties.role.rich_text[0].plain_text,
      company: page.properties.company.title[0].plain_text,
      period: page.properties.date.rich_text[0].plain_text,
      description: page.properties.description.rich_text[0].plain_text,
      skills: page.properties.technologies.multi_select.map((tech: any) => tech.name)
    }));
  } catch (error) {
    console.error('Error fetching experience:', error);
    return [];
  }
}

export async function getArticles(): Promise<Article[]> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_ARTICLES_DB_ID!,
      sorts: [{ property: 'date', direction: 'descending' }]
    });

    return response.results.map((page: any): Article => ({
      title: page.properties.title.title[0].plain_text,
      excerpt: page.properties.excerpt.rich_text[0].plain_text,
      date: page.properties.date.rich_text[0].plain_text,
      url: page.properties.url.url,
      platform: page.properties.platform.rich_text[0].plain_text as Article['platform'],
      tags: page.properties.tags.multi_select.map((tag: any) => tag.name),
      readTime: page.properties.readTime.rich_text[0].plain_text
    }));
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}