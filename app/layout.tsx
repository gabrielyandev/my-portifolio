import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-gabrielyandev.vercel.app"),
  title: "@gabrielyandev - Portfólio",
  description: "Desenvolvedor Web Full-Stack, DBA e entusiasta de UX/UI. Conheça meus projetos!",
  authors: [{ name: "Gabriel Yan", url: "https://github.com/gabrielyandev" }],
  keywords: [
    "Gabriel Yan",
    "Desenvolvedor Web",
    "Full-Stack",
    "Front-End",
    "DBA",
    "Next.js",
    "React",
    "TypeScript"
  ],
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.ico"
  },
  openGraph: {
    title: "@gabrielyandev - Portfólio",
    description: "Desenvolvedor Web Full-Stack, DBA e entusiasta de UX/UI. Conheça meus projetos!",
    url: "https://portfolio-gabrielyandev.vercel.app/",
    siteName: "@gabrielyandev - Portfólio",
    images: [
      {
        url: "/assets/img/my-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Preview do Portfólio de Gabriel Yan"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "@gabrielyandev - Portfólio",
    description: "Desenvolvedor Web Full-Stack, DBA e entusiasta de UX/UI. Conheça meus projetos!",
    images: ["/assets/img/my-portfolio.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
