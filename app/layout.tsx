import "./globals.css";
import type { Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Footer from "@/components/Footer";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
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
      <body className={bricolageGrotesque.className}>
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
