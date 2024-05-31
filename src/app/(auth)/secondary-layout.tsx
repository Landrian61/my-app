import type { Metadata } from "next";
import React from "react";
import { REM } from "next/font/google";
import "../globals.css"; 

const rem = REM({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App - Secondary",
  description: "Secondary layout derived from the main layout",
};

export default function SecondaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rem.className} secondary-layout`}>{children}</body>
    </html>
  );
}
