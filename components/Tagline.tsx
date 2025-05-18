import Link from "next/link";

export default function Tagline() {
  return (
    <div className="text-center sm:text-left">
      <p>
        hi this is <span className="font-bold">aniket</span>!{" "}
        <span className="hidden custom:inline">
          your average cs grad dabbling with tech.
        </span>
      </p>
      <p className="mt-2">
        currently working at{" "}
        <Link
          href="https://www.nokia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center hover:text-red-300 transition duration-300 ease-in-out"
        >
          nokia
        </Link>
      </p>
      
    </div>
  );
}
