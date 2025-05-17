import Image from "next/image";
import me from "@/public/me.png";
import Socials from "@/components/Socials";
import Bio from "@/components/Bio";
import Tagline from "@/components/Tagline";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-4 sm:gap-8 sm:flex-row md:gap-12">
      <Navigation />
      <div className="text-[min(0.95rem,1.3rem)] text-gray-300">
        <Tagline />
        <Socials />
        <Bio />
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
