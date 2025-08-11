export default function ArticleMeta({ date, readingTime }: { date: string; readingTime?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-2 border-b border-gray-800 pb-3">
      <span>{date}</span>
      {readingTime && (
        <>
          <span>•</span>
          <span>{readingTime}</span>
        </>
      )}
    </div>
  );
}