/* layout.tsx */

import type { Metadata } from "next";
import "./globals.css";
import Background from "./background"; // Import your SVG component

export const metadata: Metadata = {
  title: "Rupert's 8th Birthday",
  description: "Rupert's 8th birthday and fundraiser at Foreigner Brewery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="background-container">
          <Background />
        </div>
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
