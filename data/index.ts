import { Experience, Project, Article } from "@/types";

export const experienceItems: Array<Experience> = [
    {
      title: 'Network Automation Engineer',
      company: 'Nokia',
      period: 'July 2024 - May 2025',
      description: 'designing network automation solutions for clients like TCL, Vodafone etc.',
      skills: ['js', 'ip-networking', 'automation']
    },
    {
      title: 'Intern',
      company: 'Nokia',
      period: 'Aug 2023 - May 2024',
      description: 'worked on 2G -> 3G feature migration for a Java full stack application called TSPortal.',
      skills: ['spring-boot', 'sql', 'js']
    }
  ];


export const projectItems: Array<Project> = [
   {
      title: 'go-proxy',
      description: 'proxy server to cache browser requests and analyze network traffic',
      link: 'https://github.com/aniketpathak028/go-proxy',
      technologies: ['go', 'https', 'tls']
   },
   {
      title: 'goFillMyApplication',
      description: 'automation tool to fill online job applications using cli',
      link: 'https://github.com/aniketpathak028/goFillMyApplication',
      technologies: ['go', 'web-automation', 'tui']
   },
   {
      title: 'flexboard',
      description: 'react component library to create flexible sidebars',
      link: 'https://github.com/dorbus/flexboard',
      technologies: ['react.js', 'typescript']
   }
];

export const articles: Array<Article> = [
  {
    title: "Podman vs Docker (with installation guide for WSL)",
    excerpt: "A comparison of Podman and Docker, two popular containerization tools, with an installation guide for WSL.",
    date: "May 22, 2025",
    url: "https://medium.com/@aniketpathak028/kwoc21-project-report-828364e8db0e",
    platform: "medium",
    tags: ["docker", "podman", "wsl", "containers"],
    readTime: "2 min read"
  }
];
