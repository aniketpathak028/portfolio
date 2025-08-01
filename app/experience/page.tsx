import ExperienceItem from "@/components/ExperienceItem";
import PageLayout from "@/components/PageLayout";
import { getExperience } from '@/lib/notion';

export const revalidate = 3600;

export default async function Experience() {
  const experience = await getExperience();
  
  return (
    <PageLayout>
      {experience.map((item, index) => (
        <ExperienceItem key={index} index={index} item={item} />
      ))}
    </PageLayout>
  );
}