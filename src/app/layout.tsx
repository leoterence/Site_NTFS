import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layout/Header";
import Bgradiant from "@/components/Bgradiant";
import Footer from "@/layout/Footer";

export const metadata: Metadata = {
  title: "PLAY NFT",
  description: "Site de gestion de cripto-monaie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen bgColor relative  text-white  md:px-10"  >
      <Bgradiant />
      <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
