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
          <span>
            <svg 
              className="w-4 h-4 fill-current"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z" />
            </svg>
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
