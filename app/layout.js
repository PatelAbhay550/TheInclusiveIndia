import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Inclusive India - Your Trusted Source for News",
  description:
    "Get the latest news and updates on politics, society, culture, and more from The Inclusive India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
