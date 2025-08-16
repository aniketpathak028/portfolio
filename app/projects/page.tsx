import ProjectItem from "@/components/ProjectItem";
import PageLayout from "@/components/PageLayout";
import { getProjects } from '@/lib/notion';

export const revalidate = 3600;

export const metadata = {
  title: 'Projects - Aniket Pathak',
  description: 'Projects developed by Aniket Pathak.',
  openGraph: {
    title: 'Projects - Aniket Pathak',
    description: 'Projects developed by Aniket Pathak.',
    url: 'https://aniketpathak.me/projects',
    type: 'website',
    images: [
      {
        url: 'https://aniketpathak.me/api/og?title=Projects&description=⚒️%20aniketpathak.me',
        width: 1200,
        height: 630,
        alt: 'Projects',
      },
    ],
    siteName: 'Aniket Pathak',
  }
};

export default async function Projects() {
  const projects = await getProjects();
  
  return (
    <PageLayout>
      {projects.map((item, index) => (
        <ProjectItem key={index} index={index} item={item} />
      ))}
    </PageLayout>
  );
}