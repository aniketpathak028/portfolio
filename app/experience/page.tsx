import ExperienceItem from "@/components/ExperienceItem";
import { experienceItems } from "@/data/index";

export default function Experience() {
  return (
    <div className="flex flex-col justify-center px-4 sm:px-0">
      <div className="text-lg sm:text-xl md:text-2xl">Experience</div>
      <div className="flex flex-col gap-8 py-[5%]">
        {experienceItems.map((item, index) => (
          <ExperienceItem key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
}''