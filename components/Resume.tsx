import Link from "next/link";

export default function Links() {
  const linkStyles =
    "!text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#7f8ced] after:transform after:scale-x-0 after:origin-bottom-right hover:!text-[var(--link-color)] hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300 after:ease-out transition-colors duration-300";

  return (
    <div className="flex justify-center sm:justify-start gap-4 mt-6">
      <Link
        href="/resume"
        className="flex items-center gap-1.5 hover:text-[#7f8ced] transition-colors duration-300"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M19 14V6.5c0-1.38-1.12-2.5-2.5-2.5h-9C6.12 4 5 5.12 5 6.5v11C5 18.88 6.12 20 7.5 20h5.5M14 14l3 3m0 0l3-3m-3 3V8m0 9h-6" 
          />
        </svg>
        <span>resume</span>
      </Link>
    </div>
  );
}
