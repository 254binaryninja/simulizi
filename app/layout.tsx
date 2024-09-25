import type { Metadata } from "next";
import {Fredoka} from 'next/font/google'
import "./globals.css";
import { ClerkProvider} from '@clerk/nextjs'



const fredoka  = Fredoka ({weight:"700",subsets:["latin"]})
export const metadata: Metadata = {
  title: "Simulizi Tales | An AI story generator",
  description: "AI kids story generator to improve your kids potential.",
  // Add keywords for better SEO
  keywords: "AI story generator, kids stories, children's literature, bedtime stories, educational stories, interactive storytelling, improve creativity",
  // Add Open Graph tags for social media sharing
  openGraph: {
    title: "Simulizi Tales | An AI story generator",
    description: "AI kids story generator to improve your kids potential.",
    url: "https://www.your-website.com", // Replace with your actual website URL
    images: [
      {
        url: "/images/logo.webp", // Replace with the actual path to your Open Graph image
        alt: "Simulizi Tales Logo",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${fredoka.className} bg-amber-50`}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
