import type { Metadata } from "next";
import {
  Cinzel_Decorative,
  Inter,
} from "next/font/google";
import "./globals.css";

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eOrmin Heritage Museum",
  description:
    "Explore the heritage, culture, and history of Oriental Mindoro.",
  icons: {
    icon: "/images/logonav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzelDecorative.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}