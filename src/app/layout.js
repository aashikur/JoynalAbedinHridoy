import {  Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const metadata = {
  title: 'Joynal Abedin Hridoy | Video Editor | Sound Design | Motion Graphic',
  description: 'Video is a story that Mound a unmount word into visual wiout saying a word.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
