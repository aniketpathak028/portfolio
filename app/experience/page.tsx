import ExperienceItem from "@/components/ExperienceItem";
import PageLayout from "@/components/PageLayout";
import { getExperience } from '@/lib/notion';

export const revalidate = 3600;

export const metadata = {
  title: 'Experience - Aniket Pathak',
  description: 'Professional experience of Aniket Pathak.',
  openGraph: {
    title: 'Experience - Aniket Pathak',
    description: 'Professional experience of Aniket Pathak.',
    url: 'https://aniketpathak.me/experience',
    type: 'website',
    images: [
      {
        url: 'https://aniketpathak.me/api/og?title=experiences&description=my%20experiences',
        width: 1200,
        height: 630,
        alt: 'Experience',
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