import BackButton from "@/components/BackButton"

export default function Experience() {
  const experienceItems = [
    {
      title: 'Network Automation Engineer',
      company: 'Nokia',
      period: 'July 2024 - Present',
      description: 'Developing network automation solutions for clients like TCL, Vodafone etc.',
      skills: ['JavaScript', 'Python', 'YANG']
    },
    {
      title: 'Intern',
      company: 'Nokia',
      period: 'Aug 2023 - May 2024',
      description: 'Worked on 2G -> 3G feature migration for a Java full stack application called TSPortal.',
      skills: ['Spring Boot', 'Java', 'SQL', 'JavaScript']
    },
  ];

  return (
    <main >
      <div className="h-screen mx-[5%] py-[1%] flex flex-col justify-center item-center">
        
        <BackButton />

        <div className="flex justify-center pb-6">
          <h1 className="text-2xl text-indigo-400">Experience</h1>
        </div>
        
        <div className="space-y-12">
          {experienceItems.map((item, index) => (
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
          ))}
        </div>
      </div>
    </main>
  );
}