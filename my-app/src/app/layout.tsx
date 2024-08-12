import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "CollarBud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
