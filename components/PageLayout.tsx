import Navigation from "@/components/Navigation";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="flex flex-col">
      <Navigation />
      <div className={`flex flex-col gap-8 mt-24 sm:mt-32 pb-12 ${className}`}>
        {children}
      </div>
    </div>
  );
}