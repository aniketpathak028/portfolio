import Link from "next/link";
import { PaginationProps } from "@/types";

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  return (
    <div className="mt-8 flex justify-center items-center gap-2 sm:gap-3 md:gap-4">
      {currentPage > 1 && (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="px-3 py-2 sm:px-4 sm:py-2 rounded-md text-blue-500 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
          >
            <path d="M13 16L7 10L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-xs sm:text-sm md:text-base">prev</span>
        </Link>
      )}
      {currentPage < totalPages && (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="px-3 py-2 sm:px-4 sm:py-2 rounded-md text-blue-500 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base"
        >
          <span className="text-xs sm:text-sm md:text-base">next</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
          >
            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      )}
    </div>
  );
}