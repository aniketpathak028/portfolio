export default function ArticleHeader({ title, excerpt }: { title: string; excerpt?: string }) {
  return (
    <div className="mb-2">
      <h1 className="text-3xl sm:text-4xl font-bold mb-1">{title}</h1>
      {excerpt && (
        <p className="text-gray-400 text-base">{excerpt}</p>
      )}
    </div>
  );
}