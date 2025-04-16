import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Aniket Pathak",
  description: "portfolio website",
  icons: [
    { url: '/icon.png', type: 'image/png' },
    { url: '/favicon.ico', type: 'image/x-icon'},
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex justify-center min-h-screen mx-[3%] sm:mx-[5%] md:mx-[10%] lg:mx-[15%] scrollbar-hide`}>
        {children}
      </body>
    </html>
  );
}
