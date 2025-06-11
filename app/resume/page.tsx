"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Resume() {
  const router = useRouter();
  
  useEffect(() => {
    // Replace current history entry to prevent back button issues
    window.location.replace("https://aniketpathak028.github.io/resume.pdf");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>opening resume...</p>
    </div>
  );
}