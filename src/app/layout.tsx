import { ServiceWorkerRegistration } from "@/app/components/ServiceWorkerRegistration";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AUTH-FIRE-NEXT-STARTER-I ",
  description:
    "User flow template on Next Vercel and Firebase to apply to new apps ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      {/*     <header><ThemeToggle /></header> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global Header */}
        <Header />
        <AuthProvider>
          {" "}
          <ThemeProvider>{children}</ThemeProvider>{" "}
        </AuthProvider>
        <ServiceWorkerRegistration />
        {/* Bottom Navigation (Visible Only on Mobile) */}
        <BottomNav />
      </body>
    </html>
  );
}
