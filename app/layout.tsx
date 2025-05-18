import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="mx-[3%] sm:mx-[5%] md:mx-[10%] lg:mx-[15%] flex flex-col min-h-[100dvh]">
          <main className="flex-grow w-full flex justify-center items-center">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
