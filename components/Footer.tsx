export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-4 mt-auto">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-xs text-gray-500">
          © {currentYear} Aniket Pathak. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
