import { Project } from "@/types/index";

export default function ProjectItem({
  index,
  item,
}: Readonly<{ index: number; item: Project }>) {
  return (
        <a 
      href={item.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="border border-gray-800 rounded-md p-4 sm:p-6 hover:border-[var(--link-color)] transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-base sm:text-md md:text-lg font-medium">
            {item.title}
        </h2>
        <svg 
              className="w-3 h-3 sm:w-4 sm:h-4 fill-current"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z" />
            </svg>
      </div>

      <p className="text-sm sm:text-md text-gray-300 mb-4">{item.description}</p>

      <div className="flex flex-wrap gap-2">
        {item.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="text-xs px-2 py-1 text-gray-400 bg-gray-800 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}
