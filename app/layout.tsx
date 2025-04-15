import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from "@/components/Navbar"

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Aniket Pathak',
  description: 'portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {`${poppins.className} flex justify-center min-h-screen mx-[3%] sm:mx-[5%] md:mx-[10%] lg:mx-[15%]`}>
          {children}
      </body>
    </html>
  );
}