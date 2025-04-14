// app/projects/page.tsx
import BackButton from '../../components/BackButton';
import Timeline from '../../components/Timeline';

export default function Projects() {
  const projectItems = [
    {
      title: 'Echo',
      description: 'terminal chat application built using C++',
      link: 'https://github.com/aniket/echo',
    },
    {
      title: 'Enovy',
      description: 'email management solution to send, schedule, and track emails with notifications',
      link: 'https://github.com/aniket/enovy',
    },
    {
      title: 'Enovy',
      description: 'email management solution to send, schedule, and track emails with notifications',
      link: 'https://github.com/aniket/enovy',
    },
  ];

  return (
    <main className="pt-8">
      <div className="text-right text-sm text-gray-500 mb-8">/projects</div>
      <BackButton />
      <Timeline title="projects" items={projectItems} />
    </main>
  );
}