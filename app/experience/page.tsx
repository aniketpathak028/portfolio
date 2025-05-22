import ExperienceItem from "@/components/ExperienceItem";
import Navigation from "@/components/Navigation";
import { getExperience } from '@/lib/notion';

export const revalidate = 3600; // Revalidate every hour

export default async function Experience() {
  const experience = await getExperience();

  return (
    <div className="flex flex-col">
      <Navigation />
      <div className="flex flex-col gap-8 mt-24 sm:mt-32 pb-12">
        {experience.map((item, index) => (
          <ExperienceItem key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
}
