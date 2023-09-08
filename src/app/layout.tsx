import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech blog | Tech Insights, Tutorials, and News",
  description:
    "Explore the latest tech insights, tutorials, and news on our tech blog. Learn about HTML, CSS, JavaScript, React.js, and more. Stay updated with the tech world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // suppressHydrationWarning
  return (
    <html lang="en">
      <body
        className={` ${inter.className} mb-32  bg-backgroundColor text-headingTextColor
         dark:bg-gray-900 
         dark:selection:bg-gray-900 
          dark:text-white 
           selection:bg-gray-50
           `}
      >
        <Navbar />
        <main className=" ">{children}</main>

      </body>
    </html>
  );
}
