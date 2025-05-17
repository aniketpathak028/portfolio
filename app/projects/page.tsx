import ProjectItem from "@/components/ProjectItem";
import { projectItems } from "@/data/index";
import Navigation from "@/components/Navigation";

export default function Projects() {
  return (
    <div className="flex flex-col">
      <Navigation />
      <div className="flex flex-col gap-8 pb-12">
        {projectItems.map((item, index) => (
          <ProjectItem key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
}
