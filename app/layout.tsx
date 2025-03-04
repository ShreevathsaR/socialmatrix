import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { inter } from "@/app/ui/fonts";

export const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.variable} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
