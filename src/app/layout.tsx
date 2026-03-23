import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { siteContent } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://sunnycui.com"),
  title: `${siteContent.name} | ${siteContent.footer.brandName}`,
  description: siteContent.tagline,
  openGraph: {
    title: siteContent.name,
    description: siteContent.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={inter.variable}
    >
      <body className="min-h-screen flex flex-col" style={{ backgroundColor: "#f9f9f9", color: "#1a1c1c" }}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
