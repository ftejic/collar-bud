import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/context/cartContext";

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
        <CartProvider>
          <Header />
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
