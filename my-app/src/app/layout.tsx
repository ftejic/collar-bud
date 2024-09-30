import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/context/cartContext";
import SessionProvider from "@/components/SessionProvider";
import SessionLoader from "@/components/SessionLoader";

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
        <SessionProvider>
          <CartProvider>
            <SessionLoader>
              <Header />
              {children}
              <Toaster />
            </SessionLoader>
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
