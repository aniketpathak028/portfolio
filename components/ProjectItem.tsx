import { Project } from "@/types/index";

export default function ProjectItem({
  index,
  item,
}: Readonly<{ index: number; item: Project }>) {
  return (
    <div key={index}>
      <div className="flex flex-col-reverse gap-2 sm:flex sm:flex-row sm:justify-between mb-2">
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 hover:text-[var(--link-color)]"
        >
          <span className="text-sm text-indigo-400 font-bold">
            {item.title}
          </span>
        </a>
      </div>

      <p className="mb-4 text-sm text-gray-300">{item.description}</p>

      <div className="flex flex-wrap gap-2">
        {item.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="bg-gray-800 text-[0.75rem] font-medium text-white px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <hr className="border-gray-700 mt-8" />
    </div>
  );
}
