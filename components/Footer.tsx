export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-4 mt-auto">
      <div className="flex justify-center items-center gap-1 max-w-4xl mx-auto px-4 text-center text-xs text-gray-500">
        <span>© {new Date().getFullYear()} Aniket Pathak. </span>
        <span className="hidden md:block">All rights reserved.</span>
      </div>
    </footer>
  );
}
