import { Experience, Project } from "@/types";

export const experienceItems: Array<Experience> = [
    {
      title: 'Network Automation Engineer',
      company: 'Nokia',
      period: 'July 2024 - Present',
      description: 'developing network automation solutions for clients like TCL, Vodafone etc.',
      skills: ['JavaScript', 'Computer Networking']
    },
    {
      title: 'Intern',
      company: 'Nokia',
      period: 'Aug 2023 - May 2024',
      description: 'worked on 2G -> 3G feature migration for a Java full stack application called TSPortal.',
      skills: ['Spring Boot', 'SQL', 'JavaScript']
    },
  ];


export const projectItems: Array<Project> = [
   {
      title: 'Envoy',
      description: 'email management solution to send, schedule, and track emails with notifications',
      link: 'https://github.com/aniket/envoy',
      technologies: ['Java', 'Spring Boot', 'SQL']
   },
   {
      title: 'Echo',
      description: 'http server using C++ (in progress..)',
      link: 'https://github.com/aniketpathak028/echo',
      technologies: ['C++', 'CMake', 'Websockets']
   },
   {
      title: 'Flexboard',
      description: 'react component library to create flexible sidebars',
      link: 'https://github.com/dorbus/flexboard',
      technologies: ['React.js', 'Typescript']
   }
];