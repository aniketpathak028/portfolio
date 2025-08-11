import ExperienceItem from "@/components/ExperienceItem";
import PageLayout from "@/components/PageLayout";
import { getExperience } from '@/lib/notion';

export const revalidate = 3600;

export const metadata = {
  title: 'Aniket Pathak - Projects',
  description: 'Professional experience of Aniket Pathak.',
  openGraph: {
    title: 'Aniket Pathak - Projects',
    description: 'Projects developed by Aniket Pathak.',
    url: 'https://aniketpathak.me/experience',
    type: 'website',
    images: [
      {
        url: 'https://aniketpathak.me/api/og?title=Aniket%20Pathak%20Experience&description=My%20Portfolio%20Experience',
        width: 1200,
        height: 630,
        alt: 'Aniket Pathak Projects',
      },
    ],
    siteName: 'Aniket Pathak',
  }
};

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