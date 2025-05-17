import ExperienceItem from "@/components/ExperienceItem";
import { experienceItems } from "@/data/index";
import Navigation from "@/components/Navigation";

export default function Experience() {
  return (
    <div className="flex flex-col">
      <Navigation />
      <div className="flex flex-col gap-8  pb-12">
        {experienceItems.map((item, index) => (
          <ExperienceItem key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
}
