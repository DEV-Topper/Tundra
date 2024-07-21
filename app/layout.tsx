import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tundra",
  description: "Your number one shopping application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <StoreProvider>
          <main className="bg-[#f4f4f4]">{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
