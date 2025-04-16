import { Experience } from "@/types/index";

export default function ExperienceItem({
  index,
  item,
}: Readonly<{ index: number; item: Experience }>) {
  return (
    <div key={index}>
      <div className="flex flex-col-reverse gap-2 sm:flex sm:flex-row sm:justify-between mb-2">
        <h2 className="text-sm text-gray-300 font-bold">
          {item.title} @ {item.company}
        </h2>
        <span className="text-sm text-indigo-400">{item.period}</span>
      </div>

      <p className="mb-4 text-sm text-gray-300">{item.description}</p>

      <div className="flex flex-wrap gap-2">
        {item.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="bg-gray-800 text-[0.75rem] font-medium text-white px-2 py-1 rounded"
          >
            {skill}
          </span>
        ))}
      </div>

      <hr className="border-gray-700 mt-8" />
    </div>
  );
}
