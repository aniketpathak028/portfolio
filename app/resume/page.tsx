'use client';

import { useEffect } from 'react';

export default function Resume() {

  useEffect(() => {
    window.open('/resume.pdf', '_self');
  }, []);

  return null;
}