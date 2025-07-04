import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footer from "@/components/footer";
import Nav from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

/**
 * Root layout component for the main application.
 *
 * @param children - The content to be rendered within the layout.
 * @returns The main layout structure including navigation, children, and footer.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <Nav />
      {children}
      <Footer />
    </main>
  );
}
