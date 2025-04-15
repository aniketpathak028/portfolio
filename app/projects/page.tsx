import ProjectItem from "@/components/ProjectItem";
import { projectItems } from "@/data/index";

export default function Projects() {
  return (
    <div className="flex flex-col justify-center px-4 sm:px-0">
      <div className="text-lg sm:text-xl md:text-2xl">Projects</div>
      <div className="flex flex-col gap-8 py-[5%]">
        {projectItems.map((item, index) => (
          <ProjectItem key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
}