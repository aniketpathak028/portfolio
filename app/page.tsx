import Image from "next/image";
import me from "@/public/me.png";
import Socials from "@/components/Socials";
import Resume from "@/components/Resume";
import Tagline from "@/components/Tagline";
import Navigation from "@/components/Navigation";


export const metadata = {
  title: 'Aniket Pathak - Software Engineer',
  description: 'I love breaking and building stuff 😇',
  openGraph: {
    title: 'Aniket Pathak - Software Engineer',
    description: 'I love to break and build stuff 😇',
    url: 'https://aniketpathak.me/',
    type: 'website',
    images: [
      {
        url: 'https://aniketpathak.me/api/og?title=⚒️%20aniketpathak.me&description=Software%20Engineer',
        width: 1200,
        height: 630,
        alt: 'Aniket Pathak',
      },
    ],
    siteName: 'Aniket Pathak',
  }
};

export default function Home() {
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-4 sm:gap-8 sm:flex-row md:gap-12">
      <Navigation />
      <div className="text-[min(0.95rem,1.3rem)] text-gray-300">
        <Tagline />
        <Socials />
        <Resume />
      </div>
      <div className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80">
        <Image
          src={me}
          alt="generated using notion"
          className="w-full h-full object-contain"
          priority
        />
      </div>
    </div>
  );
}
