import { Experience } from "@/types/index";

export default function ExperienceItem({
  index,
  item,
}: Readonly<{ index: number; item: Experience }>) {
  return (
    <div className="border border-gray-800 rounded-md p-4 sm:p-6 hover:border-[var(--link-color)] transition-all duration-300">
      <div className="flex flex-col-reverse gap-2 sm:flex sm:flex-row sm:justify-between mb-2">
        <h2 className="text-base sm:text-md md:text-lg font-medium text-[var(--link-color)]">
          {item.title} @ {item.company}
        </h2>
        <span className="text-xs sm:text-sm text-gray-400">{item.period}</span>
      </div>

      <p className="text-sm sm:text-md text-gray-300 mb-4">{item.description}</p>

      <div className="flex flex-wrap gap-2">
        {item.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="text-xs px-2 py-1 text-gray-400 bg-gray-800 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
