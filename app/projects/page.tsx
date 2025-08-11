import ProjectItem from "@/components/ProjectItem";
import PageLayout from "@/components/PageLayout";
import { getProjects } from '@/lib/notion';

export const revalidate = 3600;

export const metadata = {
  title: 'Aniket Pathak - Projects',
  description: 'Projects developed by Aniket Pathak.',
  openGraph: {
    title: 'Aniket Pathak - Projects',
    description: 'Projects developed by Aniket Pathak.',
    url: 'https://aniketpathak.me/projects',
    type: 'website',
    images: [
      {
        url: 'https://aniketpathak.me/api/og?title=Aniket%20Pathak%20Projects&description=My%20Portfolio%20Projects',
        width: 1200,
        height: 630,
        alt: 'Aniket Pathak Projects',
      },
    ],
    siteName: 'Aniket Pathak',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aniket Pathak - Projects',
    description: 'Projects developed by Aniket Pathak.',
    images: ['https://aniketpathak.me/api/og?title=Aniket%20Pathak%20Projects&description=My%20Portfolio%20Projects'],
  },
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