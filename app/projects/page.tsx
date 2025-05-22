import ProjectItem from "@/components/ProjectItem";
import Navigation from "@/components/Navigation";
import { getProjects } from '@/lib/notion';

export const revalidate = 3600; // Revalidate every hour

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col">
      <Navigation />
      <div className="flex flex-col gap-8 mt-24 sm:mt-32 pb-12">
        {projects.map((item, index) => (
          <ProjectItem key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
}
