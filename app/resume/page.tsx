// app/resume/page.tsx
'use client';

import { useEffect } from 'react';
import BackButton from '../../components/BackButton';

export default function Resume() {
  useEffect(() => {
    // Trigger download of resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'aniket_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <main className="pt-8">
      <div className="text-right text-sm text-gray-500 mb-8">/resume</div>
      <BackButton />
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h1 className="text-xl mb-6">Your resume is downloading...</h1>
        <p className="text-gray-400">
          If the download doesn't start automatically,{' '}
          <a href="/resume.pdf" download className="text-blue-500 underline">
            click here
          </a>
        </p>
      </div>
    </main>
  );
}