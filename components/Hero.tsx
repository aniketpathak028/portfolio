import Image from 'next/image';
import me from '../public/me.png';
import Socials from './Socials';
import Links from './Links';
import Tagline from './Tagline';

export default function Hero() {
  return (
    <div className="flex flex-col-reverse items-center gap-4 sm:gap-8 md:gap-12 sm:flex-row sm:justify-center md:justify-evenly">
          <div className="text-[min(0.95rem,1.3rem)]">
            <Tagline />
            <Socials />
            <Links />
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
