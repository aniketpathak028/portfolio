import { Experience, Project } from "@/types";

export const experienceItems: Array<Experience> = [
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


export const projectItems: Array<Project> = [
   {
      title: 'Echo',
      description: 'terminal chat application built using C++',
      link: 'https://github.com/aniket/echo',
      technologies: ['C++', 'Socket Programming']
   },
   {
      title: 'Envoy',
      description: 'email management solution to send, schedule, and track emails with notifications',
      link: 'https://github.com/aniket/enovy',
      technologies: ['Java', 'Spring Boot', 'SQL']
   },
   {
      title: 'Flexboard',
      description: 'an interactive whiteboard application built using React and Socket.IO',
      link: 'https://github.com/aniket/flexboard',
      technologies: ['React', 'Socket.IO', 'Node.js', 'Express.js']
   }
];