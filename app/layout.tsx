import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen mx-[3%] sm:mx-[5%] md:mx-[10%] lg:mx-[15%] scrollbar-hide`}>
        <div className="flex flex-col items-center justify-between min-h-screen">
          <main className="w-full flex justify-center items-center flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
