import Link from "next/link";
import { PaginationProps } from "@/types";

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  return (
    <div className="mt-8 flex justify-center items-center gap-2 sm:gap-3 md:gap-4">
      {currentPage > 1 && (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="px-3 sm:px-4 rounded-md text-blue-500 flex items-center gap-1 sm:gap-2 text-sm md:text-base"
        >
          👈 prev
        </Link>
      )}
      {currentPage < totalPages && (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="px-3 sm:px-4 rounded-md text-blue-500 flex items-center gap-1 sm:gap-2 text-sm md:text-base"
        >
          next 👉
        </Link>
      )}
    </div>
  );
}