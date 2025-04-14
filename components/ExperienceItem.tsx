import {Experience} from "@/types/index"

export default function ExperienceItem (index: Number, item: ) {
    return (
         <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-medium">
                  {item.title} @ {item.company}
                </h2>
                <span className="text-indigo-400">{item.period}</span>
              </div>
              
              <p className="mb-4 text-gray-300">{item.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-gray-800 text-white px-4 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {index < experienceItems.length - 1 && (
                <hr className="border-gray-700 mt-8" />
              )}
            </div>
    )
}