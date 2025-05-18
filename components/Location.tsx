export default function Links() {
  const linkStyles =
    "!text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#7f8ced] after:transform after:scale-x-0 after:origin-bottom-right hover:!text-[var(--link-color)] hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300 after:ease-out transition-colors duration-300";

  return (
    <div className="flex justify-center sm:justify-start gap-4 mt-6">
      <p className="flex items-center gap-1">
        <svg 
          viewBox="0 0 24 24" 
          className="w-4 h-4 text-[#7f8ced]" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
        Bengaluru, India
      </p>
    </div>
  );
}
