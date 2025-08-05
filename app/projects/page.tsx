import ProjectItem from "@/components/ProjectItem";
import PageLayout from "@/components/PageLayout";
import { getProjects } from '@/lib/notion';

export const revalidate = 3600;

export const metadata = {
  title: 'Aniket Pathak - Projects',
  description: 'portfolio wesbite'
}

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