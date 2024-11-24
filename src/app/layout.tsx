/* layout.tsx */

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rupert's 8th Birthday",
  description: "Ruport's 8th birthday and fundraiser at Foreigner Brewery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
