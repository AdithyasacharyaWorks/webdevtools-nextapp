import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webdevtools",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" data-theme="nord">
      <body className={inter.className} >
      <header className="sticky top-0 z-50">
            <SignedOut>
            </SignedOut>
            <SignedIn>
              <Navbar />
            </SignedIn>
          </header>
          <main>
          {children}
          </main>
        
        </body>
    </html>
    </ClerkProvider>
  );
}
